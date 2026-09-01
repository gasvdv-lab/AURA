# Sensorimotor Development v0.4.0

The Sensorimotor Kernel creates objective, reproducible evidence about low-level action consequences. It does not decide which action should occur and does not judge an outcome.

A laboratory trial captures raw body signals, applies one normalized joint-actuator command for an explicit number of fixed ticks, clears the command, captures signals again, and records the delta. Signals include part position, velocity, integrity or absence plus center of mass, mean velocity, scalar speed and current physical contact count.

Effect models are keyed by actuator ID and exact normalized command. They contain sample count and incremental means of center-of-mass, velocity, speed and contact deltas. This representation makes no claim that AURA understands those relationships. There are no rewards, goals, preferred poses, task labels or action semantics.

Every trial start, actuator command, joint force, world integration, raw sample and consequence record is causally logged. Trials and models are snapshot-compatible. Identical initial state and input sequence must yield identical evidence.

Automatic exploration and action selection are intentionally absent. Introducing either would require a later explicit autonomy design gate rather than being smuggled into sensorimotor learning.
