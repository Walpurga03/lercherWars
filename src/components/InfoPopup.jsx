import React, { useState } from 'react';
import '../styles/InfoPopup.css'; 

const InfoPopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <button className="info-button" onClick={togglePopup}>Info</button>
            {isPopupOpen && (
                <div className="popup-overlay">
                <div className="popup-content">
                  <div className="properties-info">
                    <h2>Einstufungsprozess</h2>
                    <h3>1. Powermill</h3>
                    <ul>
                      <li>1 Pkt: Kennt PowerMill vom Namen her, hat die Software vielleicht einmal geöffnet, aber noch keine eigenen Projekte bearbeitet.</li>
                      <li>2 Pkt: Grundfunktionen ausprobiert und einfache Tutorials durchgearbeitet, braucht aber noch Anleitung.</li>
                      <li>3 Pkt: Selbstständig Standardaufgaben, benötigt Hilfe bei komplexeren Herausforderungen.</li>
                      <li>4 Pkt: Arbeitet effizient, kennt die meisten Funktionen und kann auch anspruchsvollere Aufgaben ohne Hilfe lösen.</li>
                      <li>5 Pkt: Sehr versiert, entwickelt eigene Lösungen für komplexe Probleme und beginnt, Workflows zu optimieren.</li>
                      <li>6 Pkt: PowerMill-Experte, kennt alle Funktionen und Tricks, teilt sein Wissen mit Kollegen und kann innovative Prozesse zur Effizienzsteigerung entwickeln.</li>
                    </ul>
              
                    <h3>2. Sauberkeit</h3>
                    <ul>
                      <li>1 Pkt: Der Arbeitsplatz ist oft unordentlich, Werkzeuge und Materialien sind nicht am vorgesehenen Platz. Aufräumen geschieht selten und meist nur auf Aufforderung.</li>
                      <li>2 Pkt: Der Mitarbeiter bemüht sich um Ordnung, lässt aber häufig Gegenstände herumliegen. Es gibt Verbesserungspotenzial, aber die Grundlagen sind erkennbar.</li>
                      <li>3 Pkt: Der Arbeitsplatz ist in der Regel ordentlich. Werkzeuge und Materialien werden meist nach Gebrauch weggeräumt, gelegentlich gibt es aber noch Unordnung.</li>
                      <li>4 Pkt: Der Mitarbeiter hält seinen Arbeitsplatz sauber und ordentlich. Werkzeuge und Materialien sind immer richtig sortiert und aufgeräumt, mit seltenen Ausnahmen.</li>
                      <li>5 Pkt: Der Arbeitsplatz ist vorbildlich gepflegt. Der Mitarbeiter geht proaktiv vor, um Sauberkeit und Ordnung zu gewährleisten und inspiriert andere, es ihm gleichzutun.</li>
                      <li>6 Pkt: Der Mitarbeiter setzt den Standard für Sauberkeit und Ordnung. Sein Arbeitsplatz könnte als Vorzeigebeispiel dienen, und er nimmt aktiv an Initiativen zur Verbesserung der Arbeitsumgebung teil.</li>
                    </ul>
              
                    <h3>3. Fräserfahrung</h3>
                    <ul>
                      <li>1 Pkt: Der Mitarbeiter hat grundlegende Kenntnisse der Maschinenbedienung, benötigt aber umfassende Anleitung und hat wenig bis keine eigenständige Bearbeitungserfahrung.</li>
                      <li>2 Pkt: Der Mitarbeiter kann einfache Aufgaben selbstständig durchführen, hat aber begrenzte Erfahrung mit komplexeren Projekten und benötigt gelegentlich Unterstützung.</li>
                      <li>3 Pkt: Der Mitarbeiter hat eine solide Erfahrungsbasis, kann die meisten Aufgaben ohne Hilfe ausführen und löst Routineprobleme eigenständig.</li>
                      <li>4 Pkt: Der Mitarbeiter zeigt hohe Kompetenz in der Bedienung der Maschinen, bearbeitet auch anspruchsvollere Projekte effizient und findet kreative Lösungen für Herausforderungen.</li>
                      <li>5 Pkt: Der Mitarbeiter verfügt über umfangreiche Erfahrung, meistert komplexe Bearbeitungsaufgaben souverän und teilt sein Wissen aktiv mit weniger erfahrenen Kollegen.</li>
                      <li>6 Pkt: Der Experte, beherrscht auch spezielle Frästechniken, arbeitet an den anspruchsvollsten Projekten und ist in der Lage, Prozesse und Techniken weiterzuentwickeln.</li>
                    </ul>
              
                    <h3>4. Sportlichkeit</h3>
                    <ul>
                      <li>1.Pkt: Nimmt selten bis nie an körperlicher Aktivität teil, zieht entspannte Freizeitaktivitäten vor.</li>
                      <li>2.Pkt: Betreibt gelegentlich Sport oder körperliche Aktivitäten, wie gelegentliches Spazierengehen oder Radfahren.</li>
                      <li>3.Pkt: Engagiert sich regelmäßig in einer Form von mäßiger körperlicher Aktivität, wie regelmäßiges Reiten, Kegeln oder Fitnessstudio-Besuche.</li>
                      <li>4.Pkt: Betreibt regelmäßig Sport wo man auch richtg in Schwitzen kommt.</li>
                      <li>5 Pkt: Der Mitarbeiter verfügt über umfangreiche Erfahrung, meistert komplexe Bearbeitungsaufgaben souverän und teilt sein Wissen aktiv mit weniger erfahrenen Kollegen.</li>
                      <li>6.Pkt: Erreicht in seiner bevorzugten Sportart ein hohes Leistungsniveau, möglicherweise mit Auszeichnungen oder auf Wettkampfniveau, und dient als Inspiration für andere.</li>
                    </ul>
              
                    <h3>5. Sitzfleisch in der Bude</h3>
                    <ul>
                      <li>1 Pkt: Selten gesichtet.</li>
                      <li>2 Pkt: Bekannt für das legendäre „Ich bleibe nur für ein Bier“ – und meint es jedes Mal ernst</li>
                      <li>3 Pkt: Bleibt lange genug, um die Stimmung zu genießen und ein paar Geschichten auszutauschen.</li>
                      <li>4 Pkt: Findet in den tiefen Gesprächen über das Leben, das Universum und den ganzen Rest seine Berufung.</li>
                      <li>5 Pkt: Meister der „Ok, aber jetzt wirklich das letzte Bier“-Fraktion.</li>
                      <li>6 Pkt: Niemand weiß genau, wann sie gehen, weil sie irgendwie immer noch da sind, wenn das Licht angeht.</li>
                    </ul>
                  </div>
                  <button onClick={togglePopup}>Schließen</button>
                </div>
              </div>
              
            )}
        </>
    );
};

export default InfoPopup;
