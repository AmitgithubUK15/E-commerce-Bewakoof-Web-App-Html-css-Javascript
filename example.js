var basement = document.querySelector("#basement");

function imggallary1(){
    let div = document.createElement("div");
    div.classList.add("imgdiv");

    let imgwrp = document.createElement("div");
    imgwrp.classList.add("imgwrp");
    div.appendChild(imgwrp);
    // imgwrp.addEventListener("scroll",change)
    let leftbtn = document.createElement("button");
    leftbtn.innerHTML = "<";
    let rightbtn = document.createElement('button');
    rightbtn.innerHTML = ">";   
    div.appendChild(leftbtn);
    div.appendChild(rightbtn);
    
    let elementarray = [];
    let imagesarray = [ "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-GoToJackets70Off-Common-1703147023.jpg","https://images.bewakoof.com/uploads/grid/app/Year-end-Sale-Common-1x1--Ends-Tomm-Banner-1703852639.gif", "https://images.bewakoof.com/uploads/grid/app/NEW-1X1-Sweaters70OFF-common-1703669099.jpg","https://images.bewakoof.com/uploads/grid/app/Year-Ends-Sale-Winterwear-1x1-buy-2-for-1499-1703669301.jpg","https://images.bewakoof.com/uploads/grid/app/Winter-co-ords-1x1-Common-banner-1703698749.jpg"];
    
    let stickydiv = document.createElement("div");
     stickydivdiv.classList.add("divwrp");
    for(let i=0; i<=5; i++){
        let a = document.createElement("a");
        a.seetAttribute("href","#");

        let img = document.createElement("img");
        img.src = imagesarray[i].src;

        a.appendChild(img);
        
        elementarray.push(a);
    }

    
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
   
    
    let linkarry = [a2,a3,a4,a5];
    let count = 4;
    leftbtn.addEventListener("click",function(){
        
        imgwrp.scrollLeft += 495;
    });

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