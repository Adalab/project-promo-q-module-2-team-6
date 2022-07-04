'use strict';


// -------------------- Preparación inicial div img ----------------

//parte imagen
const newFile = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js-preview-photo');

//@param { evento } e
function getImage (e) {
  const myFile = e.currentTarget.files[0];
  newFile.addEventListener('load', writeImage);
  newFile.readAsDataURL(myFile);
}

function writeImage () {
  profileImage.style.background = `url(${newFile.result})`;
  profilePreview.src = newFile.result;
}

fileField.addEventListener('change', getImage);