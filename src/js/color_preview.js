"use strict";

<<<<<<< HEAD
const palette1 = document.querySelector(".color-palette1");
const palette2 = document.querySelector(".color-palette2");
const palette3 = document.querySelector(".color-palette3");
const information = document.querySelector(".information");
const preview = document.querySelector(".js-img-input");
const divPreview = document.querySelector(".js__profile-preview");

function handleClickPalette1(event) {
  information.classList.remove("pallete2");
  information.classList.remove("palette3");
  information.classList.add("pallete1");
}
function handleClickPalette2(event) {
  information.classList.remove("pallete1");
  information.classList.remove("pallete3");

  information.classList.add("pallete2");
}
function handleClickPalette3(event) {
  information.classList.remove("pallete1");
  information.classList.remove("pallete2");
  information.classList.add("pallete3");
}

palette1.addEventListener("click", handleClickPalette1);
palette2.addEventListener("click", handleClickPalette2);
palette3.addEventListener("click", handleClickPalette3);
=======
const palette1 = document.querySelector('.color-palette1');
const palette2 = document.querySelector('.color-palette2');
const palette3 = document.querySelector('.color-palette3');
const information = document.querySelector ('.card');
// const preview = document.querySelector ('.js-img-input');
// const divPreview = document.querySelector ('.js__profile-preview');

function handleClickPalette1() {

  information.classList.remove('pallete2', 'pallete3');
  information.classList.add('pallete1');


}
function handleClickPalette2() {

  information.classList.remove('pallete1', 'pallete3');
  information.classList.add('pallete2');


}
function handleClickPalette3() {

  information.classList.remove('pallete1', 'pallete2');
  information.classList.add('pallete3');


}
palette1.addEventListener('click', handleClickPalette1);
palette2.addEventListener('click', handleClickPalette2);
palette3.addEventListener('click', handleClickPalette3);

>>>>>>> aded58920bb30d1ccc0f0fafe6a04bcabbc7ff4d

// -------------------- Preparación inicial div img ----------------

/* function addImagePreview (event) {
    divPreview.style.backgroundImage = preview.value;
};

preview.addEventListener ('click', addImagePreview); */
