// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

function createGallery(galleryItems){
    let htmlString = ""
    galleryItems.forEach(({ preview, original, description})=> {
        htmlString += `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    });

    return htmlString;
}

galleryContainer.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

galleryContainer.addEventListener("click", openModal );

function openModal(e) {
e.preventDefault();
}

 new SimpleLightbox('.gallery a', { 
    captionsData:"alt",
    captionsDelay:"250ms",
 });
