// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar ul');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}
// AfterBuyCourse // 
var btnTab = document.querySelectorAll( '.divTwo-buttons button' );
var btnTabArray = Array.from( btnTab );

var courseContent = document.querySelectorAll( '.course-content-div > div ' );
var courseContentArray = Array.from( courseContent );

btnTabArray.forEach( ( element0 ) => {
  element0.addEventListener( "click" , function ( event0 ) {
    btnTabArray.forEach( ( element0 ) => {
      element0.classList.remove( "courseActivButton" );
    });
    event0.currentTarget.classList.add( "courseActivButton" );
    courseContentArray.forEach( ( div ) => {
      div.style.display = 'none';
    });
    document.querySelector( event0.currentTarget.dataset.content0 ).style.display = 'block';
  });
});

// Section Three //
let tabs = document.querySelectorAll('.tab-box button');
let tabsArray = Array.from(tabs);

let divs = document.querySelectorAll('.section-3-box');
let divsArray = Array.from(divs);

const filtercards = e => {
  document.querySelector(".activated").classList.remove("activated");
  e.target.classList.add("activated");
  divs.forEach(card => {
    card.classList.add("hide");
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    };
  });

};
tabs.forEach(button => button.addEventListener("click",filtercards));

// Section Four //
$('.responsive0').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    dots:true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1268,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
// Section Five //
$('.responsive').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    dots:true,
    autoplay:true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1268,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

// Course Details //
let onTab = document.querySelectorAll('.course-buttons button');
let onTabArray = Array.from(onTab);

let content = document.querySelectorAll('.course-desription > div');
let contentArray = Array.from(content);

onTabArray.forEach((ele) => {
  ele.addEventListener("click" , function (event) {
    onTabArray.forEach((ele) => {
      ele.classList.remove("active_button");
    });
    event.currentTarget.classList.add("active_button");
    contentArray.forEach((div) => {
      div.style.display = 'none';
    });
    document.querySelector(event.currentTarget.dataset.cont).style.display = 'block';
  });
});

$(document).ready( function () {
  $('#show_and_hide').click(function (){
    $('.course_hide').toggle();
  });
});

$(document).ready( function () {
  $('#show_and_hide_two').click(function (){
    $('.course_hide_two').toggle();
  });
});




// Courses //
var allCourses = document.getElementById('allCourses');
var courseTwo = document.getElementById('courseTwo');
var courseThree = document.getElementById('courseThree');
var courseFour = document.getElementById('courseFour');
var courseFive = document.getElementById('courseFive');
var courseSix = document.getElementById('courseSix');


var elements = document.querySelectorAll('.section-3-container .section-3-box');

function createEvent( parent , type ){
  parent.addEventListener( 'click' , () => {

      elements.forEach( element => {
          if ( element.dataset.type != type ){
              element.classList.add( 'hide' );
          }
          else
              element.classList.remove( 'hide' );
      });

  });
};

createEvent( courseTwo , 'course-Two' );
createEvent( courseThree , 'course-Three' );
createEvent( courseFour , 'course-Four' );
createEvent( courseFive , 'course-Five' );
createEvent( courseSix , 'course-Six' );

allCourses.addEventListener( 'click' , function () {
  elements.forEach( ele => {
    ele.classList.remove( 'hide' );
  });
});
