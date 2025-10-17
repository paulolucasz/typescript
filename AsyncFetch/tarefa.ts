async function AcessarApi() {
    try {
        const conteudo = await fetch('https://meowfacts.herokuapp.com/');

        if (!conteudo.ok) {
            throw new Error(`Erro ao obter dados`);
        }

        const data = await conteudo.json()

        return data.data[0];

    } catch (erro: any) {
        return erro.message;
    }
}

(async function exibirResultado() {
    for (let i = 0; i < 10; i++) {
        const resulradoFuncao = await AcessarApi();
        console.log(resulradoFuncao)
    }

})()

