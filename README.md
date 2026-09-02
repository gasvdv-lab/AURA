# AURA v0.5.0 — Perception Kernel

AURA is an Android-first research runtime for a persistent, objective synthetic reality. v0.5.0 preserves all earlier kernels and introduces a strict boundary between objective `WORLD_STATE` and limited `PERCEIVED_STATE`.

Live Android test: https://gasvdv-lab.github.io/AURA/

## Run

Publish the repository root through GitHub Pages, or serve it with any static HTTPS server. `index.html` is in the root. There is no mandatory bundler, dependency install, or production build.

For automatic validation, Node.js 20+ is sufficient:

```text
npm test
npm run validate
```

## v0.5.0 scope

Included cumulatively: objective world physics, causal Observatory, embodiment, sensorimotor evidence and range-limited synthetic perception. Observations originate at a body part, apply deterministic range and spherical occlusion, add reproducible bounded measurement noise, quantify uncertainty and expose stable perceptual track IDs instead of objective object IDs.

`PERCEIVED_STATE` deliberately excludes exact world position, objective IDs, mass, material, force, integrity, static flags and Observatory. It may be incomplete, noisy and wrong. There is still no interpretation, memory, belief, cognition/LLM, autonomous behaviour, humanoid rendering, WebXR, camera, microphone, GPS, Synthetic Network or Human Internet runtime.

The service worker continues to use network-first navigation and immediate activation so GitHub Pages upgrades do not remain hidden behind older cached releases.

The browser interface is an Observatory-facing laboratory view, not AURA perception. AURA has no access to it.
