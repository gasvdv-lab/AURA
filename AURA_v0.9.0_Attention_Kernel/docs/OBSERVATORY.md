# Observatory v0.2

Every record contains sequence, tick, type, payload, cause IDs, previous hash and deterministic hash. Cause IDs must already exist, preventing forward or invented references. Physics integration, collision, damage, resources, processes, construction and destruction all emit facts.

This log records facts, not narrative explanations. A hash chain detects accidental mutation; it is not a cryptographic signature or hostile-storage security boundary. Restore rejects an invalid chain. The human UI may display records, but inhabitants have no reference to or access path into Observatory.
