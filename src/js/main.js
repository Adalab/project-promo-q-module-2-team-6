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
const paletteDefault = document.getElementById('1');

//Elementos del FORMULARIO.
const nameJs = document.querySelector('.js-name-input'); //Name.
const jobJs = document.querySelector('.js-job-input'); //Job.
const imgJs = document.querySelector('.js-img-input'); //Img.
const emailJs = document.querySelector('.js-email-input'); //Email.
const linkJs = document.querySelector('.js-link-input'); //Linkedin.
const gitJs = document.querySelector('.js-git-input'); //GitHub.
const phoneJs = document.querySelector('.js-preview-phone'); //Phone.
const linkCard = document.querySelector('.link');
const create = document.querySelector('.button-create');

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
  photo: './assets/images/photo.png',
};

//Función para previsualizar la información de los inputs en la tarjeta.
const htmlPreview = () => {
  previewName.innerHTML = dataCard.name;
  previewJob.innerHTML = dataCard.job;
  previewPhoto.src = dataCard.photo;
  previewEmail.href = `mailto: ${dataCard.email}`;
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

//--------------------------Código funcionalidad MENÚS COLAPSABLES CON OBJETOS.

const collapsableMenu = document.querySelectorAll('.collapsablemenu'); //Con querySelectoAll() objetemos un objeto con todos los elementos que tienen el selector especificado (en este caso la clase 'collapsablemenu')
collapsableMenu.forEach((item) =>
  item.addEventListener('click', hideShow, true)
);
//forEahc() va a ir recorriendo el objeto propiedad por propiedad. Lo que ponemos entre paréntesis es el nombre que le daremos a cada propiedad para referirnos a ellas dentro de la función flecha. En este caso le estamos diciendo que por cada item (propiedad) añada un eventListener.
//Ponemos a la escucha cada una de las secciones que hay dento del form y establecemos que al hacer click en ellas se ejecute la funcion manejadorea hideshow.

//----------Definimos las diferentes MINIFUNCIONES que va a contener la función manejadora.
const paletteSelection = (element) => {
<<<<<<< HEAD
  const card = document.querySelector('.card');
  const cardStyles = ['palette1', 'palette2', 'palette3'];
  if (element.name === 'palette') {
=======
  const card = document.querySelector(".card");
  const cardStyles = ["palette1", "palette2", "palette3", "palette4"];
  if (element.name === "palette") {
>>>>>>> c514e1aa7d346cccbe086b567d336637f65775f3
    dataCard[element.name] = parseInt(element.id);
    cardStyles.forEach((item) =>
      item === `palette${element.id}`
        ? card.classList.add(item)
        : card.classList.remove(item)
    );
  }
};

const createCard = (event, element) => {
  if (
    element.name === 'newCardButton' ||
    element.parentElement.name === 'newCardButton'
  ) {
    event.preventDefault();
    nameJs.value && jobJs.value && emailJs.value && gitJs.value && linkJs.value
      ? document.querySelector('.created').classList.remove('collapsed')
      : document.querySelector('.check').classList.remove('collapsed');
    if (!document.querySelector('.created').classList.contains('collapsed')) {
      document.querySelector('.button-create').classList.add('inactived');
    }
  }
};

const arrowPositioner = () => {
  collapsableMenu.forEach((section) =>
    !section.querySelector('.section-to-hide').classList.contains('collapsed')
      ? section.querySelector('.skull').classList.add('rotate')
      : section.querySelector('.skull').classList.remove('rotate')
  );
}; //Con esta función volvemos a recorrer los parámetros del objeto (es decir, los tres fieldsets) con un condicional (ternario) cuyo objetivo es rotar la flecha si la sección del fieldset está oculta.

function menuCollapser(fieldsetElement) {
  const sectionToHide = fieldsetElement.querySelector('.section-to-hide');
  sectionToHide.classList.toggle('collapsed');
} //Con esta función estamos colapsando el menú si detecta un click y está descolapsado y viceversa.

const otherMenusCollapser = (fieldsetElement) => {
  collapsableMenu.forEach((item) => {
    if (
      !item.querySelector('.section-to-hide').classList.contains('collapsed') &&
      item !== fieldsetElement
    ) {
      item.querySelector('.section-to-hide').classList.add('collapsed');
    }
  });
}; //Aquí estamos colapsando el resto de los menús cuándo uno de ellos se abre. Para ello estamos recorriendo de nuevo el objeto y por cada una de sus propiedades (item) estamos comprobando si hay alguna que no tenga la clase collapsed (es decir, que esté desplegada) y que no sea la misma que está siendo clickada en este momento. Si eso se da, lo que hacemos es añadirle la clase collapsed para que la única que quede desplegada sea la que acabamos de abrir.

//------------------------------------------------------FUNCIÓN MANEJADORA.

function hideShow(event) {
  const clickedElement = event.target;
  const fieldsetElement = event.currentTarget;
  if (
    fieldsetElement === clickedElement ||
    clickedElement.parentElement.classList.contains('js-legend')
  ) {
    menuCollapser(fieldsetElement);
    otherMenusCollapser(fieldsetElement);
    arrowPositioner(fieldsetElement);
  }
  paletteSelection(clickedElement);
  createCard(event, clickedElement);
}
/*
function handlerPalette(ev) {
  const palette = ev.currentTarget.value;
  dataCard.palette = palette;
  previewContainer.classList.remove(
    "palette1",
    "palette2",
    "palette3",
    "palette4"
  );

  previewContainer.classList.add(`palette${palette}`);
}

for (const oneRadio of allRadio) {
  //allRadio es un array, lo recorro y pongo cada elemto a la escucha
  oneRadio.addEventListener("click", handlerPalette);
} */


function handleCreatedCard(ev){
  ev.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dataCard)
    } )
    .then((response) => response.json())
    .then((serverResponse) => {
      if (serverResponse.success){
        linkCard.innerHTML = serverResponse.cardURL;
        linkCard.href = serverResponse.cardURL;
        console.log(serverResponse)
      }
      else {
        linkCard.innerHTML = 'Error';
      }
    });
}

create.addEventListener('click', handleCreatedCard);
