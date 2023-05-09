const modalRefs = {
  backdrops: document.querySelectorAll('.backdrop'),
  openModalBtns: document.querySelectorAll('[data-modal-open]'),
  closeModalBtns: document.querySelectorAll('[data-modal-close]'),
};

export function modalListener(modalId, onClose) {
  const backdrop = document.querySelector(`[data-modal="${modalId}"]`);
  const closeModalBtn = backdrop.querySelector('[data-modal-close]');

  backdrop.classList.remove('is-hidden');
  document.querySelector('body').classList.add('noScroll');
  document.addEventListener('keydown', hideModal);
  backdrop.addEventListener('click', hideModal);
  closeModalBtn.addEventListener('click', modalClose);

  function modalClose() {
    backdrop.classList.add('is-hidden');
    removeListeners();
  }

  function hideModal(e) {
    if (e.key === 'Escape' || e.target === backdrop) {
      backdrop.classList.add('is-hidden');
      removeListeners();
      if (onClose) onClose();
    }
  }

  function removeListeners() {
    document.removeEventListener('keydown', hideModal);
    backdrop.removeEventListener('click', hideModal);
    closeModalBtn.removeEventListener('click', modalClose);
    document.querySelector('body').classList.remove('noScroll');
  }
}

modalRefs.openModalBtns.forEach(button => {
  button.addEventListener('click', () => {
    modalListener(button.dataset.modalOpen);
  });
});
