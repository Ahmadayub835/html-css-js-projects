$(document).ready(function(){
$('.responsive').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 400,
  autoplay: true, 
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {breakpoint:768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})


//Slick-slider for cards:-
$('.responsive1').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 400,
  autoplay:200,
  slidesToShow: 1,
  slidesToScroll: 1,
});

//Slick-slider for cards:-
$('.responsive2').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$('.responsive3').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {breakpoint:768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
});

$(function(){
  $('.datepicker').datepicker()
});

//Responsive button:-
function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    if (navbar.style.left === "" || navbar.style.left === "-100%") {
      navbar.style.left = "0";
    } else {
      navbar.style.left = "-100%";
    }
  };    


    
  //Scroll To top button:-
const scrollBtn = document.getElementsByClassName('scrollbtn')[0];
window.addEventListener('scroll',() =>{
  if(window.pageYOffset > 350){
    scrollBtn.style.display = 'flex'
  } else{
    scrollBtn.style.display = 'none'
  }
});
scrollBtn.addEventListener('click',  () =>{
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  })
});
  
  

//Loader:-
window.addEventListener('load', () => {
  const Loader = document.querySelector('.loader-container');
  Loader.style.display = 'none';
});



