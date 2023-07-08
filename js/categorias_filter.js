/* MÉTODO FILTER */

//Seleciona todos os botões do HTML.
const botoes = document.querySelectorAll('.btn');

/* Detecta o click em qualquer botão que seja e chama a função
filtrarLivros */
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){

    /* Pega o id do botão clicado */
    const elementoBtn = document.getElementById(this.id);

    /* Pega o que está no "value" (dentro do HTML) do botão clicado */
    const categoria = elementoBtn.value;

    /* Nova variável "Livros Filtrados" é criada. Usando um operador ternário, o filtro pega apenas os livros marcados como disponíveis. Caso contrário, usa como filtro a categoria (value) daquele botão*/    
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}