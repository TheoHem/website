function highlightActiveLink() {
  const links = document.querySelectorAll('nav ul li a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if(link.getAttribute('href') === currentPage){
      link.classList.add('active-link');
    }
  });
}

// Ensure this runs after header loads
async function loadSharedContent(){
  await Promise.all([
    loadHTML('header-placeholder', 'header.html'),
    loadHTML('footer-placeholder', 'footer.html')
  ]);
  
  highlightActiveLink();

  // Fade in smoothly once all content loaded
  document.getElementById('page-container').style.opacity = '1';
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadSharedContent();
  highlightActiveLink();
});