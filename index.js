
let tl = gsap.timeline({defaults: {duration: 0.7 }});

tl.from(".container", {x: 50, opacity: 0})
.from(".main-title", {y: 50, opacity: 0})
.from("main", {y: 50, opacity: 0}, "-=.7")
  