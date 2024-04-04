// Importieren notwendiger Abhängigkeiten und Komponenten
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame, compareCardProperties } from '../../redux/actions.js';
import { selectHighestPropertyForComputer } from '../../logic/gameLogic.js';

import '../Card/Card.jsx';
import './GameBoard.scss';
import StartAnimation from '../StartAnimation/StartAnimation.jsx';
import EndAnimation from '../EndAnimation/EndAnimation.jsx';

const GameBoard = () => {

    const togglePropertiesPopup = () => setShowPropertiesPopup(!showPropertiesPopup);
    const { playerCards, computerCards, isGameStarted, isPlayerTurn, lastResult, lastSelectedProperty, lastPlayerValue, lastComputerValue, gameOver } = useSelector(state => state.game);
    const dispatch = useDispatch();
    
    const [resultMessage, setResultMessage] = useState(null);
    const [flipComputerCard, setFlipComputerCard] = useState(true);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [moveCounter, setMoveCounter] = useState(0);
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);
    const [isButtonClickable, setIsButtonClickable] = useState(true);


    const handleAnimationEnd = () => {
        setIsAnimationFinished(true);
    };
    const propertyLabels = {
        property1: "Powermill",
        property2: "Sauberkeit",
        property3: "Fräserfahrung",
        property4: "Sportlichkeit",
        property5: "Sitzfleisch",
      };
  
    const handleStartGame = () => {
        setSelectedProperty(null)
        dispatch(startGame());
    };

    const handlePropertyClick = (property) => {
        setMoveCounter(prevCounter => prevCounter + 1);
        if (playerCards.length > 0 && computerCards.length > 0) {
            setFlipComputerCard(false);
            setSelectedProperty(property);
            const comparisonResult = compareCardProperties(playerCards[0], computerCards[0], property);
            setResultMessage({
                result: comparisonResult.result,
                property: property,
                playerValue: playerCards[0][property],
                computerValue: computerCards[0][property]
            });
            console.log(`${property}->${playerCards[0][property]} vs ${computerCards[0][property]}`);
            setTimeout(() => {
                setFlipComputerCard(true); 
                setTimeout(() => {
                    dispatch(compareCardProperties(playerCards[0], computerCards[0], property)); 
                    setResultMessage(null);
                    setSelectedProperty(null);
                }, 500); 
            }, 5000); 
            
        }
    };

    const handleComputerTurn = () => {
        setIsButtonClickable(false);
        setMoveCounter(prevCounter => prevCounter + 1);
        if (computerCards.length > 0 && playerCards.length > 0) {
            setFlipComputerCard(false);
            const selectedProperty = selectHighestPropertyForComputer(computerCards[0]);
            setSelectedProperty(selectedProperty);
            const comparisonResult = compareCardProperties(playerCards[0], computerCards[0], selectedProperty);
            setResultMessage({
                result: comparisonResult.result,
                property: selectedProperty,
                playerValue: playerCards[0][selectedProperty],
                computerValue: computerCards[0][selectedProperty]
            });
            setTimeout(() => {
                setFlipComputerCard(true);
                setTimeout(() => {
                    dispatch(compareCardProperties(playerCards[0], computerCards[0], selectedProperty));
                    setResultMessage(null);
                    setSelectedProperty(null);
                }, 500); 
                setIsButtonClickable(true); 
                console.log(`[Computerzug] Ausgewählte Eigenschaft: ${selectedProperty}, Spielerwert: ${playerCards[0][selectedProperty]}, Computerwert: ${computerCards[0][selectedProperty]}`);
            }, 5000); 
        }
    };

    let endGameMessage = "";
    if (gameOver) {
        if (playerCards.length === 0) {
            endGameMessage = "Spiel verloren!";
        } else if (computerCards.length === 0) {
            endGameMessage = "Spiel gewonnen!";
        }
    }

      
    return (
        <>
             {gameOver ? (
                 <EndAnimation playerWon={playerCards.length > 0} />
            ) : (
                <>
                    {isGameStarted ? (
                        <div className="game-container">
                            <div className="player-cards">
                                <div className="card-count">Spieler  {playerCards.length}</div>
                                {playerCards.length > 0 && 
                                    <Card 
                                    card={playerCards[0]} 
                                    onPropertyClick={handlePropertyClick}
                                    isClickable={isPlayerTurn} 
                                    isPlayerCard={true}
                                    /> 
                                }
                            </div>
                            <div className='result'>
                                <div className={`button-container ${isPlayerTurn ? 'hidden-button' : 'visible-button'}`}>
                                    {!isPlayerTurn && (
                                    <button className="button" onClick={handleComputerTurn} disabled={!isButtonClickable}>Dominik-Auswahl</button>
                                    )}
                                </div>  
                                {selectedProperty && resultMessage && (
                                    <div className={`selected-property ${resultMessage.playerValue > resultMessage.computerValue ? 'result-win' : resultMessage.playerValue < resultMessage.computerValue ? 'result-lose' : 'result-draw'}`}>
                                    <p>{propertyLabels[selectedProperty] || "Keine Eigenschaft ausgewählt"}</p>
                                    <p> {resultMessage.playerValue} vs. {resultMessage.computerValue}</p>
                                    {resultMessage.playerValue > resultMessage.computerValue ? (
                                        <p className="result-highlight">Win!</p>
                                    ) : resultMessage.playerValue < resultMessage.computerValue ? (
                                        <p className="result-highlight">Lose!</p>
                                    ) : (
                                        <p className="result-highlight">Draw!</p>
                                    )}
                                    </div>
                                )}
                            </div>
                            <div className="computer-cards">
                                <div className="card-count">Dominik {computerCards.length}</div>
                                {computerCards.length > 0 && 
                                    <Card 
                                    card={computerCards[0]}
                                    shouldFlip={flipComputerCard}
                                    isClickable={false} 
                                    isPlayerCard={false}
                                />
                                }
                            </div>
                        </div>
                    ) : (
                        <>
                            <StartAnimation onAnimationEnd={handleAnimationEnd}/>
                            {isAnimationFinished && (
                            <>
                                <div className="rotate-device">
                                    Bitte drehen Sie Ihr Gerät für die beste Ansicht.
                                </div>
                                <button className="button" onClick={handleStartGame}>Spiel Starten</button>
                            </>
                            )}
                        </>
                    )}
                </>
            )} 
        </>
    );
};

export default GameBoard;
