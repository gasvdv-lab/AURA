# Visuele embodiment-preview v0.10.0

De laptoppreview gebruikt de door de projecteigenaar gekozen afbeelding als visuele identiteit van AURA. De browser leest de torso-positie en -snelheid, simulatie-tick en gemiddelde integriteit van de bestaande abstracte embodiment.

De vertaling naar pixels is uitsluitend presentatie. Zij schrijft niet naar `WORLD_STATE`, creëert geen bodies of events, activeert geen actuator en geldt niet als perceptie of bewijs. De preview is nog geen 3D-model en gebruikt geen camera, GPS, microfoon of WebXR.

De afbeelding staat als release-asset in `assets/textures/aura-avatar-reference.jpg`. Latere 3D-rigging moet dezelfde eenrichtingsgrens behouden: kerneltoestand mag rendering sturen; rendering mag de objectieve wereld niet stilzwijgend wijzigen.
