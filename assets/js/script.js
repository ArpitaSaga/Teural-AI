var btnContainer = document.getElementById("nav-item");
var btns = btnContainer.getElementsByClassName("nav-link");
console.log(btns);

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let header = document.querySelector('.header2')
let title = "Teural AI"
let index = 1;
const Typwriting = ()=> {
    let new_title = title.slice(0, index);
    header.innerHTML = new_title;
    index = index < title.length ? index + 1 : 1; 
    setTimeout(()=> Typwriting(), 300)
}
Typwriting();


$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,

        responsive:{
            0:{
                items:1,
                // nav:true
            },
            800:{
                items:3,
                // nav:false
            },
            1000:{
                items:3,
                // nav:true,
                // loop:false
            }
        }
    })
})
