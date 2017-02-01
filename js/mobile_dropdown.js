$(".main-nav__mobile-dropdown__button").click(function(){
  $button = $(this);
  $menu = $(".mobile-nav-menu");

  $menu.toggleClass("show-menu");
});
