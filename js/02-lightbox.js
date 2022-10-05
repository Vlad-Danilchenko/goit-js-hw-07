import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const ulRef = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
ulRef.insertAdjacentHTML("beforeend", cardsMarkup);
// console.log(galleryItems);
// console.log(createGalleryCardsMarkup(galleryItems));

const lightboxSettings = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};

function createGalleryCardsMarkup(imgages) {
  return imgages
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
  `;
    })
    .join("");
}
// ulRef.addEventListener("click", onImageClick);
// function onImageClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
// }
const lightbox = new SimpleLightbox(".gallery a", lightboxSettings);
