function manexadorDeExcepcions(excepcion, resposta) {
    resposta.sendStatus(500)
    console.error(excepcion);
}

export default manexadorDeExcepcions