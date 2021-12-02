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
function generatePhoneNumber() {
  //
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
