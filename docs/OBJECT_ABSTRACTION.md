# Object-overstijgende abstractie

De `ObjectAbstractionKernel` vertaalt de objectieve wereld naar categorie-onafhankelijke fysieke primitieven. Namen en identifiers worden niet in de abstractie opgenomen en bepalen ook de sortering niet.

De huidige World Kernel gebruikt radiale physical bodies. Daarom beschrijft v0.9.2.2 elk lichaam als een generiek volume met vormfamilie, materiaal, massa, ruimtemaat, omvang en statische toestand. Nabije of overlappende volumes leveren een contactrelatie. De samenvattende signatuur bevat uitsluitend aantallen, materialen, relatietypen, totale massa en totale maat.

Dit script beweert niet dat een verzameling onderdelen een huis, loods, stoel of ander hoog-niveauobject is. Latere leermechanismen kunnen dezelfde abstracties vergelijken om herbruikbare structurele regelmatigheden te ontdekken.
