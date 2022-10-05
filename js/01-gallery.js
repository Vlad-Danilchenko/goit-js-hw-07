import { galleryItems } from "./gallery-items.js";
// Change code below this line
const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);
// console.log(galleryItems);
// console.log(createGalleryCardsMarkup(galleryItems));
function createGalleryCardsMarkup(imgages) {
  return imgages
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
    })
    .join("");
}
paletteContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  paletteContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
    // console.log(evt.code);
  });
}
