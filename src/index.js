const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let phraseFinal = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        let phrase = '';
        let phraseMorz = '';
        let phraseMod = '';
        phrase = phrase + expr.slice(i, i + 10).replace(/^0+/, '');
       
        
        phraseMorz = phrase.replace(/11/gi, '-').replace(/10/gi, '.');
       
       
        for (let key in MORSE_TABLE) {
            if (key === phraseMorz) {
                phraseMod = phraseMod + MORSE_TABLE[key];
            } 
            
        }
        phraseFinal += phraseMod;
        
    }
    return phraseFinal;
}

module.exports = {
    decode
}