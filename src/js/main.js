"use strict";

const collapsableMenu = document.querySelectorAll(".collapsablemenu");
collapsableMenu.forEach((item) => item.addEventListener("click", hideShow));

function hideShow(event) {
  const fieldsetElement = event.currentTarget;

  const sectionToHide = fieldsetElement.querySelector(".section-to-hide"); //
  const arrowSection = fieldsetElement.querySelector(".arrow");
  sectionToHide.classList.toggle("collapsed");
  arrowSection.classList.toggle("rotate");

  if (!fieldsetElement.classList.contains("collapsed")) {
    collapsableMenu.forEach((section) => {
      if (section !== fieldsetElement) {
        section.querySelector(".section-to-hide").classList.add("collapsed");
      }
    });
  }
}
