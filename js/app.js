$(function(){
  $('.top-slider').slick({
  	
     fade: true,
  	prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header-icons/arrow-left.png">',

  	nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header-icons/arrow-right.png">'

  });

let menu = document.querySelector('.header');

  window.addEventListener('scroll',function(event){
  	if(this.scrollY > 0){
  		menu.classList.add('scrolled');
  	} else {
  		menu.classList.remove('scrolled');
  	}

  });


  $('.slider-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-small'
});
$('.slider-small').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-big',
  dots: false,
  centerMode: false,
  focusOnSelect: true,

  responsive: [
    {
      breakpoint: 940,
      settings: {
       
        slidesToShow: 4,

      }
    },

    {
      breakpoint: 820,
      settings: {
       
        slidesToShow: 3,
       
      }
    },

    {
      breakpoint: 620,
      settings: {
       
        slidesToShow: 2,
       
      }
    },

    {
      breakpoint: 430,
      settings: {
       
        slidesToShow: 1,
       
      }
    },


   
     ]


});



Array.from(document.querySelectorAll('#card-btn__js')).forEach(item => {
  item.onclick = (e) => {

      e.preventDefault();
    item.classList.toggle('active');
  };
});


let burger = document.querySelector('#burger-btn');
let burgerMenu = document.querySelector('.header-content__list');
let burgerClone = document.querySelector('.burger-clone');
let body = document.querySelector('body');

burger.addEventListener('click', function(){
  burgerMenu.classList.add('active');
  body.classList.add('flow');
});

burgerClone.addEventListener('click', function(){
  burgerMenu.classList.remove('active');
  body.classList.remove('flow');
});



let anchors = document.querySelectorAll('a[href*="#"]').forEach(item =>{
  item.addEventListener('click', function(e){
        e.preventDefault();
        anchorId = this.getAttribute('href');
        burgerMenu.classList.remove('active');
          body.classList.remove('flow');

        document.querySelector(anchorId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
  });
});

});


