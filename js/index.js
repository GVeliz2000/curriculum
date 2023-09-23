const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', function() {
  const navbarCollapse = document.querySelector('.collapse.navbar-collapse');
  navbarCollapse.classList.toggle('show');
});
