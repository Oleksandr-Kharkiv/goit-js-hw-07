import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryOldEl = document.querySelector('.gallery');
galleryOldEl.remove();
const galleryEl = document.createElement("div");
galleryEl.classList.add('gallery');
const scriptEl = document.querySelector('script')
scriptEl.before(galleryEl);

const markup = galleryItems
.map(({preview, original, description}) => `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery__item', {captionsData: "alt", captionPosition: 'bottom', captionDelay: 250});
