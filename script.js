let baricon = document.getElementById("bar-div");
baricon.addEventListener("click",show);

let men = document.querySelector(".menubar");
// men.classList.add("ment");

function show(){
    men.classList.add("ment");
    return men;
}

// let body = document.querySelector("body");
// body.addEventListener("click",hide);

// function hide(){
//     men.classList.add("hide");
//     return men;
// }

var menbtn = document.getElementById("Men");

menbtn.addEventListener("mouseover",function(){
    // console.log("run");
    let hoverdisplay = document.getElementById("menhover");
    hoverdisplay.style.display = "block";
});
 
menbtn.addEventListener("mouseout",hide_event);

function hide_event(e){
    let hoverdisplay = document.getElementById("menhover");
   
    hoverdisplay.style.display = "none";
}

 var prentdiv = document.getElementById("inner");
    prentdiv.addEventListener("mouseover",handle); 
    
    function handle(event){
        let hoverdisplay = document.getElementById("menhover");
       hoverdisplay.style.display="block";
    }
  prentdiv.addEventListener("mouseleave",function(){
    let hoverdisplay = document.getElementById("menhover");
    hoverdisplay.style.display="none";  
  })

//   Women btn hover 

var womenbtn = document.getElementById("women");
womenbtn.addEventListener("mouseenter",function(){
    // console.log("run");
    let hoverdisplay = document.getElementById("womenhover");
    hoverdisplay.style.display = "block";
});
 
womenbtn.addEventListener("mouseleave",function(e){
    let hoverdisplay = document.getElementById("womenhover");
    hoverdisplay.style.display = "none";
})

var woprentdiv = document.getElementById("wo-inner");
woprentdiv.addEventListener("mouseover",wohandle); 

function wohandle(event){
    let wohoverdisplay = document.getElementById("womenhover");
   wohoverdisplay.style.display="block";
}
woprentdiv.addEventListener("mouseleave",function(){
let hoverdisplay = document.getElementById("womenhover");
hoverdisplay.style.display="none";  
});

// MobileHover


var mobilebtn = document.getElementById("mobile");
mobilebtn.addEventListener("mouseenter",function(){
    // console.log("run");
    let hoverdisplay = document.getElementById("mobilehover");
    hoverdisplay.style.display = "block";
});
 
mobilebtn.addEventListener("mouseleave",function(){
    let hoverdisplay = document.getElementById("mobilehover");
    hoverdisplay.style.display = "none";
});

let mobileprentdiv = document.getElementById("mo-inner");
mobileprentdiv.addEventListener("mouseover",function(){
    let hoverdisplay = document.getElementById("mobilehover");
    hoverdisplay.style.display="block";
});
mobileprentdiv.addEventListener("mouseout",function(){
let hoverdisplay = document.getElementById("mobilehover");
hoverdisplay.style.display="none";  
});


