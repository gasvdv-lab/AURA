# Foundation Model Bridge v0.8.0

De bridge is de eerste echte AI-integratie van AURA, maar geen autonome actor. De enige capability is `produce-text-response`.

De Context Compiler gebruikt een expliciete whitelist. Hij ontvangt hoogstens de huidige begrensde perceptie, vijf bewust opgevraagde herinneringen, twintig beliefs en tien hypotheses. Objectieve wereldstaat, Observatory, materialen, massa, krachten, integriteit, interne body-ID's, internet en verborgen sensoren worden geweigerd.

De browser bevat nooit een OpenAI API-sleutel. Een echte modelaanroep gaat naar een door de gebruiker beheerde HTTPS-relay. De meegeleverde referentierelay leest `OPENAI_API_KEY`, `OPENAI_MODEL` en `AURA_ORIGIN` uit serveromgevingsvariabelen, accepteert alleen die origin en roept de OpenAI Responses API aan met `store: false`, `tools: []` en een uitvoerlimiet.

De relay kiest zijn eigen toegestane model; een clientparameter is geen autoriteit. Modeltekst wordt teruggegeven en causaal gelogd, maar voert geen JavaScript, tools, netwerkactie, fysieke actie of statewijziging uit.

De deterministische testprovider is geen AI. Hij bewijst offline dat contextselectie, requestflow, logging, persistentie en interface werken. Een live AI-test vereist een geldige eigen server-relay en API-toegang.

Referenties: [OpenAI Responses API](https://developers.openai.com/api/reference/cli/resources/responses/methods/create) en [OpenAI API-quickstart](https://platform.openai.com/docs/quickstart/make-your-first-api-request).
