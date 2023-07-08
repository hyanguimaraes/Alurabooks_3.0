/* MÉTODO SORT */

/* Captura o botão de ordenação por preço */
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

/* Detecta o click no botão de ordenação por preço */
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

/* Função de ordenação dos livros por preço */
function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}