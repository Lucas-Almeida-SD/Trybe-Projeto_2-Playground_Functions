// Desafio 10
function techList(arrayTech, nome) {
  let resultado;
  if (arrayTech.length > 0) {
    arrayTech = arrayTech.sort();
    resultado = [];
    for (let index = 0; index < arrayTech.length; index += 1) {
      resultado.push({ tech: arrayTech[index], name: nome });
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

function repeteTresVezes(arrayOfNumbers) {
  let result = false;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let count = 0;
    for (let kindex of arrayOfNumbers) {
      if (arrayOfNumbers[index] === kindex) {
        count += 1;
      }
    }
    if (count >= 3) {
      result = true;
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
  } else if (repeteTresVezes(array) === true || menorQueZeroMaiorQueNove(array) === true) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = phoneNumber(array);
  }
  return result;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
