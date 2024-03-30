export const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
};
export const dealCards = (shuffledCards) => {
  const half = Math.ceil(shuffledCards.length / 2);
  const playerCards = shuffledCards.slice(0, half);
  const computerCards = shuffledCards.slice(half);
  return { playerCards, computerCards };
};
export const compareCardProperties = (playerCard, computerCard, propertyName) => {
  const propertyNamesMapping = {
      property1: 'Powermill',
      property2: 'Sauberkeit',
      property3: 'Fräserfahrung',
      property4: 'Sportlichkeit',
      property5: 'Sitzfleisch'
  };
  const propertyToCompare = propertyName;
  const readablePropertyName = propertyNamesMapping[propertyToCompare];
  const playerValue = playerCard[propertyToCompare];
  const computerValue = computerCard[propertyToCompare];
  let result;
  if (playerValue > computerValue) {
      result = 'win';
  } else if (playerValue < computerValue) {
      result = 'lose';
  } else {
      result = 'draw';
  }
  return {
      result: result,
      propertyName: readablePropertyName,
      playerValue: playerValue,
      computerValue: computerValue
  };
};
export const selectHighestPropertyForComputer = (computerCard) => {
  let highestValue = -Infinity;
  let propertiesWithHighestValue = [];
  
  // Finde den höchsten Wert
  ['property1', 'property2', 'property3', 'property4', 'property5'].forEach(prop => {
    if (computerCard[prop] > highestValue) {
      highestValue = computerCard[prop];
    }
  });

  // Sammle alle Eigenschaften mit dem höchsten Wert
  ['property1', 'property2', 'property3', 'property4', 'property5'].forEach(prop => {
    if (computerCard[prop] === highestValue) {
      propertiesWithHighestValue.push(prop);
    }
  });

  // Wähle zufällig eine der Eigenschaften mit dem höchsten Wert
  if (propertiesWithHighestValue.length > 0) {
    const randomIndex = Math.floor(Math.random() * propertiesWithHighestValue.length);
    return propertiesWithHighestValue[randomIndex];
  } else {
    // Sicherheitsrückfall, sollte theoretisch nie erreicht werden, da immer mindestens eine Eigenschaft existiert
    return 'property1';
  }
};

