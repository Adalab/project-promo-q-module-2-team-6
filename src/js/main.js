'use strict';


//---------------------------------------Funcionalidad FORMULARIO INTERACTIVO
//Elementos de la TARJETA.
const previewName = document.querySelector('.js-preview-name'); //Name.
const previewJob = document.querySelector('.js-preview-job'); //Job.
const previewPhone = document.querySelector('.js-preview-phone'); //Phone.
const previewLink = document.querySelector('.js-preview-link'); //Linkedin.
const previewEmail = document.querySelector('.js-preview-email'); //Email.
const previewGithub = document.querySelector('.js-preview-github'); //GitHub.
const previewPhoto = document.querySelector('.js-preview-photo'); //Photo.
const resetBtn = document.querySelector('.js-resetBtn'); //Elemento botón RESET.
const form = document.querySelector('.form'); //Elemnto formulario.

//Elementos del FORMULARIO.
const nameJs = document.querySelector('.js-name-input'); //Name.
const jobJs = document.querySelector('.js-job-input'); //Job.
const imgJs = document.querySelector('.js-img-input'); //Img.
const emailJs = document.querySelector('.js-email-input'); //Email.
const linkJs = document.querySelector('.js-link-input'); //Linkedin.
const gitJs = document.querySelector('.js-git-input'); //GitHub.
const phoneJs = document.querySelector('.js-phone-input'); //Phone.
const linkCard = document.querySelector('.link');
const create = document.querySelector('.button-create');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js-preview-photo');
const collapsableMenu = document.querySelectorAll('.collapsablemenu');
const buttonShare = document.querySelector('.button-share');

//Definimos el objeto dataCard.
const dataCard = {
  palette: 1,
  name: 'Nombre Apellido',
  job: 'Front-End developer',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: './assets/images/photo2.png',
};

//-------------------------------------------Inactivar botones card.

const cardLinkElements = document.querySelectorAll('.card-links');

cardLinkElements.forEach(item => item.removeAttribute('href'));


//----------------------------------------------Check automático de paletas.

const paletteChecker = (dataCard) => {
  const paletteDefault = document.getElementById(`${dataCard.palette}`);
  const allPalettesElements = document.querySelectorAll('.js-palettes');
  allPalettesElements.forEach(palette => palette.removeAttribute('checked'));
  paletteDefault.setAttribute('checked', '');
};

paletteChecker(dataCard);

//----------------------------------------------FORMULARIO y PREVISUALIZACIÓN.



const htmlPreview = (dataCard) => {
  previewName.innerHTML = dataCard.name;
  previewJob.innerHTML = dataCard.job;
  previewPhoto.src = dataCard.photo;
  profileImage.style.background = `url(${dataCard.photo})`;
  profileImage.style.backgroundSize = 'cover';
  profilePreview.src = dataCard.photo;
  if (dataCard.email) {
    previewEmail.href = `mailto: ${dataCard.email}`;
  }
  if (dataCard.phone) {
    previewPhone.href = `tel: ${dataCard.phone}`;
  }
  if (dataCard.linkedin) {
    previewLink.href = dataCard.linkedin;
  }
  if (dataCard.github) {
    previewGithub.href = dataCard.github;
  }
};


const fillDataCard = (clickedElement) => {
  dataCard[clickedElement.name] = clickedElement.value;
};

function handlePreviewData(event) {
  const clickedElement = event.target;
  fillDataCard(clickedElement);
  htmlPreview(dataCard);
}

form.addEventListener('keyup', handlePreviewData);

//-----------------------------------------------------------------Botón RESET.

function cardDefault() {
  dataCard.palette = 1;
  dataCard.name = 'Nombre Apellido';
  dataCard.job = 'Front developer';
  dataCard.phone = '';
  dataCard.email = '';
  dataCard.linkedin = '';
  dataCard.github = '';
  dataCard.photo = './assets/images/photo2.png';
}

function resetForm() {
  dataCard.palette = 1;
  nameJs.value = '';
  jobJs.value = '';
  imgJs.src = '';
  phoneJs.value = '';
  emailJs.value = '';
  linkJs.value = '';
  gitJs.value = '';
  profileImage.style.background = `url(${dataCard.photo})`;
  profileImage.style.backgroundSize = 'cover';
  profileImage.style.backgroundPosition = 'center';
}

function resetCard() {
  cardDefault();
  previewName.innerHTML = dataCard.name;
  previewJob.innerHTML = dataCard.job;
  previewPhoto.src = dataCard.photo;
  previewEmail.href = dataCard.email;
  previewPhone.href = `tel: ${dataCard.phone}`;
  previewLink.href = dataCard.linkedin;
  previewGithub.href = dataCard.github;
  profileImage.style.background = `url(${dataCard.photo})`;
  profileImage.style.backgroundSize = 'cover';
  profileImage.style.backgroundPosition = 'center';
  profilePreview.src = dataCard.photo;
}

const resetLocalStorage = () => localStorage.removeItem('userData');

const collapseCreateCardChildSections = () => {
  const createdSectionElement = document.querySelector('.created');
  const textAlertElement = document.querySelector('.share-text');
  if (
    document.querySelector('.button-create').classList.contains('inactived')
  ) {
    document.querySelector('.button-create').classList.remove('inactived');
  }
  if (!createdSectionElement.classList.contains('collapsed')) {
    createdSectionElement.classList.add('collapsed');
  }
  if (!textAlertElement.classList.contains('collapsed')) {
    textAlertElement.classList.add('collapsed');
  }
};

function handleClickReset() {
  resetForm();
  resetCard();
  collapseCreateCardChildSections();
  paletteChecker(dataCard);
  resetLocalStorage();
}

resetBtn.addEventListener('click', handleClickReset);



//---------------------------------------------------------- MENUS COLAPSABLES.

const paletteSelection = (element) => {
  const card = document.querySelector('.card');
  const cardStyles = ['palette1', 'palette2', 'palette3', 'palette4'];
  if (element.name === 'palette') {
    dataCard[element.name] = parseInt(element.id);

    cardStyles.forEach((item) =>
      item === `palette${element.id}`
        ? card.classList.add(item)
        : card.classList.remove(item)
    );
  }
};

const chooseWhatMenuDisplay = () => {
  event.preventDefault();
  nameJs.value && jobJs.value && emailJs.value && gitJs.value && linkJs.value
    ? document.querySelector('.created').classList.remove('collapsed')
    : document.querySelector('.check').classList.remove('collapsed');
  if (!document.querySelector('.created').classList.contains('collapsed')) {
    document.querySelector('.button-create').classList.add('inactived');
  }
};

const displayCreateCardSection = (event, element) => {
  if (
    element.name === 'newCardButton' ||
    element.parentElement.name === 'newCardButton'
  ) {
    chooseWhatMenuDisplay(event);
  }
};

const arrowPositioner = () => {
  collapsableMenu.forEach((section) =>
    !section.querySelector('.section-to-hide').classList.contains('collapsed')
      ? section.querySelector('.skull').classList.add('rotate')
      : section.querySelector('.skull').classList.remove('rotate')
  );
};

function menuCollapser(fieldsetElement) {
  const sectionToHide = fieldsetElement.querySelector('.section-to-hide');
  sectionToHide.classList.toggle('collapsed');
}

const otherMenusCollapser = (fieldsetElement) => {
  collapsableMenu.forEach((item) => {
    if (
      !item.querySelector('.section-to-hide').classList.contains('collapsed') &&
      item !== fieldsetElement
    ) {
      item.querySelector('.section-to-hide').classList.add('collapsed');
    }
  });
};

const checkIsFieldsetOrChild = (fieldsetElement, clickedElement) => {
  if (
    fieldsetElement === clickedElement ||
    clickedElement.parentElement.classList.contains('js-legend')
  ) {
    menuCollapser(fieldsetElement);
    otherMenusCollapser(fieldsetElement);
    arrowPositioner(fieldsetElement);
  }
};

function handleFunctionCollapse(event) {
  const clickedElement = event.target;
  const fieldsetElement = event.currentTarget;
  checkIsFieldsetOrChild(fieldsetElement, clickedElement);
  paletteSelection(clickedElement);
  displayCreateCardSection(event, clickedElement);
}

collapsableMenu.forEach((item) =>
  item.addEventListener('click', handleFunctionCollapse)
);


//--------------------------------------------------------LOCAL STORAGE.

function saveDataLocalStorage() {
  localStorage.setItem('userData', JSON.stringify(dataCard));
}

function getDataLocalStorage() {
  const dataLocalStorage = JSON.parse(localStorage.getItem('userData'));
  if (dataLocalStorage !== null) {
    paletteChecker(dataLocalStorage);
    nameJs.value = dataLocalStorage.name;
    jobJs.value = dataLocalStorage.job;
    profileImage.style.background = `url(${dataLocalStorage.photo})`;
    profileImage.style.backgroundSize = 'cover';
    profileImage.style.backgroundPosition = 'center';
    emailJs.value = dataLocalStorage.email;
    linkJs.value = dataLocalStorage.linkedin;
    gitJs.value = dataLocalStorage.github;
    phoneJs.value = dataLocalStorage.phone;
    htmlPreview(dataLocalStorage);
    paletteChecker(dataLocalStorage);
  }
}

getDataLocalStorage();

//--------------------------------------------------------CREAR TARJETA.

function apiCall() {
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataCard),
  })
    .then((response) => response.json())
    .then((serverResponse) => {
      if (serverResponse.success) {
        linkCard.innerHTML = serverResponse.cardURL;
        linkCard.href = serverResponse.cardURL;

        buttonShare.href = `https://twitter.com/intent/tweet?text=Hello%20world%20mi%20tarjeta&url=${serverResponse.cardURL}`;
      } else {
        linkCard.innerHTML = 'Error';
      }
    })
    .catch((error) => {
      console.error(`Se ha producido un error ${error}`);
    });
}

function handleCreatedCard(ev) {
  ev.preventDefault();
  apiCall();
  saveDataLocalStorage();
}

create.addEventListener('click', handleCreatedCard);


