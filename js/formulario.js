/* FORMULÁRIO */

/* Variável "CEP" que recebe o elemento "CEP" do HTML. */
var cep = document.getElementById('cep');

/* Captura um evento no elemento "CEP", com o EventListener que permite chamar funções quando ocorre alguma interação do usuário em específico.
no caso, quando o usuário clica fora do elemento, ativando a função busca endereço com o CEP digitado como parâmetro. */
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

/* Variável "Mensagem erro" que recebe o elemento "Erro" do HTML. */
var mensagemErro = document.getElementById('erro');

/* Variável "Endereço" que recebe o elemento "Endereço" do HTML. */
var endereco = document.getElementById('endereco');

/* Variável "Bairro" que recebe o elemento "Bairro" do HTML. */
var bairro = document.getElementById('bairro');

/* Variável "Cidade" que recebe o elemento "Cidade" do HTML. */
var cidade = document.getElementById('cidade');

/* Variável "Estado" que recebe o elemento "Estado" do HTML. */
var estado = document.getElementById('estado');


/* Função assíncrona "Busca Endereço" que recebe como parâmetro um CEP. Esta tenta, em background, através da variável "Consulta CEP",
    buscar o cep recebido na API ViaCEP.
    A variável "Consulta CEP convertida" recebe o rasultado desta consulta, convertendo-o com json.
    Se o retorno for um CEP errado, a variável retorna a mensagem "CEP não existente", caso contrário, retorna o CEP convertido.
    Se houver um erro na busca, este é registrado no console. */

async function buscaEndereco(cep){
    /* Mensagem vazia na div "Erro" do HTML. */
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`); /* ${}para valores dinâmicos */
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEP não existente!');
        }

        /* Alteração dos valores dos elementos no HTML. */
        endereco.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        /* Caso a busca retorne um erro: */

        /* Mostra a mensagem de erro na div "Erro" do HTML. */
        mensagemErro.innerHTML = `<p>⚠️ CEP inválido. Tente novamente! ⚠️</p>`;


        /* Apaga os valores dos elementos no HTML. */
        endereco.value = "";
        bairro.value = "";
        cidade.value = "";
        estado.value = "";
    }
}
