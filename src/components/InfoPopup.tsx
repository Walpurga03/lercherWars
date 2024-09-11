import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface InfoPopupProps {
  className?: string;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ className }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard');
    });
  };

  return (
    <>
      <button className={className} onClick={togglePopup}>Info</button>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="about-me">
            <div className="properties-info">
                    <h2>Einstufungsprozess!</h2>
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
              <h2>{t('info.aboutMe')}</h2>
              <p>{t('info.description')}</p>
              <p>
                {t('info.customizeMessage')}
                <div>
                  <a href={t('info.githubLink')} target="_blank" rel="noopener noreferrer">
                    <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default" style={{ width: '20px', marginRight: '10px' }}>
                      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                    </svg>
                    {t('info.github')}
                  </a>
                </div>
              </p>
              <p>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.7502 1.5C13.3359 1.5 13.0002 1.83579 13.0002 2.25C13.0002 2.44257 13.0717 2.61663 13.191 2.74981C13.2963 2.86751 13.4367 2.95067 13.5937 2.98382C13.6435 2.99433 13.6958 3 13.7502 3C14.1644 3 14.5002 2.66421 14.5002 2.25C14.5002 1.83579 14.1644 1.5 13.7502 1.5ZM11.5002 2.25C11.5002 1.00736 12.5075 0 13.7502 0C14.7298 0 15.5632 0.626106 15.8721 1.5H17.2502C17.6644 1.5 18.0002 1.83579 18.0002 2.25C18.0002 2.66421 17.6644 3 17.2502 3H15.8721C15.7646 3.30433 15.5934 3.5786 15.3746 3.80685C15.8823 4.15684 16.2746 4.56859 16.5559 5.03129C17.0977 5.92273 17.1689 6.90747 16.9843 7.79359C16.803 8.66356 16.4559 9.21659 16.076 9.55603C16.0407 9.58759 16.0055 9.61689 15.9707 9.64408C15.9901 9.86441 15.987 10.0911 15.961 10.3234C15.8963 11.095 15.7248 11.9737 14.9635 12.7682C14.447 13.3072 13.7758 13.6448 13.2782 13.8437C13.0474 13.936 12.8402 14.0039 12.6813 14.0508C12.5887 14.2176 12.4689 14.451 12.3551 14.7243C12.1564 15.2017 11.999 15.7473 12.0002 16.2484C12.0011 16.664 12.1111 17.3476 12.2365 17.9768C12.2743 18.1665 12.3122 18.3447 12.3464 18.5001H13.2502C13.6644 18.5001 14.0002 18.8359 14.0002 19.2501C14.0002 19.6643 13.6644 20.0001 13.2502 20.0001H9.50017C9.15558 20.0001 8.85533 19.7653 8.77228 19.4308L9.50017 19.2501C8.77228 19.4308 8.77228 19.4308 8.77228 19.4308L8.77052 19.4237L8.76601 19.4053L8.74947 19.337C8.73534 19.2781 8.71532 19.1935 8.69136 19.0891C8.64351 18.8806 8.5796 18.5917 8.51548 18.2701C8.39148 17.6482 8.25146 16.8318 8.25017 16.2518C8.24854 15.5227 8.455 14.8065 8.6849 14.2341C8.16639 14.1203 7.6883 13.9364 7.28499 13.7003C6.8511 13.4462 6.41419 13.0729 6.17829 12.5938H2.75029C2.4353 12.5938 2.15363 12.3969 2.04556 12.1011C1.93749 11.8052 2.0258 11.4733 2.26663 11.2703L3.18599 10.4953C2.80831 10.4564 2.51374 10.1372 2.51374 9.74926C2.51374 8.4257 3.50881 7.51335 4.62109 6.95581C5.76228 6.38377 7.24656 6.05918 8.72722 5.97699C10.2102 5.89468 11.7615 6.05149 13.0442 6.50251C13.9451 6.81927 14.793 7.31253 15.3456 8.03745C15.4073 7.89899 15.4675 7.71949 15.5158 7.48766C15.6401 6.89125 15.5786 6.31137 15.2741 5.81039C14.9722 5.31375 14.3741 4.8005 13.2451 4.44292C12.7831 4.33682 12.3768 4.0893 12.0732 3.75019C11.7174 3.35262 11.5002 2.82579 11.5002 2.25ZM10.8948 14.3362C10.6852 14.3506 10.4759 14.3595 10.2686 14.3634C10.0228 14.8666 9.74868 15.5834 9.75016 16.2484C9.75109 16.664 9.86108 17.3476 9.98652 17.9768C10.0243 18.1665 10.0622 18.3447 10.0964 18.5001H10.8124C10.7969 18.4258 10.7812 18.349 10.7655 18.2701C10.6415 17.6482 10.5015 16.8318 10.5002 16.2518C10.4986 15.5522 10.6874 14.8745 10.8948 14.3362Z" fill="#CA36B9"></path>
                </svg>
                {t('info.nostr')}: {t('info.nostrPubKey')}
                <button onClick={() => copyToClipboard(t('info.nostrPubKey'))} style={{ marginLeft: '10px' }}>
                  Copy
                </button>
              </p>
            </div>
            <div>
              <lightning-widget
                name={t('info.widgetName')}
                button-text={t('info.widgetButtonText')}
                to="aldobarazutti@getalby.com"
                labels="☕,🍺,🍕"
                amounts="2500,5000,25000"
                accent="#444444">
              </lightning-widget>
            </div>
            <div className='schliesen-button'>
              <button className="button" onClick={togglePopup}>{t('info.closeButton')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoPopup;