import { validarEntradas } from "./validacoes-abrigo-animais.js";
import { Adocao } from "./regras-abrigo-animais.js";

const animais = {
  Rex: { tipo: "cão", brinquedos: ["RATO", "BOLA"] },
  Mimi: { tipo: "gato", brinquedos: ["BOLA", "LASER"] },
  Fofo: { tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
  Zero: { tipo: "gato", brinquedos: ["RATO", "BOLA"] },
  Bola: { tipo: "cão", brinquedos: ["CAIXA", "NOVELO"] },
  Bebe: { tipo: "cão", brinquedos: ["LASER", "RATO", "BOLA"] },
  Loco: { tipo: "jabuti", brinquedos: ["SKATE", "RATO"] }
};

class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const { erro, listaPessoa1, listaPessoa2, ordem } = validarEntradas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais, animais);

    if (erro) {
      return { erro };
    }

    const lista = Adocao(listaPessoa1, listaPessoa2, ordem, animais);
    return { lista, erro: null };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
