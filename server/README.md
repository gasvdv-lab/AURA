# Optionele AURA OpenAI-relay

Deze relay is nodig voor echte AI-antwoorden. GitHub Pages kan een API-sleutel niet veilig bewaren.

## Vereisten

- Node.js 20 of nieuwer.
- Een eigen OpenAI API-sleutel en beschikbare API-tegoeden.
- Een modelnaam die voor jouw OpenAI-project beschikbaar is.

## Lokale PowerShell-start

Stel de waarden uitsluitend in de terminalomgeving in. Plaats de sleutel nooit in AURA-bestanden, GitHub of het browserformulier.

```powershell
$env:OPENAI_API_KEY="jouw_geheime_sleutel"
$env:OPENAI_MODEL="jouw_beschikbare_model"
$env:AURA_ORIGIN="http://127.0.0.1:5500"
$env:PORT="8787"
node server/relay-example.mjs
```

Vul daarna in AURA in:

- Relay-endpoint: `http://127.0.0.1:8787/v1/aura/respond`
- Modelnaam: dezelfde herkenbare modelnaam; de relay gebruikt veilig zijn eigen `OPENAI_MODEL`.

Voor publiek gebruik moet de relay achter HTTPS worden gehost en `AURA_ORIGIN` exact op `https://gasvdv-lab.github.io` worden ingesteld. Beperk daarnaast kosten, requestfrequentie en logs op je hostingplatform.
