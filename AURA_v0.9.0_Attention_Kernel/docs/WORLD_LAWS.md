# World Laws v0.2

Space is Cartesian 3D. Time advances only in integer ticks of a configured positive fixed delta. Dynamic spherical bodies have positive mass/radius, position, velocity, acceleration, accumulated force, material and integrity. Integration is deterministic semi-implicit Euler: acceleration equals gravity plus force/mass; velocity updates before position. Forces clear after each tick.

Collisions use stable body-ID order, positional separation and a normal impulse with the lower material restitution. Zero-distance contact uses a fixed +X normal. Values are rounded at deterministic state boundaries to suppress platform drift.

Materials are registry data, not named world objects. Damage is scaled by toughness; exposure uses degradation rate. Integrity zero causes causally linked destruction.

Resources are quantified generic types. Construction consumes declared inputs before body creation. Transformations may produce an explicitly logged loss. The kernel has no background generator, semantic recipes, energy fiction, or spontaneous creation.
