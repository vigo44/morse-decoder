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
};

function decode(expr) {
    let expArr = expr.match(/.{10}/g);
    for (let i=0; i<expArr.length; i++) {
      if ('**********'== expArr[i]) { 
        expArr[i]=' ';
        continue;
      }
      expArr[i]= (+ expArr[i])+'';
      expArr[i]= expArr[i].replace(/10/g, '.');
      expArr[i]= expArr[i].replace(/11/g, '-');
      expArr[i]= MORSE_TABLE[expArr[i]];
    }
    return (expArr.join(''));
}

module.exports = {
    decode
}