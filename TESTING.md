# AURA-testplan — cumulatief en volledig Nederlandstalig

Vaste live Android-test: https://gasvdv-lab.github.io/AURA/

Vanaf v0.6.0 worden alle testinstructies, verwachte resultaten en mislukcriteria in het Nederlands bijgehouden. Technische bestandsnamen en de letterlijke automatische uitvoer blijven onvertaald zodat resultaten exact vergelijkbaar zijn.

## Automatisch resultaat v0.8.0

Uitgevoerd op 2 september 2026 zonder echte API-sleutel of betaalde modelaanroep:

```text
PASS tests/integration/belief-contradiction.test.mjs
PASS tests/integration/belief-from-memory.test.mjs
PASS tests/integration/belief-persistence-determinism.test.mjs
PASS tests/integration/browser-entry-smoke.test.mjs
PASS tests/integration/construction-causality.test.mjs
PASS tests/integration/determinism-collision.test.mjs
PASS tests/integration/embodiment-damage.test.mjs
PASS tests/integration/embodiment-determinism.test.mjs
PASS tests/integration/embodiment-persistence.test.mjs
PASS tests/integration/foundation-bridge.test.mjs
PASS tests/integration/foundation-persistence.test.mjs
PASS tests/integration/foundation-security.test.mjs
PASS tests/integration/hypothesis-evidence.test.mjs
PASS tests/integration/memory-consolidation-retrieval.test.mjs
PASS tests/integration/memory-delayed-encoding.test.mjs
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
PASS tests/regression/v0.6-memory-with-beliefs.test.mjs
PASS tests/regression/v0.7-beliefs-with-foundation.test.mjs
PASS tests/unit/actuator-boundary.test.mjs
PASS tests/unit/belief-boundary.test.mjs
PASS tests/unit/belief-staleness.test.mjs
PASS tests/unit/damage-degradation.test.mjs
PASS tests/unit/embodiment-blueprint.test.mjs
PASS tests/unit/force-gravity.test.mjs
PASS tests/unit/foundation-context-boundary.test.mjs
PASS tests/unit/memory-boundary.test.mjs
PASS tests/unit/memory-capacity.test.mjs
PASS tests/unit/memory-decay-forgetting.test.mjs
PASS tests/unit/perception-boundary.test.mjs
PASS tests/unit/perception-range.test.mjs
PASS tests/unit/relay-provider.test.mjs
PASS tests/unit/resource-process.test.mjs
PASS tests/unit/sensorimotor-boundaries.test.mjs
PASS tests/unit/sensorimotor-signals.test.mjs
PASS tests/unit/vector-material.test.mjs
PASS: 50/50 test files passed

AURA v0.8.0 release validation: PASS
Validated 26 required paths, controlled model context, relay isolation, Dutch testing documentation, and excluded capabilities.
```

## Handmatige praktijktest v0.8.0 zonder echte AI

1. Open v0.8.0 en reset de lokale state.
2. Klik **Waarnemen** en **Beliefs bijwerken**.
3. Klik **Gecontroleerde context samenstellen**.
4. Controleer `controlledModelContext`.

**GESLAAGD:** context bevat alleen schema, begrensde perceptie, geselecteerde herinneringen, beliefs, hypotheses en `produce-text-response`. Verboden zijn `objectiveWorld`, Observatory, massa, materiaal, krachten, integriteit, interne body-ID's, internettools en wereldacties.

5. Klik **Deterministische brugtest**.

**GESLAAGD:** feedback toont `CONTEXT_OK`, modelantwoorden wordt 1 en de wereldstate blijft inhoudelijk gelijk. Deze testprovider is nadrukkelijk geen AI en kost niets.

## Handmatige live-AI-test via lokale relay

1. Volg `server/README.md` en start de relay in een afzonderlijke terminal met je eigen `OPENAI_API_KEY`, beschikbaar model en `AURA_ORIGIN=http://127.0.0.1:5500`.
2. Voer de API-sleutel nooit in de AURA-pagina in.
3. Vul als relay-endpoint `http://127.0.0.1:8787/v1/aura/respond` in.
4. Vul een herkenbare modelnaam in; de relay gebruikt veilig zijn eigen serverconfiguratie.
5. Stel opnieuw gecontroleerde context samen.
6. Vul optioneel een korte modelinvoer in.
7. Klik **Live AI via relay**.

**GESLAAGD:** er verschijnt een tekstantwoord met modelnaam; Observatory bevat `foundation-model.requested` en `foundation-model.responded`; geen wereldbody, resource, herinnering of belief wordt door de tekst gewijzigd.

**MISLUKT:** API-sleutel verschijnt in browseropslag/netwerkpayload, browser roept rechtstreeks `api.openai.com` aan, model krijgt objectieve wereldstate, tools zijn beschikbaar, modeltekst verandert runtime-state, CORS accepteert een verkeerde origin of een fout blijft onzichtbaar.

Een echte live-AI-aanroep kon niet automatisch worden uitgevoerd omdat deze release bewust geen gebruikers-API-sleutel bevat. Kosten, accounttoegang, modelbeschikbaarheid, relayhosting en echte netwerkverbinding blijven daarom handmatig.

Niet van toepassing: autonome aandacht, autonoom handelen, modeltools, camera, microfoon, GPS, WebXR, Synthetic Network en Human Internet.

### Resultatenformulier v0.8.0

```text
Apparaat:
Besturingssysteem:
Browser en versie:
Relay lokaal/publiek:
Gebruikt model:
Datum:

1. Context samenstellen: GESLAAGD / MISLUKT
2. Contextfirewall: GESLAAGD / MISLUKT
3. Deterministische brugtest: GESLAAGD / MISLUKT
4. Relay start: GESLAAGD / MISLUKT
5. Live AI-antwoord: GESLAAGD / MISLUKT
6. Geen browsergeheim: GESLAAGD / MISLUKT
7. Geen tools/agency: GESLAAGD / MISLUKT
8. Causale logging: GESLAAGD / MISLUKT
9. State blijft onveranderd: GESLAAGD / MISLUKT

Opmerkingen:
```

---

## Historisch testplan v0.7.0

## Automatisch resultaat v0.7.0

Uitgevoerd op 2 september 2026 met Node.js in de releasewerkruimte:

```text
PASS tests/integration/belief-contradiction.test.mjs
PASS tests/integration/belief-from-memory.test.mjs
PASS tests/integration/belief-persistence-determinism.test.mjs
PASS tests/integration/browser-entry-smoke.test.mjs
PASS tests/integration/construction-causality.test.mjs
PASS tests/integration/determinism-collision.test.mjs
PASS tests/integration/embodiment-damage.test.mjs
PASS tests/integration/embodiment-determinism.test.mjs
PASS tests/integration/embodiment-persistence.test.mjs
PASS tests/integration/hypothesis-evidence.test.mjs
PASS tests/integration/memory-consolidation-retrieval.test.mjs
PASS tests/integration/memory-delayed-encoding.test.mjs
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
PASS tests/regression/v0.6-memory-with-beliefs.test.mjs
PASS tests/unit/actuator-boundary.test.mjs
PASS tests/unit/belief-boundary.test.mjs
PASS tests/unit/belief-staleness.test.mjs
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
PASS: 44/44 test files passed

AURA v0.7.0 release validation: PASS
Validated 20 required paths, belief boundaries, hypothesis evidence, Dutch testing documentation, and excluded capabilities.
```

## Handmatige praktijktest v0.7.0

1. Open v0.7.0 en klik **Lokale wereld resetten**.
2. Controleer dat er 0 beliefs en 0 hypotheses zijn en dat de drie nieuwe beliefknoppen uitgeschakeld zijn.
3. Klik **Waarnemen**. **GESLAAGD:** `Beliefs bijwerken` wordt actief; hypotheseknoppen blijven uitgeschakeld.
4. Klik **Beliefs bijwerken**. **GESLAAGD:** de status toont 4 beliefs en de feedback meldt 4 bijgewerkte belief-ID's.
5. Inspecteer `beliefState`. **GESLAAGD:** alleen `presence`, `distance`, `relative-position` en `apparent-radius` bestaan; objectieve ID, massa, materiaal, integriteit en Observatory ontbreken.
6. Klik **Afstandshypothese voorstellen**. **GESLAAGD:** één `hypothesis-1` ontstaat met track-1, predicate `distance`, een gemeten verwachting, tolerantie 0,25 en status `undetermined`.
7. Klik **Hypothese toetsen**. **GESLAAGD:** feedback toont `support`, `contradiction` of `unknown`, plus status en confidence; dezelfde waarneming kan niet nogmaals worden gebruikt.
8. Klik opnieuw **Waarnemen**. **GESLAAGD:** de toetsknop wordt opnieuw actief voor nieuwe evidence.
9. Sla een waarneming op en klik **Track-1 opvragen**. **GESLAAGD:** de feedback vermeldt dat belief-ID's geheugenevidence kregen; provenance bevat type `memory`.
10. Klik **60 ticks vooruit** en inspecteer beliefs. **GESLAAGD:** confidence neemt deterministisch af; na voldoende tijd wordt status `stale` zonder automatische claim dat de belief fout is.
11. Sluit browser en heropen. **GESLAAGD:** beliefs, alternatieven, hypotheses, evidence en alle oudere kernelstate herstellen exact.
12. Vernieuw vijfmaal. **GESLAAGD:** niets dupliceert of verdwijnt spontaan.

**MISLUKT** is elke objectieve wereldlekkage, onverklaarde dubbele evidence, `NaN`/`Infinity`, stille knop, crash, stateverlies of een belief die als objectieve waarheid wordt aangeduid.

Niet van toepassing: taalmodel/AI, autonoom beliefvormen, autonome hypotheses, aandacht, doelen, emoties, WebXR, camera, microfoon, GPS en internet.

### Resultatenformulier v0.7.0

```text
Apparaat:
Besturingssysteem:
Browser en versie:
Datum:

1. Opstarten/reset: GESLAAGD / MISLUKT
2. Initiële knopvoorwaarden: GESLAAGD / MISLUKT
3. Waarneming: GESLAAGD / MISLUKT
4. Vier beliefs: GESLAAGD / MISLUKT
5. Beliefgrens: GESLAAGD / MISLUKT
6. Hypothese voorstellen: GESLAAGD / MISLUKT
7. Hypothese toetsen: GESLAAGD / MISLUKT
8. Nieuwe evidence: GESLAAGD / MISLUKT
9. Geheugenevidence: GESLAAGD / MISLUKT
10. Veroudering: GESLAAGD / MISLUKT
11. Opslaan/herstellen: GESLAAGD / MISLUKT
12. Vijfmaal vernieuwen: GESLAAGD / MISLUKT

Opmerkingen:
```

---

## Historisch testplan v0.6.1

## Automatisch resultaat v0.6.1

Uitgevoerd op 2 september 2026 met Node.js in de releasewerkruimte:

```text
PASS tests/integration/browser-entry-smoke.test.mjs
PASS tests/integration/construction-causality.test.mjs
PASS tests/integration/determinism-collision.test.mjs
PASS tests/integration/embodiment-damage.test.mjs
PASS tests/integration/embodiment-determinism.test.mjs
PASS tests/integration/embodiment-persistence.test.mjs
PASS tests/integration/memory-consolidation-retrieval.test.mjs
PASS tests/integration/memory-delayed-encoding.test.mjs
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
PASS: 37/37 test files passed

AURA v0.6.1 release validation: PASS
Validated 18 required paths, button feedback, delayed memory encoding, Dutch testing documentation, and excluded capabilities.
```

De tests bewijzen daarnaast vertraagde opslag van oudere waarnemingen, veilige knopvoorwaarden, zichtbare Nederlandstalige feedback, resetbevestiging en behoud van alle invarianten uit v0.1 tot en met v0.6.0.

## Voorbereiding voor handmatige tests

1. Open AURA v0.6.1 via Live Server of de vaste live-link.
2. Sluit oudere AURA-tabbladen.
3. Klik voor een volledig nieuwe proef op **Lokale wereld resetten**.
4. Controleer dat bovenaan **Memory Kernel v0.6.1** staat.
5. Noteer laptopmodel, besturingssysteem, browser en browserversie.

## Test 1 — Opstarten

Controleer titel, status en knoppen.

**GESLAAGD:** v0.6.1 verschijnt, 14 lichaamsdelen zijn aanwezig, er zijn 0 percepties, 0 sporen en 0 geconsolideerde herinneringen, en er verschijnt geen hardwaretoestemming. De opslag- en opvraagknoppen zijn aanvankelijk zichtbaar uitgeschakeld.

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

## Test 3B — Vertraagde opslag

1. Klik **Waarnemen**.
2. Klik daarna **60 ticks vooruit**.
3. Klik vervolgens **Laatste waarneming opslaan**.

**GESLAAGD:** de knop werkt, de feedback meldt `trace-1` en 60 ticks coderingsvertraging, en het spoor bewaart `sourceTick: 0`, `createdTick: 60` en `encodingDelay: 60`.

**MISLUKT:** de knop lijkt niets te doen, toont een tijdsfout of maakt geen spoor.

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
AURA v0.6.1 — handmatige praktijktest

Apparaat:
Besturingssysteem:
Browser en versie:
Datum:

1. Opstarten: GESLAAGD / MISLUKT
2. Waarneembaar spoor: GESLAAGD / MISLUKT
3. Geheugengrens: GESLAAGD / MISLUKT
3B. Vertraagde opslag: GESLAAGD / MISLUKT
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
- v0.6.1: 37/37 testbestanden geslaagd.
- v0.7.0: 44/44 testbestanden geslaagd.
- v0.8.0: 50/50 testbestanden geslaagd; echte AI-relaytest handmatig wegens ontbrekende gebruikerscredential.
