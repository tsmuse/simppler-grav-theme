var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#nav-trigger", triggerHook: 0, duration: 0})
                              .setPin("nav.main-nav")
                              .addTo(controller);
