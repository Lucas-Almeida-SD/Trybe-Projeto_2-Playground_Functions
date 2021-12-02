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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
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
