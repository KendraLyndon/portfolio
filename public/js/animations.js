$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});

var menuButton = document.getElementById('menu-button');

$(menuButton).click(function() {
  $('.menu-dropdown').toggleClass('closed');
});
