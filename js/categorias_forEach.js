/* MÉTODO FOR EACH */

//Inserindo os livros do array na section "Livros" do HTML;
const elementoParaInserirLivros = document.getElementById('livros');


/* Função que cria todo o HTML para cada livro recebido da lista de livros gerada pelo Fetch API */
function exibirOsLivrosNaTela(listaDeLivros){
    elementoParaInserirLivros.innerHTML = '';
    //Para cada livro no array, insere no HTML a div com os dados fornecidos pela API;
    listaDeLivros.forEach(livro => {
        /* //Sem uso de operador ternário
        let disponibilidade = verificarDisponibilidadeDoLivro(livro) */
        
        //Com uso de operador ternário
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel';

        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img src="${livro.imagem}" alt="${livro.alt}" class="${disponibilidade}">
            <h2 class="livro_titulo">${livro.titulo}</h2>
            <p class="livro_descricao">${livro.autor}</p>
            <p class="livro_preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

/*     //Sem uso de operador ternário (parte 2)
    //Função que verifica se o livro possui saldo no estoque ou não (disponível ou não) */
/* function verificarDisponibilidadeDoLivro(livro){
    if (livro.quantidade > 0){
        return 'livro_imagens';
    } else {
        return 'livro_imagens indisponivel'
    }
} */
