# Echte AI starten — eenvoudige uitleg

De gewone AURA-knoppen en **Veilige test zonder echte AI** werken zonder sleutel.

1. Maak zelf een API-sleutel bij Google Gemini of Groq.
2. Dubbelklik op `start-aura-ai.cmd`.
3. Kies `1` voor Gemini of `2` voor Groq.
4. Plak je sleutel alleen de eerste keer. Tijdens het plakken zie je bewust geen tekens.
5. De starter staat automatisch zowel Live Server als `https://gasvdv-lab.github.io/AURA/` toe.
6. Laat het zwarte venster open.
7. Open AURA, bereid de AI-context voor en klik op **Echte AI vragen**.

De sleutel wordt met Windows-versleuteling opgeslagen als `%LOCALAPPDATA%\AURA\gemini.key` of `%LOCALAPPDATA%\AURA\groq.key`. Alleen hetzelfde Windows-account kan hem ontsleutelen. De starter laadt hem volgende keren automatisch. Het sleutelbestand staat buiten het GitHub-project en buiten iedere release-ZIP.

Wil je van provider of sleutel veranderen, dubbelklik dan eerst op `reset-opgeslagen-api-key.cmd`. Bij de volgende start vraagt AURA opnieuw om provider en sleutel.

GitHub Pages op dezelfde laptop kan de lokale relay bereiken. Op een telefoon kan `127.0.0.1` niet naar de laptop verwijzen; daarvoor is later een beveiligde online relay nodig.
