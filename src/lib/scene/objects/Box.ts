/**
 * Antique Music Box 2.0 — Richly detailed 3D model
 * - Carved side panels with inlays
 * - Interior mirror on lid
 * - Better materials with env map reflections
 * - Decorative feet, hinges, lock plate
 */
import * as THREE from 'node_modules/@types/three';
import type { AppConfig } from '../../config';

export interface MusicBoxGroup {
    group: THREE.Group;
    lid: THREE.Group;
    body: THREE.Mesh;
    interior: THREE.Mesh;
}

export function createMusicBox(config: AppConfig): MusicBoxGroup {
    const group = new THREE.Group();

    // --- Materials ---
    const woodMat = new THREE.MeshStandardMaterial({
        color: 0x5c3317,
        roughness: 0.55,
        metalness: 0.05,
        envMapIntensity: 0.4,
    });

    const darkWood = new THREE.MeshStandardMaterial({
        color: 0x3a1a08,
        roughness: 0.45,
        metalness: 0.08,
        envMapIntensity: 0.3,
    });

    const goldTrim = new THREE.MeshStandardMaterial({
        color: 0xfbbf24,
        roughness: 0.15,
        metalness: 0.92,
        envMapIntensity: 1.2,
    });

    const roseGold = new THREE.MeshStandardMaterial({
        color: 0xe8a87c,
        roughness: 0.2,
        metalness: 0.85,
        envMapIntensity: 1.0,
    });

    const velvetMat = new THREE.MeshStandardMaterial({
        color: 0x8b0020,
        roughness: 0.95,
        metalness: 0.0,
    });

    const mirrorMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.05,
        metalness: 0.95,
        envMapIntensity: 2.0,
    });

    const inlayMat = new THREE.MeshStandardMaterial({
        color: 0x2d1b0e,
        roughness: 0.7,
        metalness: 0.0,
    });

    // --- Body (base of box) ---
    const bodyGeo = new THREE.BoxGeometry(3, 1.2, 2);
    const body = new THREE.Mesh(bodyGeo, woodMat);
    body.position.y = 0.6;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    // Interior cavity — velvet
    const interiorGeo = new THREE.BoxGeometry(2.75, 0.75, 1.75);
    const interior = new THREE.Mesh(interiorGeo, velvetMat);
    interior.position.y = 0.88;
    group.add(interior);

    // --- Carved Side Panels (inlays) ---
    const panelGeo = new THREE.BoxGeometry(0.02, 0.7, 1.3);
    for (const x of [-1.51, 1.51]) {
        const panel = new THREE.Mesh(panelGeo, inlayMat);
        panel.position.set(x, 0.6, 0);
        group.add(panel);
    }

    // Front/back decorative panels
    const frontPanelGeo = new THREE.BoxGeometry(2.2, 0.6, 0.02);
    for (const z of [-1.01, 1.01]) {
        const panel = new THREE.Mesh(frontPanelGeo, inlayMat);
        panel.position.set(0, 0.6, z);
        group.add(panel);
    }

    // --- Gold trim edges (top + bottom) ---
    // Top edges
    const trimGeoLong = new THREE.BoxGeometry(3.08, 0.04, 0.04);
    const trimGeoShort = new THREE.BoxGeometry(0.04, 0.04, 2.08);
    for (const y of [0, 1.2]) {
        for (const z of [-1.0, 1.0]) {
            const trim = new THREE.Mesh(trimGeoLong, goldTrim);
            trim.position.set(0, y, z);
            group.add(trim);
        }
        for (const x of [-1.5, 1.5]) {
            const trim = new THREE.Mesh(trimGeoShort, goldTrim);
            trim.position.set(x, y, 0);
            group.add(trim);
        }
    }

    // Vertical corner trims
    const cornerGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.2, 8);
    for (const x of [-1.5, 1.5]) {
        for (const z of [-1.0, 1.0]) {
            const corner = new THREE.Mesh(cornerGeo, goldTrim);
            corner.position.set(x, 0.6, z);
            group.add(corner);
        }
    }

    // --- Ornate feet (lion paw style) ---
    for (const x of [-1.3, 1.3]) {
        for (const z of [-0.8, 0.8]) {
            const footGroup = new THREE.Group();
            // Ball
            const ball = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), goldTrim);
            ball.scale.y = 0.5;
            footGroup.add(ball);
            // Claws
            for (let i = 0; i < 3; i++) {
                const angle = (i / 3) * Math.PI - Math.PI * 0.5;
                const claw = new THREE.Mesh(
                    new THREE.ConeGeometry(0.015, 0.06, 4),
                    goldTrim
                );
                claw.position.set(Math.cos(angle) * 0.07, -0.03, Math.sin(angle) * 0.07);
                claw.rotation.x = 0.3;
                footGroup.add(claw);
            }
            footGroup.position.set(x, 0, z);
            group.add(footGroup);
        }
    }

    // --- Hinges at back ---
    for (const x of [-0.8, 0.8]) {
        const hingeBase = new THREE.Mesh(
            new THREE.BoxGeometry(0.15, 0.08, 0.06),
            roseGold
        );
        hingeBase.position.set(x, 1.22, -1.0);
        group.add(hingeBase);

        const hingePin = new THREE.Mesh(
            new THREE.CylinderGeometry(0.012, 0.012, 0.18, 8),
            goldTrim
        );
        hingePin.rotation.z = Math.PI / 2;
        hingePin.position.set(x, 1.22, -1.03);
        group.add(hingePin);
    }

    // --- Lid (hinged at -z edge) ---
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 1.2, -1.0);

    const lidGeo = new THREE.BoxGeometry(3, 0.15, 2);
    const lidMesh = new THREE.Mesh(lidGeo, darkWood);
    lidMesh.position.set(0, 0.075, 1.0);
    lidMesh.castShadow = true;
    lidGroup.add(lidMesh);

    // Lid interior — velvet underside
    const lidInterior = new THREE.Mesh(
        new THREE.BoxGeometry(2.7, 0.04, 1.8),
        velvetMat
    );
    lidInterior.position.set(0, -0.01, 1.0);
    lidGroup.add(lidInterior);

    // Mirror inlay on lid interior
    const mirrorGeo = new THREE.PlaneGeometry(1.2, 0.8);
    const mirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    mirror.position.set(0, -0.03, 1.0);
    mirror.rotation.x = Math.PI;
    lidGroup.add(mirror);

    // Frame around mirror
    const frameGeo = new THREE.BoxGeometry(1.3, 0.02, 0.03);
    for (const z of [0.57, 1.43]) {
        const frame = new THREE.Mesh(frameGeo, goldTrim);
        frame.position.set(0, -0.02, z);
        lidGroup.add(frame);
    }
    const frameSideGeo = new THREE.BoxGeometry(0.03, 0.02, 0.9);
    for (const x of [-0.63, 0.63]) {
        const frame = new THREE.Mesh(frameSideGeo, goldTrim);
        frame.position.set(x, -0.02, 1.0);
        lidGroup.add(frame);
    }

    // Gold heart inlay on lid top
    const heartShape = new THREE.Shape();
    const hx = 0, hy = 0;
    heartShape.moveTo(hx, hy + 0.25);
    heartShape.bezierCurveTo(hx, hy + 0.25, hx - 0.25, hy, hx - 0.25, hy);
    heartShape.bezierCurveTo(hx - 0.25, hy - 0.15, hx, hy - 0.3, hx, hy - 0.4);
    heartShape.bezierCurveTo(hx, hy - 0.3, hx + 0.25, hy - 0.15, hx + 0.25, hy);
    heartShape.bezierCurveTo(hx + 0.25, hy, hx, hy + 0.25, hx, hy + 0.25);

    const heartGeo = new THREE.ExtrudeGeometry(heartShape, {
        depth: 0.02,
        bevelEnabled: true,
        bevelThickness: 0.008,
        bevelSize: 0.008,
        bevelSegments: 4,
    });
    const heartMesh = new THREE.Mesh(heartGeo, goldTrim);
    heartMesh.rotation.x = -Math.PI / 2;
    heartMesh.position.set(0, 0.17, 1.0);
    heartMesh.scale.setScalar(1.5);
    lidGroup.add(heartMesh);

    // Lid gold trim
    const lidTrimFront = new THREE.Mesh(
        new THREE.BoxGeometry(3.08, 0.04, 0.04),
        goldTrim
    );
    lidTrimFront.position.set(0, 0.075, 2.0);
    lidGroup.add(lidTrimFront);

    group.add(lidGroup);

    // --- Gold lock plate on front ---
    const lockPlate = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.2, 0.06),
        roseGold
    );
    lockPlate.position.set(0, 1.15, 1.03);
    group.add(lockPlate);

    // Keyhole
    const keyhole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, 0.07, 8),
        inlayMat
    );
    keyhole.rotation.x = Math.PI / 2;
    keyhole.position.set(0, 1.15, 1.065);
    group.add(keyhole);

    // --- Winding key on right side ---
    const keyBaseGeo = new THREE.CylinderGeometry(0.05, 0.06, 0.2, 12);
    const keyBase = new THREE.Mesh(keyBaseGeo, goldTrim);
    keyBase.rotation.z = Math.PI / 2;
    keyBase.position.set(1.6, 0.6, 0);
    group.add(keyBase);

    const keyShaftGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.15, 8);
    const keyShaft = new THREE.Mesh(keyShaftGeo, goldTrim);
    keyShaft.rotation.z = Math.PI / 2;
    keyShaft.position.set(1.75, 0.6, 0);
    group.add(keyShaft);

    const keyHandleGeo = new THREE.TorusGeometry(0.1, 0.018, 12, 24);
    const keyHandle = new THREE.Mesh(keyHandleGeo, goldTrim);
    keyHandle.position.set(1.85, 0.6, 0);
    keyHandle.rotation.y = Math.PI / 2;
    group.add(keyHandle);

    // Center
    group.position.y = -0.5;

    return { group, lid: lidGroup, body, interior };
}
