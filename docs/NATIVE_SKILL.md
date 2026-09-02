# Native Skill Kernel — v0.8.7

De kernel zoekt deterministisch binnen een expliciete kleine regelruimte. Hij bewaart voorbeelden, kandidaatkeuze en proefuitkomsten. Vermenigvuldiging wordt uitgevoerd als herhaald optellen, niet door een providerantwoord.

Een regel wordt alleen kandidaat wanneer minimaal drie verschillende voorbeelden precies door één regel worden verklaard. Trainingsinvoer en dubbele proefinvoer worden als onafhankelijke proef geweigerd. Twee geslaagde native-runtime-proeven leveren `aura-learned`; foundation-modelproeven blijven `foundation-authorized`.

De begrenzing is bewust: negatieve of niet-gehele invoer past niet bij `repeated-addition`, en er is nog geen algemene programmasynthese, taalverwerving of autonome selectie van leerdoelen.
