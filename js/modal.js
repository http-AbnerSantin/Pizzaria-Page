export default function modal(){  
  const getElement =(...queries) => document.querySelector(...queries);

  const button = getElement('.menu-open-modal');
  const modalContainer = getElement('.modal-container');
  const modal = getElement('.modal');


  const activeModal = 'modal-show'

  const openModal = () => {
    modalContainer.classList.add(activeModal)
  }
  const closeModal = () => {
    modalContainer.classList.remove(activeModal)
  }

  button.addEventListener('click', openModal)
  modalContainer.addEventListener('click', closeModal )
}
