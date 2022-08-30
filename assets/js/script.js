'use strict';

// responsive menubar
const menuButton = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const menuLink = document.querySelector('.menu-item')

$(function() {
  $([menuButton,menuLink]).each(function()  {
    $(this).on('click', function(e ) {
      $(menuButton).toggleClass('fa-times');
      $(menu).toggleClass('active');
    });
  });
})

// searchbar
const searchGlass = document.getElementsByClassName('fa-magnifying-glass');
const searchBar = document.getElementById('search-input');

$(function() {
  $(searchGlass).click(function() {
    $(searchBar).slideToggle(500);
  })
})


// colection slider
let collectionSlider = new Swiper(".collection-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlide: true,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// product slider
let productSlider = new Swiper(".product-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// calculating price and quanity of product
const plusButton = document.querySelectorAll('[data-plus-btn]');
const minusButton = document.querySelectorAll('[data-minus-btn]');
const quanityProduct = document.querySelectorAll('[data-quanity]');
const amount = document.querySelectorAll('[data-price]');
const totalForOne = document.querySelectorAll('[data-total-for-one]');
const totalForAll = document.querySelector('[data-total-for-all]');
const closeButton = document.querySelectorAll('.close-btn');
const tableRow = document.querySelectorAll('.table-row');

$(function() {
  for(let i=0; i<3; i++) {
    $(plusButton[i]).click(function() {
      let allPayment = 0;
  
      $(quanityProduct[i]).html(parseInt($(quanityProduct[i]).html()) + 1);
      $(totalForOne[i]).html(parseInt($(amount[i]).html()) * parseInt($(quanityProduct[i]).html()));
  
      for(let i=0; i<3; i++) {
        let onePayment = parseInt($(totalForOne[i]).html());
        allPayment += onePayment;
      }
      $(totalForAll).html(allPayment);
    })
  }
})

$(function() {
  for(let i=0; i<3; i++) {
    $(minusButton[i]).click(function() {
      let allPayment = 0;
  
      if (parseInt($(quanityProduct[i]).html()) <= 0) {
        $(quanityProduct[i]).html(parseInt($(quanityProduct[i]).html()) - 0);
      } else {
        $(quanityProduct[i]).html(parseInt($(quanityProduct[i]).html()) - 1);
      }
      $(totalForOne[i]).html(parseInt($(amount[i]).html()) * parseInt($(quanityProduct[i]).html()));
  
      for(let i=0; i<3; i++) {
        let onePayment = parseInt($(totalForOne[i]).html());
        allPayment += onePayment;
      }
      $(totalForAll).html(allPayment);
    })  
  }
})

$(function() {
  for(let i=0; i<3; i++) {
    $(closeButton[i]).click(function() {
      $(tableRow[i]).toggleClass('d-none');
      $(totalForAll).html($(totalForAll).html()-parseInt($(totalForOne[i]).html()));
      $(totalForOne[i]).html(0)
    })
  }
})