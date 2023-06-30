//JAVASCRIPT PARA MENUS

//MENU HAMBÚRGUER
const botaoMenuHamburguer = document.querySelector('.cabecalho_menu_hamburguer');
const menuHamburguer = document.querySelector('.lista_menu_hamburger');
const paginacao = document.querySelector('.swiper-pagination')

botaoMenuHamburguer.addEventListener('click', ()=> {
    menuHamburguer.classList.toggle('lista_menu_hamburguer_ativo');
    botaoMenuHamburguer.classList.toggle('cabecalho_menu_hamburguer_ativo')
/*     paginacao.classList.toggle('swiper-pagination_menu_ativo') */
});

//MENU USUÁRIO
const botaoMenuUsuario = document.querySelector('.cabecalho_menu_usuario');
const menuUsuario = document.querySelector('.lista_menu_usuario');

botaoMenuUsuario.addEventListener('click', ()=> {
    menuUsuario.classList.toggle('lista_menu_usuario_ativo');
    botaoMenuUsuario.classList.toggle('cabecalho_menu_usuario_ativo')
/*     paginacao.classList.toggle('swiper-pagination_menu_ativo') */
});

//MENU CATEGORIAS
const botaoCategorias = document.querySelector('.cabecalho_opcoes_botao')

botaoCategorias.addEventListener('click', ()=>{
    menuHamburguer.classList.toggle('lista_menu_ativo');
    botaoCategorias.classList.toggle('cabecalho_opcoes_botao_ativo');
})