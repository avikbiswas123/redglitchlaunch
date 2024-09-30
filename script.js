let exptxt=document.querySelector(".explore h4")
console.log(exptxt);




document.querySelector(".explore button").addEventListener("mouseenter",()=>{

gsap.to(".grow",{
scale:25,
duration:1,



})



})
document.querySelector(".explore button").addEventListener("mouseleave",()=>{

    gsap.to(".grow",{
    scale:1,
    duration:1,
    
    
    
    })
    
    
    })
    var cluttering=''
let txt=document.querySelector(".name").textContent.split("")
console.log(txt);
txt.forEach(function name(elems,indx){
    if ((Math.floor(indx<(txt.length/2)))) {
        cluttering
        +=`<span class="a">${elems}</span>`
    }
    else{
        cluttering+=`<span class="b">${elems}</span>`
  
    }
})
document.querySelector(".name").innerHTML=cluttering
gsap.from(".name .a",{

y:50,
opacity:0,
duration:2,
stagger:.5,

})
gsap.from(".name .b",{

    y:-50,
    opacity:0,
    duration:2,
    stagger:-.5,
    
    })
    gsap.from(".motto",{

        y:50,
        opacity:0,
        duration:2,
        delay:3,
        
        })

        function myfunction() {
            gsap.to(".overmenu", {
                right: 0,
                duration: .5,
                ease: "power2.out"
            })
            
            
        }
        document.querySelector(".close").addEventListener("click", () => {
            gsap.to(".overmenu", {
                right: "-100%",
                duration: .5,
                ease: "power2.in"
            });
        });
        console.log(document.querySelector(".explore button"))


document.querySelector(".viewmore").addEventListener("click",()=>{
gsap.to(".overpage6",{

right:0,
duration:1,
ease:"power2.out"





})
document.querySelector(".page7").style.top="605%"

})
document.querySelector(".closeoverpage6").addEventListener("click",()=>{
    gsap.to(".overpage6",{
    
    right:"-120%",
    duration:1,
    ease:"power2.out"
    
    
    
    
    
    })
    
    
    document.querySelector(".lfr").addEventListener("mouseenter", () => {
        gsap.to(".imglfr", {
            opacity: 1,
            duration: 0.5
        });
    });

    document.querySelector(".lfr").addEventListener("mousemove", (dets) => {
        gsap.to(".imglfr", {
            x: dets.offsetX,
            y: dets.offsetY,
            duration: 0.1
        });
    });

    document.querySelector(".lfr").addEventListener("mouseleave", () => {
        gsap.to(".imglfr", {
            opacity: 0,
            duration: 0.5
        });
    });

    document.querySelector(".soccerbot").addEventListener("mouseenter", () => {
        gsap.to(".imgsoccer", {
            opacity: 1,
            duration: 0.5
        });
    });

    document.querySelector(".soccerbot").addEventListener("mousemove", (dets) => {
        gsap.to(".imgsoccer", {
            x: dets.offsetX,
            y: dets.offsetY,
            duration: 0.1
        });
    });

    document.querySelector(".soccerbot").addEventListener("mouseleave", () => {
        gsap.to(".imgsoccer", {
            opacity: 0,
            duration: 0.5
        });
    });
    document.querySelector(".digitalclock").addEventListener("mouseenter", () => {
        gsap.to(".imgdigitalclock", {
            opacity: 1,
            duration: 0.5
        });
    });

    document.querySelector(".digitalclock").addEventListener("mousemove", (dets) => {
        gsap.to(".imgdigitalclock", {
            x: dets.offsetX,
            y: dets.offsetY,
            duration: 0.1
        });
    });

    document.querySelector(".digitalclock").addEventListener("mouseleave", () => {
        gsap.to(".imgdigitalclock", {
            opacity: 0,
            duration: 0.5
        });
    });
    document.querySelectorAll(".overmenu div").forEach(item => {
        item.addEventListener("click", () => {
            gsap.to(".overmenu", {
                right: "-100%",
                duration: 1,
                ease: "power2.in"
            });
        });
    });



    
