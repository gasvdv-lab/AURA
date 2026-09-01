# AURA Testing — cumulative release record

Live Android test: https://gasvdv-lab.github.io/AURA/

## v0.4.0 automatic result

Executed on 2026-09-01 with Node.js in the release workspace. Exact result:

```text
PASS tests/integration/browser-entry-smoke.test.mjs
PASS tests/integration/construction-causality.test.mjs
PASS tests/integration/determinism-collision.test.mjs
PASS tests/integration/embodiment-damage.test.mjs
PASS tests/integration/embodiment-determinism.test.mjs
PASS tests/integration/embodiment-persistence.test.mjs
PASS tests/integration/persistence-mid-simulation.test.mjs
PASS tests/integration/sensorimotor-determinism.test.mjs
PASS tests/integration/sensorimotor-learning.test.mjs
PASS tests/integration/sensorimotor-persistence.test.mjs
PASS tests/regression/no-spontaneous-creation.test.mjs
PASS tests/regression/v0.1-invariants.test.mjs
PASS tests/regression/v0.2-world-with-embodiment.test.mjs
PASS tests/regression/v0.3-embodiment-with-learning.test.mjs
PASS tests/unit/actuator-boundary.test.mjs
PASS tests/unit/damage-degradation.test.mjs
PASS tests/unit/embodiment-blueprint.test.mjs
PASS tests/unit/force-gravity.test.mjs
PASS tests/unit/resource-process.test.mjs
PASS tests/unit/sensorimotor-boundaries.test.mjs
PASS tests/unit/sensorimotor-signals.test.mjs
PASS tests/unit/vector-material.test.mjs
PASS: 22/22 test files passed

AURA v0.4.0 release validation: PASS
Validated 15 required paths, cumulative live links, sensorimotor boundaries, and excluded capabilities.
```

New coverage proves raw signal validity, semantic/API absence, actuator and trial bounds, deterministic consequence learning, accumulating model samples, causal trial chains, exact combined persistence, unchanged 14-part embodiment, no spontaneous creation and browser-entry trial/persistence behaviour. All v0.1–v0.3 regressions remain active.

## v0.4.0 Android real-world acceptance (manual)

Record each as PASS or FAIL with device model, Android version and Chrome version.

1. Open the fixed live link in current Chrome for Android. PASS: it shows **Sensorimotor Development v0.4.0**, 14 body parts, zero trials on fresh state and no permission prompt. FAIL: older version, blank/error page, wrong part count or any permission prompt.
2. Tap **Run actuator trial** once. PASS: tick increases by four, trial count becomes one, and the displayed state contains one learned model with `samples: 1`. FAIL: no model, wrong count, crash or non-finite values.
3. Tap the trial button again. PASS: trial count becomes two and the matching model reports `samples: 2`. FAIL: the model resets, duplicates under another key or adds scripted skill labels.
4. Close Chrome fully and reopen. PASS: world, 14-part body, both trials and learned model restore exactly. FAIL: any layer resets or corrupts.
5. Reload five times. PASS: no duplicate genesis, body parts or trials appear. FAIL: spontaneous state creation.
6. Leave an older AURA tab open during deployment, then open a new AURA tab after GitHub Pages updates. PASS: v0.4 appears after a normal refresh because navigation is network-first and the new worker activates immediately. FAIL: an older release remains indefinitely.
7. After one online load, test airplane mode. PASS: the full v0.4 runtime opens from cache. A first-ever offline visit may fail and is not a kernel failure.
8. Tap **Reset local world**. PASS: only AURA v0.4 local state resets to one fresh body and zero trials. FAIL: reset fails or affects unrelated browser data.

Autonomous exploration, action choice, walking, balance, visual humanoid rendering, perception, WebXR, camera, microphone, GPS and cognition are **not applicable** to v0.4.0.

## v0.3.0 automatic result

Executed on 2026-09-01 with Node.js in the release workspace. Exact result:

```text
PASS tests/integration/browser-entry-smoke.test.mjs
PASS tests/integration/construction-causality.test.mjs
PASS tests/integration/determinism-collision.test.mjs
PASS tests/integration/embodiment-damage.test.mjs
PASS tests/integration/embodiment-determinism.test.mjs
PASS tests/integration/embodiment-persistence.test.mjs
PASS tests/integration/persistence-mid-simulation.test.mjs
PASS tests/regression/no-spontaneous-creation.test.mjs
PASS tests/regression/v0.1-invariants.test.mjs
PASS tests/regression/v0.2-world-with-embodiment.test.mjs
PASS tests/unit/actuator-boundary.test.mjs
PASS tests/unit/damage-degradation.test.mjs
PASS tests/unit/embodiment-blueprint.test.mjs
PASS tests/unit/force-gravity.test.mjs
PASS tests/unit/resource-process.test.mjs
PASS tests/unit/vector-material.test.mjs
PASS: 16/16 test files passed

AURA v0.3.0 release validation: PASS
Validated 13 required paths, cumulative live links, embodiment boundaries, and excluded capabilities.
```

New coverage proves sex-characteristic-free topology, unique and valid parent links, absence of scripted motor skills, actuator bounds and causal logging, deterministic embodiment trajectories, local part damage/raw integrity sensing, joint/body conservation, and exact combined World + Embodiment snapshot/restore. All v0.1 and v0.2 regression coverage remains active.

## v0.3.0 Android real-world acceptance (manual)

Record each as PASS or FAIL with device model, Android version and Chrome version.

1. Open the fixed live link in current Chrome for Android. PASS: it shows **Embodiment Kernel v0.3.0**, 14 body parts and no permission prompt. FAIL: older release, wrong part count, blank/error page, or camera/microphone/location/XR prompt.
2. Tap **Step 1 tick**. PASS: tick increases once; causal events include joint evaluation, forces, integration and sensor samples. Values remain finite. FAIL: missing event categories, `NaN`/infinite values, or crash.
3. Tap **Step 60 ticks**. PASS: the body evolves under gravity/constraints without spontaneous extra/missing parts. Physical instability is a FAIL only if values become non-finite or the runtime crashes; learned standing is intentionally absent.
4. Close Chrome fully and reopen the link. PASS: tick, all 14 parts, joint commands and causal history restore. FAIL: state resets or corrupts.
5. Reload five times. PASS: exactly one `embodiment.created` genesis event remains and the body is not duplicated. FAIL: repeated genesis or changed saved state.
6. After one online load, test airplane mode. PASS: the full v0.3 runtime opens from cache. A first-ever offline visit may fail and is not a kernel failure.
7. Tap **Reset local world**. PASS: only AURA v0.3 local state resets and one fresh 14-part body appears. FAIL: reset fails or affects unrelated browser data.

Humanoid rendering/appearance, WebXR, camera, microphone, GPS, cognition, autonomous movement and sensorimotor learning are **not applicable** to v0.3.0.

## v0.2.0 automatic result

Executed on 2026-09-01 with Node.js in the release workspace. Exact result:

```text
PASS tests/integration/construction-causality.test.mjs
PASS tests/integration/determinism-collision.test.mjs
PASS tests/integration/persistence-mid-simulation.test.mjs
PASS tests/regression/no-spontaneous-creation.test.mjs
PASS tests/regression/v0.1-invariants.test.mjs
PASS tests/unit/damage-degradation.test.mjs
PASS tests/unit/force-gravity.test.mjs
PASS tests/unit/resource-process.test.mjs
PASS tests/unit/vector-material.test.mjs
PASS: 9/9 test files passed

AURA v0.2.0 release validation: PASS
Validated 10 required paths, cumulative live links, and runtime boundaries.
```

Coverage includes repeat determinism, force/mass integration, gravity, deterministic collisions, material damage and degradation, no spontaneous bodies/resources, construction conservation, process loss accounting, causal references and hash-chain integrity, mid-simulation snapshot/restore, and v0.1 state/time/entity/randomness/persistence invariants.

## Android real-world acceptance (manual)

These are the only tests not software-verifiable here. Record each as PASS or FAIL with device model, Android version and Chrome version.

1. Open the fixed live link in current Chrome for Android. PASS: page loads over HTTPS, identifies v0.2.0, shows one body and no permission prompt. FAIL: blank/error page, older version, or any camera/microphone/location/XR prompt.
2. Tap **Step 1 tick**. PASS: tick and event count increase once; `origin-body` position/velocity change under gravity. FAIL: no change, non-finite values, or crash.
3. Tap **Step 60 ticks**, note tick and body position, close the tab/app fully, then reopen the link. PASS: saved tick/state return exactly. FAIL: reset or corrupted state.
4. Reload five times. PASS: state remains stable and no duplicate `body.created` event appears. FAIL: spontaneous body/resource creation or changed saved values.
5. Enable airplane mode after one successful load and reopen if the service worker has installed. PASS: shell opens from cache (persistence remains local). A first-ever offline visit may fail and is not a kernel failure.
6. Tap **Reset local world**. PASS: only local v0.2.0 world data resets and a fresh origin world appears. FAIL: reset does nothing or affects unrelated browser data.

WebXR, tracking, camera, microphone, GPS, cognition, network and humanoid tests are **not applicable** to v0.2.0 because those capabilities are intentionally absent.

## Earlier baselines

v0.0.1 documentation validator: 15 documents / 11 core rules passed. v0.1.0: 29 required paths passed and 6/6 Synthetic Kernel test files passed. Their invariants remain represented in the v0.2 regression suite.
