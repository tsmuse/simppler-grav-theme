var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#nav-trigger", triggerHook: 0, duration: 0})
                              //.setPin("nav.nav-bar")
                              .on("enter", pin)
                              .on("leave", unpin)
                              .addTo(controller);
function pin(event){
  // console.log("PInnnnnneed!!!");
  $(".nav-bar").addClass("pinned");
  $(".page-content").addClass("pinned-nav");
  //select nav bar and apply a class that fixes it's position
  //select page-content and apply a class that adjusts the padding to deal with the nav bar being yanked out of the flow
}

function unpin(event){
  // console.log("UnnnPInnnnnneed!!!");
  $(".nav-bar").removeClass("pinned");
  $(".page-content").removeClass("pinned-nav");
  //select nav bar and remove the pinned class
  //select page-content and remove pinned class
}
