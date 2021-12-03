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
  let inicio = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      splitedSentence.push(string.slice(inicio, index));
      inicio = index + 1;
    } else if (index === string.length - 1) {
      splitedSentence.push(string.slice(inicio, index + 1));
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
function maisSeRepete(array) {
  let maior = array[0];
  for (let number of array) {
    if (number > maior) {
      maior = number;
    }
  }
  return maior;
}

function highestCount(array) {
  let count = 0;
  let maior = maisSeRepete(array);
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
function ehDivisivelSoPorCinco(verificarNumber) {
  let result;
  if (verificarNumber % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function ehDivisivelSoPorTres(verificarNumber) {
  let result;
  if (verificarNumber % 3 === 0) {
    result = 'fizz';
  } else {
    result = ehDivisivelSoPorCinco(verificarNumber);
  }
  return result;
}

function ehDivisivelPorTresECinco(verificarNumber) {
  let result;
  if (verificarNumber % 3 === 0 && verificarNumber % 5 === 0) {
    result = 'fizzBuzz';
  } else {
    result = ehDivisivelSoPorTres(verificarNumber);
  }
  return result;
}

function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let number of array) {
    arrayFizzBuzz.push(ehDivisivelPorTresECinco(number));
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
