# AURA Modules — v0.8.3

## Capability Kernel

Beheert generieke cognitieve capabilities als `candidate` of `available`, met leerevidence, bronsoort, unieke proeven, persistentie en causale Observatory-events. Externe wereldacties kunnen niet als cognitieve capability worden geregistreerd.

## Cumulatief behouden uit v0.8.2

## Reasoning Policy

Staat berekeningen en logische afleidingen toe, maar classificeert ze als berekend of afgeleid en nooit als waarneming. Wereldclaims blijven beperkt tot gecontroleerde percepties, herinneringen, beliefs en hypotheses.

## Cumulatief behouden uit v0.8.1

## Nieuwe aanvullingen

- UI Workflow Guidance verklaart waarom een actie niet beschikbaar is.
- Gemini/Groq Relay verzorgt server-side providerselectie en begrensde tekstuitvoer.
- Windows AI Starter vraagt een sleutel tijdelijk en schrijft hem niet naar project of browser.

## Cumulatief behouden uit v0.8.0

## Actief, cumulatief tot en met v0.8.0

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
- `foundation-model`: whitelist-contextcompiler, providergrens, deterministische testprovider, vertrouwde relayprovider, tekst-only responslog en snapshot/herstel.
- `server`: optionele Gemini/Groq-referentierelay die sleutels uitsluitend tijdelijk server-side leest, de origin beperkt en tekstaanroepen zonder tools uitvoert.
- `ui`: Nederlandstalige handelingfeedback, zichtbare knopvoorwaarden, actuator-/causaliteitstellers, veilige resetbevestiging en migratie van lokale v0.6.0-state.

## Reserved and inactive

Het foundation model kan in v0.8 alleen tekst produceren uit gecontroleerde context. `attention`, autonome actie, modeltools, `xr`, `synthetic-network` en `human-internet` hebben geen runtime. Modeltekst is geen wereldactie of objectieve waarheid.
