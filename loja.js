$(document).ready(function() {
    // Inicializa mostrando o módulo de Fast-foods
    $('#fastfoods').addClass('active');

    // Ao clicar nos links do navbar, controla a exibição dos módulos
    $('.navbar-nav a').click(function(){
        var module = $(this).attr('data-module');
        $('.module').removeClass('active');
        $('#' + module).addClass('active');
    });

    // Fechar o menu do navbar ao clicar em um link
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});
