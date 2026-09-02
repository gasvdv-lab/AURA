# Autonomous Learning Loop v0.9.2

Deze release bevat één streng begrensd zelfstandig onderzoeksprogramma: de relatie tussen kracht, massa en versnelling. AURA kiest zelf vijf vooraf begrensde, onderling verschillende experimentconfiguraties. Drie metingen dienen voor kandidaatselectie; twee ongeziene configuraties dienen uitsluitend voor onafhankelijke verificatie.

Iedere uitkomst wordt gemeten door een nieuwe geïsoleerde `WorldKernel` met nulzwaartekracht. Het leermechanisme krijgt geen verwacht antwoord. Het vergelijkt de gemeten versnelling met vier generieke kandidaatregels. Alleen de regel die alle trainingsmetingen verklaart wordt voorafgaand aan de twee proeven geselecteerd.

De capability wordt pas `aura-learned` wanneer beide voorspellingen exact overeenkomen met de daarna verkregen wereldmetingen. De module gebruikt geen Gemini, Groq, relay, netwerk of menselijke beoordeling. v0.9.2 is nog geen open-ended nieuwsgierigheid: het onderzoeksdomein en de veilige experimentruimte zijn door de software begrensd.
