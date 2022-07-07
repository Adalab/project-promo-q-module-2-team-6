"use strict";

<<<<<<< HEAD
const palette1 = document.querySelector(".color-palette1");
const palette2 = document.querySelector(".color-palette2");
const palette3 = document.querySelector(".color-palette3");
const information = document.querySelector(".card");
// const preview = document.querySelector ('.js-img-input');
// const divPreview = document.querySelector ('.js__profile-preview');

function handleClickPalette1() {
  information.classList.remove("pallete2", "pallete3");
  information.classList.add("pallete1");
}
function handleClickPalette2() {
  information.classList.remove("pallete1", "pallete3");
  information.classList.add("pallete2");
}
function handleClickPalette3() {
  information.classList.remove("pallete1", "pallete2");
  information.classList.add("pallete3");
}
palette1.addEventListener("click", handleClickPalette1);
palette2.addEventListener("click", handleClickPalette2);
palette3.addEventListener("click", handleClickPalette3);
=======
>>>>>>> 41f5a1c84aa664777a2930380528b4c18f6e128e

// -------------------- Preparación inicial div img ----------------

//parte imagen
<<<<<<< HEAD

const newFile = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js-preview-photo");

//@param { evento } e

function getImage(e) {
=======
const newFile = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js-preview-photo');

//@param { evento } e
function getImage (e) {
>>>>>>> 41f5a1c84aa664777a2930380528b4c18f6e128e
  const myFile = e.currentTarget.files[0];
  newFile.addEventListener("load", writeImage);
  newFile.readAsDataURL(myFile);
}

<<<<<<< HEAD
function writeImage() {
=======
function writeImage () {
>>>>>>> 41f5a1c84aa664777a2930380528b4c18f6e128e
  profileImage.style.background = `url(${newFile.result})`;
  profileImage.style.backgroundSize= 'cover';
  profilePreview.src = newFile.result;
}

<<<<<<< HEAD
fileField.addEventListener("change", getImage);
=======
fileField.addEventListener('change', getImage);
>>>>>>> 41f5a1c84aa664777a2930380528b4c18f6e128e
