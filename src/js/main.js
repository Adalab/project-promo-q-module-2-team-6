'use strict';

// 1. Identificar a quien se le da el deplegable: legend-design. x
// 2. Añadir el evento. x
// 3. Cuando se haga click se abra la sección y se cierren las otras 2. 
// 4. Girar la flecha cuando se haga click.  

const designMenu = document.querySelector('.design-colors');
const legendDesign = document.querySelector ('.legend-design');
const fillMenu = document.querySelector('.fill-inputs-section');
const legendFill = document.querySelector('.legend-fill');
const legendShare =document.querySelector('.share-section');
const shareMenu = document.querySelector('.container-collapsible');
const arrowDesing = document.querySelector ('.js-arrow-design1');
const arrowShare = document.querySelector ('.js-arrow-design2');
const arrowFill = document.querySelector ('.js-arrow-design3');



legendDesign.addEventListener('click', () => {
  designMenu.classList.toggle('collapsed');
  arrowDesing.classList.toggle('rotate');
  clickComprob (designMenu, fillMenu, shareMenu);
}
);

legendFill.addEventListener('click', () => {
  fillMenu.classList.toggle('collapsed');
  arrowFill.classList.toggle('rotate');
  clickComprob (fillMenu, designMenu, shareMenu);
}
);
legendShare.addEventListener('click', () => {
  shareMenu.classList.toggle('collapsed');
  arrowShare.classList.toggle('rotate');
  clickComprob (shareMenu, designMenu, fillMenu);
});


function clickComprob (visibleMenu, collapsedMenuOne, collapsedMenuTwo) {
  if (visibleMenu.classList.contains('collapsed') === false) {
    collapsedMenuOne.classList.add('collapsed');
    collapsedMenuTwo.classList.add('collapsed');
  }
}


// function visibleMenu (selector) {
//     const element = document.querySelector(".selector");
//     element.classList.toggle("collapsed");
//     clickComprob (designMenu, fillMenu, shareMenu);
// }