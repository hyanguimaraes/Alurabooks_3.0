/* CATEGORIAS DE LIVROS */

//Array vazio "Livros" que irá receber os dados vindos da API;
let livros = [];

//Link da API;
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

//Função get "Buscar Livros da API" 
getBuscarLivrosDaAPI();

//Inserindo os livros do array na section "Livros" do HTML;
const elementoParaInserirLivros = document.getElementById('livros');

//Transformação da função "Buscar Livros da API em Função assíncrona usando o async await;
async function getBuscarLivrosDaAPI() {
    //Constante resposta que busca os dados da API;
    const resposta = await fetch(endPointDaAPI);
    //Atribui ao array "Livros" o que for retornado da API após uma conversão usando json;
    livros = await resposta.json();
    //Registra no console o restorno da API convertido;
    console.table(livros);
    //Chama a função "Exibir os livros na tela", declarada abaixo;
    exibirOsLivrosNaTela(livros);
}

function exibirOsLivrosNaTela(listaDeLivros){
    //Para cada livro no array, insere no HTML a div com os dados fornecidos pela API;
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img src="${livro.imagem}" alt="${livro.alt}" class="livro_imagens">
            <h2 class="livro_titulo">${livro.titulo}</h2>
            <p class="livro_descricao">${livro.autor}</p>
            <p class="livro_preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}