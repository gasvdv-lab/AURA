# AURA Roadmap (cumulative)

## v0.8.7 — voltooid

- Native Skill Kernel met deterministische selectie uit generieke kandidaatregels.
- Minimaal drie verschillende trainingsvoorbeelden en een unieke verklarende regel vereist.
- Nieuwe proeven volledig lokaal uitgevoerd, zonder foundation-modelaanroep.
- Twee onafhankelijke native proeven vereist voor oorsprong `aura-learned`.
- Snapshot/herstel en causale registratie van voorbeelden, regelkeuze en proeven.

## v0.8.6 — voltooid

- Expliciete oorsprong `foundation-authorized`, `aura-learned` of `unknown-origin`.
- Gemini/Groq-proeven kunnen nooit als AURA-eigen leren worden geregistreerd.
- Oorsprong zichtbaar in UI, context, snapshots en causale gebeurtenissen.
- Native Skill Learning blijft een afzonderlijke volgende ontwikkelfase.

## v0.8.5.1 — voltooid

- Kandidaatproef uitvoerbaar via tijdelijke, geïsoleerde evaluatiemodus.
- Verwacht antwoord vooraf lokaal vastgelegd en nooit naar de provider gestuurd.
- Echt Gemini/Groq-antwoord automatisch ingevuld en objectief vergeleken.
- Compacte, sobere onderzoeksinterface met genummerde stappen.

## v0.8.5 — voltooid

- Leermateriaal en onafhankelijke toetsopgaven expliciet gescheiden.
- Exacte, reproduceerbare vergelijking van verwacht en waargenomen antwoord.
- Dubbele of letterlijk uit de les gekopieerde proefopgaven worden geweigerd.
- Menselijke beoordeling blijft evidence maar telt niet als onafhankelijke proef.
- Capabilitycontext rapporteert het aantal onafhankelijk geslaagde proeven.

## v0.8.4 — voltooid

- Bedienbare leerworkflow voor lesregistratie en menselijke proefbeoordeling.
- Zichtbare kandidaat-/beschikbaarheidsstatus met voortgang naar twee unieke proeven.
- Capability-state persistent opgeslagen en opgenomen in gecontroleerde AI-context.
- Iedere leerstap causaal gelogd; menselijke beoordeling blijft evidence, geen wereldwaarheid.
- v0.8.5 wordt de capability-leakage- en onafhankelijkheidsproef.

## v0.8.3 — voltooid

- Foundation-modelkennis gescheiden van AURA-kennis.
- Capabilitykandidaten, leerevidence, proefresultaten en herkomst.
- Pas beschikbaar na twee verschillende geslaagde proeven en minimaal één evidencebron.
- Capabilitylijst wordt bij iedere modelaanvraag causaal geregistreerd.

## v0.8.2 — voltooid

- Rekenen en logisch redeneren expliciet toegestaan.
- Afgeleide conclusies gescheiden van waargenomen wereldfeiten.
- Verborgen WORLD_STATE blijft ontoegankelijk.
- Dezelfde Reasoning Policy voor Gemini en Groq.

## v0.8.1 — voltooid

- Bedieningsfix met zichtbare vereisten per knop.
- Correcte geheugentelling en herstartbare hypothesecyclus.
- Gemini primair, Groq secundair/fallback.
- Nederlandstalige Windows-starter zonder sleutelopslag.

- v0.0.1 Constitution & Research Specification — complete.
- v0.1.0 Synthetic Kernel — persistent state, time, events, causality, reproducible randomness, persistence, Observatory — complete.
- v0.2.0 World Kernel — generic objective space, matter, physics, materials, damage and transformation — complete.
- v0.3.0 Embodiment Kernel — abstract physically sexless humanoid biostructure, raw sensors and low-level actuators, no prescribed identity or skills — complete.
- v0.4.0 Sensorimotor Development — deterministic actuator/consequence evidence without scripted skills or goals — complete.
- v0.5.0 Perception Kernel — range-limited, occluded, noisy `PERCEIVED_STATE` strictly separated from `WORLD_STATE` — complete.
- v0.6.0 Memory Kernel — sensorische sporen, consolidatie, opvraging, verzwakking, capaciteit en vergeten zonder chatgeschiedenis als geheugen — voltooid.
- v0.6.1 Memory Flow Fix — vertraagde codering, zichtbare knopfeedback, veilige knopvoorwaarden en resetbevestiging — voltooid.
- v0.7.0 Belief & Hypothesis Kernel — onzekere, tegenstrijdige, verouderde en mogelijk onjuiste beliefs uit perceptie en geheugen — voltooid.
- v0.8.0 Foundation Model Bridge — gecontroleerde echte AI-modelkoppeling via server-side relay, zonder toegang tot `WORLD_STATE`, Observatory, tools of externe agency — voltooid.
- v0.9.0 Attention Kernel — volgende stap; beperkte verwerkingscapaciteit en evidence-selectie zonder ingebouwde nieuwsgierigheid of engagementdoelen.
- v0.10+ Autonomie pas na de aandacht- en veiligheidsproeven.
- Later phases: persistent environments, synthetic information systems, strictly read-only Human Internet, communication, physical-world sensing, places, WebAR rendering, and longitudinal research.

Capabilities remain gated: adding a later phase must not silently pull its runtime into an earlier release.
