
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})


// ya h circle ko smooth krny ka liay or move krny ka liay
let ring = document.querySelector("#ring");
window.addEventListener("mousemove", function(dets) {
    gsap.to("#ring", {
        x: dets.clientX,   
        y: dets.clientY,
        duration: 0.2,     
        ease: "power2.out" 
    });
});




// first page ko animate kita waa
function firstpageanim(){
    var tl = gsap.timeline();
    tl.from("#navbar",{
        y:-10,
        opacity:0,
        ease: "expo.easeinOut",
        duration:1.5,
    })
tl.to(".boundingelem",{
        y:0,
        ease: "expo.easeinOut",
        duration:1.3,
        delay:-1,
        stagger:.2,
    })
    tl.from("#herofooter",{
        y:-10,
        opacity:0,
        ease: "expo.easeinOut",
        duration:1.5,
        delay:-1,
    })
}
firstpageanim();




// aa image no rotate or hilai ga or boooooohat kuch hoga
document.querySelectorAll(".elem").forEach(function(elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

     gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:"power1",
        top:diff,
        left:dets.clientX,
        rotate: gsap.utils.clamp(-15,15, diffrot * 0.5 ),
        // duration:0.5,
        
     });
        gsap.to(elem.querySelector("h1"), {
            x: 40,
            y: 0,
            opacity: 0.5,
            duration: 2,
            ease: "power3"
        });

      
    
// aa gido mouse chydia
elem.addEventListener("mouseleave", function(dets) {
    gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:"power3",
        duration:0.5,
        delay:0.1,
        
});
 
        gsap.to(elem.querySelector("h1"), {
            x: 0,
            y: 0,
            opacity: 0.7,
            duration: 3,
            ease: "power3"
        });
       
    });
});
});





