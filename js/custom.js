

$(document).ready(function () {
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false
  });
});



// slick-slider-client_sec
$(document).ready(function () {
  $('.client_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    centerPadding: '100px',
    autoplay: true,
    autoplaySpeed: 2500,
   
  });
});


$(document).ready(function(){
  $('.blog_multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
    
  });
});


//comparision slider_project section


const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
const sliderHandle = document.querySelector("#image-comparison-slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);
// slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {

  if(isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if(mouseX < 0) mouseX = 0;
  else if(mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
  sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
}



let isSliderLocked = true;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
  if(isSliderLocked) isSliderLocked = false;
  sliderMouseMove(event);
}

function sliderMouseUp() {
  if(!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
  if(isSliderLocked) isSliderLocked = true; 
 
}

//comparision slider_project section



//responsive nav
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.getElementById("m_logo").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("m_logo").style.display = "block";
}