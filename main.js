(function () {
  const accordionItems = setupItems({ selector: "#accordion-item" });

  accordionItems.forEach((buttonNode) => {
    buttonNode.addEventListener("click", (e) => {
      const buttonId = e.target.dataset.id;
      const buttonActive = e.target.dataset.active;

      /* Checking for previous activated elements and deactivating it */
      accordionItems.forEach((item) => {
        const itemId = item.dataset.id;
        const itemActive = item.dataset.active;

        if (itemActive === "true" && buttonId !== itemId) {
          toggleActive({ item, active: itemActive });
        }
      });

      toggleActive({ item: e.target, active: buttonActive });
    });
  });
})();

function setupItems({ selector }) {
  const accordionButtons = document.querySelectorAll(selector);

  accordionButtons.forEach((button, index) => {
    // assign data-id attribute to every accordion button to keep it idetified
    button.dataset.id = index;
    button.dataset.active = false;
  });

  return accordionButtons;
}

function toggleActive({ item, active }) {
  const itemSpan = item.children[0];
  const itemArrow = item.children[1];
  const content = item.nextElementSibling;

  if (active === "true") {
    item.dataset.active = false;
    content.style.maxHeight = 0;
  } else {
    item.dataset.active = true;
    content.style.maxHeight = content.scrollHeight + "px";
  }

  itemSpan.classList.toggle("accordion__btn__span--active");

  itemArrow.classList.toggle("arrow-active");
}
