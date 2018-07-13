const morseCODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS',
};

Object.freeze(morseCODE);

function decodeMorse(morseCode) {
  const englishWord = [];
  const code = morseCode.trim().split(' ');
  // eslint-disable-next-line
  if (morseCode === '') {
    return '';
  }
  for (let i = 0; i < code.length; i += 1) {
    if (
      // testing for words
      morseCODE[code[i]] === undefined
      && morseCODE[code[i + 1]] === undefined
      && morseCode[code[i + 2]] === undefined
    ) {
      englishWord.push(' ');
    } else if (
      // testing for letters
      morseCODE[code[i]] === undefined
      && morseCODE[code[i + 1]] !== undefined
      && morseCode[code[i + 2]] !== undefined
    ) {
      englishWord.push(' ');
    } else {
      englishWord.push(morseCODE[code[i]]);
    }
  }
  const a = englishWord.join('');
  return a;
}

module.exports = decodeMorse;
