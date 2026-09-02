# Attention Kernel — v0.9.0

De Attention Kernel begrenst hoeveel percepties, herinneringen, beliefs en hypotheses tegelijk naar gecontroleerde modelcontext mogen. Selectie is deterministisch: hoogste expliciete evidenceprioriteit eerst, daarna een stabiele sortering. De standaardcapaciteit is vier items.

De kernel heeft geen nieuwsgierigheid, beloning, engagementdoel, emotie, autonome actie of toegang tot `WORLD_STATE`. Aandacht creëert geen kennis; zij bepaalt uitsluitend welke reeds toegestane evidence in de volgende context aanwezig is.

Iedere selectie en reset wordt causaal gelogd en exact in snapshots bewaard.
