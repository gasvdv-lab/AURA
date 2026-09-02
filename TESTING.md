# AURA v0.8.1 — actueel en cumulatief testplan

Dit bestand is volledig Nederlandstalig en hoort bij **AURA v0.8.1 — Bedieningsfix en Gemini/Groq**.

Vaste live-link: https://gasvdv-lab.github.io/AURA/

## Exact automatisch testresultaat

Uitgevoerd op 2 september 2026 met Node.js 24.20.0:

- Testbestanden uitgevoerd: **51**
- GESLAAGD: **51**
- MISLUKT: **0**
- Releasevalidatie: **GESLAAGD**
- Vereiste releasepaden gecontroleerd: **28**
- ZIP-inhoud: **123 onderdelen**
- Oude ZIP-bestanden of `sources/` in de release-ZIP: **0**

Samenvattende uitvoer:

```text
PASS: 51/51 test files passed
AURA v0.8.1 release validation: PASS
Validated 28 required paths
```

De automatische tests controleren cumulatief:

- deterministische wereldsimulatie, krachten, zwaartekracht en botsingen;
- schade, degradatie, processen, resources en constructiebehoud;
- causaliteit en geen spontane creatie;
- snapshot/herstel midden in een simulatie;
- embodiment, sensorimotoriek, waarneming en occlusie;
- geheugenopslag, coderingsvertraging, consolidatie, opvraging, capaciteitslimieten, verval en vergeten;
- beliefs, tegenstrijdige evidence, hypothesen en persistentie;
- gecontroleerde AI-context en weigering van objectieve wereldvelden;
- volledige basisvolgorde van de interfaceknoppen;
- zichtbare telling van tijdelijke geheugenitems;
- Nederlandstalige uitleg bij uitgeschakelde knoppen;
- Gemini-request en antwoordverwerking;
- Groq-request en antwoordverwerking;
- geen API-sleutel of `Authorization`-header in browserverkeer;
- correcte browserkoppeling van `fetch`, zodat `Illegal invocation` niet terugkeert;
- regressie van alle invarianten uit v0.1.0 tot en met v0.8.0.

## Wat automatisch niet kan worden bewezen

De volgende onderdelen blijven een handmatige praktijktest:

- echte weergave en aanraking in Android Chrome;
- Live Server op jouw laptop;
- jouw eigen Gemini- of Groq-account en actuele gratis quota;
- internet-, firewall- en CORS-instellingen op jouw laptop;
- verbinding met een echte provider, omdat geen gebruikerssleutel in de release of tests wordt opgenomen;
- GitHub Pages-cache na publicatie.

## Test A — schone start op de laptop

1. Open de AURA-map in Visual Studio Code.
2. Start Live Server.
3. Open de pagina via het adres dat Live Server toont, meestal `http://127.0.0.1:5500`.
4. Klik onderaan op **Alle lokale AURA-state resetten**.
5. Bevestig de reset.

GESLAAGD wanneer:

- bovenaan `v0.8.1` staat;
- de status begint met tick 0;
- er 0 waarnemingen, 0 geheugenitems, 0 beliefs, 0 hypotheses en 0 modelantwoorden zijn;
- onder de knoppen in het Nederlands staat waarom sommige knoppen nog niet beschikbaar zijn;
- er geen toestemming voor camera, microfoon, GPS of andere hardware wordt gevraagd.

MISLUKT wanneer een oudere versie zichtbaar blijft, de pagina leeg is, een rode opstartfout verschijnt of hardwaretoestemming wordt gevraagd.

## Test B — alle simulatie- en bewijsknoppen

Voer deze stappen in deze exacte volgorde uit.

1. Klik **1 tick vooruit**.
   - GESLAAGD: de status toont tick 1 en er verschijnt Nederlandstalige feedback.
2. Klik **60 ticks vooruit**.
   - GESLAAGD: de tick stijgt met 60.
3. Klik **Actuatorproef**.
   - GESLAAGD: de feedback meldt dat actuatorproef 1 geregistreerd is.
4. Klik **Waarnemen**.
   - GESLAAGD: er verschijnt een waarnemings-ID en **Waarneming opslaan** wordt beschikbaar.
5. Klik **Waarneming opslaan**.
   - GESLAAGD: de feedback noemt een tijdelijk geheugenitem en de status toont minimaal `1 geheugenitems`.
6. Klik **Track-1 opvragen**.
   - GESLAAGD: de feedback meldt minstens één geheugenresultaat.
7. Klik **Beliefs bijwerken** als die knop nog beschikbaar is.
   - GESLAAGD: de status toont vier beliefs.
8. Klik **Hypothese voorstellen**.
   - GESLAAGD: de status toont één hypothese.
9. Klik **Hypothese toetsen**.
   - GESLAAGD: de feedback toont een uitkomst en status.
10. Klik **Nieuwe hypothese beginnen**.
    - GESLAAGD: de vorige hypothese wordt afgesloten en **Hypothese voorstellen** wordt opnieuw beschikbaar.

Een donkerdere, uitgeschakelde knop is niet defect wanneer de uitleg eronder duidelijk vermeldt welke eerdere stap ontbreekt of dat de huidige waarneming al verwerkt is.

## Test C — veilige AI-brugtest zonder echte AI

Voor deze test is geen API-sleutel en geen internetverbinding nodig.

1. Zorg dat minimaal één waarneming bestaat.
2. Klik **AI-context voorbereiden**.
3. Controleer dat de feedback meldt hoeveel herinneringen en beliefs voorbereid zijn.
4. Klik **Veilige test zonder echte AI**.

GESLAAGD wanneer:

- de knop na stap 2 beschikbaar wordt;
- de feedback `CONTEXT_OK` bevat;
- het aantal modelantwoorden met één stijgt;
- de wereld, het lichaam, geheugen en beliefs niet door het testantwoord veranderen.

MISLUKT wanneer **AI-context voorbereiden** ontbreekt of na een geldige waarneming niet beschikbaar wordt.

## Test D — echte AI met Gemini of Groq op de laptop

Deze test gebruikt jouw eigen provideraccount. Plaats je API-sleutel nooit in `index.html`, een ander projectbestand, GitHub, de browserpagina of een chatbericht.

1. Open de map `server`.
2. Dubbelklik op `start-aura-ai.cmd`.
3. Typ `1` voor Gemini of `2` voor Groq.
4. Plak je eigen API-sleutel. Tijdens het plakken toont Windows bewust geen tekens.
5. Druk op Enter wanneer Live Server `http://127.0.0.1:5500` gebruikt. Typ anders exact het adres dat Live Server toont, zonder afsluitende schuine streep.
6. Laat het zwarte startervenster open.
7. Ga terug naar AURA.
8. Klik **AI-context voorbereiden**.
9. Open eventueel **Instellingen voor echte AI** en controleer:
   - Provider is Gemini of Groq;
   - Lokale relay is `http://127.0.0.1:8787/v1/aura/respond`;
   - Modelnaam mag leeg blijven.
10. Vul bij **Vraag aan de AI** een korte vraag in.
11. Klik **Echte AI vragen**.

GESLAAGD wanneer een tekstantwoord verschijnt met de gebruikte provider en modelnaam, zonder dat wereldstate automatisch verandert.

MISLUKT wanneer:

- de melding zegt dat de lokale starter niet bereikbaar is;
- origin niet toegestaan is;
- Gemini of Groq een quota-, model- of sleutelfout geeft;
- de API-sleutel zichtbaar wordt in de pagina of browseropslag;
- modeltekst zelfstandig een wereldactie uitvoert.

Bij een fout noteer je de volledige rode melding en of je Gemini of Groq gekozen had. Sluit daarna het startervenster; de tijdelijke sleutel verdwijnt dan uit dat proces.

## Test E — reset

1. Klik **Alle lokale AURA-state resetten**.
2. Kies eerst annuleren.
   - GESLAAGD: de toestand blijft behouden en `Reset geannuleerd` verschijnt.
3. Klik opnieuw en bevestig.
   - GESLAAGD: de pagina herlaadt met een schone toestand op tick 0.

## Test F — Android Chrome via GitHub Pages

1. Publiceer de actuele repositoryroot via GitHub Pages.
2. Open https://gasvdv-lab.github.io/AURA/ in Android Chrome.
3. Als nog een oudere versie verschijnt, sluit het tabblad volledig, open de link opnieuw en wis zo nodig alleen de sitegegevens van AURA.
4. Herhaal Test A, Test B en Test C.
5. Draai het toestel eenmaal van staand naar liggend en terug.
6. Controleer dat knoppen bereikbaar blijven en tekst niet buiten het scherm valt.

GESLAAGD wanneer v0.8.1 zichtbaar is, de volledige basisvolgorde werkt, uitgeschakelde knoppen uitleg tonen en de veilige AI-brugtest slaagt.

De lokale laptop-relay op `127.0.0.1` is vanaf een andere telefoon niet rechtstreeks bereikbaar. **Echte AI vragen** via GitHub Pages/Android blijft daarom MISLUKT of niet van toepassing totdat later een beveiligde online relay wordt ingericht. Dit is geen defect in de statische AURA-runtime.

## Resultatenformulier

```text
Datum:
Apparaat:
Besturingssysteem:
Browser en versie:
Getoonde AURA-versie:

Test A — schone start: GESLAAGD / MISLUKT
Test B — simulatieknoppen: GESLAAGD / MISLUKT
Test C — veilige AI-brugtest: GESLAAGD / MISLUKT
Test D — echte Gemini/Groq-AI: GESLAAGD / MISLUKT / NIET UITGEVOERD
Test E — reset: GESLAAGD / MISLUKT
Test F — Android/GitHub Pages: GESLAAGD / MISLUKT / NIET UITGEVOERD

Gekozen provider:
Knop waarbij het misging:
Volledige foutmelding:
Aanvullende opmerkingen:
```

## Cumulatieve releasegrens

v0.8.1 behoudt de automatische regressies van Synthetic Kernel, World Kernel, Embodiment, Sensorimotor, Perception, Memory en Belief/Hypothesis. Niet inbegrepen blijven WebXR, camera, microfoon, GPS, humanoid rendering, autonome cognitie, modeltools, automatische wereldacties, Synthetic Network runtime en Human Internet.
