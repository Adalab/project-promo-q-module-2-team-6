'use strict';

//1. Asigno las constantes para cada elemento HTML que voy a usar.
//En vez de registrar el evento click sobre los labels, lo registro sobre el fieldset. De esta forma, puedo seleccionar despúes los elementos hijos que quiero ocultar o girar sin necesidad de guardarlos en una variable (con variable.querySelector('claseComun')), lo que nos permite ahorrar código y generar funciones más generalizadas.

// const fieldsetDesign = document.querySelector ('.design-section');
// const fieldsetFill = document.querySelector('.fill-section');
// const fieldsetShare =document.querySelector('.share-section');

const collapsableMenu = document.querySelectorAll('.collapsablemenu');
collapsableMenu.forEach(item => item.addEventListener('click', () => hideShow (item)));

//2. Defino la función que marca el comportamiento de cada fieldset al registrar el evento "click". Para ello, voy a pasarle como parámetro la variable del fieldset sobre la que el usuario está haciendo click, de forma que la función sepa qué elementos tiene que ocultar y cuáles tiene que girar.
function hideShow (fieldsetElement) {
  const sectionToHide = fieldsetElement.querySelector('.section-to-hide'); //Aquí estoy seleccionando al elemento HTML con clase section-to-hide que es hijo del fieldset en el que el usuario ha hecho click. Esto ocurre porque, en vez de decirle que busque en todo el documento un elemento con la clase x (como estaríamos haciendo usando el comando document.querySelector('.x')), le estoy diciendo que me lo busque exclusivamente dentro del fieldset.
  //He añadido una clase section-to-hide a las secciones a ocultar dentro de cada fieldset, de forma que JavaScript buscará siempre los elementos hijos con esta clase independientemente del fieldset que registre el click. Pero insisto, siempre actuará ÚNICAMENTE SOBRE LOS ELEMENTOS CON ESTA CLASE QUE SEAN HIJOS DEL FIELDSET DONDE SE HA HECHO CLICK.
  const arrowSection = fieldsetElement.querySelector('.arrow'); //Siguiendo la misma lógica que en el caso anterior, guardamos en una constante el elemento flecha de cada menú, para poder darle la vuelta con cada click.
  sectionToHide.classList.toggle('collapsed');//Añadimos o quitamos la clase collapsed.
  arrowSection.classList.toggle('rotate');//Añadimos o quitamos la calse rotate.

  if (!fieldsetElement.classList.contains('collapsed')) {
    collapsableMenu.forEach((section) => {
      if (section !== fieldsetElement) {
        section.querySelector('.section-to-hide').classList.add('collapsed');
      }
    });
  }
  // if (!sectionToHide.classList.contains('collapsed')) {
  //(!sectionToHide.classList.contains('collapsed')) es exactamente igual que (sectionToHide.classList.contains('collapsed') === false), pero mucho más recogidito.
  //En este bloque de código condicional, estamos indicando que cuándo se registre el elemento click sobre un evento, los otros dos deben ocultarse, por lo que les añadiremos la clase collapsed.

  //   if (fieldsetElement === fieldsetDesign) {
  //     fieldsetFill.querySelector('.section-to-hide').classList.add('collapsed');
  //     fieldsetShare.querySelector('.section-to-hide').classList.add('collapsed');
  //   } else if (fieldsetElement === fieldsetFill) {
  //     fieldsetShare.querySelector('.section-to-hide').classList.add('collapsed');
  //     fieldsetDesign.querySelector('.section-to-hide').classList.add('collapsed');
  //   } else if (fieldsetElement === fieldsetShare) {
  //     fieldsetFill.querySelector('.section-to-hide').classList.add('collapsed');
  //     fieldsetDesign.querySelector('.section-to-hide').classList.add('collapsed');
  //   }
  // }
}

//Añadimos a cada fieldset un eventListener para poder registrar los clicks y definimos las acciones a seguir cuándo esto ocurra invocando a la función anteriormente definida (hideShow) con la constante que contiene el elemento HTML como parámetro.


// fieldsetDesign.addEventListener('click', () => hideShow(fieldsetDesign));
// fieldsetFill.addEventListener('click', () => hideShow(fieldsetFill));
// fieldsetShare.addEventListener('click', () => hideShow(fieldsetShare));


// --------------------------------------------------------------------------------
// 1. Identificar a quien se le da el deplegable: legend-design. x
// 2. Añadir el evento. x
// 3. Cuando se haga click se abra la sección y se cierren las otras 2
// 4. Girar la flecha cuando se haga click.

// const designMenu = document.querySelector('.design-colors');
// const legendDesign = document.querySelector ('.legend-design');
// const fillMenu = document.querySelector('.fill-inputs-section');
// const legendFill = document.querySelector('.legend-fill');
// const legendShare =document.querySelector('.share-section');
// const shareMenu = document.querySelector('.container-collapsible');
// const arrowDesing = document.querySelector ('.js-arrow-design1');
// const arrowShare = document.querySelector ('.js-arrow-design2');
// const arrowFill = document.querySelector ('.js-arrow-design3');


// legendDesign.addEventListener('click', () => {
//   designMenu.classList.toggle('collapsed');
//   arrowDesing.classList.toggle('rotate');
//   clickComprob (designMenu, fillMenu, shareMenu);
// }
// );

// legendFill.addEventListener('click', () => {
//   fillMenu.classList.toggle('collapsed');
//   arrowFill.classList.toggle('rotate');
//   clickComprob (fillMenu, designMenu, shareMenu);
// }
// );
// legendShare.addEventListener('click', () => {
//   shareMenu.classList.toggle('collapsed');
//   arrowShare.classList.toggle('rotate');
//   clickComprob (shareMenu, designMenu, fillMenu);
// });

// function visibleMenu (selector) {
//     const element = document.querySelector(".selector");
//     element.classList.toggle("collapsed");
//     clickComprob (designMenu, fillMenu, shareMenu);
// }