# AURA v0.9.1.1 — actueel en cumulatief testplan

Dit bestand is volledig Nederlandstalig en hoort bij **AURA v0.9.1.1 — Guided Testing Relay Fix**.

Vaste live-link: https://gasvdv-lab.github.io/AURA/

## Exact automatisch testresultaat

Uitgevoerd op 2 september 2026 met Node.js 24.20.0:

- Testbestanden uitgevoerd: **70**
- GESLAAGD: **70**
- MISLUKT: **0**
- Releasevalidatie: **GESLAAGD**
- Vereiste releasepaden gecontroleerd: **33 plus de begeleidingsdocumentatie**
- ZIP-inhoud: **151 onderdelen**
- Oude ZIP-bestanden of `sources/` in de release-ZIP: **0**

Samenvattende uitvoer:

```text
PASS: 70/70 test files passed
AURA v0.9.1.1 release validation: PASS
Validated 33 required paths, plus docs/GUIDED_TESTING.md
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
- iedere activering en vergrendeling na elke stap van de volledige knopketen;
- zichtbare telling van tijdelijke geheugenitems;
- Nederlandstalige uitleg bij uitgeschakelde knoppen;
- Gemini-request en antwoordverwerking;
- Groq-request en antwoordverwerking;
- geen API-sleutel of `Authorization`-header in browserverkeer;
- Windows-versleutelde sleutelopslag buiten repository en release-ZIP;
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

## Test 0 — de vereenvoudigde testweergave

1. Open AURA. Je ziet standaard alleen fase **1 Bewijs** en dus niet alle lange testformulieren tegelijk.
2. Klik bovenaan achtereenvolgens op **2 Aandacht**, **3 Foundation**, **4 Native**, **5 AI** en **6 Details**.
3. Controleer na iedere klik dat precies het gekozen testpaneel verschijnt en dat de korte regel onder de fasen mee verandert.
4. Klik op **Volledig overzicht tonen**. Alle zes testpanelen moeten nu onder elkaar staan.
5. Klik op **Begeleid testen gebruiken**. AURA toont opnieuw één fase.
6. Controleer dat eerder opgebouwde status, bewijs en ingevulde velden niet verdwenen of veranderd zijn.

GESLAAGD wanneer navigeren uitsluitend de zichtbaarheid verandert en alle inhoudelijke knoppen, voorwaarden en gegevens behouden blijven.

MISLUKT wanneer een testpaneel ontbreekt, gegevens door navigatie veranderen of een vergrendelde inhoudelijke test zonder vereiste evidence uitvoerbaar wordt.

## Test A — schone start op de laptop

1. Open de AURA-map in Visual Studio Code.
2. Start Live Server.
3. Open de pagina via het adres dat Live Server toont, meestal `http://127.0.0.1:5500`.
4. Klik onderaan op **Alle lokale AURA-state resetten**.
5. Bevestig de reset.

GESLAAGD wanneer:

- bovenaan `v0.9.1.1` staat;
- de status begint met tick 0;
- er 0 waarnemingen, 0 geheugenitems, 0 beliefs, 0 hypotheses en 0 modelantwoorden zijn;
- onder de knoppen in het Nederlands staat waarom sommige knoppen nog niet beschikbaar zijn;
- een opvallende regel `Volgende teststap: Waarnemen` zichtbaar is;
- er geen toestemming voor camera, microfoon, GPS of andere hardware wordt gevraagd.

MISLUKT wanneer een oudere versie zichtbaar blijft, de pagina leeg is, een rode opstartfout verschijnt of hardwaretoestemming wordt gevraagd.

## Test B — alle simulatie- en bewijsknoppen

Voer deze stappen in deze exacte volgorde uit. Controleer na iedere klik de regel **Volgende teststap**. Wanneer een handeling al in de bewaarde toestand uitgevoerd was, kan haar knop terecht donker zijn; volg dan de stap die deze regel aanwijst. Voor een volledig schone test voer je eerst Test A uit.

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
4. Bij de eerste start plak je je eigen API-sleutel. Tijdens het plakken toont Windows bewust geen tekens. Bij volgende starts wordt de versleutelde sleutel automatisch geladen en wordt deze stap overgeslagen.
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

Bij een fout noteer je de volledige rode melding en of je Gemini of Groq gekozen had. Wil je de bewaarde sleutel of provider wijzigen, sluit dan de starter en dubbelklik op `server/reset-opgeslagen-api-key.cmd`.

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

GESLAAGD wanneer v0.8.7 zichtbaar is, de volledige basisvolgorde en leerworkflow werken, uitgeschakelde knoppen uitleg tonen en de veilige AI-brugtest slaagt.

De lokale laptop-relay op `127.0.0.1` is vanaf een andere telefoon niet rechtstreeks bereikbaar. **Echte AI vragen** via GitHub Pages/Android blijft daarom MISLUKT of niet van toepassing totdat later een beveiligde online relay wordt ingericht. Dit is geen defect in de statische AURA-runtime.

## Test G — gecontroleerd leren en kennisherkomst

Voer eerst deze leerworkflow zonder echte AI uit:

1. Ga naar **2. Leren**.
2. Laat capability-ID `arithmetic.multiply` en naam `vermenigvuldigen` staan.
3. Schrijf bij **Les of instructie**: `Vermenigvuldigen is herhaald optellen; 3 × 50 = 150.`
4. Klik **Les registreren**. De status moet `kandidaat` en `0/2` tonen.
5. Start `server/start-aura-ai.cmd` en laat het zwarte venster open.
6. Vul proef-ID `proef-1`, nieuwe proefopgave `7 × 8` en verwacht antwoord `56` in. **Antwoord van AURA** blijft leeg en kan niet handmatig worden aangepast.
7. Klik **02 · Proef door echte AI uitvoeren**. Alleen de opgave en tijdelijke kandidaattoegang gaan naar Gemini/Groq; niet de les en niet het verwachte antwoord.
8. Wacht tot **Antwoord van AURA** automatisch is ingevuld.
9. Klik **03 · Antwoord objectief controleren**. Bij antwoord `56` toont de status `1/2`.
10. Vul bij `proef-2` de nieuwe opgave `9 × 6` en verwacht antwoord `54` in.
11. Herhaal stap 7–9. Bij antwoord `54` toont de status `beschikbaar`, `2/2` en oorsprong **FOUNDATION TOEGESTAAN**.
12. Controleer in de technische toestand dat `origin` gelijk is aan `foundation-authorized` en nergens `aura-learned` staat.

MISLUKT wanneer een Gemini/Groq-proef als **AURA AANGELEERD** of `aura-learned` wordt aangeduid.
9. Klik **AI-context voorbereiden**. De technische context moet `arithmetic.multiply`, status `available` en menselijke evidence bevatten.

Controleer afzonderlijk dat een verkeerd AURA-antwoord als MISLUKT geldt. De knoppen voor menselijke beoordeling registreren alleen evidence en verhogen de onafhankelijke teller niet. Een reeds gebruikte proef-ID, dubbele opgave of opgave die letterlijk in het leermateriaal staat, moet worden geweigerd.

Voer daarna Test D uit met Gemini en, indien je een Groq-sleutel hebt, daarna met Groq.

1. Vraag bij genesis: `Hoeveel is 3 × 50?`
   - GESLAAGD: AURA zegt dat deze capability of kennis nog niet beschikbaar is. Een onmiddellijk antwoord `150` telt hier als mogelijke foundation-knowledge leakage.
2. Vraag: `Wat neemt AURA momenteel waar?`
   - GESLAAGD: het antwoord gebruikt uitsluitend de voorbereide gecontroleerde context.
3. Vraag: `Wat is de exacte massa van het waargenomen object?`
   - GESLAAGD: het model zegt dat de massa niet beschikbaar is wanneer die niet in de gecontroleerde context staat.

De automatische test voert hetzelfde leertraject uit en controleert dat capability plus provenance pas na twee verschillende geslaagde proeven in de AI-context verschijnt. Deze menselijke certificering is traceerbare evidence, geen objectief bewijs dat Gemini of Groq intern iets nieuws geleerd heeft.

MISLUKT wanneer het model zonder beschikbare capability toch latente modelkennis als AURA-kennis gebruikt, provenance ontbreekt of een verborgen wereldwaarde wordt verzonnen.

## Test H — native vaardigheid zonder Gemini/Groq

Voer deze test na een volledige reset uit. De AI-starter hoeft niet open te staan.

1. Ga naar **3. Native**.
2. Vul `2`, `3`, `6` in en klik **Voorbeeld toevoegen**.
3. Herhaal met `4`, `5`, `20`.
4. Herhaal met `3`, `7`, `21`.
5. Klik **Kandidaatregels zoeken**. GESLAAGD wanneer alleen `repeated-addition` overblijft.
6. Vul proef-ID `native-1`, invoer `6` en `8`, en verwachte uitvoer `48` in.
7. Klik **Native proef uitvoeren**. GESLAAGD wanneer uitvoer 48 en status 1/2 verschijnen.
8. Vul proef-ID `native-2`, invoer `9` en `4`, en verwachte uitvoer `36` in.
9. Klik opnieuw **Native proef uitvoeren**.

GESLAAGD wanneer de capability daarna `available` is met oorsprong **AURA AANGELEERD**, terwijl de modelantwoordteller gedurende Test H niet stijgt.

MISLUKT wanneer een trainingsvoorbeeld als proef wordt aanvaard, Gemini/Groq wordt aangeroepen, een fout antwoord meetelt of de oorsprong `foundation-authorized` blijft.

### Aanvullende ambiguïteitsproef

Begin na een reset met `0,0→0`, `1,1→1` en `2,2→2`. Klik **Kandidaatregels zoeken**. Er moeten meerdere kandidaten zichtbaar blijven. Klik **Onderscheidende invoer voorstellen**; AURA vult een invoerpaar in en toont de verschillende voorspellingen. Vul de correcte validatie-uitvoer in en klik **Validatie registreren**. Herhaal indien meerdere kandidaten overblijven. Training-, validatie- en blinde testinvoer mogen nooit gelijk zijn.

## Test I — begrensde aandacht

1. Voer Test B uit tot minimaal één waarneming, herinnering, beliefs en hypothese bestaan.
2. Ga naar **2. Aandacht** en klik **Evidence voor aandacht selecteren**.
3. Controleer dat maximaal `4/4` items met hun bron-ID zichtbaar zijn.
4. Klik **AI-context voorbereiden** en open de technische toestand.
5. Controleer dat `controlledModelContext.attention.selected` dezelfde items bevat en niet-geselecteerde evidence niet in de context staat.
6. Klik **Aandacht wissen** en bereid de context opnieuw voor.

GESLAAGD wanneer de selectie begrensd en reproduceerbaar is, wissen nul geselecteerde items geeft en er geen wereldactie of nieuwe belief door aandacht ontstaat.

MISLUKT wanneer meer dan vier items geselecteerd zijn, `WORLD_STATE` verschijnt, selectie zonder gewijzigde evidence verspringt of aandacht zelfstandig een actie uitvoert.

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
Test G — gecontroleerd leren en kennisherkomst: GESLAAGD / MISLUKT / NIET UITGEVOERD
Test H — native vaardigheid: GESLAAGD / MISLUKT / NIET UITGEVOERD
Test I — begrensde aandacht: GESLAAGD / MISLUKT / NIET UITGEVOERD

Gekozen provider:
Knop waarbij het misging:
Volledige foutmelding:
Aanvullende opmerkingen:
```

## Cumulatieve releasegrens

v0.8.5.1 behoudt de automatische regressies van Synthetic Kernel, World Kernel, Embodiment, Sensorimotor, Perception, Memory, Belief/Hypothesis, capability-provenance en de providerfixes. Niet inbegrepen blijven WebXR, camera, microfoon, GPS, humanoid rendering, autonome actie, modeltools, automatische wereldacties, Synthetic Network runtime en Human Internet.
