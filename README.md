# AURA v0.7.0 — Belief & Hypothesis Kernel

AURA is een Android-first onderzoeksruntime voor een persistente, objectieve synthetische werkelijkheid. v0.7.0 behoudt alle eerdere kernels en voegt beliefs en hypotheses toe die uitsluitend uit begrensde perceptie en geheugen-evidence ontstaan.

Live Android test: https://gasvdv-lab.github.io/AURA/

## Run

Publish the repository root through GitHub Pages, or serve it with any static HTTPS server. `index.html` is in the root. There is no mandatory bundler, dependency install, or production build.

For automatic validation, Node.js 20+ is sufficient:

```text
npm test
npm run validate
```

## Nieuw in v0.7.0

- Beliefs over aanwezigheid, afstand, relatieve positie en schijnbare grootte.
- Meerdere alternatieven bij werkelijk tegenstrijdige evidence.
- Confidence als evidencegewicht, nooit als verborgen waarheidsscore.
- Veroudering en afnemende confidence zonder nieuwe evidence.
- Hypotheses met expliciete verwachting en tolerantie.
- Uitkomsten `support`, `contradiction` en `unknown`.
- Statussen `undetermined`, `supported`, `contradicted` en `contested`.
- Evidence uit zowel actuele percepties als bereikbare herinneringen.
- Exact snapshot/herstel en volledige causale registratie.

Er is nog geen taalmodel, begrip, semantische wereldkennis of autonome hypothesevorming.

## Behouden herstellingen uit v0.6.1

- Een oudere waarneming kan na verstreken simulatietijd nog veilig worden opgeslagen.
- Bronmoment, opslagmoment en coderingsvertraging blijven afzonderlijk bewaard.
- Iedere knop geeft een duidelijke Nederlandstalige resultaat- of foutmelding.
- Actuatorproeven en causale gebeurtenissen staan opnieuw zichtbaar in de status.
- Opslaan en opvragen zijn uitgeschakeld zolang hun voorwaarden ontbreken.
- De reset vraagt eerst bevestiging.
- Bestaande lokale v0.6.0-state wordt automatisch ingelezen en naar v0.6.1 bewaard.

## Cumulatief bereik van v0.6

Cumulatief inbegrepen: objectieve wereldfysica, causale Observatory, embodiment, sensorimotorisch bewijs, begrensde perceptie en een Memory Kernel met tijdelijke sensorische sporen, deterministische consolidatie, opvraging, toegankelijkheid, capaciteitslimieten, verzwakking en vergeten.

Alleen geldige percepties mogen worden opgeslagen. Objectieve wereldvelden, Observatory, chatgeschiedenis en rechtstreekse databasedumps worden geweigerd. Een herinnering bewaart een eerdere onvolmaakte waarneming en is dus geen waarheid. Er zijn nog geen beliefs, interpretatie, cognitie/LLM, autonome handelingen, humanoid-rendering, WebXR, camera, microfoon, GPS, Synthetic Network of Human Internet.

Live Android-test: https://gasvdv-lab.github.io/AURA/

De service worker blijft netwerk-eerst navigeren en onmiddellijk activeren, zodat GitHub Pages-upgrades niet verborgen blijven achter oudere caches.

The browser interface is an Observatory-facing laboratory view, not AURA perception. AURA has no access to it.
