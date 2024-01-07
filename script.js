

let baricon = document.getElementById("bar-div");
baricon.addEventListener("click", show);

let men = document.querySelector(".menubar");
// men.classList.add("ment");

function show() {
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

menbtn.addEventListener("mouseover", function () {
    // console.log("run");
    let hoverdisplay = document.getElementById("menhover");
    hoverdisplay.style.display = "block";
});

menbtn.addEventListener("mouseout", hide_event);

function hide_event(e) {
    let hoverdisplay = document.getElementById("menhover");

    hoverdisplay.style.display = "none";
}

var prentdiv = document.getElementById("inner");
prentdiv.addEventListener("mouseover", handle);

function handle(event) {
    let hoverdisplay = document.getElementById("menhover");
    hoverdisplay.style.display = "block";
}
prentdiv.addEventListener("mouseleave", function () {
    let hoverdisplay = document.getElementById("menhover");
    hoverdisplay.style.display = "none";
})

//   Women btn hover 

var womenbtn = document.getElementById("women");
womenbtn.addEventListener("mouseenter", function () {
    // console.log("run");
    let hoverdisplay = document.getElementById("womenhover");
    hoverdisplay.style.display = "block";
});

womenbtn.addEventListener("mouseleave", function (e) {
    let hoverdisplay = document.getElementById("womenhover");
    hoverdisplay.style.display = "none";
})

var woprentdiv = document.getElementById("wo-inner");
woprentdiv.addEventListener("mouseover", wohandle);

function wohandle(event) {
    let wohoverdisplay = document.getElementById("womenhover");
    wohoverdisplay.style.display = "block";
}
woprentdiv.addEventListener("mouseleave", function () {
    let hoverdisplay = document.getElementById("womenhover");
    hoverdisplay.style.display = "none";
});

// MobileHover


var mobilebtn = document.getElementById("mobile");
mobilebtn.addEventListener("mouseenter", function () {
    // console.log("run");
    let hoverdisplay = document.getElementById("mobilehover");
    hoverdisplay.style.display = "block";
});

mobilebtn.addEventListener("mouseleave", function () {
    let hoverdisplay = document.getElementById("mobilehover");
    hoverdisplay.style.display = "none";
});

let mobileprentdiv = document.getElementById("mo-inner");
mobileprentdiv.addEventListener("mouseover", function () {
    let hoverdisplay = document.getElementById("mobilehover");
    hoverdisplay.style.display = "block";
});
mobileprentdiv.addEventListener("mouseout", function () {
    let hoverdisplay = document.getElementById("mobilehover");
    hoverdisplay.style.display = "none";
});


// create basement 

var basement = document.querySelector("#basement");

function imggallary1() {
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
    a1.setAttribute("href", "#");
    a1.classList.add("img1");
    let i1 = document.createElement("img");
    i1.src = "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-GoToJackets70Off-Common-1703147023.jpg";
    a1.appendChild(i1);
    imgwrp.appendChild(a1);

    let a2 = document.createElement("a");
    a2.setAttribute("href", "#");
    a2.classList.add("img2");
    let i2 = document.createElement("img");
    i2.src = "https://images.bewakoof.com/uploads/grid/app/Year-end-Sale-Common-1x1--Ends-Tomm-Banner-1703852639.gif";
    a2.appendChild(i2);
    imgwrp.appendChild(a2);

    let a3 = document.createElement("a");
    a3.setAttribute("href", "#");
    a3.classList.add("img3");
    let i3 = document.createElement("img");
    i3.src = "https://images.bewakoof.com/uploads/grid/app/NEW-1X1-Sweaters70OFF-common-1703669099.jpg";
    a3.appendChild(i3);
    imgwrp.appendChild(a3);

    let a4 = document.createElement("a");
    a4.setAttribute("href", "#");
    a4.classList.add("img4");
    let i4 = document.createElement("img");
    i4.src = "https://images.bewakoof.com/uploads/grid/app/Year-Ends-Sale-Winterwear-1x1-buy-2-for-1499-1703669301.jpg";
    a4.appendChild(i4);
    imgwrp.appendChild(a4);

    let a5 = document.createElement("a");
    a5.setAttribute("href", "#");
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

function imggallary2() {
    let gallary2 = document.createElement("div");
    gallary2.classList.add("img2gallay");
    // gallary2.textContent = "hellow";

    // let imgwrp2 = document.createElement("div");
    // imgwrp2.classList.add("img2wrp");
    // gallary2.appendChild(imgwrp2);
    let images = ["https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg", "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-New-Arrivals-1703766321.jpg", "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-1703766320.jpg", "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg", "https://images.bewakoof.com/uploads/grid/app/Thumbnails-Msite-Plus-size--2--1697714054.jpg", "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg", "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif", "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg"];
    let links = ["Winter Wear", "New Arrivals", "Bestsellers", "Official Collaborations", "Plus Size", "Customization", "Combos", "Vote for Designs"];
    for (let i = 0; i < 8; i++) {
        let a = document.createElement("a");
        a.setAttribute('href', '#');
        let img = document.createElement("img");
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


function imgwrp3() {
    let imgwrapper = document.createElement("div");
    imgwrapper.classList.add("imgwrp3");

    let a = document.createElement("a");
    a.style.width = "100%";
    a.style.height = "170px";
    // a.style.border= "1px solid red";
    a.style.display = "block";
    a.setAttribute('href', "#");

    let img = document.createElement("img");
    img.src = "https://images.bewakoof.com/uploads/grid/app/Prebuzz-Cotm-friends-Desktop-thin-banner-1703940802.gif";
    a.appendChild(img);

    imgwrapper.appendChild(a);

    basement.appendChild(imgwrapper);
}

imgwrp3();

function imgwrp4() {
    let imgwrapper = document.createElement("div");
    imgwrapper.classList.add("imgwrp4");

    let a = document.createElement("a");
    a.style.width = "100%";
    a.style.height = "170px";
    // a.style.border= "1px solid red";
    a.style.display = "block";
    a.setAttribute('href', "#");

    let img = document.createElement("img");
    img.src = "https://images.bewakoof.com/uploads/grid/app/Blockbuster-deal-thin-strip-Desktop-Jackets-min-50off--2--1703851386.jpg";
    a.appendChild(img);

    imgwrapper.appendChild(a);

    basement.appendChild(imgwrapper);
}

imgwrp4();


function imgwrp5() {
    let imgwrapper5 = document.createElement("div");
    imgwrapper5.classList.add("imgwrp5");

    let head = document.createElement("div");
    head.classList.add("header-section");
    let h4 = document.createElement("h4");
    h4.innerText = "Design of the week";
    head.appendChild(h4);

    let a1 = document.createElement("a");
    a1.classList.add("link");
    a1.setAttribute("href", "#");

    let img = document.createElement("img");
    img.src = "https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1703576682.jpg";

    a1.appendChild(img);

    let a2 = document.createElement("a");
    a2.classList.add("link");
    a2.setAttribute("href", "#");

    let img2 = document.createElement("img");
    img2.src = "https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1703576683.jpg";
    a2.appendChild(img2);

    imgwrapper5.appendChild(head);
    imgwrapper5.appendChild(a1);
    imgwrapper5.appendChild(a2);
    basement.appendChild(imgwrapper5);
}

imgwrp5();

function trending_catory() {
    let trn_wrapper = document.createElement('div');
    trn_wrapper.classList.add('trendy');

    let wrp_tittle = document.createElement("div");
    wrp_tittle.classList.add('wrp_title')

    let trn_h4 = document.createElement("h4");
    trn_h4.textContent = "TRENDING CATEGORIES";

    wrp_tittle.appendChild(trn_h4);

    let nav_wrapper = document.createElement("div");
    nav_wrapper.classList.add("navwrapper");

    let imaglist = ["https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png", "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png", "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg"];
    let count = 0;
    for (let i = 1; i <= 2; i++) {
        let colums = document.createElement("div");
        colums.classList.add("navinnercolums");

        for (let j = 0; j <= 5; j++) {

            let trn_a = document.createElement("a");
            trn_a.setAttribute("href", "#");
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


function bwfkorg_gallary() {
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

    let imgarray = ["https://images.bewakoof.com/uploads/grid/app/pima-pc-1701237703.jpg", "https://images.bewakoof.com/uploads/grid/app/windcheater-pc-1701237705.jpg", "https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457.jpg", "https://images.bewakoof.com/uploads/grid/app/pima-pc-1701237703.jpg", "https://images.bewakoof.com/uploads/grid/app/windcheater-pc-1701237705.jpg", "https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457.jpg"]

    let aarray = [];
    for (let i = 0; i < 6; i++) {
        let a = document.createElement("a");
        a.setAttribute("href", "#");

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

function imgwrp6() {
    let wrapper6 = document.createElement("div");
    wrapper6.classList.add("wrapper6d");

    let wrp6h4 = document.createElement("div");
    wrp6h4.classList.add("wrp6h4");

    let h4 = document.createElement("h4");
    h4.innerText = "TOO HOT TO BE MISSED";

    wrp6h4.appendChild(h4);

    let wrp6_img_div = document.createElement("div");
    wrp6_img_div.classList.add("wrpimgdiv");

    let imgarr = ["https://images.bewakoof.com/uploads/grid/app/Graphic-printed-hoodies---Sweatshirts-Common-desktop-mid-size-banner-1704010744.jpg", "https://images.bewakoof.com/uploads/grid/app/deskop-mid-size-winter-common--1--1704008634.jpg"]

    for (let i = 0; i <= 1; i++) {
        let div = document.createElement("div");
        div.classList.add(`idiv`);

        let a = document.createElement("a");
        a.setAttribute("href", "#");

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

function imgwrp7() {
    let wrp7_div = document.createElement("div");
    wrp7_div.classList.add("wrp7div");

    let imgarr = ["https://images.bewakoof.com/uploads/grid/app/Sum-Up-2023-desktop-mid-size-banner-1703940798.jpg", "https://images.bewakoof.com/uploads/grid/app/Parachute-pants-Women-Desktop-midsize-banner--1--1704011368.jpg"];
    for (let i = 0; i <= 1; i++) {
        let div = document.createElement("div");
        div.classList.add(`idiv7`);

        let a = document.createElement("a");
        a.setAttribute("href", "#");

        let img = document.createElement("img");
        img.src = imgarr[i];

        a.appendChild(img);
        div.appendChild(a);
        wrp7_div.appendChild(div);
    }

    basement.appendChild(wrp7_div);
}

imgwrp7();

function imgwrp8() {
    let wrp8 = document.createElement("div");
    wrp8.classList.add("wrp8d");

    let a = document.createElement("a");
    a.setAttribute("href", "#");

    let img = document.createElement("img");
    img.src = "https://images.bewakoof.com/uploads/grid/app/Color-Survey-Thin-Desktop-Banner-1703845964.gif";

    a.appendChild(img);
    wrp8.appendChild(a);
    basement.appendChild(wrp8);
}

imgwrp8();

function imgwrp9() {
    let trn_wrapper = document.createElement('div');
    trn_wrapper.classList.add('wrper9');

    let wrp9h = document.createElement("div");
    wrp9h.classList.add('wrp9head')

    let h4 = document.createElement("h4");
    h4.textContent = "TRENDING CATEGORIES";

    wrp9h.appendChild(h4);

    let nav_wrapper = document.createElement("div");
    nav_wrapper.classList.add("navwrapper");

    let imaglist = ["https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg", "https://images.bewakoof.com/uploads/grid/app/Pajamas-Trending-category-tile--Men-1703766157.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-cords-1686063032.jpg", "https://images.bewakoof.com/uploads/grid/app/Pajamas-Trending-category-tile--Women-1703766157.jpg", "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-shorts-1686063034.jpg"];
    let count = 0;
    for (let i = 1; i <= 1; i++) {
        let colums = document.createElement("div");
        colums.classList.add("navinnercolums");

        for (let j = 0; j <= 5; j++) {

            let trn_a = document.createElement("a");
            trn_a.setAttribute("href", "#");
            let img = document.createElement("img");
            img.src = imaglist[count];
            count++;
            trn_a.appendChild(img);
            colums.appendChild(trn_a);
        }
        nav_wrapper.appendChild(colums);
    }
    trn_wrapper.appendChild(wrp9h);
    trn_wrapper.appendChild(nav_wrapper);
    basement.appendChild(trn_wrapper);
}

imgwrp9();

function imgwrp10() {
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
    a1.setAttribute("href", "#");
    a1.classList.add("img1");
    let i1 = document.createElement("img");
    i1.src = "https://images.bewakoof.com/uploads/grid/app/1x1--banner-hc-Rashmika-1704011495.jpg   ";
    a1.appendChild(i1);
    imgwrp.appendChild(a1);

    let a2 = document.createElement("a");
    a2.setAttribute("href", "#");
    a2.classList.add("img2");
    let i2 = document.createElement("img");
    i2.src = "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-cargo-common--3--1704011926.jpg";
    a2.appendChild(i2);
    imgwrp.appendChild(a2);

    let a3 = document.createElement("a");
    a3.setAttribute("href", "#");
    a3.classList.add("img3");
    let i3 = document.createElement("img");
    i3.src = "https://images.bewakoof.com/uploads/grid/app/1x1-1703164584.gif";
    a3.appendChild(i3);
    imgwrp.appendChild(a3);

    let a4 = document.createElement("a");
    a4.setAttribute("href", "#");
    a4.classList.add("img4");
    let i4 = document.createElement("img");
    i4.src = "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-GPOT-Common-NewShoot--1--1703832857.jpg";
    a4.appendChild(i4);
    imgwrp.appendChild(a4);


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

imgwrp10();

function imgwrp11() {
    let trn_wrapper = document.createElement('div');
    trn_wrapper.classList.add('wrper11');

    let wrp9h = document.createElement("div");
    wrp9h.classList.add('wrp9head')

    let h4 = document.createElement("h4");
    h4.textContent = "TOP ACCESSORIES";

    wrp9h.appendChild(h4);

    let nav_wrapper = document.createElement("div");
    nav_wrapper.classList.add("navwrapper");

    let imaglist = ["https://images.bewakoof.com/uploads/grid/app/360x524-accessories-categorybox-Mobile-covers-1694760545.jpg", "https://images.bewakoof.com/uploads/grid/app/360x524-accessories-categorybox-Sliders-1694760546.jpg", "https://images.bewakoof.com/uploads/grid/app/360x524-accessories-categorybox-Backpacks-1694760544.jpg", "https://images.bewakoof.com/uploads/grid/app/360x524-accessories-categorybox-Caps-1694760545.jpg"];
    let count = 0;
    for (let i = 1; i <= 1; i++) {
        let colums = document.createElement("div");
        colums.classList.add("navinnercolums");

        for (let j = 0; j < 4; j++) {

            let trn_a = document.createElement("a");
            trn_a.setAttribute("href", "#");
            let img = document.createElement("img");
            img.src = imaglist[count];
            count++;
            trn_a.appendChild(img);
            colums.appendChild(trn_a);
        }
        nav_wrapper.appendChild(colums);
    }
    trn_wrapper.appendChild(wrp9h);
    trn_wrapper.appendChild(nav_wrapper);
    basement.appendChild(trn_wrapper);
}

imgwrp11();

function itemlist() {
    let listdiv = document.createElement("div");
    listdiv.classList.add("list_swiperdiv");

    let swipehead = document.createElement("div");
    swipehead.classList.add("swipedivhead");

    let h4 = document.createElement("h4");
    h4.innerText = "BESTSELLERS";
    swipehead.appendChild(h4);

    let item_swiper = document.createElement("div");
    item_swiper.classList.add("item_swipebar_wraper");

    let scrolldiv = document.createElement("div");
    scrolldiv.classList.add("scroll_wraper");

    let imglist = ["https://images.bewakoof.com/t320/men-s-black-t-shirt-106-1665669034-5.jpg", "https://images.bewakoof.com/t320/women-s-brown-mickey-the-original-graphic-printed-oversized-t-shirt-dress-546192-1700842684-1.jpg", "https://images.bewakoof.com/t320/men-s-blue-t-shirt-115-1659608420-1.jpg", "https://images.bewakoof.com/t320/women-s-black-casual-slim-fit-joggers-293073-1683264182-1.JPG", "https://images.bewakoof.com/t320/dark-grey-casual-jogger-pant-293066-1660652893-5.jpg", "https://images.bewakoof.com/t320/men-s-white-t-shirt-105-1702967985-1.jpg", "https://images.bewakoof.com/t320/men-s-white-t-shirt-1093-1702967686-1.jpg", "https://images.bewakoof.com/t320/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1700548868-1.jpg", "https://images.bewakoof.com/t320/men-s-grey-oversized-plus-size-t-shirt-580181-1698308500-1.jpg", "https://images.bewakoof.com/t320/men-s-blue-t-shirt-1092-1665669224-2.jpg", "https://images.bewakoof.com/t320/men-s-navy-blazer-oversized-t-shirt-560617-1677761081-1.jpg", "https://images.bewakoof.com/t320/men-s-full-sleeve-t-shirts-1094-1672036930-1.jpg", "https://images.bewakoof.com/t320/sage-green-casual-cotton-trouser-340543-1663661857-6.jpg", "https://images.bewakoof.com/t320/men-s-plus-size-black-oversized-fit-puffer-jacket-498978-1700206295-1.jpg", "https://images.bewakoof.com/t320/men-s-black-oversized-t-shirt-539556-1696335986-1.jpg"];

    //   let nof_item = ["Men Black T-shir/t",]
    for (let i = 0; i <= 14; i++) {
        let a = document.createElement("a");
        a.setAttribute("href", "#");

        let img_box = document.createElement("div");
        img_box.classList.add("image_boxwrp");

        let img = document.createElement("img");
        img.style.width = "236px";
        img.style.height = "330px";
        img.style.borderRadius
        img.src = imglist[i];


        img_box.appendChild(img);
        let text_box = document.createElement("div");
        text_box.classList.add("text_boxwrp");

        let div1 = document.createElement("div");
        div1.classList.add("Name_like");

        let for_name = document.createElement("div");
        for_name.classList.add("product_name");

        let h3 = document.createElement("h3");
        h3.innerText = "Bewakoof®";

        let h2 = document.createElement("h2");
        h2.innerText = "blacktshit";

        for_name.appendChild(h3);
        for_name.appendChild(h2);

        let for_like = document.createElement("div");
        for_like.classList.add("likebtn");

        let like_icon = document.createElement("img");
        like_icon.style.margin = "2px 11px";
        like_icon.src = "https://images.bewakoof.com/web/Wishlist.svg";

        for_like.appendChild(like_icon);
        div1.appendChild(for_name);
        div1.appendChild(for_like);

        // div 2 for price 
        let div2 = document.createElement("div");
        div2.classList.add("price");

        for (let j = 1; j <= 3; j++) {
            let pricd = document.createElement("div");
            pricd.style.display = "inline-block";
            pricd.style.marginLeft = "10px";
            pricd.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
            if (j === 1) {
                // let s = document.createElement("span");
                // s.innerText = "";
                // pricd.appendChild(s);
                pricd.innerText = "₹" + 699;
                pricd.style.color = "black";

                div2.appendChild(pricd);
            }
            else if (j === 2) {
                pricd.innerText = "₹1299";
                pricd.style.color = "#4f5362";
                pricd.style.fontSize = "12px";
                div2.appendChild(pricd);
            }
            else {
                pricd.innerText = "46% OFF";
                pricd.style.color = "#00b852";
                pricd.style.fontSize = "15px";
                div2.appendChild(pricd);
            }

        }

        text_box.appendChild(div1);
        text_box.appendChild(div2);


        a.appendChild(img_box);
        a.appendChild(text_box);
        scrolldiv.appendChild(a);
    }

    item_swiper.appendChild(scrolldiv);

    let explorediv = document.createElement("div");
    explorediv.classList.add("explorediv");
    explorediv.style.width = "100%";
    explorediv.style.height = "34px";



    let explorebtn = document.createElement("a");
    explorebtn.href = "#";
    explorebtn.innerHTML = "Explore All";
    explorebtn.style.display = "block";
    explorebtn.style.width = "125px";
    explorebtn.style.margin = "0 auto";
    explorebtn.style.fontSize = "20px";
    explorebtn.style.color = "#008af9";
    explorebtn.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    explorediv.appendChild(explorebtn);
    listdiv.appendChild(swipehead);
    listdiv.appendChild(item_swiper);
    listdiv.appendChild(explorediv);
    basement.appendChild(listdiv);
}

itemlist();

function imgwrp12() {
    let wrapper6 = document.createElement("div");
    wrapper6.classList.add("wrapper6d");

    let wrp6h4 = document.createElement("div");
    wrp6h4.classList.add("wrp6h4");

    let h4 = document.createElement("h4");
    h4.style.width = "192px";
    h4.innerText = "OUR BEST PICKS";

    wrp6h4.appendChild(h4);

    let wrp6_img_div = document.createElement("div");
    wrp6_img_div.classList.add("wrpimgdiv");

    let imgarr = ["https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos--1--1704012294.jpg", "https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp"];

    for (let i = 0; i <= 1; i++) {
        let div = document.createElement("div");
        div.classList.add(`idiv`);

        let a = document.createElement("a");
        a.setAttribute("href", "#");

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

imgwrp12();

function imgwrp13() {
    let wrp7_div = document.createElement("div");
    wrp7_div.classList.add("wrp7div");

    let imgarr = ["https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-Banner-1699360277.jpg", "https://images.bewakoof.com/uploads/grid/app/Plus-Size-Desktop-midsize-Banner--1--1699360278.jpg"];
    for (let i = 0; i <= 1; i++) {
        let div = document.createElement("div");
        div.classList.add(`idiv7`);

        let a = document.createElement("a");
        a.setAttribute("href", "#");

        let img = document.createElement("img");
        img.src = imgarr[i];

        a.appendChild(img);
        div.appendChild(a);
        wrp7_div.appendChild(div);
    }

    basement.appendChild(wrp7_div);
}

imgwrp13();

function imgwrp14() {
    let wrp_14 = document.createElement("div");
    wrp_14.style.width = "100%";
    wrp_14.style.height = "340px";
    // wrp_14.style.border = "1px solid black";

    let img_arr = ["https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg", "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"]
    for (let i = 0; i <= 1; i++) {
        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "160px";
        // div.style.border = "1px solid red";
        div.style.margin = "6px 0";

        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.style.display = "inline-block";
        a.style.width = "100%";
        a.style.height = "160px";

        let img = document.createElement("img");
        img.src = img_arr[i];
        img.style.width = "100%";
        img.style.height = "160px";

        a.appendChild(img);
        div.appendChild(a);
        wrp_14.appendChild(div);
    }

    basement.appendChild(wrp_14);
}

imgwrp14();


// footer script

let footer = document.querySelector("footer");

function foot_content() {
    let giv_margin = document.createElement("div");
    giv_margin.style.width = "100%"
    giv_margin.style.height = "3365px";
    // giv_margin.style.border = "1px solid white";
    giv_margin.style.marginTop = "70px";

    let main_footr = document.createElement("div");
    main_footr.style.width = "72%";
    // main_footr.style.border = "1px solid yellow";
    main_footr.style.height = "3363px";
    main_footr.style.margin = "0 auto";

    for (let i = 1; i <= 3; i++) {
        if (i === 1) {
            let div = document.createElement("div");
            div.classList.add("ftrcolumnn" + i);
            main_footr.appendChild(div);

            for (let n = 1; n <= 3; n++) {
                if (n === 1) {
                    // head
                    let ftrwdiv = document.createElement("div");
                    ftrwdiv.classList.add("ftcol_row" + n);

                    let d = document.createElement("div");
                    d.style.width = "97%";
                    d.style.height = "29px";
                    d.style.margin = "10px 15px";

                    let a = document.createElement("a");
                    a.href = "#";
                    a.style.textDecoration = "none";
                    a.style.color = "#fdd835";
                    a.style.display = "inline-block";
                    a.style.width = "200px";

                    let h3 = document.createElement("h3");
                    h3.style.fontSize = "28px";
                    h3.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                    h3.textContent = "Bewakoof®";

                    a.appendChild(h3);
                    d.appendChild(a);
                    ftrwdiv.appendChild(d);
                    div.appendChild(ftrwdiv);
                }

                else if (n === 2) {
                    // ftr_links
                    let ftrwdiv = document.createElement("div");
                    ftrwdiv.classList.add("ftcol_row" + n);

                    let d2 = document.createElement("div");
                    d2.style.width = "98%";
                    d2.style.height = "190px";
                    // d2.style.border = "1px solid red";
                    d2.style.marginTop = "3px";
                    d2.style.marginLeft = "13px";
                    d2.style.display = "flex";

                    for (let j = 1; j <= 4; j++) {
                        if (j === 1) {
                            let colm = document.createElement("div");
                            colm.classList.add("samcolm");

                            let h_sec = document.createElement("div");
                            h_sec.classList.add("h_section");

                            let h5 = document.createElement("h6");
                            h5.innerHTML = "CUSTOMER SERVICE";
                            h5.style.fontFamily = " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                            h5.style.color = "#fdd835";

                            h_sec.appendChild(h5);

                            let linklist = document.createElement("div");
                            // linklist.style.border = "1px solid pink";
                            linklist.className = "linklist";

                            let ul = document.createElement("ul");
                            ul.className = "linkul";

                            let li_cnt = ["Contact us", "Track us", "Return Order", "Cancel Order"];

                            for (let x = 0; x <= 3; x++) {
                                let li = document.createElement("li");
                                li.classList.add("Lnk_li");

                                let a = document.createElement("a");
                                a.href = "#";
                                let h7 = document.createElement("h7");
                                h7.textContent = li_cnt[x];

                                a.appendChild(h7);
                                li.appendChild(a);
                                ul.appendChild(li);
                            }
                            linklist.appendChild(ul);

                            colm.appendChild(h_sec);
                            colm.appendChild(linklist);
                            d2.appendChild(colm);
                        }
                        else if (j === 2) {
                            let colm = document.createElement("div");
                            colm.classList.add("samcolm");

                            let h_sec = document.createElement("div");
                            h_sec.classList.add("h_section");

                            let h5 = document.createElement("h6");
                            h5.style.fontFamily = " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                            h5.style.color = "#fdd835";
                            h5.innerHTML = "COMPANY";


                            let linklist = document.createElement("div");
                            // linklist.style.border = "1px solid pink";
                            linklist.className = "linklist";

                            let ul = document.createElement("ul");
                            ul.className = "linkul";

                            let li_cnt = ["About US", "We're Hiring", "Terms & Condition", "Privacy & Policy", "Blog"];

                            for (let x = 0; x <= 4; x++) {
                                let li = document.createElement("li");
                                li.classList.add("Lnk_li");

                                let a = document.createElement("a");
                                a.href = "#";
                                let h7 = document.createElement("h7");
                                h7.textContent = li_cnt[x];

                                a.appendChild(h7);
                                li.appendChild(a);
                                ul.appendChild(li);
                            }

                            linklist.appendChild(ul);

                            h_sec.appendChild(h5);
                            colm.appendChild(h_sec);
                            colm.appendChild(linklist);
                            d2.appendChild(colm);
                        }
                        else if (j === 3) {
                            let colm = document.createElement("div");
                            colm.classList.add("samcolm");

                            let h_sec = document.createElement("div");
                            h_sec.classList.add("h_section");

                            let h5 = document.createElement("h6");
                            h5.style.fontFamily = " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                            h5.style.color = "#fdd835";
                            h5.innerHTML = "CONNECT WITH US";


                            let linklist = document.createElement("div");
                            // linklist.style.border = "1px solid pink";
                            linklist.className = "linklist";

                            let ul = document.createElement("ul");
                            ul.className = "linkul";

                            let facebook = document.getElementById("facebook");
                            facebook.style.display = "block";
                            let insta = document.getElementById("insta");
                            insta.style.display = "block";

                            let twitter = document.getElementById("twiter");
                            twitter.style.display = "inline-block";

                            let pintest = document.getElementById("pinterest");
                            pintest.style.display = "inline-block";

                            let snapcht = document.getElementById("snapchat");
                            snapcht.style.display = "inline-block";

                            let aple = document.getElementById("apple");
                            aple.style.display = "inline-block";

                            let li_3thtxt = ["3.5M People Like this", "229K Followers"]
                            let appicon = [facebook, insta];
                            let li_4thicon = [twitter, pintest, snapcht, aple]
                            for (let x = 0; x <= 2; x++) {
                                if (x === 2) {
                                    let li = document.createElement("li");
                                    li.classList.add("Lnk_li");
                                    li.style.height = "35px";
                                    li.style.padding = "5px 0";


                                    for (let icon = 0; icon <= 3; icon++) {
                                        let a = document.createElement("a");
                                        a.href = "#";
                                        a.style.marginRight = "20px";

                                        // li_4thicon[icon].style.display = "inline-block";
                                        li_4thicon[icon].style.color = "white";
                                        li_4thicon[icon].style.fontSize = "22px";
                                        // li_4thicon[icon].style.margin = "0 2px";


                                        a.appendChild(li_4thicon[icon]);
                                        li.appendChild(a);
                                    }
                                    ul.appendChild(li);
                                }
                                else {
                                    let li = document.createElement("li");
                                    li.classList.add("Lnk_li");
                                    li.style.height = "35px";
                                    li.style.padding = "8px 0";

                                    let a = document.createElement("a");
                                    a.href = "#";
                                    appicon[x].style.display = "inline";
                                    appicon[x].style.color = "white";
                                    appicon[x].style.fontSize = "18px";

                                    let h7 = document.createElement("h7");
                                    h7.style.marginLeft = "7px";
                                    h7.style.fontSize = "15px";
                                    h7.style.fontFamily = " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                                    h7.textContent = li_3thtxt[x];

                                    a.appendChild(appicon[x]);
                                    a.appendChild(h7);
                                    li.appendChild(a);
                                    ul.appendChild(li);
                                }
                            }

                            linklist.appendChild(ul);

                            h_sec.appendChild(h5);
                            colm.appendChild(h_sec);
                            colm.appendChild(linklist);
                            d2.appendChild(colm);
                        }
                        else {
                            let colm = document.createElement("div");
                            colm.classList.add("samcolm4");
                            colm.style.width = "304px";
                            colm.style.height = "185px";
                            colm.style.display = "inline-block";
                            // colm.style.border = "1px solid yellow";

                            let h_sec = document.createElement("div");
                            h_sec.classList.add("h_section");

                            let h5 = document.createElement("h6");
                            h5.style.fontFamily = " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                            h5.style.color = "#fdd835";
                            h5.innerHTML = "KEEP UP TO DATE";

                            h_sec.appendChild(h5);

                            let linklist = document.createElement("div");
                            // linklist.style.border = "1px solid pink";
                            linklist.style.height = "50px";
                            linklist.style.margin = "19px 0";
                            linklist.style.width = "100%";
                            linklist.className = "linklist";

                            let form = document.createElement("form");
                            form.className = "for";

                            let inputbox = document.createElement("input");
                            inputbox.className = "inputfield";
                            inputbox.type = "text";
                            inputbox.placeholder = "Enter Email Id";
                            let btn = document.createElement("button");
                            btn.className = "sub_btn";
                            btn.innerHTML = "SUBSCRIBE";
                            btn.type = "button";

                            form.appendChild(inputbox);
                            form.appendChild(btn);

                            linklist.appendChild(form);
                            colm.appendChild(h_sec);
                            colm.appendChild(linklist);
                            d2.appendChild(colm);
                        }
                    }
                    ftrwdiv.appendChild(d2);
                    div.appendChild(ftrwdiv);
                }
                else {
                    // ftr_ads
                    let ftrwdiv = document.createElement("div");
                    ftrwdiv.classList.add("ftcol_row" + n);

                    let ftr3_innr_wrp = document.createElement("div");
                    ftr3_innr_wrp.className = "ftr3_wrp";

                    for (let d = 0; d <= 2; d++) {
                        if (d === 0) {
                            let div1 = document.createElement("div");
                            // div1.style.border="1px solid green";
                            div1.style.display = "inline-block";
                            div1.style.width = "243px";
                            div1.style.height = "98px";

                            let retn = document.getElementById("return");
                            retn.style.display = "inline-block";

                            let cash = document.getElementById("rupee");
                            cash.style.display = "inline-block";

                            let a_cnt = ["15 Days return policy*", "Cash on delivery*"];
                            let iconarr = [retn, cash]
                            for (let k = 0; k <= 1; k++) {
                                let inerd1 = document.createElement("div");
                                inerd1.style.width = "100%";
                                inerd1.style.height = "30px";
                                // inerd1.style.border = "1px solid white";
                                inerd1.style.margin = "5px 0";
                                let iner_a = document.createElement("a");
                                iner_a.href = "#";
                                iner_a.style.display = "inline-block";
                                iner_a.style.textDecoration = "none";
                                iner_a.style.color = "white";
                                iner_a.style.padding = "5px 0";

                                iconarr[k].style.fontSize = "13px";

                                let h7 = document.createElement("h7");
                                h7.textContent = a_cnt[k];
                                h7.style.marginLeft = "12px";
                                h7.style.fontSize = "13px";

                                iner_a.appendChild(iconarr[k])
                                iner_a.appendChild(h7);
                                inerd1.appendChild(iner_a);
                                div1.appendChild(inerd1);
                            }
                            ftr3_innr_wrp.appendChild(div1);
                        }

                        else if (d === 1) {
                            let div2 = document.createElement("div");
                            // div2.style.border="1px solid green";
                            div2.style.display = "inline-block";
                            div2.style.width = "243px";
                            div2.style.height = "98px";

                            let div_h7 = document.createElement("div");
                            div_h7.style.width = "100%";
                            div_h7.style.height = "15px";
                            // div_h7.style.border = "1px solid white";

                            let h7text = document.createElement("h6");
                            h7text.textContent = "DOWNLOAD THE APP";
                            h7text.style.fontFamily = " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                            h7text.style.color = "rgb(253, 216, 53)";
                            h7text.style.cursor = "default"

                            div_h7.append(h7text);

                            let divads = document.createElement("div");
                            divads.style.width = "100%";
                            divads.style.height = "80px";
                            // divads.style.border = "0.5px solid yellow";

                            let logodiv = document.createElement("div");
                            logodiv.style.width = "99%";
                            logodiv.style.height = "53px";
                            // logodiv.style.border = "0.5px solid white";
                            logodiv.style.margin = "12px auto";


                            let lgarray = ["https://images.bewakoof.com/web/app_android_v1.png", "https://images.bewakoof.com/web/app_android_v1.png"];
                            for (let lg = 0; lg <= 1; lg++) {
                                let lgdiv = document.createElement("div");
                                lgdiv.style.width = "50%";
                                lgdiv.style.height = "53px";
                                lgdiv.style.display = "inline-block";

                                let lga = document.createElement("a");
                                lga.style.display = "inline-block";
                                lga.style.width = "100%";
                                lga.style.height = "53px";

                                let img = document.createElement("img");
                                img.style.width = "100px";
                                img.style.height = "30px";
                                img.style.margin = "11px auto";
                                img.style.cursor = "pointer";

                                img.src = lgarray[lg];

                                lga.appendChild(img);
                                lgdiv.appendChild(lga);
                                logodiv.appendChild(lgdiv);
                            }

                            divads.appendChild(logodiv);

                            div2.appendChild(div_h7);
                            div2.appendChild(divads);
                            ftr3_innr_wrp.appendChild(div2);
                        }

                        else {
                            let div3 = document.createElement("div");
                            // div3.style.border="1px solid green";
                            div3.style.display = "inline-block";
                            div3.style.width = "243px";
                            div3.style.height = "98px";

                            let div_h7 = document.createElement("div");
                            div_h7.style.width = "100%";
                            div_h7.style.height = "15px";
                            // div_h7.style.border = "1px solid white";

                            let h7text = document.createElement("h6");
                            h7text.textContent = "100% SECURE PAYMENT";
                            h7text.style.fontFamily = " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                            h7text.style.color = "rgb(253, 216, 53)";
                            h7text.style.cursor = "default"

                            div_h7.append(h7text);

                            let divads = document.createElement("div");
                            divads.style.width = "100%";
                            divads.style.height = "80px";
                            // divads.style.border = "0.5px solid yellow";

                            let logodiv = document.createElement("a");
                            logodiv.style.width = "99%";
                            logodiv.style.height = "19px";
                            // logodiv.style.border = "0.5px solid white";
                            logodiv.style.margin = "12px auto";
                            logodiv.style.display = "inline-block";

                            let imgsrc = "https://images.bewakoof.com/web/secure-payments-image.png";
                            let img = document.createElement("img");
                            img.style.width = "204px";
                            img.style.height = "18px";
                            img.style.margin = "0px auto";

                            img.src = imgsrc;

                            logodiv.appendChild(img);
                            divads.appendChild(logodiv);
                            div3.appendChild(div_h7);
                            div3.appendChild(divads);
                            ftr3_innr_wrp.appendChild(div3);
                        }
                    }

                    let line = document.createElement("div");
                    line.style.widows = "100%";
                    line.style.borderBottom = "2px solid white";
                    ftrwdiv.appendChild(ftr3_innr_wrp);
                    ftrwdiv.appendChild(line);
                    div.appendChild(ftrwdiv);
                }
            }

        }
        else if (i === 2) {
            let div = document.createElement("div");
            div.classList.add("ftrcolumnn" + i);

            let wrpi = document.createElement("div");
            wrpi.classList.add("ftr2_wrp");

            let hdrarr = ["MEN'S CLOTHING", "WOMEN'S CLOTHING", "MOBILE COVERS"]
            for (let y = 0; y <= 3; y++) {
                if (y === 3) {
                    let d4 = document.createElement("div");
                    d4.style.display = "inline-block";
                    d4.style.width = "200px";
                    d4.style.height = "611px";
                    // d4.style.border = "1px solid white";

                    let app_wrp = document.createElement("div");
                    app_wrp.style.width = "98%";
                    app_wrp.style.height = " 200px";
                    // app_wrp.style.border = "1px solid white";
                    app_wrp.style.paddingTop = "10px";

                    const hdlnk = ["FANBOOK", "OFFERS", "STIEMAP"];

                    for (let v = 0; v < hdlnk.length; v++) {
                        let alink = document.createElement("a");
                        alink.setAttribute("href", "#");
                        alink.style.display = "Block";
                        alink.style.width = "72%";
                        alink.style.height = "37px";
                        alink.style.margin = "0 auto";
                        alink.style.padding = "10px 0";
                        alink.style.color = "#51cccc";
                        alink.style.textDecoration = "none";


                        let alink_h7 = document.createElement("h7");
                        alink_h7.style.fontSize = "16px";
                        alink_h7.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                        alink_h7.style.fontWeight = "800";
                        alink_h7.innerText = hdlnk[v];

                        alink.appendChild(alink_h7);
                        app_wrp.appendChild(alink);
                    }

                    d4.appendChild(app_wrp);
                    wrpi.appendChild(d4);
                }
                else {
                    let d4 = document.createElement("div");
                    d4.style.display = "inline-block";
                    d4.style.width = "260px";
                    d4.style.height = "611px";
                    // d4.style.border = "1px solid white";

                    let hdrdiv = document.createElement("div");
                    hdrdiv.style.width = "100%";
                    hdrdiv.style.height = "50px";
                    // hdrdiv.style.border = "1px solid yellow";

                    let hdr_h3 = document.createElement("h3");
                    hdr_h3.style.margin = "14px auto";
                    hdr_h3.style.fontSize = "16px";
                    hdr_h3.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                    hdr_h3.style.cursor = "default";

                    hdr_h3.textContent = hdrarr[y];

                    hdrdiv.appendChild(hdr_h3);

                    let lik = document.createElement("div");
                    lik.style.width = "100%";
                    lik.style.height = "557px";

                    let d4hreflist = document.createElement("div");
                    d4hreflist.width = "100%";
                    d4hreflist.height = "551px";


                    let d4_link1 = ["Top Wear", "Men's New Arrivals", "Men's Half Sleeve T-Shirts", "Men's Hoodies & Sweatshirts", "Men's Long Sleeve T-shirts", "Men's Printed T-shirts", "Men's Plain T-shirts", "Men's Vests", "Men's Polo T-Shirts", "Men's Kurtas", "Men's Combo T-Shirts", "Men's Shirts", "Men's Nightwear", "Men's Plus Size Store", "Bottom Wear", "Men's Pajamas", "Men's Boxer Shorts", "Men's Shorts", "Men's Track Pants", "Men's Pants", "Featured", "Men's Flip Flops", "Men's Sliders", "Marvel T-Shirts", "Disney T-Shirts", "Avengers T-Shirts", "Star Wars T-Shirts", "Batman T-Shirts", "Superman T-Shirts"];
                    let d4_link2 = ["Women's Top Wear", "Women's New Arrivals", "Women's T-Shirts", "Women's Hoodies & Sweatshirts", "Women's Dresses", "Women's 3/4 Sleeve T-Shirts", "Women's Kurtis", "Women's Combo T-Shirts", "Women's Nightwear", "Women's Plus Size Store", "Women's Bottom Wear", "Women's Pajamas", "Women's Boxer Shorts", "Women's Jeans", "Women's Joggers", "Women's Shorts", "BAGS", "Laptop Bags", "Small Backpacks", "Featured", "Women's Slides", "Women's Flip Flops"];
                    let d4_link3 = ["Brands", "Apple", "Realme", "Samsung", "Xiaomi", "Oneplus", "Vivo", "Oppo"];

                    let mixlink = [d4_link1, d4_link2, d4_link3];
                    let num = [29, 22, 8]
                    // console.log(mixlink[0])

                    for (let i = y; i <= y; i++) {
                        if (i === 0) {
                            let d4hreflist = document.createElement("div");
                            d4hreflist.width = "100%";
                            d4hreflist.height = "210px";

                            for (let a = 0; a < d4_link1.length; a++) {

                                const an = document.createElement("a");
                                an.setAttribute("href", "#");
                                an.style.textDecoration = "none";
                                an.style.color = "white";
                                an.style.display = "inline-block";
                                an.style.width = "100%";
                                an.style.height = "19px";

                                if (d4_link1[a] === "Bottom Wear") {
                                    an.style.paddingTop = "6px";
                                }
                                else if (d4_link1[a] === "Featured") {
                                    an.style.paddingTop = "6px";
                                }
                                else if (d4_link1[a] === "BAGS") {
                                    an.style.paddingTop = "6px";
                                }
                                else {
                                    an.style.padding = "1px 0";
                                }

                                let an_h7 = document.createElement("h7");
                                an_h7.style.fontSize = "12px";
                                an_h7.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                                an_h7.innerText = d4_link1[a];

                                an.appendChild(an_h7);
                                d4hreflist.appendChild(an);
                                lik.appendChild(d4hreflist);
                            }
                        }

                        else if (i === 1) {

                            let d4hreflist = document.createElement("div");
                            d4hreflist.width = "100%";
                            d4hreflist.height = "210px";

                            for (let a = 0; a < d4_link2.length; a++) {

                                const an = document.createElement("a");
                                an.setAttribute("href", "#");
                                an.style.textDecoration = "none";
                                an.style.color = "white";
                                an.style.display = "inline-block";
                                an.style.width = "100%";
                                an.style.height = "19px";

                                if (d4_link2[a] === "Featured") {
                                    an.style.paddingTop = "6px";
                                }
                                else if (d4_link2[a] === "Women's Bottom Wear") {
                                    an.style.paddingTop = "6px";
                                }
                                else if (d4_link2[a] === "BAGS") {
                                    an.style.paddingTop = "6px";
                                }
                                else {
                                    an.style.padding = "1px 0";
                                }

                                let an_h7 = document.createElement("h7");
                                an_h7.style.fontSize = "12px";
                                an_h7.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                                an_h7.innerText = d4_link2[a];

                                an.appendChild(an_h7);
                                d4hreflist.appendChild(an);
                                lik.appendChild(d4hreflist);
                            }
                        }

                        else {

                            let d4hreflist = document.createElement("div");
                            d4hreflist.width = "100%";
                            d4hreflist.height = "210px";

                            for (let a = 0; a < d4_link3.length; a++) {

                                const an = document.createElement("a");
                                an.setAttribute("href", "#");
                                an.style.textDecoration = "none";
                                an.style.color = "white";
                                an.style.display = "inline-block";
                                an.style.width = "100%";
                                an.style.height = "19px";
                                an.style.padding = "1px 0";

                                let an_h7 = document.createElement("h7");
                                an_h7.style.fontSize = "12px";
                                an_h7.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                                an_h7.innerText = d4_link3[a];
                                // an.innerText = d4_link3[a];

                                an.appendChild(an_h7);
                                d4hreflist.appendChild(an);
                                lik.appendChild(d4hreflist);
                            }
                        }
                    }



                    d4.appendChild(hdrdiv);
                    d4.appendChild(lik);
                    wrpi.appendChild(d4);

                }
            }
            div.appendChild(wrpi);

            main_footr.appendChild(div);
        }
        else {
            let div = document.createElement("div");
            div.classList.add("ftrcolumnn" + i);

            let ftr3wrper = document.createElement("div");
            ftr3wrper.classList.add("ftrwraper")

            let para_head = [["BEWAKOOF® THE NEW AGE ONLINE SHOPPING EXPERIENCE.", "Founded in 2012, Bewakoof® is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof® was created on the principle of creating impact through innovation, honesty and thoughtfulness."], "With a team of 400 members, and 2mn products sold till date. We like to experiment freely, which allows us to balance creativity and relatability, and our innovative designs. Our range of products is always fresh and up-to-date, and we clock sales of over 1 lakh products a month. Our innovation focus extends to our operations as well. We are vertically integrated, manufacture our own products, and cut out the middleman wherever possible. This direct-to-consumer model allows us to create high-quality fashion at affordable prices. A thoughtful brand, we actively attempt to minimize our environmental footprint and maximize our social impact. These efforts are integrated right into our day-to-day operations, from rainwater harvesting to paper packaging to employee benefits. To create an accessible, affordable and thoughtful experience of online shopping in India.",
            ["ONLINE SHOPPING AT BEWAKOOF® IS HASSLE-FREE, CONVENIENT AND SUPER-EXCITING!", "Online Shopping has always been a fun and exciting task for most and more so when the shopping mall is none other than your own house. We have all had days when we have planned trips to the clothing store in advance, dreaming about what we would buy once we get there. Now we wouldnt think twice before indulging in some online shopping. Well, cut to todays time and age, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals and discounts to one of the most robust user interface amongst most online shopping sites in India, with many shopping filters to make your shopping experience truly hassle free. This in our own words is what we call Bewakoof.com."], "Bewakoof®, THE place to be when it comes to the coolest in online fashion, offers you fine, high-quality merchandise go ahead and indulge in a bit of online shopping for men and womens fashion. So browse through the exciting categories we have on offer from mens fashion to basic mens clothing as well as wide variety in womenswear and womens clothes to the amazing range of accessories, fill up your carts and get fast home delivery for all orders. All of this topped with our exclusive online shopping offers makes for an exciting, irresistible and uber cool combo! You can even gift some to your near and dear ones while being absolutely certain that it will put a smile on their faces.", ["BEWAKOOF.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!",
                "Online fashion is definitely more accessible with Bewakoof.com. Explore the latest collections in Marvel t-shirts including avengers t-shirts and captain America t-shirts in official merchandise. Apart from these, quirkiest of T-shirts that you wont find on any online shopping sites in India are showcased at Bewakoof.com. If your wardrobe has been longing for a cool overhaul then bewakoof.com will certainly be your best bet amongst all online shopping sites. Also, take a tour of our bewakoof® blog to stay abreast with the latest runway trends and be a trendsetter among your immediate circles. What we wear speaks volumes of us they say. But what if what you wore actually spoke what your mood was! Havent we all wondered where we could get those quirky t-shirts and sport them with confidence? Sure otherwise getting them made or even buying them from otherwise expensive online shopping sites for clothes may cost you substantially but with Bewakoof.com, you will understand that you do not have to spend a fortune on online fashion to look great. Sliders, joggers, sweatshirts, bag and bag packs and so much more are just some of the other items you can grab hold of here."], ["AVAIL OF ONLINE SHOPPING BENEFITS AT BEWAKOOF.COM AND YOULL SHOP NOWHERE ELSE!",
                "Choose your product, get it ordered online, and we ensure that its delivery happens right at your doorstep anywhere in India. You just need to take care of the payment for the product from the comfort of your home, while we ensure free shipping all the time on almost everything with no strings attached. For any second thoughts after purchase, we have in place a return policy as well. One of the best you will find on any online shopping sites in India. For your online shopping experience to be safe and risk-free, we offer Cash On Delivery (COD) facility too. So you dont have to worry anymore about your hard earned money being stuck when you buy clothes online at bewakoof.com. Avail exciting online shopping offers like designs of the day and colour of the month when you shop with us. Make sure to use our easy 15-day returns policy, card or cash on delivery option and other customer-friendly features. A comprehensive sizing guide and detailed product descriptions coupled with high-resolution product shots will give you all the information to make the right buying decision. Give your wardrobe the much-needed upgrade with uber cool clothing head to Bewakoof.com for a great online shopping india experience now! Could you have asked for more?"], ["DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED ONLINE STORE!",
                "We dont just offer you exciting options in online fashion but also give you amazing accessories with really cool bags and bag packs to choose from. Our bags and backpacks are compact, hassle-free and easy to stuff things in. And all of this with the swag that you get to carry along with it. Cool designs are what form a major part of our online fashion and we also ensure our accessories section doesnt feel left out!"],
                "As for our accessories collection, they are also manufactured with impeccable quality materials. Our mobile covers are made from hard and durable polycarbonate, with a matte finish that will make for a great protection for your phone with the rough use that we put them through nowadays.", ["DESIGN OF THE DAY- THE COOLEST FEATURE EVER!",
                "Who said good and cool t-shirts have to expensive? We bring newer, cooler and more youth oriented designs everyday. Yes! Everyday you get a new design to explore and buy. Although all our t-shirts are at an extremely affordable price, we decided to slash them down even further. But there is a catch. It is only for those designs and these exclusive prices are only valid for for a duration of 24 hours! Designs refresh every day at 3pm and are valid only for 24 hours. So you need to hurry and grab one fast before it ends. Because we believe everyone needs to have a fair chance at all of our fresh designs of the day."],
            ["BEWAKOOF.COM: THE UBER COOL ONLINE FASHION STORE FOR THE YOUTH", "We, at Bewakoof.com, have all that you need to glam up your cool quotient. From an extensive range of plus size clothing, casual shirts for men and accessories for everyone, we purvey diversity of choices in online shopping india platform has to offer under one umbrella. The range of apparels like men t-shirts, joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants and more provide an array of options for the online customer to create a ravishing ensemble from. We try to target all kinds of customers and cater to their needs and preferences. Communication is the key to our functioning. Your Bewakoof® Online fashion Shop has arrived! Do not miss the attractive online shopping offers everyday. Work your fashion with the wide range of apparels available only one click away! Make a statement with our best t-shirts online! Get more, pay less!"], ["OUR PHILOSOPHY",
                "We believe in creating the kind of fashion, that makes you stand out as they are in line with the latest local and global trends of the industry, but also at the same time offer value for money functionality, with quality materials and comfortable and flattering prints. We try to look into the psyche of our customers, and try to get inspired by the conversations and experiences around us while creating our graphics, to ensure that they are relatable. We believe in constant and consistent innovation to ensure that our fans get nothing short of the bets at affordable rates! While most people do not know, we do not outsource the manufacturing of our products, everything from the conception of the designs to the manufacture and the styling that you see on the photographs of the banners and product pages of our website all happen in house! We go from yarn to product and since we 're vertically integrated and bring fashion from us directly to your doorstep without any middlemen that also further ensures reliability because for us it is not just about the money but about building the trust and credibility in our fans about our brand. We also make sure to decrease the impact on environment and are building initiatives that will help us with the same, for now by optimizing our processes to use only as much as we need from nature, rain water harvesting and recycling the water from our RO water facility, because we believe that the spirit of Bewakoof® is about creating an impact by breaking conventions and having a different perspective!"]];

            console.log(para_head.length);
            let type = typeof (para_head[0]);

            for (let s = 0; s < 11; s++) {

                if (typeof (para_head[s]) === type) {
                    console.log(true);
                    for (let element = 0; element< para_head[s].length ; element++) {
                        if (element === 0) {
                            let phh3 = document.createElement("h3");
                            phh3.style.padding = "14px 0";
                            phh3.style.fontSize = "16px";
                            phh3.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                            phh3.style.cursor = "default";
                            phh3.style.height = "50px";
                            phh3.innerText = para_head[s][element];
                            // console.log(para_head[s][element]);

                         
                            ftr3wrper.appendChild(phh3);
                        }
                        else{
                            let para = document.createElement("p");
                            para.style.lineHeight = "20px";
                            para.style.width = "89%";
                            para.style.textAlign = "justify";
                            para.style.padding = "8px 0";
                            para.style.fontSize = "17px";
                            para.style.fontFamily = "system-ui";
                            para.style.fontWeight = "100";
                            para.innerText = para_head[s][element];
                            
                            if(para_head[s][element].includes("official merchandise.")){
                                console.log(para_head[s][element].length);
                                
                                // console.log(para_head[s][element].indexOf("merchandise."))
                                let a = document.createElement("a");
                                a.href = "#";
                                // a.innerText = "official ";
                                a.style.color = "blue";
                                a.style.textDecoration = "none";
                                 
                                para_head[s][element][174].appendChild = a
                                // para.appendChild(a);
                            }

                            ftr3wrper.appendChild(para);
                        }
                    }

                }

                else {
                    console.log(false);
                    let para = document.createElement("p");
                    para.style.lineHeight = "20px";
                    para.style.width = "89%";
                    para.style.textAlign = "justify";
                    para.style.padding = "8px 0";
                    para.style.fontSize = "17px";
                    para.style.fontFamily = "system-ui";
                    para.style.fontWeight = "100";
                    para.innerText = para_head[s];

                    ftr3wrper.appendChild(para);
                }
            }
            div.appendChild(ftr3wrper);
            main_footr.appendChild(div);


        }
    }

    giv_margin.appendChild(main_footr);
    footer.appendChild(giv_margin);
    footer.appendChild(giv_margin);
}

foot_content();