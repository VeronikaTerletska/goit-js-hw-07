import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const picturesContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

picturesContainer.insertAdjacentHTML("beforeend", galleryMarkup);

picturesContainer.addEventListener("click", onPicturesContainerClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
//
function onPicturesContainerClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }
  const galleryOriginalUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${galleryOriginalUrl}" width="800" height="600">
`);

  instance.show();
}

// import * as basicLightbox from "basiclightbox";
// document.addEventListener("keydown", event => {
//   if (event.key === "Escape") {
//     onClose: instance => {
//       instance.close();
//     };

//   }
// });

onShow: instance => {
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
};
