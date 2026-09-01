# Embodiment Kernel v0.3.0

The embodiment layer maps an abstract humanoid blueprint onto generic World Kernel bodies. The blueprint has 14 parts and 13 parent-child joints. It describes topology and physical capability only.

Each joint stores a rest distance, stiffness, damping, maximum force and command in `[-1, 1]`. On each fixed tick, it deterministically applies paired forces to its connected bodies before the World Kernel integrates. This is a deliberately minimal distance constraint—not a skeletal renderer or biological anatomy simulation.

One low-level actuator corresponds to each joint. Commands contain no task semantics. No gait, pose, reflex, balance, handedness or skill is preloaded. Commands originate only from laboratory tests in this release.

Raw sensors sample every part's position, velocity, integrity or absence. These samples remain objective signals. `PERCEIVED_STATE`, proprioceptive interpretation, pain and learning do not exist yet.

Embodiment definitions and command state are snapshot-compatible. Physical part state and all causal effects remain in `WORLD_STATE` and Observatory.
