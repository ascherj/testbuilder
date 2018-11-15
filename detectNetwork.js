// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var cardLength = cardNumber.length;
  var firstDigit = Number(cardNumber.slice(0, 1));
  var firstTwoDigits = Number(cardNumber.slice(0, 2));
  var firstThreeDigits = Number(cardNumber.slice(0, 3));
  var firstFourDigits = Number(cardNumber.slice(0, 4));

  var isDinersClub = (cardLength === 14 && firstTwoDigits === 38 || firstTwoDigits === 39);
  var isAmericanExpress = (cardLength === 15 && firstTwoDigits === 34 || firstTwoDigits === 37);
  var isVisa = ((cardLength === 13 || cardLength === 16 || cardLength === 19) && firstDigit === 4);
  var isMasterCard = (cardLength === 16 && firstTwoDigits >= 51 && firstTwoDigits <= 55);
  var isDiscover = (cardLength === 16 || cardLength === 19) &&
                   (firstFourDigits === 6011 || (firstThreeDigits >= 644 && firstThreeDigits <= 649) || firstTwoDigits === 65);
  var isMaestro = (cardLength >= 12 && cardLength <= 19) &&
                  (firstFourDigits === 5018 || firstFourDigits === 5020 || firstFourDigits === 5038 || firstFourDigits === 6304);

  if (isDinersClub) {
    return 'Diner\'s Club';
  } else if (isAmericanExpress) {
    return 'American Express';
  } else if (isVisa) {
    return 'Visa';
  } else if (isMasterCard) {
    return 'MasterCard';
  } else if (isDiscover) {
    return 'Discover';
  } else if (isMaestro) {
    return 'Maestro';
  }
};