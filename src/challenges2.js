// Desafio 10
function techList(arrayTech, nome) {
  let resultado;
  if (arrayTech.length > 0) {
    arrayTech = arrayTech.sort();
    resultado = [];
    for (let index = 0; index < arrayTech.length; index += 1) {
      resultado.push({
        tech: arrayTech[index],
        name: nome });
    }
  } else {
    resultado = 'Vazio!';
  }
  return resultado;
}

// Desafio 11
function diferenteDeOnze(arrayOfNumbers) {
  let result = false;
  if (arrayOfNumbers.length !== 11) {
    result = true;
  }
  return result;
}
function repeteTresMais(index, arrayOfNumbers) {
  let result = false;
  let count = 0;
  for (let kindex = index; kindex < arrayOfNumbers.length; kindex += 1) {
    if (arrayOfNumbers[index] === arrayOfNumbers[kindex]) {
      count += 1;
    }
  }
  if (count >= 3) {
    result = true;
  }
  return result;
}

function verificaNumerosRepetidos(arrayOfNumbers) {
  let result;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    result = repeteTresMais(index, arrayOfNumbers);
    if (result === true) {
      break;
    }
  }
  return result;
}

function menorQueZeroMaiorQueNove(arrayOfNumbers) {
  let result = false;
  for (let number of arrayOfNumbers) {
    if (number < 0 || number > 9) {
      result = true;
      break;
    }
  }
  return result;
}

function phoneNumber(arrayOfNumbers) {
  let string = '';
  for (let number of arrayOfNumbers) {
    string += number;
  }
  let result = `(${string.slice(0, 2)}) ${string.slice(2, 7)}-${string.slice(7, 11)}`;
  return result;
}

function generatePhoneNumber(arrayOfNumbers) {
  let array = arrayOfNumbers;
  let result;
  if (diferenteDeOnze(array) === true) {
    result = 'Array com tamanho incorreto.';
  } else if (verificaNumerosRepetidos(array) === true || menorQueZeroMaiorQueNove(array) === true) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = phoneNumber(array);
  }
  return result;
}

// Desafio 12
function firstCondition(lineA, lineB, lineC) {
  let result = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  }
  return result;
}

function secondCondition(lineA, lineB, lineC) {
  let result = false;
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    result = true;
  }
  return result;
}

function thirdCondition(lineA, lineB, lineC) {
  let result = false;
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    result = true;
  }
  return result;
}

function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  let conditionOne = firstCondition(lineA, lineB, lineC);
  let conditionTwo = secondCondition(lineA, lineB, lineC);
  let conditionThree = thirdCondition(lineA, lineB, lineC);
  if (conditionOne === true && conditionTwo === true && conditionThree === true) {
    result = true;
  }
  return result;
}

// Desafio 13
function findNumber(string) {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let strNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let count = 0;
  for (let element of string) {
    if (strNumber.indexOf(element) !== -1) {
      count += numbers[strNumber.indexOf(element)];
    }
  }
  return count;
}

function hydrate(string) {
  let coposDeAgua = findNumber(string);
  let phrase;
  if (coposDeAgua > 1) {
    phrase = `${coposDeAgua} copos de água`;
  } else {
    phrase = `${coposDeAgua} copo de água`;
  }
  return phrase;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
