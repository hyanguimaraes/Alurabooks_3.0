//JAVASCRIPT PARA O CARROSSEL


//VARIÁVEIS
//Largura da imagem do slide + margem direita
const larguraSlide = 175+20

//Contador de slide
let slideAtual_01 = 0;

//Contador de slide
let slideAtual_02 = 0;

//Decalarando o máximo de slides visível
let maxSlides_01;
let maxSlides_02;


//SELECIONANDO ITENS HTML DO CARRSSEL 01
//Selecionando todos os slides do carrossel 01
const slides_01 = document.querySelectorAll('.carrossel_01_slides');

//Selecionando o botão para o slide anterior
const slideAnterior_01 = document.querySelector('.botao_anterior_01');

//Selecionando o botão para o próximo slide
const proximoSlide_01 = document.querySelector('.botao_proximo_01');

//Selecionando os botões radio
const marcacao_01 = document.querySelectorAll('.marcacao_01');

//Deixando o primeiro botão radio sempre marcado
marcacao_01[slideAtual_01].checked = true;


//SELECIONANDO ITENS HTML DO CARRSSEL 02
//Selecionando todos os slides do carrossel 02
const slides_02 = document.querySelectorAll('.carrossel_02_slides');

//Selecionando o botão para o slide anterior
const slideAnterior_02 = document.querySelector('.botao_anterior_02');

//Selecionando o botão para o próximo slide
const proximoSlide_02 = document.querySelector('.botao_proximo_02');

//Selecionando os botões radio
const marcacao_02 = document.querySelectorAll('.marcacao_02');

//Deixando o primeiro botão radio sempre marcado
marcacao_02[slideAtual_02].checked = true;


//FUNÇÕES
//Limitando o número de slides (slides.length pega os 2 carrossel, por isso ele é dividido por 2. Depois ele é subtraído por 2, porque 2 slides estão sempre visíveis)
//Detectando tamanho da tela
const mediaQuery = window.matchMedia('(min-width: 1024px)');
if (mediaQuery.matches){
    maxSlides_01 = (slides_01.length) - 3;
    maxSlides_02 = (slides_02.length) - 3;
} else {
    maxSlides_01 = (slides_01.length) - 2;
    maxSlides_02 = (slides_02.length) - 2;
}

//FUNÇÕES CARROSSEL 01
//Event listener para o botão_anterior e funcionalidade de voltar os slides
slideAnterior_01.addEventListener('click', function(){

    //Condição para checkar se slideAtual é o primeiro e fazer o loop inverso
    if (slideAtual_01 === 0) {
        slideAtual_01 = maxSlides_01;
    } else {
        slideAtual_01--;
    }

    //movimenta slides no eixo x
    slides_01.forEach((slide, largura) => {
        slide.style.transform =`translateX(${1-(larguraSlide * slideAtual_01)}px)`;
    });

    //Seleção do botão radio ativo
    marcacao_01[slideAtual_01].checked = true;

})

//Adicionando um event listener e a funcionalidade de navegação
proximoSlide_01.addEventListener('click', function() {

    //Condição para checkar se o slide atual é o último e resetar slideAtual
    if (slideAtual_01 === maxSlides_01) {
        slideAtual_01 = 0;
    } else {
        slideAtual_01++;
    }

    //movimenta slides no eixo x
    slides_01.forEach((slide, largura) => {
        slide.style.transform =`translateX(${1-(larguraSlide * slideAtual_01)}px)`;
    });

    //Seleção do botão radio ativo
    marcacao_01[slideAtual_01].checked = true;

});

//FUNÇÕES CARROSSEL 02
//Event listener para o botão_anterior e funcionalidade de voltar os slides
slideAnterior_02.addEventListener('click', function(){

    //Condição para checkar se slideAtual é o primeiro e fazer o loop inverso
    if (slideAtual_02 === 0) {
        slideAtual_02 = maxSlides_02;
    } else {
        slideAtual_02--;
    }

    //movimenta slides no eixo x
    slides_02.forEach((slide, largura) => {
        slide.style.transform =`translateX(${1-(larguraSlide * slideAtual_02)}px)`;
    });

    //Seleção do botão radio ativo
    marcacao_02[slideAtual_02].checked = true;

})

//Adicionando um event listener e a funcionalidade de navegação
proximoSlide_02.addEventListener('click', function() {

    //Condição para checkar se o slide atual é o último e resetar slideAtual
    if (slideAtual_02 === maxSlides_02) {
        slideAtual_02 = 0;
    } else {
        slideAtual_02++;
    }

    //movimenta slides no eixo x
    slides_02.forEach((slide, largura) => {
        slide.style.transform =`translateX(${1-(larguraSlide * slideAtual_02)}px)`;
    });

    //Seleção do botão radio ativo
    marcacao_02[slideAtual_02].checked = true;

});
