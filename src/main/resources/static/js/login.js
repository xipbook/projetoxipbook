
$(function () {

   var $window = $(window);//armazena o obj jq que ref a janela na variavel
   var $slideAd = $('legend');//armazena o elemento que referenc o slid em outra variavel

   //$slideAd.stop(true).animate({'left': '-300px'}, 250);
   $window.on('ready', function () {
      //$slideAd.hide().slideDown();
      $('body')
         .hide() //metodo para ocultar o elemento;
         .delay(5)//metodo pra da uma pausa em ms antes de aparecer
         .fadeIn(1500);//metodo para retornar em ms o elemento;

         $slideAd.stop(true).animate({'left': '360px'}, 1950);

   });

});
