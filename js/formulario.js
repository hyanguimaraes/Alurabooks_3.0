//EXEMPLO DE FUNÇÕES RETIRADOS DO SITE DA API 'VIACEP'//

/*function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;
//EXEMPLO DE USO DESTA API, EM JS, RETIRADO DIRETAMENTE DO SITE "VIACEP": https://viacep.com.br/exemplo/javascript/
    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        document.getElementById('ibge').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
}; */


// MÉTODO 01 //
/* var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse CEP não existe!');
        } else {
            console.log(r);
        }
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído'));

console.log(consultaCEP); */


// MÉTODO 02 //
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
