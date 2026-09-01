# AURA Testing — cumulative release record

Live Android test: https://gasvdv-lab.github.io/AURA/

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
