const animais = {
  rex: { tipo: "cão", brinquedos: ["RATO","BOLA"]},
  mami: { tipo: "gato", brinquedos: ["BOLA","LASER"]},
  fofo: {tipo:"gato", brinquedos: ["BOLA","RATO","LASER"]},
  zero: {tipo: "gato", brinquedos: ["RATO","BOLA"]},
  bola: {tipo: "cão", brinquedos: ["CAIXA","NOVELO"]},
  bebe: {tipo: "cão", brinquedos: ["LASER","RATO","BOLA"]},
  loco: {tipo: "jabuti", brinquedos: ["SKATE","RATO"]}
};

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    
    // validação
    const { erro, brinquedos1, brinquedos2, ordem } = validarEntradas( brinquedosPessoa1, brinquedosPessoa2, ordemAnimais, animais);

    if(erro) {
      return {erro};
    }
    
    // regra de adoção
    const resultado = ordem.map((animalNome) =>
      definirAdoção(animalNome, brinquedos1, brinquedos2, animais)
    );

    return {lista: resultado.sort()};
  }
}

export { AbrigoAnimais as AbrigoAnimais };
