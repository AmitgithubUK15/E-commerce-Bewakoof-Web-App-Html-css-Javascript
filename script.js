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


function imgwrp3(){
    let imgwrapper = document.createElement("div");
    imgwrapper.classList.add("imgwrp3");
    
    let a = document.createElement("a");
    a.style.width = "100%";
    a.style.height = "170px";
    // a.style.border= "1px solid red";
    a.style.display = "block";
    a.setAttribute('href',"#");
    
    let img = document.createElement("img");
    img.src = "https://images.bewakoof.com/uploads/grid/app/Prebuzz-Cotm-friends-Desktop-thin-banner-1703940802.gif";
    a.appendChild(img);

    imgwrapper.appendChild(a);

    basement.appendChild(imgwrapper);
}

imgwrp3();

function imgwrp4(){
    let imgwrapper = document.createElement("div");
    imgwrapper.classList.add("imgwrp4");
    
    let a = document.createElement("a");
    a.style.width = "100%";
    a.style.height = "170px";
    // a.style.border= "1px solid red";
    a.style.display = "block";
    a.setAttribute('href',"#");
    
    let img = document.createElement("img");
    img.src = "https://images.bewakoof.com/uploads/grid/app/Blockbuster-deal-thin-strip-Desktop-Jackets-min-50off--2--1703851386.jpg";
    a.appendChild(img);

    imgwrapper.appendChild(a);

    basement.appendChild(imgwrapper);
}

imgwrp4();


function imgwrp5(){
    let imgwrapper5 = document.createElement("div");
    imgwrapper5.classList.add("imgwrp5");
    
    let head = document.createElement("div");
    head.classList.add("header-section");
    let h4 = document.createElement("h4");
    h4.innerText = "Design of the week";    
    head.appendChild(h4);

    let a1 = document.createElement("a");
    a1.classList.add("link");
    a1.setAttribute("href","#");
     
    let img = document.createElement("img");
    img.src = "https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1703576682.jpg";
    
    a1.appendChild(img);

    let a2 = document.createElement("a");
    a2.classList.add("link");
    a2.setAttribute("href","#");

    let img2 = document.createElement("img");
    img2.src = "https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1703576683.jpg";
    a2.appendChild(img2);
    
    imgwrapper5.appendChild(head);
    imgwrapper5.appendChild(a1);
    imgwrapper5.appendChild(a2);
    basement.appendChild(imgwrapper5);
}

imgwrp5();

function trending_catory(){
    let trn_wrapper = document.createElement('div');
    trn_wrapper.classList.add('trendy');
    
    let wrp_tittle= document.createElement("div");
    wrp_tittle.classList.add('wrp_title')

    let trn_h4 =document.createElement("h4");
    trn_h4.textContent = "TRENDING CATEGORIES";

    wrp_tittle.appendChild(trn_h4);

    let nav_wrapper = document.createElement("div");
    nav_wrapper.classList.add("navwrapper");
    
    let imaglist = ["https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png","https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png","https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg","https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg"];
    let count = 0;
    for(let i=1; i<=2; i++){
        let colums = document.createElement("div");
        colums.classList.add("navinnercolums");

        for(let j=0; j<=5; j++){
            
            let trn_a = document.createElement("a");    
            trn_a.setAttribute("href","#");
            let img = document.createElement("img");
            img.src = imaglist[count];
            count++;
            trn_a.appendChild(img);
            colums.appendChild(trn_a);
        }
        nav_wrapper.appendChild(colums);
    }
    trn_wrapper.appendChild(wrp_tittle);
    trn_wrapper.appendChild(nav_wrapper);
    basement.appendChild(trn_wrapper);
}

trending_catory();


function bwfkorg_gallary(){
  let bwfkorg_wrapper = document.createElement("div");
  bwfkorg_wrapper.classList.add("org_div");
  
  let bwfkhead = document.createElement("div");
  bwfkhead.classList.add("bwfkhsec")
  let bwfkh4 = document.createElement("h4");
  bwfkh4.textContent = "Bewakoof Originals";

  bwfkhead.appendChild(bwfkh4);

  let swipe_bar = document.createElement("div");
  swipe_bar.classList.add("org_swipe_bar");

  let bar_wrp = document.createElement('div');
  bar_wrp.classList.add("scrollbar");

  let imgarray=["https://images.bewakoof.com/uploads/grid/app/pima-pc-1701237703.jpg","https://images.bewakoof.com/uploads/grid/app/windcheater-pc-1701237705.jpg","https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457.jpg","https://images.bewakoof.com/uploads/grid/app/pima-pc-1701237703.jpg","https://images.bewakoof.com/uploads/grid/app/windcheater-pc-1701237705.jpg","https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457.jpg"]
  
  let aarray = [];
  for(let i =0; i<6; i++){
    let a = document.createElement("a");
    a.setAttribute("href","#");

    let img = document.createElement("img");
    img.src = imgarray[i];
    a.appendChild(img);
    bar_wrp.appendChild(a);
  }

  swipe_bar.appendChild(bar_wrp);

  bwfkorg_wrapper.appendChild(bwfkhead);
  bwfkorg_wrapper.appendChild(swipe_bar);
  basement.appendChild(bwfkorg_wrapper);
}

bwfkorg_gallary();

function imgwrp6(){
  let wrapper6 = document.createElement("div");
  wrapper6.classList.add("wrapper6d");

  let wrp6h4 = document.createElement("div");
  wrp6h4.classList.add("wrp6h4");
  
  let h4 = document.createElement("h4");
  h4.innerText = "TOO HOT TO BE MISSED";

  wrp6h4.appendChild(h4);

  let wrp6_img_div = document.createElement("div");
  wrp6_img_div.classList.add("wrpimgdiv");

  let imgarr = ["https://images.bewakoof.com/uploads/grid/app/Graphic-printed-hoodies---Sweatshirts-Common-desktop-mid-size-banner-1704010744.jpg","https://images.bewakoof.com/uploads/grid/app/deskop-mid-size-winter-common--1--1704008634.jpg"]

  for(let i=0; i<=1; i++){
    let div = document.createElement("div");
    div.classList.add(`idiv`);
    
    let a = document.createElement("a");
    a.setAttribute("href","#");
    
    let img = document.createElement("img");
    img.src = imgarr[i];

    a.appendChild(img);
    div.appendChild(a); 
    wrp6_img_div.appendChild(div);
  }

  wrapper6.appendChild(wrp6h4);
  wrapper6.appendChild(wrp6_img_div);
  basement.appendChild(wrapper6);
}

imgwrp6();


