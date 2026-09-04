# AURA v0.9.2.4 — actueel Nederlandstalig testplan

Vaste live-link: https://gasvdv-lab.github.io/AURA/

Dit plan is volledig Nederlandstalig en gebruikt exact de namen en zeven fasen van de huidige site. De automatische suite wordt aangevuld met de onderstaande handmatige praktijktest. Begin een volledige test altijd met Test 1; anders blijven eerdere geldige gegevens zichtbaar.

## Automatisch resultaat

Uitgevoerd op 4 september 2026 met Node.js 24.20.0:

- Testbestanden: **79**
- GESLAAGD: **79**
- MISLUKT: **0**
- Releasevalidatie: **GESLAAGD**
- ZIP-inhoud: **164 onderdelen**
- Sleutels, oude ZIP-bestanden en `sources/` in de ZIP: **0**

De suite controleert cumulatief wereldfysica, determinisme, causaliteit, resources, persistentie, embodiment, waarneming, geheugen, beliefs, hypothesen, aandacht, Foundation-context, Gemini/Groq-relay, Native leren, zelfstandig leren, objectabstractie en alle eerdere regressiegrenzen.

## De zeven fasen op de site

1. **Bewijs** — simulatie, waarneming, geheugen, beliefs en hypotheses.
2. **Aandacht** — maximaal vier evidence-items selecteren.
3. **Foundation** — menselijke les en onafhankelijke Gemini/Groq-proeven.
4. **Native** — lokale regelverwerving zonder AI-provider.
5. **Zelfleren** — autonome experimenten en object-overstijgende abstractie.
6. **AI** — gecontroleerde context en echte AI-aanroep.
7. **Details** — technische JSON en causale events.

Klik op **Volledig overzicht tonen** om alle zeven panelen te zien. De knop heet daarna **Begeleid testen gebruiken**.

## Test 1 — volledig schone start

1. Open AURA.
2. Klik **Alle lokale AURA-state resetten**.
3. Bevestig de reset.

GESLAAGD wanneer bovenaan `v0.9.2.4` staat, de status `tick 0` en overal nul resultaten toont, en **Volgende teststap: Waarnemen** verschijnt. Er mag geen camera-, microfoon- of GPS-toestemming worden gevraagd.

## Test 2 — fasenavigatie

1. Klik achtereenvolgens op alle zeven fasen.
2. Controleer dat steeds alleen het gekozen paneel zichtbaar is.
3. Controleer dat de uitleg steeds `Fase … van 7` toont.
4. Schakel het volledige overzicht in en daarna begeleid testen opnieuw.

GESLAAGD wanneer alle zeven panelen bereikbaar blijven en navigeren geen gegevens of bewijs verandert.

## Test 3 — Bewijs

Open **1 Bewijs** en voer uit:

1. **1 tick vooruit** — tick wordt 1.
2. **60 ticks vooruit** — tick wordt 61.
3. **Actuatorproef** — feedback vermeldt actuatorproef 1.
4. **Waarnemen** — er verschijnt een waarnemings-ID.
5. **Waarneming opslaan** — de status toont minstens één geheugenitem.
6. **Track-1 opvragen** — feedback meldt minstens één resultaat.
7. **Beliefs bijwerken** — de status toont beliefs.
8. **Hypothese voorstellen** — de status toont één hypothese.
9. **Hypothese toetsen** — feedback toont de uitkomst.
10. **Nieuwe hypothese beginnen** — voorstellen wordt opnieuw beschikbaar.

Een donkere knop is correct wanneer de uitleg eronder de ontbrekende of reeds uitgevoerde stap noemt.

## Test 4 — Aandacht

1. Voer Test 3 minstens tot en met **Beliefs bijwerken** uit.
2. Open **2 Aandacht**.
3. Klik **Evidence voor aandacht selecteren**.
4. Controleer dat maximaal `4/4` items zichtbaar zijn.
5. Klik **Aandacht wissen**.

GESLAAGD wanneer de selectie reproduceerbaar en begrensd is en wissen nul items oplevert zonder wereldactie.

## Test 5 — Foundation

Hiervoor moet `server/start-aura-ai.cmd` op dezelfde laptop openstaan.

1. Open **3 Foundation**.
2. Laat capability-ID `arithmetic.multiply` en naam `vermenigvuldigen` staan.
3. Vul bij **Leermateriaal** alleen in: `Vermenigvuldigen is herhaald optellen.`
4. Klik **01 · Leermateriaal registreren**.
5. Vul proef-ID `proef-1`, opgave `7 × 8` en verwacht antwoord `56` in.
6. Klik **02 · Proef door echte AI uitvoeren**.
7. De globale status toont eerst **AI-aanroep bezig… even wachten**. Wacht daarna tot **Antwoord van AURA** automatisch is ingevuld.
8. Klik **03 · Antwoord objectief controleren**.
9. Herhaal met proef-ID `proef-2`, opgave `9 × 6` en verwacht antwoord `54`.

GESLAAGD wanneer na twee correcte onafhankelijke proeven `available`, `2/2` en oorsprong **FOUNDATION TOEGESTAAN** verschijnen. Dit mag nooit `aura-learned` worden.

## Test 6 — Native

Voer deze test na Test 1 uit; de AI-starter is niet nodig.

1. Open **4 Native**.
2. Registreer met **Voorbeeld toevoegen** achtereenvolgens `2,3→6`, `4,5→20` en `3,7→21`.
3. Klik **Kandidaatregels zoeken**.
4. Vul blinde proef `native-1`, invoer `6` en `8`, verwacht `48` in; klik **Native proef uitvoeren**.
5. Vul daarna `native-2`, invoer `9` en `4`, verwacht `36` in; voer opnieuw uit.

GESLAAGD wanneer `repeated-addition`, `2/2`, `available` en oorsprong **AURA AANGELEERD** verschijnen en de modelantwoordteller nul blijft.

## Test 7 — Zelfleren

1. Open **5 Zelfleren**.
2. Vul niets in.
3. Klik **Zelfstandig leerprogramma uitvoeren**.

GESLAAGD wanneer `VERIFIED`, `force-divided-by-mass`, drie zelf verzamelde metingen, `2/2` onafhankelijke proeven en oorsprong `aura-learned` verschijnen.

## Test 8 — object-overstijgende abstractie

1. Blijf in **5 Zelfleren**.
2. Klik **Wereld object-overstijgend abstraheren**.

GESLAAGD wanneer de status generieke volumes, contactrelaties, totale massa en `geen objectcategorie opgeslagen` vermeldt. In **7 Details** moet een event `abstraction.generated` staan. Namen zoals House, Shed of Chair mogen niet als categorie voorkomen.

## Test 9 — veilige AI-test

1. Zorg dat minstens één waarneming of beschikbare capability bestaat.
2. Open **6 AI**.
3. Klik **AI-context voorbereiden**.
4. Klik **Veilige test zonder echte AI**.

GESLAAGD wanneer `CONTEXT_OK` verschijnt en de modelantwoordteller met één stijgt zonder wereldwijziging.

## Test 10 — echte Gemini/Groq-AI

1. Dubbelklik op `server/start-aura-ai.cmd`; kies Gemini of Groq en laat het venster open.
2. Open **6 AI** en vul **Vraag aan de AI** in.
3. Klik eerst **AI-context voorbereiden** en daarna **Echte AI vragen**.
4. Open bij problemen **Klik hier voor instellingen voor echte AI**. De lokale relay hoort `http://127.0.0.1:8787/v1/aura/respond` te zijn.

GESLAAGD wanneer provider, model en antwoord verschijnen. De API-sleutel mag nergens in de pagina, browseropslag, repository of ZIP staan.

De GitHub Pages-site op dezelfde laptop kan de lokale relay bereiken. Een telefoon kan niet via zijn eigen `127.0.0.1` bij de laptop; echte AI op Android wacht daarom op een latere beveiligde online relay.

## Test 11 — Android Chrome

1. Publiceer de repositoryroot via GitHub Pages.
2. Open https://gasvdv-lab.github.io/AURA/ in Android Chrome.
3. Controleer versie `v0.9.2.4` en voer Test 1–4, Test 7–9 uit.
4. Draai het toestel van staand naar liggend en terug.

GESLAAGD wanneer alle bediening bereikbaar blijft, niets buiten het scherm valt en geen hardwaretoestemming wordt gevraagd.

## Resultatenformulier

```text
Datum:
Apparaat, besturingssysteem en browser:
Getoonde AURA-versie:

Test 1 Schone start: GESLAAGD / MISLUKT
Test 2 Navigatie: GESLAAGD / MISLUKT
Test 3 Bewijs: GESLAAGD / MISLUKT
Test 4 Aandacht: GESLAAGD / MISLUKT
Test 5 Foundation: GESLAAGD / MISLUKT / NIET UITGEVOERD
Test 6 Native: GESLAAGD / MISLUKT
Test 7 Zelfleren: GESLAAGD / MISLUKT
Test 8 Objectabstractie: GESLAAGD / MISLUKT
Test 9 Veilige AI: GESLAAGD / MISLUKT
Test 10 Echte AI: GESLAAGD / MISLUKT / NIET UITGEVOERD
Test 11 Android: GESLAAGD / MISLUKT / NIET UITGEVOERD

Knop waarbij het misging:
Volledige foutmelding:
Aanvullende opmerkingen:
```

## Releasegrens

Niet inbegrepen: WebXR, camera, microfoon, GPS, humanoid rendering, onbeperkte autonome doelen, modeltools, externe wereldacties, Synthetic Network runtime en Human Internet.
