/* MÉTODO FOR EACH */

//Inserindo os livros do array na section "Livros" do HTML;
const elementoParaInserirLivros = document.getElementById('livros');

function exibirOsLivrosNaTela(listaDeLivros){
    //Para cada livro no array, insere no HTML a div com os dados fornecidos pela API;
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img src="${livro.imagem}" alt="${livro.alt}" class="livro_imagens">
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
