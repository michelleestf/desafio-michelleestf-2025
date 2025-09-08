function Adocao(brinquedos1, brinquedos2, ordem, animais) {
    const lista = [];
    const contagem = { pessoa1: 0, pessoa2: 0 };

    for (let nome of ordem) {
        const animal = animais[nome];
        if (!animal) continue;

        const favorito = animal.brinquedos;

        const podePessoa = (brinquedosPessoa, pessoa) => {
            let idx = 0;
            for (let b of brinquedosPessoa) {
                if (animal.tipo === "gato") {
                    // regra gatos
                    if (b === favorito[idx]) idx++;
                } else if (nome === "Loco") {
                    // regra Loco
                    if (brinquedosPessoa.includes(favorito[idx])) idx++;
                } else {
                    // Outros animais podem intercalar
                    if (b === favorito[idx]) idx++;
                }
                if (idx === favorito.length) break;
            }
            return idx === favorito.length && contagem[pessoa] < 3;
        };

        const gostaPessoa1 = podePessoa(brinquedos1, "pessoa1");
        const gostaPessoa2 = podePessoa(brinquedos2, "pessoa2");

        let resultado = "";

        if (gostaPessoa1 && gostaPessoa2) {
            resultado = `${nome} - abrigo`;
        } else if (gostaPessoa1) {
            resultado = `${nome} - pessoa 1`;
            contagem.pessoa1++;
        } else if (gostaPessoa2) {
            resultado = `${nome} - pessoa 2`;
            contagem.pessoa2++;
        } else {
            resultado = `${nome} - abrigo`;
        }

        lista.push(resultado);
    }

    // Ordem alfabética 
    return lista.sort((a, b) => {
        const nomeA = a.split(" - ")[0].toUpperCase();
        const nomeB = b.split(" - ")[0].toUpperCase();
        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
    });
}

export { Adocao };
