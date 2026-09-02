# Foundation Model Bridge — v0.8.1

De brug ondersteunt Gemini als primaire provider en Groq als tweede provider of fallback. De browser stuurt nooit een API-sleutel. `server/start-aura-ai.cmd` vraagt de sleutel tijdelijk en start een lokale Node-relay.

Alleen `aura-controlled-context-v1`, een begrensde gebruikersvraag en vaste veiligheidsinstructies worden verstuurd. WORLD_STATE, Observatory, verborgen sensoren, massa, materialen, krachten, interne body-ID's, tools en wereldacties blijven uitgesloten. Modeltekst wordt gelogd maar verandert de wereld niet automatisch.

De relay gebruikt Gemini `generateContent` of Groq Chat Completions met maximaal 400 uitvoertokens. Bij een quota- of serverfout kan de relay alleen naar de andere provider terugvallen wanneer beide tijdelijke sleutels aanwezig zijn. De eenvoudige starter vraagt één sleutel en gebruikt dus één gekozen provider.

De deterministische testprovider is geen AI. Hij bewijst kosteloos dat de gecontroleerde context veilig door de brug loopt.
