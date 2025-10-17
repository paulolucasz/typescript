// Função async para buscar um fato sobre gatos
async function buscarFatoDeGato() {
  try {
    // 1. Faz a chamada para a API e aguarda a resposta
    const resposta = await fetch('https://meowfacts.herokuapp.com/');

    // 2. Verifica se a resposta da rede foi bem-sucedida
    if (!resposta.ok) {
      // Se não for 'ok', lança um erro que será capturado pelo catch
      throw new Error(`Erro na rede: ${resposta.status}`);
    }

    // 3. Converte a resposta para JSON e aguarda o resultado
    const dados = await resposta.json();

    // 4. Exibe o fato no console
    console.log('Fato sobre gatos:', dados.data[0]);
    
  } catch (erro:any) {
    // 5. Captura e exibe qualquer erro que ocorra no bloco try
    console.error('Falha ao buscar fato sobre gatos:', erro.message);
  }
}

// Chama a função para executá-la
buscarFatoDeGato();