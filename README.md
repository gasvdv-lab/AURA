# AURA v0.8.2 — Reasoning Policy

Live Android-test: https://gasvdv-lab.github.io/AURA/

v0.8.2 staat rekenen, logica, vergelijking, samenvatting en afleiding over de gebruikersvraag en gecontroleerde context expliciet toe. Een berekend resultaat, zoals `3 × 50 = 150`, mag worden gegeven maar mag nooit als waargenomen wereldfeit worden voorgesteld. Onbeschikbare massa, materiaalwaarden of andere verborgen WORLD_STATE-informatie moeten nog steeds worden geweigerd.

Gemini en Groq gebruiken dezelfde policy. Modeltools, directe wereldacties en objectieve wereldtoegang blijven uitgesloten.

## Cumulatief behouden uit v0.8.1

# AURA v0.8.1 — Bedieningsfix en Gemini/Groq

Live Android-test: https://gasvdv-lab.github.io/AURA/

Deze correctierelease maakt de knopvolgorde begrijpelijk en gebruikt **Gemini als primaire provider** en **Groq als tweede provider/fallback**. De veilige brugtest werkt zonder sleutel. Voor echte AI dubbelklik je op `server/start-aura-ai.cmd`; de sleutel wordt alleen tijdelijk gebruikt en nooit opgeslagen.

Belangrijkste fixes: zichtbare redenen bij uitgeschakelde knoppen, juiste telling van tijdelijke en geconsolideerde geheugenitems, een nieuwe-hypotheseknop, begrijpelijke AI-fouten en een vooraf ingevuld lokaal relay-adres. Alleen gecontroleerde context en tekst gaan naar de provider; geen WORLD_STATE, tools of wereldacties.

## Cumulatieve geschiedenis: v0.8.0

# AURA v0.8.0 — Foundation Model Bridge

AURA is een Android-first onderzoeksruntime voor een persistente, objectieve synthetische werkelijkheid. v0.8.0 is de eerste release met een echte AI-modelkoppeling, veilig gescheiden van de statische GitHub Pages-app door een vertrouwde server-side relay.

Live Android test: https://gasvdv-lab.github.io/AURA/

## Run

Publish the repository root through GitHub Pages, or serve it with any static HTTPS server. `index.html` is in the root. There is no mandatory bundler, dependency install, or production build.

For automatic validation, Node.js 20+ is sufficient:

```text
npm test
npm run validate
```

## Nieuw in v0.8.0

- Whitelist-context uit huidige perceptie, maximaal vijf opgevraagde herinneringen, maximaal twintig beliefs en maximaal tien hypotheses.
- Actieve weigering van `WORLD_STATE`, Observatory, massa, materiaal, krachten, integriteit en interne body-ID's.
- Deterministische testprovider voor volledig automatische brugtests zonder netwerk of kosten.
- Relayprovider voor echte modeltekst via HTTPS of localhost.
- Historische v0.8.0-relay (in v0.8.1 volledig vervangen door Gemini/Groq).
- Geen API-sleutel in browsercode, opslag of ZIP.
- `store: false`, lege toolslijst en maximaal 400 outputtokens in de referentierelay.
- Modeltekst wordt alleen gelogd; ze verandert wereld, lichaam, geheugen of beliefs niet automatisch.
- Exact snapshot/herstel van modelaanvraaggeschiedenis.

De statische app werkt volledig zonder AI-relay. Voor een live AI-antwoord moet je de optionele relay uit `server/` afzonderlijk uitvoeren en configureren.

## Behouden uit v0.7.0

- Beliefs over aanwezigheid, afstand, relatieve positie en schijnbare grootte.
- Meerdere alternatieven bij werkelijk tegenstrijdige evidence.
- Confidence als evidencegewicht, nooit als verborgen waarheidsscore.
- Veroudering en afnemende confidence zonder nieuwe evidence.
- Hypotheses met expliciete verwachting en tolerantie.
- Uitkomsten `support`, `contradiction` en `unknown`.
- Statussen `undetermined`, `supported`, `contradicted` en `contested`.
- Evidence uit zowel actuele percepties als bereikbare herinneringen.
- Exact snapshot/herstel en volledige causale registratie.

Er is nog geen aandacht, autonoom handelen, modeltool, internettoegang, semantische wereldactie of autonome hypothesevorming.

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
