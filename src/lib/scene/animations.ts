/**
 * GSAP Animation timelines 2.0 for the music box scene
 * Richer, more dynamic animations with more character personalities
 */
import { gsap } from 'gsap';
import type { MusicBoxGroup } from './objects/Box';
import type { CharacterGroup } from './objects/Characters';
import type { AppConfig } from '../config';

/**
 * Box opening animation
 * - Subtle camera shake
 * - Lid swings with spring physics
 * - Interior glow effect
 */
export function createOpeningTimeline(
    musicBox: MusicBoxGroup,
    config: AppConfig,
    onComplete: () => void
): gsap.core.Timeline {
    const speed = config.scene.animation_speed;
    const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        onComplete,
    });

    // Slight anticipation — box settles down
    tl.to(musicBox.group.position, {
        y: musicBox.group.position.y - 0.03,
        duration: 0.3 / speed,
        ease: 'power2.in',
    });

    // Box rises back up as lid starts opening
    tl.to(musicBox.group.position, {
        y: musicBox.group.position.y,
        duration: 0.4 / speed,
        ease: 'power2.out',
    }, '-=0.1');

    // Lid opens (rotation.x since pivot is at back edge)
    tl.to(musicBox.lid.rotation, {
        x: -Math.PI * 0.58,
        duration: 2.5 / speed,
        ease: 'power3.out',
    }, '-=0.3');

    // Overshoot and settle with spring
    tl.to(musicBox.lid.rotation, {
        x: -Math.PI * 0.53,
        duration: 0.6 / speed,
        ease: 'elastic.out(1.2, 0.35)',
    });

    // Interior glow pulse
    tl.to(musicBox.interior.scale, {
        x: 1.03,
        z: 1.03,
        duration: 0.8 / speed,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 1,
    }, '-=0.5');

    return tl;
}

/**
 * Character reveal — richer staggered entrance
 * - Characters pop up from music box
 * - Each has unique animation style
 * - Continuous idle animations
 */
export function createCharacterRevealTimeline(
    characters: CharacterGroup,
    musicBox: MusicBoxGroup,
    config: AppConfig
): gsap.core.Timeline {
    const speed = config.scene.animation_speed;
    const tl = gsap.timeline({
        defaults: { ease: 'back.out(1.7)' },
    });

    const charEntries = [
        { char: characters.horse, scale: 0.75, delay: 0 },
        { char: characters.prince, scale: 0.5, delay: 0.25 },
        { char: characters.partner, scale: 0.45, delay: 0.45 },
        { char: characters.rapunzel, scale: 0.5, delay: 0.65 },
        { char: characters.baby, scale: 0.32, delay: 0.85 },
    ];

    // Start all below and tiny
    charEntries.forEach(({ char }) => {
        char.scale.setScalar(0.01);
        char.position.y -= 0.5;
    });

    // Staggered pop-up entrance
    charEntries.forEach(({ char, scale, delay }) => {
        const originalY = char.position.y + 0.5;

        tl.to(char.position, {
            y: originalY,
            duration: 0.7 / speed,
            ease: 'back.out(2.5)',
        }, delay / speed);

        tl.to(char.scale, {
            x: scale,
            y: scale,
            z: scale,
            duration: 0.7 / speed,
            ease: 'elastic.out(1.2, 0.45)',
        }, delay / speed);
    });

    // --- Continuous idle animations ---

    // Horse gentle bobbing
    tl.to(characters.horse.position, {
        y: '+=0.06',
        duration: 1.6 / speed,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
    }, '+=0');

    // Horse tail swish (rotates the whole horse group slightly)
    tl.to(characters.horse.rotation, {
        y: 0.08,
        duration: 2 / speed,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
    }, '-=1.6');

    // Baby wobble — goofier with both z and x
    tl.to(characters.baby.rotation, {
        z: 0.25,
        duration: 0.5 / speed,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
    }, '-=2');

    tl.to(characters.baby.position, {
        y: '+=0.04',
        duration: 0.4 / speed,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
    }, '-=0.5');

    // Prince sways — looking around regally
    tl.to(characters.prince.rotation, {
        y: 0.2,
        duration: 2.5 / speed,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
    }, '-=1');

    // Partner nods
    tl.to(characters.partner.rotation, {
        x: 0.08,
        duration: 1.8 / speed,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
    }, '-=2');

    // Rapunzel gentle sway
    tl.to(characters.rapunzel.rotation, {
        z: 0.06,
        y: -0.1,
        duration: 3 / speed,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
    }, '-=2.5');

    return tl;
}
