const a = document.querySelector('#elem-container');
const fixedImg = document.querySelector('#fixed-image');

a.addEventListener('mouseover',()=>{
    fixedImg.style.display = 'block';
})

a.addEventListener('mouseleave',()=>{
    fixedImg.style.display = 'none';
})

const elems = document.querySelectorAll('.elem');

elems.forEach(function(e){
    // console.log(e);
    e.addEventListener('mouseenter',()=>{
        var img = e.getAttribute("data-image");
        // console.log(img);
        fixedImg.style.backgroundImage = `url("${img}")`;
    });
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 80,
  });

var design = document.querySelector('.des');
var project = document.querySelector('.pro');
var execute = document.querySelector('.exe');

var para1 = document.querySelector('.p1');
var para2 = document.querySelector('.p2');
var para3 = document.querySelector('.p3');

var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
var image3 = document.querySelector('.img3');

design.addEventListener('click', () => {
    image1.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
    para2.style.display = 'none';
    para1.style.display = 'block';
    para3.style.display = 'none';
    design.style.color = "white";
    project.style.color = "gray";
    execute.style.color = "gray";

    design.style.borderLeftColor = "red";
    project.style.borderLeftColor = "gray";
    execute.style.borderLeftColor = "gray";
})

project.addEventListener('click', () => {
    image2.style.display = 'block';
    image1.style.display = 'none';
    image3.style.display = 'none';
    para2.style.display = 'block';
    para1.style.display = 'none';
    para3.style.display = 'none';
    design.style.color = "gray";
    project.style.color = "white";
    execute.style.color = "gray";

    design.style.borderLeftColor = "gray";
    project.style.borderLeftColor = "red";
    execute.style.borderLeftColor = "gray";
})

execute.addEventListener('click', () => {
    image3.style.display = 'block';
    image1.style.display = 'none';
    image2.style.display = 'none';
    para2.style.display = 'none';
    para1.style.display = 'none';
    para3.style.display = 'block';
    design.style.color = "gray";
    project.style.color = "gray";
    execute.style.color = "white";

    design.style.borderLeftColor = "gray";
    project.style.borderLeftColor = "gray";
    execute.style.borderLeftColor = "red";
})

var cursor = document.querySelector('.cursor');
var page = document.querySelector('#page5');

page.addEventListener('mousemove', (e)=>{
    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
 })


var loader = document.querySelector('.preloader');


window.addEventListener('load', (e)=>{
    loader.style.display = 'none';
})
