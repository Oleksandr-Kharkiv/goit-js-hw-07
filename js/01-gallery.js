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

galleryEl.addEventListener('click', handleModalOpen);

function handleModalOpen(event) {
  event.preventDefault();
  if(event.target.nodeName !== "IMG"){
    return
  }
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
instance.show();

window.addEventListener('keydown', handleModalEscClose);

function handleModalEscClose(event) {
  console.log(event);
  if(event.code === "Escape") {
    instance.close();
    window.removeEventListener('keydown', handleModalEscClose)
    } 
  }
}
