# Foundation Model Bridge — v0.8.2

## Reasoning Policy

Het model mag rekenen, logisch redeneren, vergelijken, samenvatten en conclusies afleiden uit de gebruikersvraag en gecontroleerde context. Een uitkomst die door berekening ontstaat hoeft niet letterlijk in de context te staan. Het model moet die uitkomst wel als berekening of afleiding behandelen en niet als waargenomen wereldfeit.

Voor uitspraken over AURA's werkelijkheid blijft uitsluitend de gecontroleerde context geldig. Ontbrekende massa, materiaalwaarden, krachten, interne ID's of andere WORLD_STATE-velden worden niet ingevuld of geraden.

## Cumulatief behouden uit v0.8.1

De brug ondersteunt Gemini als primaire provider en Groq als tweede provider of fallback. De browser stuurt nooit een API-sleutel. `server/start-aura-ai.cmd` vraagt de sleutel tijdelijk en start een lokale Node-relay.

Alleen `aura-controlled-context-v1`, een begrensde gebruikersvraag en vaste veiligheidsinstructies worden verstuurd. WORLD_STATE, Observatory, verborgen sensoren, massa, materialen, krachten, interne body-ID's, tools en wereldacties blijven uitgesloten. Modeltekst wordt gelogd maar verandert de wereld niet automatisch.

De relay gebruikt Gemini `generateContent` of Groq Chat Completions met maximaal 400 uitvoertokens. Bij een quota- of serverfout kan de relay alleen naar de andere provider terugvallen wanneer beide tijdelijke sleutels aanwezig zijn. De eenvoudige starter vraagt één sleutel en gebruikt dus één gekozen provider.

De deterministische testprovider is geen AI. Hij bewijst kosteloos dat de gecontroleerde context veilig door de brug loopt.
