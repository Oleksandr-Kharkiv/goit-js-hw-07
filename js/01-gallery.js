import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(({preview, original, description}) => `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
        </div>`).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener('click', getUrlBigPhoto);

function getUrlBigPhoto(event) {
  event.preventDefault();
  if(event.target.nodeName !== "IMG"){
    return
  }
  const urlImgOriginalSize = event.target.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src="${urlImgOriginalSize}" width="800" height="600">
`)
instance.show()
galleryEl.addEventListener('keydown', (event) => {
  if(event.code === "Escape") {
    instance.close()
}})
}
