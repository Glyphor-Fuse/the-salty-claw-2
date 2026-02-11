#!/usr/bin/env node
/**
 * Bulk-add Aceternity UI components via shadcn CLI.
 * Run from repo root: npm run add-aceternity
 */
import { spawnSync } from "node:child_process";

const COMPONENTS = [
  "grid",
  "moving-line",
  "sparkles",
  "spotlight",
  "glowing-stars",
  "text-reveal-card",
  "animated-tooltip",
  "following-pointer",
  "background-beams",
  "svg-mask-effect",
  "infinite-moving-cards",
  "3d-pin",
  "evervault-card",
  "parallax-scroll",
  "parallax-scroll-2",
  "tracing-beam",
  "container-scroll-animation",
  "text-generate-effect",
  "meteors",
  "card-stack",
  "moving-border",
  "lamp",
  "sticky-scroll-reveal",
  "floating-navbar",
  "navbar-menu",
  "tailwindcss-buttons",
  "bento-grid",
  "card-hover-effect",
  "google-gemini-effect",
  "typewriter-effect",
  "background-boxes",
  "3d-card",
  "images-slider",
  "direction-aware-hover",
  "tabs",
  "hero-parallax",
  "wavy-background",
  "background-gradient",
  "layout-grid",
  "background-gradient-animation",
  "macbook-scroll",
  "input",
  "label",
  "multi-step-loader",
  "globe",
  "aurora-background",
  "canvas-reveal-effect",
  "hover-border-gradient",
  "hero-highlight",
  "vortex",
  "wobble-card",
  "placeholders-and-vanish-input",
  "flip-words",
  "link-preview",
  "glare-card",
  "animated-modal",
  "sidebar",
  "apple-cards-carousel",
  "shooting-stars",
  "stars-background",
  "compare",
  "card-spotlight",
  "cover",
  "file-upload",
  "floating-dock",
  "focus-cards",
  "background-beams-with-collision",
  "timeline",
  "text-hover-effect",
  "lens",
  "background-lines",
  "animated-testimonials",
  "world-map",
  "code-block",
  "carousel",
  "colourful-text",
  "spotlight-new",
  "glowing-effect",
  "3d-marquee",
  "container-text-flip",
  "resizable-navbar",
  "draggable-card",
  "sticky-banner",
  "pointer-highlight",
  "stateful-button",
  "loader",
  "comet-card",
  "background-ripple-effect",
  "pixelated-canvas",
  "layout-text-flip",
  "dotted-glow-background",
  "tooltip-card",
  "encrypted-text",
  "noise-background",
  "dither-shader",
  "webcam-pixel-grid",
  "images-badge",
  "keyboard",
  "3d-globe",
];

const total = COMPONENTS.length;
let done = 0;
let failed = 0;

for (const name of COMPONENTS) {
  const arg = `@aceternity/${name}`;
  process.stdout.write(`[${++done}/${total}] Adding ${arg} ... `);
  const r = spawnSync(
    "npx",
    ["shadcn@latest", "add", arg, "--yes"],
    { stdio: "pipe", shell: true, cwd: process.cwd() }
  );
  if (r.status === 0) {
    console.log("ok");
  } else {
    failed++;
    console.log("FAILED");
    if (r.stderr?.length) process.stderr.write(r.stderr);
  }
}

console.log(`\nDone. ${total - failed}/${total} added.${failed ? ` ${failed} failed.` : ""}`);
process.exit(failed ? 1 : 0);
