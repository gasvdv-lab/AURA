# Belief & Hypothesis Kernel v0.7.0

De kernel ontvangt uitsluitend gevalideerde `PERCEIVED_STATE` of expliciet opgevraagde geheugenresultaten. Hij heeft geen toegang tot `WORLD_STATE`, Observatory of een waarheidsfunctie.

Een belief is een evidenceverzameling over één perceptuele track en een generieke predicate: aanwezigheid, afstand, relatieve positie of schijnbare grootte. Confidence drukt het gewicht en de toegankelijkheid van evidence uit, niet de kans dat de claim objectief waar is.

Metingen binnen de conflicttolerantie worden deterministisch gemiddeld. Sterk afwijkende evidence blijft als alternatief bestaan en maakt de belief `contested`. Zonder nieuwe evidence neemt confidence af; na de ingestelde tijd wordt de status `stale`.

Een hypothese bevat subject-track, predicate, verwachte waarde en tolerantie. Nieuwe perceptie kan `support`, `contradiction` of `unknown` opleveren. Ondersteuning plus tegenspraak geeft status `contested`. De kernel kan niet zelfstandig bepalen welke claim werkelijk waar is.

Hypotheses worden in v0.7 alleen door het onderzoekslaboratorium voorgesteld. Er is geen autonome hypothesevorming, taal, betekenisinterpretatie, planning, doel of AI-model.
