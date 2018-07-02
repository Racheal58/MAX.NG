const MORSE_CODE = {
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

// the function below has 3 variables which are word, letter, and decoded which accepts the words, letters and decoded values of the morse code
function decodeMorse (morseCode) {
    const word = (morseCode).split(' ');
    const letter = word.map((w) => w.split(' '));
    const decoded = [];

    // the function below checks the lenght of the letter so it in the variable decoded and the second function checks the morse code dictionary decodes it
    for(var i = 0; i < letter.lenght; i++) {
        decoded[i] = [];
        for(var x = 0; x< letter.lenght; x++) {
            if(MORSE_CODE[letter[i][x]]) {
               decoded[i].push( MORSE_CODE[letter[i][x]]); 
            }
        } 
    }

}

console.log(decodeMorse);