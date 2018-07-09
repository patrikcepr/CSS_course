var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
};

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
};

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});

toggleButton.addEventListener('click', function() {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
  };
  backdrop.classList.remove('open');
};
