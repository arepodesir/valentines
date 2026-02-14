/**
 * Character builder 3.0 — Prince (white) & Princess (black) dancing center stage
 * Same dance, different people — the central romantic couple
 */
import * as THREE from 'node_modules/@types/three';
import type { AppConfig } from '../../config';

export interface CharacterGroup {
    group: THREE.Group;
    prince: THREE.Group;
    rapunzel: THREE.Group;
    partner: THREE.Group;
    baby: THREE.Group;
    elder: THREE.Group;
}

function createFigure(opts: {
    skinColor: number;
    hairColor: number;
    outfitColor: number;
    height: number;
    hasBeard?: boolean;
    isBaby?: boolean;
    crownColor?: number;
    longHair?: boolean;
    hairAccessory?: number;
    isDress?: boolean;
    dressColor?: number;
}): THREE.Group {
    const fig = new THREE.Group();
    const scale = opts.height / 1.6;

    const skinMat = new THREE.MeshStandardMaterial({
        color: opts.skinColor, roughness: 0.65, metalness: 0.05,
    });
    const hairMat = new THREE.MeshStandardMaterial({
        color: opts.hairColor, roughness: 0.85, metalness: 0.0,
    });
    const outfitMat = new THREE.MeshStandardMaterial({
        color: opts.outfitColor, roughness: 0.45, metalness: 0.1,
        envMapIntensity: 0.5,
    });

    // Head
    const headGeo = new THREE.SphereGeometry(0.18 * scale, 16, 16);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = opts.height - 0.18 * scale;
    head.castShadow = true;
    fig.add(head);

    // Hair
    const hairGeo = new THREE.SphereGeometry(0.21 * scale, 16, 16);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = opts.height - 0.1 * scale;
    hair.scale.set(1.05, 0.85, 1.05);
    fig.add(hair);

    // Long hair
    if (opts.longHair) {
        for (let i = 0; i < 8; i++) {
            const strand = new THREE.Mesh(
                new THREE.CapsuleGeometry(0.04 * scale, 0.5 * scale, 4, 8),
                hairMat
            );
            const angle = (Math.PI * 0.3) + (i / 8) * (Math.PI * 1.4);
            strand.position.set(
                Math.sin(angle) * 0.14 * scale,
                opts.height - 0.3 * scale - i * 0.03 * scale,
                Math.cos(angle) * 0.14 * scale - 0.05 * scale
            );
            strand.rotation.x = 0.15;
            strand.rotation.z = Math.sin(angle) * 0.1;
            fig.add(strand);
        }
    }

    // Eyes
    const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.2 });
    const eyeHighlight = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.3 });

    for (const side of [-1, 1]) {
        const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.035 * scale, 10, 10), eyeWhiteMat);
        eyeWhite.position.set(side * 0.07 * scale, opts.height - 0.19 * scale, 0.15 * scale);
        eyeWhite.scale.set(1, 0.8, 0.6);
        fig.add(eyeWhite);

        const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.018 * scale, 8, 8), pupilMat);
        pupil.position.set(side * 0.07 * scale, opts.height - 0.19 * scale, 0.17 * scale);
        fig.add(pupil);

        const highlight = new THREE.Mesh(new THREE.SphereGeometry(0.006 * scale, 6, 6), eyeHighlight);
        highlight.position.set(side * 0.06 * scale, opts.height - 0.18 * scale, 0.18 * scale);
        fig.add(highlight);
    }

    // Blush
    const blushMat = new THREE.MeshStandardMaterial({ color: 0xff8a8a, transparent: true, opacity: 0.35, roughness: 0.9 });
    for (const side of [-1, 1]) {
        const blush = new THREE.Mesh(new THREE.SphereGeometry(0.04 * scale, 8, 8), blushMat);
        blush.position.set(side * 0.11 * scale, opts.height - 0.24 * scale, 0.13 * scale);
        blush.scale.set(1, 0.6, 0.3);
        fig.add(blush);
    }

    // Smile
    const smileMat = new THREE.MeshStandardMaterial({ color: 0xcc4444 });
    const smileGeo = new THREE.TorusGeometry(0.04 * scale, 0.008 * scale, 6, 16, Math.PI);
    const smile = new THREE.Mesh(smileGeo, smileMat);
    smile.position.set(0, opts.height - 0.27 * scale, 0.16 * scale);
    smile.rotation.x = Math.PI;
    fig.add(smile);

    // Crown
    if (opts.crownColor) {
        const crownMat = new THREE.MeshStandardMaterial({
            color: opts.crownColor, metalness: 0.92, roughness: 0.15, envMapIntensity: 1.5,
        });
        const crownGeo = new THREE.CylinderGeometry(0.11 * scale, 0.14 * scale, 0.07 * scale, 6);
        const crown = new THREE.Mesh(crownGeo, crownMat);
        crown.position.y = opts.height + 0.03 * scale;
        fig.add(crown);

        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const point = new THREE.Mesh(
                new THREE.ConeGeometry(0.018 * scale, 0.06 * scale, 5),
                crownMat
            );
            point.position.set(
                Math.cos(angle) * 0.11 * scale,
                opts.height + 0.09 * scale,
                Math.sin(angle) * 0.11 * scale
            );
            fig.add(point);

            const gemMat = new THREE.MeshStandardMaterial({
                color: [0xe11d48, 0x2563eb, 0x10b981, 0xd946ef, 0xf59e0b][i],
                metalness: 0.3, roughness: 0.1,
                emissive: new THREE.Color([0xe11d48, 0x2563eb, 0x10b981, 0xd946ef, 0xf59e0b][i]),
                emissiveIntensity: 0.2,
            });
            const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.012 * scale), gemMat);
            gem.position.set(
                Math.cos(angle) * 0.12 * scale,
                opts.height + 0.055 * scale,
                Math.sin(angle) * 0.12 * scale
            );
            fig.add(gem);
        }
    }

    // Hair accessory
    if (opts.hairAccessory) {
        const flowerMat = new THREE.MeshStandardMaterial({
            color: opts.hairAccessory, roughness: 0.4, metalness: 0.1,
        });
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const petal = new THREE.Mesh(
                new THREE.SphereGeometry(0.025 * scale, 6, 6),
                flowerMat
            );
            petal.position.set(
                -0.15 * scale + Math.cos(angle) * 0.03 * scale,
                opts.height + 0.01 * scale,
                0.05 * scale + Math.sin(angle) * 0.03 * scale
            );
            petal.scale.set(1, 0.5, 1);
            fig.add(petal);
        }
        const center = new THREE.Mesh(
            new THREE.SphereGeometry(0.012 * scale, 6, 6),
            new THREE.MeshStandardMaterial({ color: 0xfbbf24 })
        );
        center.position.set(-0.15 * scale, opts.height + 0.015 * scale, 0.05 * scale);
        fig.add(center);
    }

    // Body
    if (opts.isBaby) {
        const bodyGeo = new THREE.SphereGeometry(0.17 * scale, 14, 14);
        const body = new THREE.Mesh(bodyGeo, outfitMat);
        body.position.y = opts.height * 0.35;
        body.scale.set(1, 1.15, 0.85);
        body.castShadow = true;
        fig.add(body);

        for (const side of [-1, 1]) {
            const arm = new THREE.Mesh(
                new THREE.CapsuleGeometry(0.035 * scale, 0.12 * scale, 4, 8),
                skinMat
            );
            arm.position.set(side * 0.2 * scale, opts.height * 0.45, 0);
            arm.rotation.z = side * -0.9;
            fig.add(arm);

            const hand = new THREE.Mesh(
                new THREE.SphereGeometry(0.025 * scale, 6, 6),
                skinMat
            );
            hand.position.set(side * 0.28 * scale, opts.height * 0.52, 0);
            fig.add(hand);
        }

        const pacMat = new THREE.MeshStandardMaterial({ color: 0xf472b6, roughness: 0.4 });
        const pac = new THREE.Mesh(new THREE.SphereGeometry(0.02 * scale, 6, 6), pacMat);
        pac.position.set(0, opts.height - 0.29 * scale, 0.18 * scale);
        fig.add(pac);
    } else if (opts.isDress) {
        // Princess dress — flowing gown
        const dressMat = new THREE.MeshStandardMaterial({
            color: opts.dressColor || opts.outfitColor,
            roughness: 0.4, metalness: 0.15, envMapIntensity: 0.6,
        });

        // Bodice (fitted upper)
        const bodiceGeo = new THREE.CapsuleGeometry(0.12 * scale, 0.2 * scale, 6, 14);
        const bodice = new THREE.Mesh(bodiceGeo, dressMat);
        bodice.position.y = opts.height * 0.58;
        bodice.castShadow = true;
        fig.add(bodice);

        // Skirt (flowing cone)
        const skirtGeo = new THREE.ConeGeometry(0.35 * scale, 0.55 * scale, 16, 1, true);
        const skirt = new THREE.Mesh(skirtGeo, dressMat);
        skirt.position.y = opts.height * 0.25;
        skirt.castShadow = true;
        fig.add(skirt);

        // Skirt frills — layers of rings at the bottom
        const frillMat = new THREE.MeshStandardMaterial({
            color: opts.dressColor || opts.outfitColor,
            roughness: 0.5, metalness: 0.1, transparent: true, opacity: 0.8,
        });
        for (let i = 0; i < 3; i++) {
            const frillGeo = new THREE.TorusGeometry(
                (0.28 + i * 0.04) * scale, 0.015 * scale, 4, 24
            );
            const frill = new THREE.Mesh(frillGeo, frillMat);
            frill.position.y = opts.height * (0.05 + i * 0.06);
            frill.rotation.x = Math.PI / 2;
            fig.add(frill);
        }

        // Arms (graceful)
        for (const side of [-1, 1]) {
            const arm = new THREE.Mesh(
                new THREE.CapsuleGeometry(0.035 * scale, 0.2 * scale, 4, 8),
                skinMat
            );
            arm.position.set(side * 0.18 * scale, opts.height * 0.56, 0);
            arm.rotation.z = side * 0.25;
            fig.add(arm);

            const hand = new THREE.Mesh(
                new THREE.SphereGeometry(0.03 * scale, 8, 8),
                skinMat
            );
            hand.position.set(side * 0.25 * scale, opts.height * 0.42, 0);
            fig.add(hand);
        }

        // No legs visible (covered by gown)
        // Shoes peek out
        for (const side of [-1, 1]) {
            const shoe = new THREE.Mesh(
                new THREE.BoxGeometry(0.04 * scale, 0.02 * scale, 0.06 * scale),
                new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.6, roughness: 0.3 })
            );
            shoe.position.set(side * 0.06 * scale, opts.height * 0.01, 0.03 * scale);
            fig.add(shoe);
        }
    } else {
        // Default: suited figure
        const torsoGeo = new THREE.CapsuleGeometry(0.14 * scale, 0.35 * scale, 6, 14);
        const torso = new THREE.Mesh(torsoGeo, outfitMat);
        torso.position.y = opts.height * 0.55;
        torso.castShadow = true;
        fig.add(torso);

        // Epaulettes (prince detail)
        const epMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.85, roughness: 0.2 });
        for (const side of [-1, 1]) {
            const ep = new THREE.Mesh(
                new THREE.SphereGeometry(0.04 * scale, 6, 6),
                epMat
            );
            ep.position.set(side * 0.18 * scale, opts.height * 0.68, 0);
            ep.scale.set(1.2, 0.5, 0.8);
            fig.add(ep);
        }

        // Belt
        const beltMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.4, metalness: 0.3 });
        const belt = new THREE.Mesh(
            new THREE.CylinderGeometry(0.145 * scale, 0.145 * scale, 0.03 * scale, 12),
            beltMat
        );
        belt.position.y = opts.height * 0.42;
        fig.add(belt);

        const buckle = new THREE.Mesh(
            new THREE.BoxGeometry(0.04 * scale, 0.035 * scale, 0.02 * scale),
            new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9, roughness: 0.2 })
        );
        buckle.position.set(0, opts.height * 0.42, 0.14 * scale);
        fig.add(buckle);

        // Arms
        for (const side of [-1, 1]) {
            const arm = new THREE.Mesh(
                new THREE.CapsuleGeometry(0.04 * scale, 0.2 * scale, 4, 8),
                outfitMat
            );
            arm.position.set(side * 0.2 * scale, opts.height * 0.58, 0);
            arm.rotation.z = side * 0.12;
            fig.add(arm);

            const hand = new THREE.Mesh(
                new THREE.SphereGeometry(0.03 * scale, 8, 8),
                skinMat
            );
            hand.position.set(side * 0.22 * scale, opts.height * 0.38, 0);
            fig.add(hand);
        }

        // Legs
        const legMat = new THREE.MeshStandardMaterial({ color: 0x2a2a45, roughness: 0.6 });
        for (const side of [-1, 1]) {
            const leg = new THREE.Mesh(
                new THREE.CapsuleGeometry(0.05 * scale, 0.28 * scale, 4, 8),
                legMat
            );
            leg.position.set(side * 0.07 * scale, opts.height * 0.18, 0);
            fig.add(leg);

            const shoe = new THREE.Mesh(
                new THREE.BoxGeometry(0.06 * scale, 0.03 * scale, 0.09 * scale),
                new THREE.MeshStandardMaterial({ color: 0x1a0e08, roughness: 0.5, metalness: 0.15 })
            );
            shoe.position.set(side * 0.07 * scale, opts.height * 0.02, 0.02 * scale);
            fig.add(shoe);
        }
    }

    // Beard
    if (opts.hasBeard) {
        const beardMat = new THREE.MeshStandardMaterial({ color: opts.hairColor, roughness: 0.9 });
        const beardGeo = new THREE.SphereGeometry(0.13 * scale, 10, 10);
        const beard = new THREE.Mesh(beardGeo, beardMat);
        beard.position.set(0, opts.height - 0.33 * scale, 0.06 * scale);
        beard.scale.set(0.9, 1.4, 0.55);
        fig.add(beard);

        for (const side of [-1, 1]) {
            const mustache = new THREE.Mesh(
                new THREE.CapsuleGeometry(0.015 * scale, 0.06 * scale, 4, 6),
                beardMat
            );
            mustache.position.set(side * 0.04 * scale, opts.height - 0.26 * scale, 0.16 * scale);
            mustache.rotation.z = side * 0.4;
            fig.add(mustache);
        }
    }

    return fig;
}

function createHorse(name: string): THREE.Group {
    const horse = new THREE.Group();
    const horseMat = new THREE.MeshStandardMaterial({
        color: 0xcc2222, roughness: 0.5, metalness: 0.08, envMapIntensity: 0.4,
    });

    const bodyGeo = new THREE.CapsuleGeometry(0.28, 0.65, 12, 20);
    const body = new THREE.Mesh(bodyGeo, horseMat);
    body.rotation.z = Math.PI / 2;
    body.position.y = 0.65;
    body.castShadow = true;
    horse.add(body);

    const neckGeo = new THREE.CapsuleGeometry(0.12, 0.3, 8, 12);
    const neck = new THREE.Mesh(neckGeo, horseMat);
    neck.position.set(0.45, 0.85, 0);
    neck.rotation.z = -0.6;
    horse.add(neck);

    const headGeo = new THREE.BoxGeometry(0.18, 0.22, 0.18);
    const headMesh = new THREE.Mesh(headGeo, horseMat);
    headMesh.position.set(0.6, 0.95, 0);
    headMesh.rotation.z = 0.2;
    horse.add(headMesh);

    const snoutGeo = new THREE.BoxGeometry(0.10, 0.10, 0.14);
    const snout = new THREE.Mesh(snoutGeo, horseMat);
    snout.position.set(0.72, 0.88, 0);
    horse.add(snout);

    const nostrilMat = new THREE.MeshStandardMaterial({ color: 0x3a0505 });
    for (const side of [-1, 1]) {
        const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.015, 6, 6), nostrilMat);
        nostril.position.set(0.77, 0.86, side * 0.04);
        horse.add(nostril);
    }

    const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    for (const side of [-1, 1]) {
        const white = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 8), eyeWhiteMat);
        white.position.set(0.62, 0.98, side * 0.09);
        horse.add(white);
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.015, 8, 8), eyeMat);
        eye.position.set(0.63, 0.98, side * 0.095);
        horse.add(eye);
    }

    for (const side of [-1, 1]) {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), horseMat);
        ear.position.set(0.57, 1.1, side * 0.06);
        ear.rotation.z = side * 0.2;
        horse.add(ear);
    }

    const maneMat = new THREE.MeshStandardMaterial({ color: 0x660000, roughness: 0.9 });
    for (let i = 0; i < 10; i++) {
        const tuft = new THREE.Mesh(
            new THREE.SphereGeometry(0.05 + Math.sin(i * 0.5) * 0.02, 8, 8),
            maneMat
        );
        const t = i / 10;
        tuft.position.set(0.5 - t * 0.6, 0.98 - t * 0.1 + Math.sin(i * 0.6) * 0.04, 0);
        horse.add(tuft);
    }

    const saddleMat = new THREE.MeshStandardMaterial({ color: 0x2d1b0e, roughness: 0.6, metalness: 0.15 });
    const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.06, 0.4), saddleMat);
    saddle.position.set(0.05, 0.92, 0);
    horse.add(saddle);

    const padMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.7 });
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.03, 0.5), padMat);
    pad.position.set(0.05, 0.89, 0);
    horse.add(pad);

    const stirrupMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.85, roughness: 0.2 });
    for (const side of [-1, 1]) {
        const stirrup = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.008, 6, 8), stirrupMat);
        stirrup.position.set(0.05, 0.65, side * 0.28);
        stirrup.rotation.y = Math.PI / 2;
        horse.add(stirrup);
        const strap = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.24, 0.015), saddleMat);
        strap.position.set(0.05, 0.77, side * 0.27);
        horse.add(strap);
    }

    const legMat = new THREE.MeshStandardMaterial({ color: 0xaa1111, roughness: 0.6 });
    const positions: [number, number, number][] = [
        [0.3, 0, 0.12], [0.3, 0, -0.12],
        [-0.3, 0, 0.12], [-0.3, 0, -0.12],
    ];
    for (const [x, y, z] of positions) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.55, 10), legMat);
        leg.position.set(x, y + 0.27, z);
        horse.add(leg);
        const hoof = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.045, 0.05, 10),
            new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.4, roughness: 0.3 })
        );
        hoof.position.set(x, y + 0.025, z);
        horse.add(hoof);
    }

    const tailMat = new THREE.MeshStandardMaterial({ color: 0x660000, roughness: 0.9 });
    for (let i = 0; i < 5; i++) {
        const seg = new THREE.Mesh(
            new THREE.CapsuleGeometry(0.04 - i * 0.005, 0.1, 4, 6),
            tailMat
        );
        seg.position.set(-0.55 - i * 0.04, 0.7 - i * 0.06, 0);
        seg.rotation.z = -0.4 - i * 0.1;
        horse.add(seg);
    }

    return horse;
}

export function createCharacters(config: AppConfig): CharacterGroup {
    const group = new THREE.Group();

    // Platform / turntable
    const platformGeo = new THREE.CylinderGeometry(1.25, 1.25, 0.1, 48);
    const platformMat = new THREE.MeshStandardMaterial({
        color: 0x8b0020, roughness: 0.8, metalness: 0.05,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = 0.05;
    platform.receiveShadow = true;
    group.add(platform);

    // Gold ring
    const ringGeo = new THREE.TorusGeometry(1.25, 0.025, 8, 48);
    const ringMat = new THREE.MeshStandardMaterial({
        color: 0xfbbf24, metalness: 0.9, roughness: 0.15, envMapIntensity: 1.0,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.1;
    group.add(ring);

    // ═══════════════════════════════════════
    // ★ PRINCE (white) — center stage left
    // ═══════════════════════════════════════
    const prince = createFigure({
        skinColor: 0xf5deb3,     // Fair/white skin
        hairColor: 0x3b2414,     // Dark brown hair
        outfitColor: 0x1e3a8a,   // Royal blue suit
        height: 1.5,
        crownColor: 0xfbbf24,    // Gold crown
    });
    prince.position.set(-0.35, 0.1, 0.1);
    prince.rotation.y = 0.2;
    prince.scale.setScalar(0.85);
    group.add(prince);

    // ═══════════════════════════════════════
    // ★ PRINCESS (black) — center stage right
    // ═══════════════════════════════════════
    const rapunzel = createFigure({
        skinColor: 0x6b3e26,     // Dark/black skin
        hairColor: 0x1a1a2e,     // Very dark hair
        outfitColor: 0xd946ef,   // Magenta/purple gown
        height: 1.4,
        longHair: true,
        hairAccessory: 0xf472b6, // Pink flower
        crownColor: 0xc0c0c0,    // Silver tiara
        isDress: true,           // Flowing gown
        dressColor: 0xd946ef,
    });
    rapunzel.position.set(0.35, 0.1, 0.1);
    rapunzel.rotation.y = -0.2;
    rapunzel.scale.setScalar(0.85);
    group.add(rapunzel);

    // ═══════════════════════════════════════
    // ★ PARTNER — center stage, with the couple
    // ═══════════════════════════════════════
    const partner = createFigure({
        skinColor: 0xf0d5b0,
        hairColor: 0x8b4513,
        outfitColor: 0x059669,   // Emerald green
        height: 1.5,
        hasBeard: true,
    });
    partner.position.set(0.0, 0.1, 0.35);
    partner.rotation.y = 0;
    partner.scale.setScalar(0.85);
    group.add(partner);

    // ═══════════════════════════════════════
    // ★ BABY — full size, extra cute, with the family
    // ═══════════════════════════════════════
    const baby = createFigure({
        skinColor: 0xd4a574,     // Warm brown skin
        hairColor: 0x2d1b0e,     // Dark curly hair
        outfitColor: 0xfbbf24,   // Sunny gold onesie
        height: 1.0,             // Full size but shorter stature
        isBaby: true,
    });
    baby.position.set(0.0, 0.1, 0.0);     // Center of the group
    baby.scale.setScalar(0.85);             // Full adult scale
    group.add(baby);

    // ═══════════════════════════════════════
    // ★ ELDER WOMAN — background, same size as adults
    // ═══════════════════════════════════════
    const elder = createFigure({
        skinColor: 0xd4a07a,     // Warm medium skin
        hairColor: 0xc0c0c0,     // Silver/grey hair
        outfitColor: 0x7c3aed,   // Deep purple dress
        height: 1.4,
        longHair: true,
        isDress: true,
        dressColor: 0x7c3aed,
    });
    elder.position.set(0.5, 0.1, -0.45);
    elder.rotation.y = -0.4;
    elder.scale.setScalar(0.85);
    group.add(elder);

    return { group, prince, rapunzel, partner, baby, elder };
}
