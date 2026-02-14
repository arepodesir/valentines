/**
 * MusicBoxScene 3.0 — Cinematic auto-play scene (robust build)
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { gsap } from 'gsap';
import type { AppConfig } from '../config';
import { createMusicBox, type MusicBoxGroup } from './objects/Box';
import { createCharacters, type CharacterGroup } from './objects/Characters';
import { createRosePetals, type PetalSystem } from './objects/Petals';

export class MusicBoxScene {
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private controls: OrbitControls;
    private clock: THREE.Clock;
    private animId: number = 0;
    private musicBox: MusicBoxGroup | null = null;
    private characters: CharacterGroup | null = null;
    private petals: PetalSystem | null = null;
    private config: AppConfig;
    private disposed = false;
    private spotLight: THREE.SpotLight | null = null;
    private fillLight: THREE.DirectionalLight | null = null;
    private interiorGlow: THREE.PointLight | null = null;
    private hearts3D: THREE.Group | null = null;
    private sparkles: THREE.Group | null = null;
    private starField: THREE.Points | null = null;
    private groundPlane: THREE.Mesh | null = null;
    private isPlaying = false;
    private cameraTimeline: gsap.core.Timeline | null = null;

    constructor(canvas: HTMLCanvasElement, config: AppConfig) {
        this.config = config;
        this.clock = new THREE.Clock();

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        // Scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x0a0315, 0.04);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            38, (canvas.clientWidth || window.innerWidth) / (canvas.clientHeight || window.innerHeight), 0.1, 200
        );
        this.camera.position.set(0, 4, 8);
        this.camera.lookAt(0, 0.3, 0);

        // Controls
        this.controls = new OrbitControls(this.camera, canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.06;
        this.controls.enablePan = false;
        this.controls.minDistance = 2.5;
        this.controls.maxDistance = 14;
        this.controls.minPolarAngle = Math.PI * 0.08;
        this.controls.maxPolarAngle = Math.PI * 0.55;
        this.controls.autoRotate = false;
        this.controls.target.set(0, 0.3, 0);
        this.controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };

        // Setup everything
        this.setupLights();
        this.setupGround();
        this.setupStarField();
        this.setupHearts3D();
        this.setupSparkles();

        // Music box
        this.musicBox = createMusicBox(config);
        this.scene.add(this.musicBox.group);

        // Characters (hidden initially, positioned on box interior surface)
        this.characters = createCharacters(config);
        this.characters.group.visible = false;
        this.characters.group.position.set(0, 0.75, 0);
        this.scene.add(this.characters.group);

        // Rose petals
        this.petals = createRosePetals();
        this.scene.add(this.petals.points);

        // Environment map (deferred slightly to avoid blocking)
        try { this.setupEnvironment(); } catch (e) { console.warn('Env map failed:', e); }

        // Resize handler
        window.addEventListener('resize', this.handleResize);
    }

    private setupLights(): void {
        this.scene.add(new THREE.AmbientLight(0xffeedd, 0.25));
        this.scene.add(new THREE.HemisphereLight(0xfce7f3, 0x1a0525, 0.4));

        // Key light
        const keyLight = new THREE.DirectionalLight(0xfff5e6, 1.2);
        keyLight.position.set(5, 8, 6);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.setScalar(1024);
        keyLight.shadow.camera.near = 1;
        keyLight.shadow.camera.far = 25;
        keyLight.shadow.camera.left = -5;
        keyLight.shadow.camera.right = 5;
        keyLight.shadow.camera.top = 5;
        keyLight.shadow.camera.bottom = -5;
        keyLight.shadow.bias = -0.0003;
        this.scene.add(keyLight);

        // Pink fill
        this.fillLight = new THREE.DirectionalLight(0xff69b4, 0.3);
        this.fillLight.position.set(-5, 4, -3);
        this.scene.add(this.fillLight);

        // Gold rim
        const rim = new THREE.PointLight(0xfbbf24, 0.8, 18);
        rim.position.set(0, 6, -6);
        this.scene.add(rim);

        // Spotlight
        this.spotLight = new THREE.SpotLight(0xffe4e6, 1.5, 18, Math.PI / 5, 0.5, 1);
        this.spotLight.position.set(0, 9, 4);
        this.spotLight.target.position.set(0, 0, 0);
        this.spotLight.castShadow = true;
        this.spotLight.shadow.mapSize.setScalar(512);
        this.scene.add(this.spotLight);
        this.scene.add(this.spotLight.target);

        // Purple accent
        const purple = new THREE.PointLight(0x7c3aed, 0.3, 15);
        purple.position.set(-4, 3, -6);
        this.scene.add(purple);

        // Interior glow (heartbeat)
        this.interiorGlow = new THREE.PointLight(0xf43f5e, 0, 4);
        this.interiorGlow.position.set(0, 0.6, 0);
        this.scene.add(this.interiorGlow);
    }

    private setupEnvironment(): void {
        const pmrem = new THREE.PMREMGenerator(this.renderer);
        pmrem.compileEquirectangularShader();
        const envScene = new THREE.Scene();
        envScene.add(new THREE.Mesh(
            new THREE.SphereGeometry(12, 16, 16),
            new THREE.MeshBasicMaterial({ side: THREE.BackSide, color: new THREE.Color(0.25, 0.1, 0.18) })
        ));
        const lightMat = new THREE.MeshBasicMaterial({ color: 0xffeedd });
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const p = new THREE.Mesh(new THREE.SphereGeometry(0.3), lightMat);
            p.position.set(Math.cos(a) * 8, 4 + Math.sin(a * 3) * 2, Math.sin(a) * 8);
            envScene.add(p);
        }
        const envMap = pmrem.fromScene(envScene, 0).texture;
        this.scene.environment = envMap;
        pmrem.dispose();
    }

    private setupGround(): void {
        const geo = new THREE.CircleGeometry(12, 32);
        const mat = new THREE.MeshStandardMaterial({
            color: 0x1a0a12, roughness: 0.9, metalness: 0.0,
            transparent: true, opacity: 0.5,
        });
        const ground = new THREE.Mesh(geo, mat);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -0.51;
        ground.receiveShadow = true;
        this.groundPlane = ground;
        this.scene.add(ground);

        // Glow ring
        const ringGeo = new THREE.RingGeometry(1.8, 2.2, 32);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0xf43f5e, transparent: true, opacity: 0.12, side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = -0.49;
        this.scene.add(ring);
    }

    private setupStarField(): void {
        const count = 300;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 40 + Math.random() * 30;
            positions[i3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = Math.abs(r * Math.cos(phi));
            positions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta);
            const b = 0.5 + Math.random() * 0.5;
            colors[i3] = b;
            colors[i3 + 1] = b * 0.9;
            colors[i3 + 2] = b * 0.8;
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        this.starField = new THREE.Points(geo, new THREE.PointsMaterial({
            size: 0.15, vertexColors: true, transparent: true, opacity: 0.8,
            blending: THREE.AdditiveBlending, depthWrite: false,
        }));
        this.scene.add(this.starField);
    }

    private setupHearts3D(): void {
        this.hearts3D = new THREE.Group();
        const shape = new THREE.Shape();
        shape.moveTo(0, 0.15);
        shape.bezierCurveTo(0, 0.15, -0.15, 0, -0.15, 0);
        shape.bezierCurveTo(-0.15, -0.08, 0, -0.2, 0, -0.28);
        shape.bezierCurveTo(0, -0.2, 0.15, -0.08, 0.15, 0);
        shape.bezierCurveTo(0.15, 0, 0, 0.15, 0, 0.15);

        const heartGeo = new THREE.ExtrudeGeometry(shape, {
            depth: 0.05, bevelEnabled: true,
            bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 2,
        });

        const heartColors = [0xf43f5e, 0xe11d48, 0xf472b6, 0xfda4af, 0xfbbf24];
        for (let i = 0; i < 6; i++) {
            const heart = new THREE.Mesh(heartGeo, new THREE.MeshStandardMaterial({
                color: heartColors[i % heartColors.length],
                emissive: heartColors[i % heartColors.length],
                emissiveIntensity: 0.3, roughness: 0.3, metalness: 0.4,
                transparent: true, opacity: 0.7,
            }));
            const angle = (i / 6) * Math.PI * 2;
            const r = 3 + Math.random() * 1.5;
            const h = 1.5 + Math.random() * 3;
            heart.position.set(Math.cos(angle) * r, h, Math.sin(angle) * r);
            heart.scale.setScalar(0.3 + Math.random() * 0.2);
            heart.userData = { angle, radius: r, height: h, speed: 0.15 + Math.random() * 0.2, bobSpeed: 0.5 + Math.random() * 0.5 };
            this.hearts3D.add(heart);
        }
        this.scene.add(this.hearts3D);
    }

    private setupSparkles(): void {
        this.sparkles = new THREE.Group();
        const sparkGeo = new THREE.OctahedronGeometry(0.04, 0);
        const sparkMat = new THREE.MeshStandardMaterial({
            color: 0xfbbf24, emissive: 0xfbbf24, emissiveIntensity: 0.5,
            metalness: 0.9, roughness: 0.1,
        });
        for (let i = 0; i < 15; i++) {
            const spark = new THREE.Mesh(sparkGeo, sparkMat);
            const angle = (i / 15) * Math.PI * 2;
            const r = 2 + Math.random() * 2;
            const h = 0.5 + Math.random() * 3;
            spark.position.set(Math.cos(angle) * r, h, Math.sin(angle) * r);
            spark.userData = { angle, radius: r, height: h, speed: 0.3 + Math.random() * 0.4 };
            this.sparkles.add(spark);
        }
        this.scene.add(this.sparkles);
    }

    // ─── Auto-play sequence ───

    autoPlay(onPhaseChange: (phase: 'opening' | 'playing' | 'finale') => void): void {
        this.isPlaying = true;
        const speed = this.config.scene.animation_speed;
        this.controls.autoRotate = false;

        // Camera choreography
        this.cameraTimeline = gsap.timeline();

        // Phase 1: Sweep to side view
        this.cameraTimeline.to(this.camera.position, {
            x: 3, y: 3, z: 6,
            duration: 2.5 / speed,
            ease: 'power2.inOut',
            onUpdate: () => {
                this.camera.lookAt(0, 0.3, 0);
                this.controls.target.set(0, 0.3, 0);
            },
        });

        // Phase 2: Start box opening
        this.cameraTimeline.call(() => {
            onPhaseChange('opening');
            this.openBoxInternal();
        }, [], '+=0.3');

        // Phase 3: Zoom in while opening
        this.cameraTimeline.to(this.camera.position, {
            x: 1.5, y: 2.5, z: 4.5,
            duration: 3 / speed,
            ease: 'power2.inOut',
            onUpdate: () => {
                this.camera.lookAt(0, 0.5, 0);
                this.controls.target.set(0, 0.5, 0);
            },
        }, '-=0.3');

        // Phase 4: Characters reveal
        this.cameraTimeline.call(() => {
            onPhaseChange('playing');
            this.revealCharactersInternal();
        }, [], '+=0.5');

        // Phase 5: Zoom to characters (polish — tighter focus on the dancing couple)
        this.cameraTimeline.to(this.camera.position, {
            x: 0.5, y: 1.8, z: 3.2,
            duration: 2.5 / speed,
            ease: 'power2.inOut',
            onUpdate: () => {
                this.camera.lookAt(0, 1.0, 0);
                this.controls.target.set(0, 1.0, 0);
            },
        }, '+=0.5');

        // Phase 6: Pull back for full view
        this.cameraTimeline.to(this.camera.position, {
            x: -2, y: 3, z: 5.5,
            duration: 3 / speed,
            ease: 'power2.inOut',
            onUpdate: () => {
                this.camera.lookAt(0, 0.8, 0);
                this.controls.target.set(0, 0.8, 0);
            },
        }, '+=2');

        // Phase 7: Enable auto-rotate (polish — gentle orbit around the scene)
        this.cameraTimeline.call(() => {
            this.controls.autoRotate = true;
            this.controls.autoRotateSpeed = 0.8;
        });
    }

    private openBoxInternal(): void {
        if (!this.musicBox) return;
        const speed = this.config.scene.animation_speed;

        // Anticipation
        gsap.to(this.musicBox.group.position, {
            y: -0.04, duration: 0.3 / speed, ease: 'power2.in',
        });
        gsap.to(this.musicBox.group.position, {
            y: 0, duration: 0.4 / speed, ease: 'power2.out', delay: 0.25 / speed,
        });

        // Lid opens
        gsap.to(this.musicBox.lid.rotation, {
            x: -Math.PI * 0.55, duration: 3 / speed, ease: 'power3.out', delay: 0.3 / speed,
        });

        // Settle
        gsap.to(this.musicBox.lid.rotation, {
            x: -Math.PI * 0.5, duration: 0.8 / speed, ease: 'elastic.out(1, 0.3)', delay: 3.3 / speed,
        });

        // Interior glow
        if (this.interiorGlow) {
            gsap.to(this.interiorGlow, {
                intensity: 2.5, duration: 1.5 / speed, ease: 'power2.out', delay: 1 / speed,
            });
        }
    }

    private revealCharactersInternal(): void {
        if (!this.characters) return;
        const speed = this.config.scene.animation_speed;
        this.characters.group.visible = true;

        // All characters with their target scales
        const entries = [
            { char: this.characters.prince, scale: 0.85, delay: 0.2 },
            { char: this.characters.rapunzel, scale: 0.85, delay: 0.25 },
            { char: this.characters.partner, scale: 0.85, delay: 0.3 },
            { char: this.characters.baby, scale: 0.85, delay: 0.15 },
            { char: this.characters.elder, scale: 0.85, delay: 0.4 },
        ];

        // Scale from zero at their grounded positions (no pushing below platform)
        entries.forEach(({ char }) => {
            char.scale.setScalar(0.01);
        });

        entries.forEach(({ char, scale, delay }) => {
            gsap.to(char.scale, {
                x: scale, y: scale, z: scale,
                duration: 0.8 / speed, ease: 'elastic.out(1.2, 0.4)', delay: delay / speed,
            });
        });

        // Start the waltz after characters reveal
        setTimeout(() => this.startDance(), 2000 / speed);
    }

    private startDance(): void {
        if (!this.characters || this.disposed) return;
        const speed = this.config.scene.animation_speed;
        const { prince, partner, rapunzel, baby, elder } = this.characters;

        // ═══ PRINCE & PRINCESS WALTZ (center stage) ═══
        gsap.to(prince.position, { x: -0.08, duration: 2 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(rapunzel.position, { x: 0.08, duration: 2 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(prince.rotation, { z: -0.08, y: 0.35, duration: 2.5 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(rapunzel.rotation, { z: 0.08, y: -0.35, duration: 2.5 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(prince.position, { y: '+=0.04', duration: 0.8 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(rapunzel.position, { y: '+=0.04', duration: 0.8 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.2 / speed });

        // ═══ PARTNER (center stage, with the couple) ═══
        gsap.to(partner.position, { y: '+=0.04', duration: 0.8 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.1 / speed });
        gsap.to(partner.rotation, { z: -0.06, y: 0.15, duration: 2.5 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });

        // ═══ BABY (cute bouncy dance!) ═══
        gsap.to(baby.rotation, { z: 0.25, duration: 0.4 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(baby.position, { y: '+=0.08', duration: 0.35 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(baby.rotation, { y: 0.5, duration: 1.5 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });

        // ═══ ELDER (gentle sway) ═══
        gsap.to(elder.rotation, { z: 0.05, duration: 3 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(elder.position, { y: '+=0.03', duration: 2 / speed, ease: 'sine.inOut', yoyo: true, repeat: -1 });

        // Turntable rotation
        gsap.to(this.characters.group.rotation, {
            y: Math.PI * 2, duration: 30 / speed, ease: 'none', repeat: -1,
        });
    }

    private handleResize = (): void => {
        if (this.disposed) return;
        const w = window.innerWidth, h = window.innerHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
    };

    start(): void { this.animate(); }

    private animate = (): void => {
        if (this.disposed) return;
        this.animId = requestAnimationFrame(this.animate);
        const dt = this.clock.getDelta();
        const elapsed = this.clock.getElapsedTime();

        this.controls.update();

        // Spotlight sway
        if (this.spotLight) {
            this.spotLight.position.x = Math.sin(elapsed * 0.15) * 1.2;
            this.spotLight.intensity = 1.3 + Math.sin(elapsed * 0.4) * 0.4;
        }

        // Fill light breathing
        if (this.fillLight) {
            this.fillLight.intensity = 0.2 + Math.sin(elapsed * 0.3) * 0.15;
        }

        // Interior heartbeat glow
        if (this.interiorGlow && this.isPlaying) {
            const beat = Math.sin(elapsed * 4) * 0.5 + 0.5;
            this.interiorGlow.intensity = 1.5 + beat * 1.5;
        }

        // Winding key rotation
        if (this.isPlaying && this.musicBox) {
            const children = this.musicBox.group.children;
            if (children.length > 0) {
                const last = children[children.length - 1];
                last.rotation.x += dt * 1.5;
            }
        }

        // Hearts orbit + bob
        if (this.hearts3D) {
            for (const heart of this.hearts3D.children) {
                const d = heart.userData;
                d.angle += dt * d.speed;
                heart.position.x = Math.cos(d.angle) * d.radius;
                heart.position.z = Math.sin(d.angle) * d.radius;
                heart.position.y = d.height + Math.sin(elapsed * d.bobSpeed + d.angle) * 0.4;
                heart.rotation.y += dt * 0.5;
            }
        }

        // Sparkles orbit
        if (this.sparkles) {
            for (const spark of this.sparkles.children) {
                const d = spark.userData;
                d.angle += dt * d.speed;
                spark.position.x = Math.cos(d.angle) * d.radius;
                spark.position.z = Math.sin(d.angle) * d.radius;
                spark.position.y = d.height + Math.sin(elapsed * 1.5 + d.angle * 2) * 0.3;
                spark.rotation.x += dt * 3;
                spark.rotation.y += dt * 2;
            }
        }

        // Star field rotation
        if (this.starField) {
            this.starField.rotation.y += dt * 0.008;
        }

        // Update petals
        if (this.petals) {
            this.petals.update(elapsed, dt);
        }

        this.renderer.render(this.scene, this.camera);
    };

    // Backwards compat
    openBox(onComplete: () => void): void {
        this.openBoxInternal();
        setTimeout(onComplete, 4000 / this.config.scene.animation_speed);
    }

    showCharacters(): void {
        this.revealCharactersInternal();
    }

    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        this.isPlaying = false;
        if (this.cameraTimeline) { this.cameraTimeline.kill(); this.cameraTimeline = null; }
        cancelAnimationFrame(this.animId);
        window.removeEventListener('resize', this.handleResize);
        this.controls.dispose();
        this.scene.traverse((obj) => {
            if (obj instanceof THREE.Mesh) {
                obj.geometry.dispose();
                const mat = obj.material;
                if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
                else mat.dispose();
            }
        });
        this.renderer.dispose();
    }
}
