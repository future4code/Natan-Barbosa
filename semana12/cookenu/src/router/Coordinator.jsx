export const irParaLogin = (history) => {
    history.push("/Login")
}

export const irParaLista = (history) => {
    history.push("/")
}

export const irParaCadastro = (history) => {
    history.push("/Cadastro")
}

export const irParaAdicionarReceita = (history) => {
    history.push("/AdicionarReceita")
}

export const irParaDetalhes = (history, id) => {
    history.push(`/DetalhesReceita/${id}`)
}

