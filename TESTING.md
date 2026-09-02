# AURA-testplan — cumulatief en volledig Nederlandstalig

Vaste live Android-test: https://gasvdv-lab.github.io/AURA/

Vanaf v0.6.0 worden alle testinstructies, verwachte resultaten en mislukcriteria in het Nederlands bijgehouden. Technische bestandsnamen en de letterlijke automatische uitvoer blijven onvertaald zodat resultaten exact vergelijkbaar zijn.

## Automatisch resultaat v0.6.0

Uitgevoerd op 2 september 2026 met Node.js in de releasewerkruimte:

```text
PASS tests/integration/browser-entry-smoke.test.mjs
PASS tests/integration/construction-causality.test.mjs
PASS tests/integration/determinism-collision.test.mjs
PASS tests/integration/embodiment-damage.test.mjs
PASS tests/integration/embodiment-determinism.test.mjs
PASS tests/integration/embodiment-persistence.test.mjs
PASS tests/integration/memory-consolidation-retrieval.test.mjs
PASS tests/integration/memory-determinism.test.mjs
PASS tests/integration/memory-persistence.test.mjs
PASS tests/integration/perception-determinism.test.mjs
PASS tests/integration/perception-occlusion.test.mjs
PASS tests/integration/perception-persistence.test.mjs
PASS tests/integration/perception-tracking-causality.test.mjs
PASS tests/integration/persistence-mid-simulation.test.mjs
PASS tests/integration/sensorimotor-determinism.test.mjs
PASS tests/integration/sensorimotor-learning.test.mjs
PASS tests/integration/sensorimotor-persistence.test.mjs
PASS tests/regression/no-spontaneous-creation.test.mjs
PASS tests/regression/v0.1-invariants.test.mjs
PASS tests/regression/v0.2-world-with-embodiment.test.mjs
PASS tests/regression/v0.3-embodiment-with-learning.test.mjs
PASS tests/regression/v0.4-sensorimotor-with-perception.test.mjs
PASS tests/regression/v0.5-perception-with-memory.test.mjs
PASS tests/unit/actuator-boundary.test.mjs
PASS tests/unit/damage-degradation.test.mjs
PASS tests/unit/embodiment-blueprint.test.mjs
PASS tests/unit/force-gravity.test.mjs
PASS tests/unit/memory-boundary.test.mjs
PASS tests/unit/memory-capacity.test.mjs
PASS tests/unit/memory-decay-forgetting.test.mjs
PASS tests/unit/perception-boundary.test.mjs
PASS tests/unit/perception-range.test.mjs
PASS tests/unit/resource-process.test.mjs
PASS tests/unit/sensorimotor-boundaries.test.mjs
PASS tests/unit/sensorimotor-signals.test.mjs
PASS tests/unit/vector-material.test.mjs
PASS: 36/36 test files passed

AURA v0.6.0 release validation: PASS
Validated 18 required paths, cumulative live links, memory boundaries, Dutch testing documentation, and excluded capabilities.
```

De nieuwe tests bewijzen invoerafscherming, tijdelijke sporen, deterministische opvraging, consolidatie, verzwakking, vergeetdrempels, capaciteitsvergeten, exact snapshot/herstel en behoud van alle invarianten uit v0.1 tot en met v0.5.

## Voorbereiding voor handmatige tests

1. Open AURA v0.6.0 via Live Server of de vaste live-link.
2. Sluit oudere AURA-tabbladen.
3. Klik voor een volledig nieuwe proef op **Lokale wereld resetten**.
4. Controleer dat bovenaan **Memory Kernel v0.6.0** staat.
5. Noteer laptopmodel, besturingssysteem, browser en browserversie.

## Test 1 — Opstarten

Controleer titel, status en knoppen.

**GESLAAGD:** v0.6.0 verschijnt, 14 lichaamsdelen zijn aanwezig, er zijn 0 percepties, 0 sporen en 0 geconsolideerde herinneringen, en er verschijnt geen hardwaretoestemming.

**MISLUKT:** oudere versie, lege pagina, blijvend `opstarten…`, verkeerd aantal lichaamsdelen, crash of camera-/microfoon-/locatievraag.

## Test 2 — Een waarneembaar spoor maken

1. Klik eenmaal op **Waarnemen**.
2. Controleer dat de perceptieteller 1 wordt.
3. Klik eenmaal op **Laatste waarneming opslaan**.
4. Controleer dat de sporenteller 1 wordt.

**GESLAAGD:** `memoryState.traces` bevat `trace-1`, gekoppeld aan `observation-1`, met sterkte 1 en uitsluitend perceptuele inhoud.

**MISLUKT:** geen spoor, meerdere spontane sporen, een crash of objectieve wereldvelden in het spoor.

## Test 3 — Geheugengrens

Inspecteer `memoryState` en zoek naar verboden informatie.

**GESLAAGD:** geheugen bevat geen `objectiveWorld`, `worldState`, `observatory`, `materialId`, `mass`, `force`, `acceleration`, `integrity`, `static`, `bodyId` of `perception-fixture`.

**MISLUKT:** één van deze objectieve of geprivilegieerde velden staat binnen een spoor of herinnering. Dezelfde velden mogen wel in het afzonderlijke menselijke `objectiveWorld`-gedeelte voorkomen.

## Test 4 — Eerste opvraging

1. Klik eenmaal op **Track-1 opvragen**.
2. Controleer `trace-1`.

**GESLAAGD:** `accessCount` wordt 1, `lastAccessTick` wordt bijgewerkt, toegankelijkheid wordt berekend en er bestaat nog geen geconsolideerde herinnering.

**MISLUKT:** geen resultaat, verkeerde track, onmiddellijke willekeurige consolidatie of een waarheids-/belieflabel.

## Test 5 — Consolidatie

1. Klik een tweede keer op **Track-1 opvragen**.
2. Controleer `memoryState.memories`.

**GESLAAGD:** exact één `memory-1` ontstaat met type `consolidated-memory`, verwijzing naar `trace-1` en dezelfde begrensde perceptuele inhoud. Observatory bevat `memory.consolidated`.

**MISLUKT:** geen consolidatie, meerdere herinneringen uit hetzelfde spoor of nieuwe objectieve informatie in de herinnering.

## Test 6 — Verzwakking door tijd

1. Noteer de sterkte van spoor en herinnering.
2. Klik eenmaal op **60 ticks vooruit**.
3. Vergelijk de nieuwe sterktes.

**GESLAAGD:** het tijdelijke spoor verzwakt sneller dan de geconsolideerde herinnering; tijd stijgt exact 60 ticks; waarden blijven eindig.

**MISLUKT:** sterkte groeit zonder opvraging, tijd verandert verkeerd, `NaN`/`Infinity` verschijnt of wereld-/lichaamsstaat raakt corrupt.

## Test 7 — Werkelijk vergeten

Klik herhaaldelijk op **60 ticks vooruit** en volg de tijdelijke sporen.

**GESLAAGD:** een spoor dat de ingestelde drempel bereikt verdwijnt werkelijk uit `traces`, met een causale `memory.forgotten`-gebeurtenis. Een geconsolideerde herinnering blijft langer bestaan maar is niet permanent gegarandeerd.

**MISLUKT:** een zwak spoor blijft eeuwig actief, verdwijnt zonder loggebeurtenis of verwijdert objectieve wereldobjecten mee.

## Test 8 — Opslaan en herstellen

1. Maak minstens één perceptie, spoor en geconsolideerde herinnering.
2. Noteer tick, sterktes, aantallen en ID's.
3. Sluit het AURA-tabblad en de browser volledig.
4. Open dezelfde URL opnieuw.

**GESLAAGD:** alle genoteerde waarden, ID's en aantallen herstellen exact en verdere opvraging gaat vanaf dezelfde toestand verder.

**MISLUKT:** geheugen reset, ID's veranderen, alleen sommige kernels herstellen of state wordt gedupliceerd.

## Test 9 — Vijfmaal vernieuwen

Vernieuw de pagina vijfmaal met `F5`.

**GESLAAGD:** ticks, wereldobjecten, lichaamsdelen, percepties, sporen en herinneringen blijven gelijk. Er ontstaat geen nieuwe genesis.

**MISLUKT:** spontane of dubbele state, verdwenen geheugen of terugkeer naar een oudere release.

## Test 10 — Offline heropenen

1. Open v0.6.0 minstens eenmaal online.
2. Sluit het tabblad.
3. Schakel wifi uit of gebruik vliegtuigstand.
4. Open dezelfde URL opnieuw.

**GESLAAGD:** de volledige v0.6-interface opent uit cache en lokale geheugenstate blijft beschikbaar. Een allereerste offline bezoek hoeft niet te werken.

**MISLUKT:** een eerder succesvol geladen release kan niet offline openen of toont een oudere versie.

## Test 11 — Volledige lokale reset

Klik **Lokale wereld resetten**.

**GESLAAGD:** tick wordt 0, er zijn 14 lichaamsdelen, één generieke externe testfixture, 0 percepties, 0 sporen en 0 herinneringen. Andere websites blijven onaangetast.

**MISLUKT:** oude geheugenstate blijft bestaan, AURA wordt leeg, genesis dupliceert of gegevens van andere websites verdwijnen.

## Niet van toepassing in v0.6.0

Beliefs, interpretatie, bewustzijn, emoties, AI/LLM, autonome observatie, autonoom handelen, visuele humanoid-rendering, WebXR, camera, microfoon en GPS zijn bewust afwezig en hoeven niet getest te worden.

## Resultatenformulier

```text
AURA v0.6.0 — handmatige praktijktest

Apparaat:
Besturingssysteem:
Browser en versie:
Datum:

1. Opstarten: GESLAAGD / MISLUKT
2. Waarneembaar spoor: GESLAAGD / MISLUKT
3. Geheugengrens: GESLAAGD / MISLUKT
4. Eerste opvraging: GESLAAGD / MISLUKT
5. Consolidatie: GESLAAGD / MISLUKT
6. Verzwakking: GESLAAGD / MISLUKT
7. Vergeten: GESLAAGD / MISLUKT
8. Opslaan en herstellen: GESLAAGD / MISLUKT
9. Vijfmaal vernieuwen: GESLAAGD / MISLUKT
10. Offline heropenen: GESLAAGD / MISLUKT
11. Lokale reset: GESLAAGD / MISLUKT

Opmerkingen:
```

## Historische automatische baselines

- v0.0.1: documentatievalidator geslaagd voor 15 documenten en 11 kernregels.
- v0.1.0: 6/6 Synthetic Kernel-testbestanden geslaagd.
- v0.2.0: 9/9 testbestanden geslaagd.
- v0.3.0: 16/16 testbestanden geslaagd.
- v0.4.0: 22/22 testbestanden geslaagd.
- v0.5.0: 29/29 testbestanden geslaagd.
- v0.6.0: 36/36 testbestanden geslaagd.
