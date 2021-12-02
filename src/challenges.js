// Desafio 1
function compareTrue(value1, value2) {
  let resultado;
  if (value1 === true && value2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitedSentence = [];
  let particion = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ' && index !== string.length - 1) {
      particion += string[index];
    } else if (index === string.length - 1) {
      particion += string[index];
      splitedSentence.push(particion);
    } else {
      splitedSentence.push(particion);
      particion = '';
    }
  }
  return splitedSentence;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let poits = wins * 3 + ties;
  return poits;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let count = 0;
  for (let number of array) {
    if (number > maior) {
      maior = number;
    }
  }
  for (let verificador of array) {
    if (verificador === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catProximo;
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    catProximo = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    catProximo = 'cat2';
  } else {
    catProximo = 'os gatos trombam e o rato foge';
  }
  return catProximo;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (number % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (number % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!')
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let vogaisToNumber = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5' };
  let phrase = '';
  for (let letra of string) {
    if (vogaisToNumber[letra] !== undefined) {
      phrase += vogaisToNumber[letra];
    } else {
      phrase += letra;
    }
  }
  return phrase;
}

function decode(string) {
  let numberToVogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u' };
  let phrase = '';
  for (let element of string) {
    if (numberToVogais[element] !== undefined) {
      phrase += numberToVogais[element];
    } else {
      phrase += element;
    }
  }
  return phrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
