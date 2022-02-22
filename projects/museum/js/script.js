// Переменная для получения ширины окна пользователя: window.screen.width

// Переменные для бургер-меню
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("header-nav");
const welcomeContent = document.getElementById("welcome__content");

// Переключение видимости навигации при клике на бургер-меню.
burger.onclick = function () {
  if (window.screen.width > 1024) {
    if (nav.classList.contains("nav_active")) {
      nav.classList.remove("nav_active");
    } else {
      nav.classList.add("nav_active");
    }
  } else if (window.screen.width <= 768) {
    if (nav.classList.contains("nav_active")) {
      nav.classList.remove("nav_active");
    } else {
      nav.classList.add("nav_active");
    }
  } else {
    if (nav.classList.contains("nav_active")) {
      nav.classList.remove("nav_active");
    } else {
      nav.classList.add("nav_active");
    }

    // Переключение видимости контента welcome.
    if (welcomeContent.classList.contains("welcome-content_active")) {
      welcomeContent.classList.remove("welcome-content_active");
    } else {
      welcomeContent.classList.add("welcome-content_active");
    }
  }

  // Переключение иконки бургер-меню.
  burger.classList.toggle("burger_active");
};

const seniorAmount = document.getElementById("seniorAmount"); // Tickets: input=[number] Senior
const basicAmount = document.getElementById("basicAmount"); // Tickets: input=[number] Basic
const bookingSeniorAmount = document.getElementById("booking_seniorAmount"); // Booking: input=[number] Senior
const bookingBasicAmount = document.getElementById("booking_basicAmount"); // Booking: input=[number] Basic

const overviewSeniorAmount = document.getElementById("overview_seniorAmount"); // Overview: senior amount
const overviewBasicAmount = document.getElementById("overview_basicAmount"); // Overview: basic amount

const basicPrice = document.getElementById("basicPrice"); // Цена
const seniorPrice = document.getElementById("seniorPrice"); // Цена

const overviewTotal = document.getElementById("overviewTotal");

// Переменные для окна Booking
const closeBtn = document.getElementById("booking__close-btn"); // Кнопка закрытия
const bookingWindow = document.getElementById("booking-window"); // Форма Booking
const buyBtn = document.getElementById("tickets__buy-btn"); // Кнопка BuyNow
closeBtn.onclick = function () {
  // Закрывает окно по кнопке "Close"
  bookingWindow.classList.remove("booking_active");
};
buyBtn.onclick = function () {
  // Передаёт количество билетов из секции Tickets в форму Booking
  bookingSeniorAmount.value = seniorAmount.value;
  bookingBasicAmount.value = basicAmount.value;

  // Передаёт количество билетов в Overview
  overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
  overviewBasicAmount.innerHTML = bookingBasicAmount.value;

  // Считает стоимость каждого типа билета
  basicPrice.innerHTML = (bookingBasicAmount.value * 20) + " €";
  seniorPrice.innerHTML = (bookingSeniorAmount.value * 10) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";

  // Открывает окно по кнопке "Buy now"
  bookingWindow.classList.add("booking_active");
};

const basicAdd = document.getElementById("basicAdd");
const basicRemove = document.getElementById("basicRemove");
const seniorAdd = document.getElementById("seniorAdd");
const seniorRemove = document.getElementById("seniorRemove");

// Stepper basic
basicAdd.onclick = function () {
  bookingBasicAmount.value++;
  overviewBasicAmount.innerHTML = bookingBasicAmount.value;
  basicPrice.innerHTML = (bookingBasicAmount.value * 20) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
};
basicRemove.onclick = function () {
  if(bookingBasicAmount.value > 0) {
  bookingBasicAmount.value--;
  overviewBasicAmount.innerHTML = bookingBasicAmount.value;
  basicPrice.innerHTML = (bookingBasicAmount.value * 20) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
  }
  else  {
    bookingBasicAmount.value = 0;
    overviewBasicAmount.innerHTML = bookingBasicAmount.value;
    basicPrice.innerHTML = (bookingBasicAmount.value * 20) + " €";
    overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
  }
};

// Stepper senior
seniorAdd.onclick = function () {
  bookingSeniorAmount.value++;
  overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
  seniorPrice.innerHTML = (bookingSeniorAmount.value * 10) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
};
seniorRemove.onclick = function () {
  if(bookingSeniorAmount.value > 0) {
  bookingSeniorAmount.value--;
  overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
  seniorPrice.innerHTML = (bookingSeniorAmount.value * 10) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
  }
  else  {
    bookingSeniorAmount.value = 0;
    overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
    seniorPrice.innerHTML = (bookingSeniorAmount.value * 10) + " €";
    overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
  }
};
