'use strict';

const nameJs = document.querySelector ('.js-name-input');
const jobJs = document.querySelector ('.js-job-input');
const imgJs = document.querySelector ('.js-img-input');
const phoneJs = document.querySelector ('.js-phone-input');
const emailJs = document.querySelector ('.js-email-input');
const linkJs = document.querySelector ('.js-link-input');
const gitJs = document.querySelector ('.js-git-input');
const form = document.querySelector ('.form');
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewLink = document.querySelector('.js-preview-phone');
const previewPhoto = document.querySelector('.js-preview-photo');


/* const collapsableMenu = document.querySelectorAll('.collapsablemenu');
collapsableMenu.forEach(item => item.addEventListener('click', hideShow));

function hideShow (event) {
  const fieldsetElement = event.currentTarget;
  const sectionToHide = fieldsetElement.querySelector('.section-to-hide'); //
  const arrowSection = fieldsetElement.querySelector('.arrow');
  sectionToHide.classList.toggle('collapsed');
  arrowSection.classList.toggle('rotate');

  if (!fieldsetElement.classList.contains('collapsed')) {
    collapsableMenu.forEach((section) => {
      if (section !== fieldsetElement) {
        section.querySelector('.section-to-hide').classList.add('collapsed');
      }
    });
  }
} */



function listen (event) {
  const dataCard = {
    palette: 1,
    name: nameJs.value,
    job: jobJs.value,
    phone: phoneJs.value,
    email: emailJs.value,
    linkedin: linkJs.value,
    github: gitJs.value,
    photo: imgJs.value,
  };
  previewName.innerHTML = nameJs.value;
  previewJob.innerHTML = jobJs.value;
  previewPhoto.src = imgJs.value;
  previewLink.href = linkJs.value;

};



form.addEventListener('keyup', listen);