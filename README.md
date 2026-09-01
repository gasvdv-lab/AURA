# AURA v0.3.0 — Embodiment Kernel

AURA is an Android-first research runtime for a persistent, objective synthetic reality. v0.3.0 preserves the Synthetic and World Kernels and adds an abstract, physically sexless humanoid embodiment made from causal physical parts, joints, low-level actuators and raw body sensors.

Live Android test: https://gasvdv-lab.github.io/AURA/

## Run

Publish the repository root through GitHub Pages, or serve it with any static HTTPS server. `index.html` is in the root. There is no mandatory bundler, dependency install, or production build.

For automatic validation, Node.js 20+ is sufficient:

```text
npm test
npm run validate
```

## v0.3.0 scope

Included cumulatively: objective `WORLD_STATE`, deterministic physics and collisions, materials/damage, resources/processes, snapshot/restore, causal Observatory events, and a 14-part abstract humanoid topology. Its joints generate deterministic constraint forces. Every joint has a normalized low-level actuator, while sensors expose only raw position, velocity and integrity state.

Excluded: learned movement, scripted skills such as walking/grasping/standing, high-level game objects, visual humanoid rendering, WebXR, cognition/LLM, camera, microphone, GPS, Synthetic Network runtime, and Human Internet access. Android Chrome is the only target until explicitly changed; this release requests no Android hardware capabilities.

The browser interface is an Observatory-facing laboratory view, not AURA perception. AURA has no access to it.
