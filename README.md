# AURA v0.2.0 — World Kernel

AURA is an Android-first research runtime for a persistent, objective synthetic reality. v0.2.0 extends the v0.1.0 Synthetic Kernel with deterministic three-dimensional physics, materials, damage, resources, construction/destruction, and explicit causal records.

Live Android test: https://gasvdv-lab.github.io/AURA/

## Run

Publish the repository root through GitHub Pages, or serve it with any static HTTPS server. `index.html` is in the root. There is no mandatory bundler, dependency install, or production build.

For automatic validation, Node.js 20+ is sufficient:

```text
npm test
npm run validate
```

## v0.2.0 scope

Included: objective `WORLD_STATE`, 3D vectors, physical spherical bodies, mass, position, velocity, acceleration, accumulated forces, gravity, fixed-step semi-implicit Euler integration, deterministic impulse collisions, a material registry, integrity/degradation, resources, generic processes, construction/destruction, snapshot/restore, and append-only hash-chained Observatory events.

Excluded: high-level game objects, WebXR, humanoid rendering, cognition/LLM, camera, microphone, GPS, Synthetic Network runtime, and Human Internet access. Android Chrome is the only target until explicitly changed; this release does not yet request Android hardware capabilities.

The browser interface is an Observatory-facing laboratory view, not AURA perception. AURA has no access to it.
