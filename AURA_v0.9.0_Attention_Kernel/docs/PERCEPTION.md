# Perception Kernel v0.5.0

`WORLD_STATE` is authoritative and objective. `PERCEIVED_STATE` is a bounded sensor product and never an alternate serialization of the world database.

The synthetic observer originates at an existing embodiment part. Generic world bodies belonging to the observer are excluded from exteroception. Remaining bodies are considered in stable objective order internally, filtered by configured range, and rejected when another external spherical body intersects the line segment to the target.

Visible bodies receive opaque `track-N` identifiers. Objective IDs never cross the returned perception boundary. Measurements contain noisy relative position, noisy distance, apparent angular-radius proxy and stated uncertainty. The seeded measurement generator is separate and snapshot-capable, making imperfection reproducible.

The returned state excludes material, mass, force, acceleration, exact position, integrity, resource state, static/dynamic status, causality internals and Observatory. Absence from an observation does not imply absence from the world.

Observations are explicitly requested by the laboratory in v0.5. They are not automatically attended to, interpreted, remembered or believed. Those are later research layers and must not receive hidden access to `WORLD_STATE`.
