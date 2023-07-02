/* CATEGORIAS DE LIVROS */

//Array vazio "Livros" que irá receber os dados vindos da API;
let livros = [];

//Link da API;
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

//Função get "Buscar Livros da API" 
getBuscarLivrosDaAPI();

//Transformação da função "Buscar Livros da API em Função assíncrona usando o async await;
async function getBuscarLivrosDaAPI() {
    //Constante resposta que busca os dados da API;
    const resposta = await fetch(endPointDaAPI);
    //Atribui ao array "Livros" o que for retornado da API após uma conversão usando json;
    livros = await resposta.json();
    //Variável "Livros com desconto" que chama a função aplicar desconto (método map);
    let livrosComDesconto = aplicarDesconto(livros);
    //Chama a função "Exibir os livros na tela", declarada abaixo;
    exibirOsLivrosNaTela(livrosComDesconto);
}
