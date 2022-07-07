"use strict";


//---------------------------------------Funcionalidad FORMULARIO INTERACTIVO
//Elementos de la TARJETA.
const previewName = document.querySelector('.js-preview-name');//Name.
const previewJob = document.querySelector('.js-preview-job');//Job.
const previewPhone = document.querySelector('.js-preview-phone');//Phone.
const previewLink = document.querySelector('.js-preview-link');//Linkedin.
const previewEmail = document.querySelector('.js-preview-email');//Email.
const previewGithub = document.querySelector('.js-preview-github');//GitHub.
const previewPhoto = document.querySelector('.js-preview-photo');//Photo.
const resetBtn = document.querySelector('.js-resetBtn');//Elemento botón RESET.
const form = document.querySelector('.form');//Elemnto formulario.
const paletteDefault = document.getElementById('1');

//Elementos del FORMULARIO.
const nameJs = document.querySelector('.js-name-input');//Name.
const jobJs = document.querySelector('.js-job-input');//Job.
const imgJs = document.querySelector('.js-img-input');//Img.
const emailJs = document.querySelector('.js-email-input');//Email.
const linkJs = document.querySelector('.js-link-input');//Linkedin.
const gitJs = document.querySelector('.js-git-input');//GitHub.
const phoneJs = document.querySelector('.js-preview-phone');//Phone.



paletteDefault.setAttribute('checked', '');

//Definimos el objeto dataCard.
const dataCard = {
  palette: 1,
  name: 'Nombre Apellido',
  job: 'Front-End developer',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo:'./assets/images/photo.png',
};

//Función para previsualizar la información de los inputs en la tarjeta.
const htmlPreview = () => {
  previewName.innerHTML = dataCard.name;
  previewJob.innerHTML = dataCard.job;
  previewPhoto.src = dataCard.photo;
  previewEmail.href = dataCard.email;
  previewPhone.href = `tel: ${dataCard.phone}`;
  previewLink.href = dataCard.linkedin;
  previewGithub.href = dataCard.github;
};

//Función manejadora del FORMULARIO.
function handlePreviewData(event) {
  const clickedElement = event.target;
  if (clickedElement) {
    dataCard[clickedElement.name] = clickedElement.value;
  }
  htmlPreview(clickedElement);
}

form.addEventListener('keyup', handlePreviewData);



//---------------------------------------------------RESETEANDO EL FORMULARIO al clickar RESET.

//Resetea el objeto a sus valores por defecto.
function cardDefault() {
  dataCard.palette = 1;
  dataCard.name = 'Nombre Apellido';
  dataCard.job = 'Front developer';
  dataCard.phone = '';
  dataCard.email = '';
  dataCard.linkedin = '';
  dataCard.github = '';
  dataCard.photo = './assets/images/photo.png';
}

//Resetea el formulario.
function resetForm() {
  dataCard.palette = 1;
  nameJs.value = '';
  jobJs.value = '';
  imgJs.src = '';
  phoneJs.value = '';
  emailJs.value = '';
  linkJs.value = '';
  gitJs.value = '';
}

//Devuelve la tarjeta a su estado original.
function resetCard() {
  cardDefault();
  previewName.innerHTML = dataCard.name;
  previewJob.innerHTML = dataCard.job;
  previewPhoto.src = dataCard.photo;
  previewLink.href = dataCard.linkedin;
  previewPhone.href = `tel: ${dataCard.phone}`;
  previewLink.href = dataCard.linkedin;
  previewGithub.href = dataCard.github;
  profileImage.style.background = `url(${dataCard.photo})`;
  profilePreview.src = dataCard.photo;
}


//Función manejadora del botón RESET.
function handleClickReset() {
  resetForm();
  resetCard();
}

resetBtn.addEventListener('click', handleClickReset);



/* //--------------------------Código funcionalidad MENÚS COLAPSABLES (sin objetos).
/* const formElement = document.querySelector('.form');

const localizeFieldset = (clickedElement) => clickedElement.classList.contains('js-legend') ? clickedElement : clickedElement.parentElement;

const arrowPositioner = (sectionClicked, collapsableSection) => {
  !collapsableSection.classList.contains('collapsed') ?sectionClicked.querySelector('.arrow').classList.add('rotate') : sectionClicked.querySelector('.arrow').classList.remove('rotate');
};

const menuCollapser = (sectionClicked)=> {
  const collapsableSection = sectionClicked.parentElement.querySelector('.section-to-hide');
  collapsableSection.classList.toggle('collapsed');
  arrowPositioner(sectionClicked, collapsableSection);

  if (!collapsableSection.classList.contains('collapsed')) {

    if (collapsableSection.classList.contains('fill-inputs-section')) {
      document.querySelector('.container-collapsible').classList.add('collapsed');
      document.querySelector('.design-colors').classList.add('collapsed');

    } else if (collapsableSection.classList.contains('design-colors')) {
      document.querySelector('.container-collapsible').classList.add('collapsed');
      document.querySelector('.fill-inputs-section').classList.add('collapsed');

    } else if (collapsableSection.classList.contains('container-collapsible')) {
      document.querySelector('.design-colors').classList.add('collapsed');
      document.querySelector('.fill-inputs-section').classList.add('collapsed');
    }
  }
};

const handleFunction = (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains('js-legend') || clickedElement.parentElement.classList.contains('js-legend')) {
    const sectionClass = localizeFieldset(clickedElement);
    menuCollapser(sectionClass);
  }
};

formElement.addEventListener('click', handleFunction); */

//--------------------------Código funcionalidad MENÚS COLAPSABLES CON OBJETOS.

const collapsableMenu = document.querySelectorAll(".collapsablemenu"); //Con querySelectoAll() objetemos un objeto con todos los elementos que tienen el selector especificado (en este caso la clase 'collapsablemenu')
collapsableMenu.forEach((item) =>
  item.addEventListener("click", hideShow, true)
);
//forEahc() va a ir recorriendo el objeto propiedad por propiedad. Lo que ponemos entre paréntesis es el nombre que le daremos a cada propiedad para referirnos a ellas dentro de la función flecha. En este caso le estamos diciendo que por cada item (propiedad) añada un eventListener.
//Ponemos a la escucha cada una de las secciones que hay dento del form y establecemos que al hacer click en ellas se ejecute la funcion manejadorea hideshow.

//----------Definimos las diferentes MINIFUNCIONES que va a contener la función manejadora.
const paletteSelection = (element) => {
  const card = document.querySelector ('.card');
  const cardStyles = ['palette1', 'palette2','palette3'];
  if (element.name === 'palette') {
    dataCard[element.name] = element.id;
    cardStyles.forEach(item => item === `palette${element.id}` ? card.classList.add(item) :card.classList.remove(item));
  }
};

const createCard = (event, element) => {
  if (element.name === 'newCardButton' || element.parentElement.name === 'newCardButton') {
    event.preventDefault();
    nameJs.value && jobJs.value && emailJs.value && gitJs.value && linkJs.value ? document.querySelector('.created').classList.remove('collapsed') : document.querySelector('.check').classList.remove('collapsed');
    if (!document.querySelector('.created').classList.contains('collapsed')) {
      document.querySelector('.button-create').classList.add('inactived');
    }
  }
};

const arrowPositioner = () => {
  collapsableMenu.forEach((section) =>
    !section.querySelector(".section-to-hide").classList.contains("collapsed")
      ? section.querySelector(".arrow").classList.add("rotate")
      : section.querySelector(".arrow").classList.remove("rotate")
  );
}; //Con esta función volvemos a recorrer los parámetros del objeto (es decir, los tres fieldsets) con un condicional (ternario) cuyo objetivo es rotar la flecha si la sección del fieldset está oculta.

function menuCollapser(fieldsetElement) {
  const sectionToHide = fieldsetElement.querySelector(".section-to-hide");
  sectionToHide.classList.toggle("collapsed");
} //Con esta función estamos colapsando el menú si detecta un click y está descolapsado y viceversa.

const otherMenusCollapser = (fieldsetElement) => {
  collapsableMenu.forEach((item) => {
    if (
      !item.querySelector(".section-to-hide").classList.contains("collapsed") &&
      item !== fieldsetElement
    ) {
      item.querySelector(".section-to-hide").classList.add("collapsed");
    }
  });
}; //Aquí estamos colapsando el resto de los menús cuándo uno de ellos se abre. Para ello estamos recorriendo de nuevo el objeto y por cada una de sus propiedades (item) estamos comprobando si hay alguna que no tenga la clase collapsed (es decir, que esté desplegada) y que no sea la misma que está siendo clickada en este momento. Si eso se da, lo que hacemos es añadirle la clase collapsed para que la única que quede desplegada sea la que acabamos de abrir.

//------------------------------------------------------FUNCIÓN MANEJADORA.

function hideShow(event) {
  const clickedElement = event.target; //Esta variable nos indica qué elemento en concreto está siendo clickado por el usuario.
  const fieldsetElement = event.currentTarget;
  //Guardamos en una variable cuál de los fieldsets está siendo clickado.
  //Es decir, event.currentTarget te devuelve cuál de los elementos que tienen añadido el addEventListener está siendo clickado, mientras que event.target te devuelve qué en particular está clickando el usuario.

  if (
    fieldsetElement === clickedElement ||
    clickedElement.parentElement.classList.contains("js-legend")
  ) {
    menuCollapser(fieldsetElement);
    otherMenusCollapser(fieldsetElement);
    arrowPositioner(fieldsetElement);
  } //Traduccioón = Si el elemento que está siendo clickado por el usuario es igual a la sección que posee el addEventListener O el elemento que está siendo clickado tiene un contenedor padre con la clase js-legend, entonces llama a la función menuCollapser (que va a colapsar el menú correspondiente).
  //El sentido de este condicional es evitar que se colapsen de nuevo los menús al hacer click sobre cualquiera de los inputs.
  //A continuación llamamos a las otras dos funciones para que se ejecuten.
  paletteSelection(clickedElement);
  createCard(event, clickedElement);
}
<<<<<<< HEAD

//---------------------------------------Funcionalidad FORMULARIO INTERACTIVO

const nameJs = document.querySelector(".js-name-input");
const jobJs = document.querySelector(".js-job-input");
const imgJs = document.querySelector(".js-img-input");
const phoneJs = document.querySelector(".js-phone-input");
const emailJs = document.querySelector(".js-email-input");
const linkJs = document.querySelector(".js-link-input");
const gitJs = document.querySelector(".js-git-input");
const form = document.querySelector(".form");
const previewName = document.querySelector(".js-preview-name");
const previewJob = document.querySelector(".js-preview-job");
const previewPhone = document.querySelector(".js-preview-phone");
const previewLink = document.querySelector(".js-preview-link");
const previewEmail = document.querySelector(".js-preview-email");
const previewGithub = document.querySelector(".js-preview-github");
const previewPhoto = document.querySelector(".js-preview-photo");
const resetBtn = document.querySelector(".js-resetBtn");

const dataCard = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

//previsualiza datos en tarjeta
function listen() {
  previewName.innerHTML = nameJs.value;
  previewJob.innerHTML = jobJs.value;
  previewPhoto.src = imgJs.value;
  previewEmail.href = emailJs.value;
  previewPhone.href = `tel: ${phoneJs.value}`;
  previewLink.href = linkJs.value;
  previewGithub.href = gitJs.value;
}

form.addEventListener("keyup", listen);

function cardDefault() {
  dataCard.palette = 1;
  dataCard.name = "Nombre Apellido";
  dataCard.job = "Front developer";
  dataCard.phone = "";
  dataCard.email = "";
  dataCard.linkedin = "";
  dataCard.github = "";
  dataCard.photo = "./assets/images/photo.png";
  return dataCard;
}

//----------------------------------------------------RESETEANDO EL FORMULARIO al clickar RESET.
//init form
function resetForm() {
  nameJs.value = "";
  jobJs.value = "";
  imgJs.src = "";
  phoneJs.value = "";
  emailJs.value = "";
  linkJs.value = "";
  gitJs.value = "";
}
//init card
function resetCard() {
  cardDefault();
  previewName.innerHTML = dataCard.name;
  previewJob.innerHTML = dataCard.job;
  previewPhoto.src = dataCard.photo;
  previewLink.href = dataCard.linkedin;
}

function handleClickReset() {
  resetForm();
  resetCard();
}
resetBtn.addEventListener("click", handleClickReset);
=======
>>>>>>> 41f5a1c84aa664777a2930380528b4c18f6e128e
