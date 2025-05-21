'use strict';

//open the modal
function openModal() {
    const modal = document.querySelector('.modal');
    // const modalCaption = document.querySelector('p');
    // modalCaption.textContent = photos[index].caption;
    modal.style.display = 'block';
  }

//Close the modal
function closeModal() {
    document.querySelector('.modal').style.display = 'none';
  }
