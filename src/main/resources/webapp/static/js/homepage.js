
$(function () {
   var $window = $(window);
   var $header = $('.header');
   var $image = $('img');
   var $iconNave = $('.navegacao');
   //var $newHeader = $('.newheader');
   var endZone = $('footer').offset().top - $window.height() - 60;//obtem a zona final que corresponde ao tamanho da pg menos o tamanaho da janela do nv -500px da endZone;
   var $itensList = $('.itensList');

   $('.accordion').on('click', '.accordion-control', function(e){ // When clicked
      //$itensList.addClass('listHidde');
     e.preventDefault();                    // Prevent default action of button
     $(this)                                // Get the element the user clicked on
       .next('.accordion-panel')            // Select following panel
       .not(':animated')                    // If it is not currently animating
       .slideToggle();                // Use slide toggle to show or hide it
   });


   $window.on('scroll', function () {

         if (endZone < $window.scrollTop()) {
            $header.addClass('newheader');//add a classe aqueles items sem classe da selecao
            $image.addClass('newimag');
            $iconNave.addClass('newNavegacao');

         }else {
            $header.removeClass('newheader')//add a classe aqueles items sem classe da selecao
            $image.removeClass('newimag');
            $iconNave.removeClass('newNavegacao');


         }

   });

});

/*
$listItem = $('li');//armazena os itens da lista na var jquery(obj)
$listItem.filter('.hot:last').removeClass('hot');//pegar o ultimo item da classe hot e remover a classe
$('li:not(.hot)').addClass('cool');//add a classe aqueles items sem classe da selecao
$listItem.has('em').addClass('complete');//verifica o item que tem o conteudo html(<em></em>) e add uma classe
*/
