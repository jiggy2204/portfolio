$(function () {
  console.log("Wazaaaaaaaaaaaaap");

  window.onscroll = function () {
    stickNavBar();
  };

  var navbar = $("#header-nav");

  var sticky = navbar.offset();

  function stickNavBar() {
    if (window.pageYOffset >= sticky.top) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  }
  stickNavBar();
});
