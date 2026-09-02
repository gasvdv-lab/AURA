# Memory Kernel v0.6.0

De Memory Kernel bewaart geen chatgeschiedenis en leest nooit rechtstreeks uit `WORLD_STATE` of Observatory. Alleen een reeds begrensde, structureel geldige `PERCEIVED_STATE` kan een sensorisch spoor worden.

Een sensorisch spoor bevat de eerdere onvolmaakte waarneming, brontick, actuele sterkte, laatste toegang en aantal opvragingen. Opvraging gebeurt deterministisch op track-overeenkomst, sterkte en ouderdom. Het resultaat heet toegankelijkheid, niet waarheid of vertrouwen.

Na een configureerbaar aantal opvragingen kan een spoor consolideren tot een persistenter geheugenitem. Consolidatie kopieert de waargenomen inhoud en maakt haar niet correcter. Geconsolideerde herinneringen verzwakken trager dan tijdelijke sporen.

Tijd verlaagt sterkte. Een item onder de vergeetdrempel wordt werkelijk verwijderd. Capaciteitsdruk verwijdert deterministisch het zwakste, oudste item. Verzwakking, consolidatie, opvraging en vergeten worden causaal gelogd voor menselijke onderzoekers.

De invoergrens weigert onder meer objectieve wereldstaat, Observatory, materiaal, massa, kracht, versnelling, integriteit en interne body-ID's. Memory heeft geen belief-, betekenis-, emotie-, doel- of AI-laag.
