/* MÉTODO MAP */

//Função "Aplicar Desconto" chamada dentro da função "get Buscar Livros da API" no arquivo 'categorias_main.js'/
function aplicarDesconto(livros){
    //Percentual de desconto;
    const desconto = 0.3;
    //Aplicação do método map;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}