# AURA v0.4.0 — Sensorimotor Development

AURA is an Android-first research runtime for a persistent, objective synthetic reality. v0.4.0 preserves the Synthetic, World and Embodiment Kernels and adds deterministic learning from low-level actuator commands to subsequent raw body-signal changes.

Live Android test: https://gasvdv-lab.github.io/AURA/

## Run

Publish the repository root through GitHub Pages, or serve it with any static HTTPS server. `index.html` is in the root. There is no mandatory bundler, dependency install, or production build.

For automatic validation, Node.js 20+ is sufficient:

```text
npm test
npm run validate
```

## v0.4.0 scope

Included cumulatively: objective `WORLD_STATE`, deterministic physics, materials/processes, causal Observatory events, the 14-part abstract humanoid, and laboratory sensorimotor trials. A trial records raw pre/post signals around one bounded actuator command, derives objective deltas, and updates an incremental deterministic effect model keyed only by actuator and command value. Combined World, Embodiment and Sensorimotor state supports exact snapshot/restore.

Excluded: scripted walking/grasping/standing, reward or success labels, autonomous exploration, action selection, goals, high-level game objects, visual humanoid rendering, perception, cognition/LLM, WebXR, camera, microphone, GPS, Synthetic Network runtime, and Human Internet access. Android Chrome remains the only target; no hardware permissions are requested.

The v0.4 service worker uses network-first navigation and immediate activation so future GitHub Pages upgrades no longer remain hidden behind an older cached release.

The browser interface is an Observatory-facing laboratory view, not AURA perception. AURA has no access to it.
