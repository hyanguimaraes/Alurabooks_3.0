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
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);

    /* Verifica os livros que possuem a categoria 'disponivel' e chama a função 'Exibir valor total dos livros disponíveis na tela' */
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

/* Função 'Exibir valor total dos livros disponíveis na tela' que adiciona o HTML da seção que mostra o somatório dos preços dos livros disponíveis em cada categoria selecionada */
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <section id="valor_total_livros_disponiveis">
        <div class="livros_disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    </section>
    `
}