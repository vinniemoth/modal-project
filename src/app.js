const modalContainer = document.querySelector('.modal-container');
const openModal = document.querySelector('.open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
  modalContainer.classList.add('active');
  console.log('clicked');
});

closeModal.addEventListener('click', () => {
  modalContainer.classList.remove('active');
});
