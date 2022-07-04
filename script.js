
// search button logic
searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
}

// scroll logic
window.onscroll = () => {

  searchForm.classList.remove("active");

  if(window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  }else {
    document.querySelector('.header .header-2').classList.remove('active');
  }

}


window.onload = () => {

  if(window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  }else {
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

// loader
function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 4000);
}


// Login section
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
}

// slide wripper script
// books
var bookSwiper = new Swiper(".books-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//featured
var featureSwiper = new Swiper(".featured-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//new arrivals
var arrivalSwiper = new Swiper(".arrivals-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//reviews
var reviewSwiper = new Swiper(".reviews-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//blogs
var reviewSwiper = new Swiper(".blogs-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});