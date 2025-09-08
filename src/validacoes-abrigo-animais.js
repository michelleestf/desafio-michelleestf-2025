function validarEntradas(brinquedosPessoa1, brinquedosPessoa2, ordemStr, animais) {
    if (!brinquedosPessoa1 || !brinquedosPessoa2 || !ordemStr) {
        return { erro: "Entradas inválidas" };
    }

    const listaPessoa1 = brinquedosPessoa1.split(",").map(s => s.trim().toUpperCase());
    const listaPessoa2 = brinquedosPessoa2.split(",").map(s => s.trim().toUpperCase());
    const ordem = ordemStr.split(",").map(s => s.trim());
    const setOrdem = new Set(ordem);

    if (setOrdem.size !== ordem.length) return { erro: "Animal inválido" };

    for (let nome of ordem) {
        if (!animais[nome]) return { erro: "Animal inválido" };
    }

    if (new Set(listaPessoa1).size !== listaPessoa1.length || new Set(listaPessoa2).size !== listaPessoa2.length) {
        return { erro: "Brinquedo inválido" };
    }

    return { erro: null, listaPessoa1, listaPessoa2, ordem };
}

export { validarEntradas };
