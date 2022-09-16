import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const picturesContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

picturesContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // do something…
});
