/**
 * Rose Petal Particle System 3.0
 * Larger petals with better shapes, more visible, softer drift
 */
import * as THREE from 'node_modules/@types/three';

export interface PetalSystem {
    points: THREE.Points;
    update: (elapsed: number, dt: number) => void;
}

export function createRosePetals(): PetalSystem {
    const count = 80;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const phases = new Float32Array(count);

    const petalColors = [
        new THREE.Color(0xf472b6),
        new THREE.Color(0xfb7185),
        new THREE.Color(0xe11d48),
        new THREE.Color(0xfda4af),
        new THREE.Color(0xfbbf24),
        new THREE.Color(0xf43f5e),
        new THREE.Color(0xd946ef),
    ];

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + Math.random() * 4;
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = 2 + Math.random() * 8;
        positions[i3 + 2] = Math.sin(angle) * radius;

        velocities[i3] = (Math.random() - 0.5) * 0.15;
        velocities[i3 + 1] = -(0.15 + Math.random() * 0.25);
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.15;

        phases[i] = Math.random() * Math.PI * 2;

        const color = petalColors[Math.floor(Math.random() * petalColors.length)];
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Better petal texture — elongated soft shape
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 64, 64);
    const gradient = ctx.createRadialGradient(32, 28, 0, 32, 32, 30);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    // Petal shape — ellipse
    ctx.beginPath();
    ctx.ellipse(32, 32, 28, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
        size: 0.2,
        map: texture,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);

    const update = (elapsed: number, dt: number) => {
        const pos = geometry.attributes.position as THREE.BufferAttribute;
        const arr = pos.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const phase = phases[i];

            // Gentle swirling drift
            arr[i3] += velocities[i3] * dt + Math.sin(elapsed * 0.2 + phase) * 0.005;
            arr[i3 + 1] += velocities[i3 + 1] * dt;
            arr[i3 + 2] += velocities[i3 + 2] * dt + Math.cos(elapsed * 0.18 + phase) * 0.005;

            // Respawn above
            if (arr[i3 + 1] < -1.5) {
                const angle = Math.random() * Math.PI * 2;
                const radius = 2 + Math.random() * 4;
                arr[i3] = Math.cos(angle) * radius;
                arr[i3 + 1] = 5 + Math.random() * 5;
                arr[i3 + 2] = Math.sin(angle) * radius;
            }
        }
        pos.needsUpdate = true;
    };

    return { points, update };
}
