# AURA Modules — v0.5.0

## Active cumulatively through v0.5.0

- `core/world`: objective state, 3D coordinates, bodies and fixed-step evolution.
- `core/materials`: immutable generic material definitions and physical/degradation properties.
- `core/physics`: represented by World Kernel integration and deterministic collision resolution; no renderer dependency.
- `core/processes`: generic resource addition, transformation, construction and destruction.
- `core/events` + `core/causality`: ordered causal events and deterministic hash chaining.
- `core/randomness`: snapshot-capable seeded PRNG; physics itself consumes no hidden randomness.
- `core/persistence`: complete JSON-compatible snapshot and exact restoration.
- `observatory`: external append-only record, invisible to inhabitants.
- `ui`: a human laboratory view only.
- `embodiment`: abstract humanoid blueprint, physical part mapping, joint constraints, normalized low-level actuator commands, raw proprioception/integrity sampling and snapshot/restore.
- `sensorimotor`: objective signal sampling, explicitly initiated low-level trials, causal consequence deltas, incremental actuator-effect models and persistence.
- `perception`: private access to objective state, range and occlusion filtering, reproducible measurement noise, uncertainty, opaque perceptual tracking and snapshot/restore.

## Reserved and inactive

`cognition`, `memory`, `belief`, `xr`, `synthetic-network`, and `human-internet` have no v0.5 runtime. Perceptions are transient bounded observations, not experiences, memories, beliefs, desires or decisions. Capability creep is prohibited.
