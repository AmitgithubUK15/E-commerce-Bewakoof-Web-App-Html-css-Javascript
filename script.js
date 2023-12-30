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


// create basement 

var basement = document.querySelector("#basement");

function imggallary1(){
    let div = document.createElement("div");
    div.classList.add("imgdiv");

    let imgwrp = document.createElement("div");
    imgwrp.classList.add("imgwrp");
    div.appendChild(imgwrp);
    // imgwrp.addEventListener("scroll",change)
    // let leftbtn = document.createElement("button");
    // leftbtn.innerHTML = "<";
    // let rightbtn = document.createElement('button');
    // rightbtn.innerHTML = ">";   
    // div.appendChild(leftbtn);
    // div.appendChild(rightbtn);
    
    

    

    let a1 = document.createElement("a");
    a1.setAttribute("href","#");
    a1.classList.add("img1");
    let i1 = document.createElement("img");
    i1.src = "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-GoToJackets70Off-Common-1703147023.jpg";
    a1.appendChild(i1);
    imgwrp.appendChild(a1);
    
    let a2 =document.createElement("a");
    a2.setAttribute("href","#");
    a2.classList.add("img2");
    let i2 = document.createElement("img");
    i2.src="https://images.bewakoof.com/uploads/grid/app/Year-end-Sale-Common-1x1--Ends-Tomm-Banner-1703852639.gif";
    a2.appendChild(i2);
    imgwrp.appendChild(a2);
    
    let a3 = document.createElement("a");
    a3.setAttribute("href","#");
    a3.classList.add("img3");
    let i3 = document.createElement("img");
    i3.src = "https://images.bewakoof.com/uploads/grid/app/NEW-1X1-Sweaters70OFF-common-1703669099.jpg";
    a3.appendChild(i3);
    imgwrp.appendChild(a3);

    let a4 = document.createElement("a");
    a4.setAttribute("href","#");
    a4.classList.add("img4");
    let i4 = document.createElement("img");
    i4.src = "https://images.bewakoof.com/uploads/grid/app/Year-Ends-Sale-Winterwear-1x1-buy-2-for-1499-1703669301.jpg";
    a4.appendChild(i4);
    imgwrp.appendChild(a4);

    let a5 = document.createElement("a");
    a5.setAttribute("href","#");
    a5.classList.add("img4");
    let i5 = document.createElement("img");
    i5.src = "https://images.bewakoof.com/uploads/grid/app/Winter-co-ords-1x1-Common-banner-1703698749.jpg";
    a5.appendChild(i5);
    imgwrp.appendChild(a5);
    basement.appendChild(div);

 
    // function change(){
    //    setInterval(function() {
    //     if(count <= 5){
    //         count++;
    //         // imgwrp.scrollLeft += 494;
    //         // imgwrp.insertBefore(linkarry[count - 1],imgwrp.firstChild);
    //     }
    //     else{
    //         count =0;
    //     }
    //    }, 4000);
    // console.log(imgwrp.scrollLeft);
    // }

    // change();
    
    //495,1025
    
}

imggallary1();

function imggallary2(){
    let gallary2 = document.createElement("div");
    gallary2.classList.add("img2gallay");
    // gallary2.textContent = "hellow";

    // let imgwrp2 = document.createElement("div");
    // imgwrp2.classList.add("img2wrp");
    // gallary2.appendChild(imgwrp2);
    let images = ["https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg","https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-New-Arrivals-1703766321.jpg","https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-1703766320.jpg","https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg","https://images.bewakoof.com/uploads/grid/app/Thumbnails-Msite-Plus-size--2--1697714054.jpg","https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg","https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif","https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg"];
    let links = ["Winter Wear","New Arrivals","Bestsellers","Official Collaborations","Plus Size","Customization","Combos","Vote for Designs"];
    for(let i=0; i<8; i++){
      let a = document.createElement("a");
      a.setAttribute('href','#');
      let img =document.createElement("img");
      img.src = images[i];
      let span = document.createElement("span");
      span.innerText = links[i];

      a.appendChild(img);
      a.appendChild(span);
      
      gallary2.appendChild(a);
    }
    basement.appendChild(gallary2);
}

imggallary2();


