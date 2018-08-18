$(function()) {
  $('.accordion-control').on('click', function(e){ // When clicked//não estou conseguindo add o ouvinte de evento;
    e.preventDefault();
    $('.accordion-panel').css({
        'display': 'block'
    });

    /*
                        // Prevent default action of button
    $(this)                                // Get the element the user clicked on
      .next('.accordion-panel')           // Select following panel
      .not(':animated')                    // If it is not currently animating
      .slideToggle();
    */                        // Use slide toggle to show or hide it
  });
});
