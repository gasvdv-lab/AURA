# AURA Experiments (cumulative)

## v0.9.4 — autonome onderzoeksagenda

- Cyclus 1 onderzoekt vier verklaringen voor kracht, massa en versnelling met drie trainingsmetingen en twee vooraf voorspelde, ongeziene controles.
- Cyclus 2 onderzoekt vier verklaringen voor snelheid zonder nettokracht met drie trainingsmetingen en twee vooraf voorspelde, ongeziene controles.
- Slagingsvoorwaarde: één verklaring overleeft de training en beide onafhankelijke voorspellingen stemmen exact overeen met latere World Kernel-metingen.
- Verboden bronnen: Gemini, Groq, netwerk, menselijke les, menselijke beoordeling en vooraf ingevulde verwachte antwoorden.

## v0.9.2.2 — object-overstijgende representatie

Genereer twee fysiek gelijke werelden met volledig verschillende body-ID's. De abstractie, relaties en signatuur moeten exact gelijk zijn. Wijzig daarna massa of materiaal; alleen de overeenkomstige fysieke kenmerken en signatuur mogen veranderen.

## v0.9.2 — zelfstandige kracht-massalering

Start het zelfstandige leerprogramma zonder velden in te vullen. Controleer dat AURA drie trainingsmetingen en twee onafhankelijke proeven uitvoert, `force-divided-by-mass` selecteert en alleen bij twee exacte overeenkomsten `aura-learned` rapporteert.

## v0.9.1 — begeleide testweergave

Doorloop de zes fasetabs en controleer dat telkens precies het gekozen paneel zichtbaar is. Schakel daarna het volledige overzicht in en verifieer dat alle panelen verschijnen terwijl status, bewijs en knopvergrendelingen identiek blijven.

## v0.9.0 — begrensde aandacht

Bied meer dan vier evidencekandidaten aan, selecteer aandacht en controleer dat exact vier kandidaten met hoogste prioriteit in stabiele volgorde overblijven. De modelcontext moet alle niet-geselecteerde evidence uitsluiten.

## v0.8.8 — ambiguïteit, validatie en weerlegging

Gebruik `0,0→0`, `1,1→1` en `2,2→2` om meerdere passende regels te produceren. Laat AURA een onderscheidende invoer voorstellen, registreer validatie en controleer causale regelafwijzingen. Een later onafhankelijk tegenvoorbeeld moet een beschikbare capability `contested` maken.

## v0.8.7 — native regelverwerving

Registreer `2,3→6`, `4,5→20` en `3,7→21`. De enige passende regel moet `repeated-addition` zijn. Test daarna lokaal `6,8→48` en `9,4→36`; pas daarna mag `arithmetic.multiply` de oorsprong `aura-learned` krijgen.

## v0.8.6 — oorsprongsgrens

Laat Gemini/Groq twee proeven slagen en controleer dat de capability uitsluitend `foundation-authorized` wordt. Een regressietest bewijst daarnaast dat alleen native-runtime-evidence ooit `aura-learned` kan opleveren.

## v0.8.5.1 — uitvoerbare blinde kandidaatproef

Leg het verwachte antwoord vast, laat Gemini/Groq de nieuwe opgave via tijdelijke kandidaattoegang uitvoeren en vergelijk het automatisch ontvangen antwoord. Controleer dat les en verwacht antwoord niet in de provideraanvraag staan.

## v0.8.5 — generalisatie en antwoordlekkage

Geef uitsluitend de algemene vermenigvuldigingsmethode als les. Test daarna twee nieuwe opgaven met vooraf vastgelegde verwachte antwoorden. Controleer dat een fout antwoord, dubbele opgave, letterlijk uit de les overgenomen opgave of uitsluitend menselijke goedkeuring de capability niet beschikbaar maakt.

## v0.8.4 — gecontroleerde leerworkflow

Registreer een les voor `arithmetic.multiply`, beoordeel twee verschillend benoemde proeven als geslaagd en controleer dat de capability pas daarna van `candidate` naar `available` gaat. Compileer vervolgens AI-context en verifieer dat capability en provenance aanwezig zijn. Een mislukte of dubbel benoemde proef mag de drempel niet omzeilen.

## v0.8.3 — Capability & Knowledge Provenance

Zonder beschikbare vermenigvuldigingscapability weigert de cognitieve component de berekening. Na gecontroleerde leerevidence en twee unieke geslaagde proeven verschijnt `arithmetic.multiply` met herkomst in de modelcontext en mag dezelfde vraag worden berekend.

## v0.8.2 — Reasoning Policy

Contractproef voor Gemini en Groq: `3 × 50` levert `150`, terwijl een gevraagde verborgen massa als niet beschikbaar wordt behandeld. Er worden geen tools of wereldacties toegevoegd.

## v0.8.1 — Bedienings- en providerexperiment

Doel: iedere beschikbare knop geeft een zichtbaar resultaat, iedere vergrendeling wordt verklaard en Gemini/Groq ontvangen uitsluitend gecontroleerde context. Automatisch resultaat: 51/51 testbestanden GESLAAGD. Providerquota, Android-netwerk en hardware blijven handmatig.

## WK-01 Identical trajectories

Same initial state, fixed delta, ordered inputs and seed must produce byte-equivalent snapshots and Observatory records.

## WK-02 Causal mechanics

Apply known forces to known masses; verify acceleration, velocity and position. Observe gravity without a scripted object class.

## WK-03 Contact

Collide generic spheres and verify deterministic separation, impulse response, ordering and collision evidence.

## WK-04 Material consequence

Apply damage/exposure to different registered material properties; verify causal integrity changes and destruction only at depleted integrity.

## WK-05 Conservation and absence

Construction consumes declared resources; transformation exposes losses; idle evolution creates neither bodies nor resources.

## WK-06 Interrupted continuity

Snapshot mid-trajectory, restore into a fresh kernel and prove the subsequent state and causal history match uninterrupted execution.

No experiment in this release assigns meaning such as house, tool, tree, weapon, life, identity, intent or perception to a primitive.

## EK-01 Topological integrity

Verify all 14 abstract humanoid parts, parent links, joints, actuators and raw sensors exist without sex characteristics or identity fields.

## EK-02 Unlearned actuation

Apply identical normalized commands to individual actuators and verify deterministic force consequences. Confirm no `walk`, `stand` or `grasp` capability exists.

## EK-03 Embodied continuity

Snapshot the World and Embodiment Kernels mid-motion, restore both, and prove subsequent states and causal records match uninterrupted execution.

## EK-04 Local damage

Damage one physical part and verify its integrity signal changes without spontaneous damage, interpretation or emotional meaning elsewhere.

## SM-01 Repeatable consequence

Run identical actuator trials from identical snapshots and prove pre/post signals, physical trajectories, models and causal records match exactly.

## SM-02 Evidence accumulation

Repeat a bounded actuator command and verify its effect model increments its sample count and deterministic means without reward, goal or interpretation fields.

## SM-03 Combined continuity

Restore World, Embodiment and Sensorimotor state after a learned trial; continue with the same inputs and prove equivalence to uninterrupted development.

## SM-04 Semantic absence

Verify there is no walking, standing, grasping, exploration, action-selection, success/failure or reward API in the learning kernel.

## PK-01 Objective-state firewall

Observe a body with privileged properties and prove `PERCEIVED_STATE` contains no objective ID, mass, material, force, integrity, static flag or Observatory reference.

## PK-02 Range and occlusion

Place generic bodies inside/outside sensor range and directly behind blockers; verify deterministic incompleteness without deleting them from `WORLD_STATE`.

## PK-03 Reproducible imperfection

Repeat observations from identical snapshots and seeds; prove bounded noise and track assignment are identical while differing from exact world values.

## PK-04 Perceptual continuity

Restore after observations and prove random state, track identities, next observation and subsequent `PERCEIVED_STATE` continue exactly.

## MK-01 Geheugengrens

Bewaar een geldige perceptie en bewijs dat objectieve ID's, massa, materiaal, krachten, integriteit, `WORLD_STATE` en Observatory niet in het geheugen terechtkomen en actief worden geweigerd.

## MK-02 Consolidatie

Vraag hetzelfde sensorische spoor herhaald op en bewijs dat de ingestelde generieke toegangsdrempel deterministisch één geconsolideerde herinnering vormt.

## MK-03 Verzwakking en vergeten

Laat geheugen-ticks verstrijken en bewijs dat sterkte deterministisch afneemt en items bij de drempel werkelijk uit de actieve geheugenstaat verdwijnen met een causale gebeurtenis.

## MK-04 Continuïteit

Herstel tijdelijke en geconsolideerde herinneringen midden in hun ontwikkeling en bewijs dat verdere opvraging en verzwakking exact gelijk verlopen.

## MK-05 Vertraagde codering en bediening

Neem waar, laat geheugentijd verstrijken en sla daarna de oude waarneming op. Bewijs dat bronmoment, coderingsmoment en vertraging correct blijven, en dat iedere interfaceknop zichtbare Nederlandstalige feedback of een verklaarde uitgeschakelde toestand heeft.

## BH-01 Beliefgrens

Vorm beliefs uit perceptie en geheugen en bewijs dat objectieve wereldvelden, Observatory en interne object-ID's actief geweigerd blijven.

## BH-02 Tegenstrijdigheid

Bied sterk verschillende metingen over dezelfde track en predicate aan. Bewijs dat alternatieven en status `contested` ontstaan in plaats van één waarde stil als waarheid te kiezen.

## BH-03 Veroudering

Laat tijd verstrijken zonder nieuwe evidence en bewijs dat confidence afneemt en de belief `stale` wordt zonder dat de wereldwaarheid geraadpleegd wordt.

## BH-04 Hypothese-evidence

Toets dezelfde generieke hypothese met ondersteunende en tegensprekende percepties. Bewijs dat de uitkomst en status reproduceerbaar zijn en geen verborgen truth-label bevatten.

## FM-01 Contextfirewall

Compileer modelcontext uit alle actieve lagen en bewijs dat uitsluitend gewhiteliste percepties, herinneringen, beliefs, hypotheses en de capability `produce-text-response` aanwezig zijn.

## FM-02 Providergrens

Onderschep een relayaanvraag en bewijs dat de browser geen authorization-header of API-sleutel verstuurt, `store: false` en `tools: []` gebruikt.

## FM-03 Geen modelagency

Laat een provider tekst retourneren en bewijs dat `WORLD_STATE`, embodiment, resources, geheugen en beliefs daardoor niet wijzigen. Alleen causale aanvraag-/antwoordevents mogen bijkomen.

## FM-04 Continuïteit

Herstel na modelantwoorden en bewijs dat request-ID's en de tekstgeschiedenis exact doorlopen zonder providergeheimen te serialiseren.
