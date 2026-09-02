# AURA Modules — v0.7.0

## Actief, cumulatief tot en met v0.7.0

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
- `memory`: gevalideerde sensorische sporen uit `PERCEIVED_STATE`, deterministische opvraging, consolidatie, verzwakking, capaciteitsvergeten en snapshot/herstel.
- `belief`: generieke perceptuele claims, alternatieven bij conflicterende evidence, veroudering, geheugenprovenance, hypotheses en evidence-evaluatie zonder waarheidsoracle.
- `ui`: Nederlandstalige handelingfeedback, zichtbare knopvoorwaarden, actuator-/causaliteitstellers, veilige resetbevestiging en migratie van lokale v0.6.0-state.

## Reserved and inactive

`cognition`, `foundation-model`, `xr`, `synthetic-network` en `human-internet` hebben geen v0.7-runtime. Beliefs zijn evidencegewogen interne claims, geen objectieve feiten, begrip, verlangens of beslissingen. Capability creep blijft verboden.
