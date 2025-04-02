// Attendre que le DOM soit complètement charg
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset pour l'en-tête fixe
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animation pour faire apparaître les projets au défilement
    const projectCards = document.querySelectorAll('.project-card');
    
    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // Fonction pour animer les éléments visibles
    function animateVisibleElements() {
      projectCards.forEach(card => {
        if (isElementInViewport(card)) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Initialiser les styles pour l'animation
    projectCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Écouter l'événement de défilement pour animer les éléments
    window.addEventListener('scroll', animateVisibleElements);
    
    // Animer les éléments visibles au chargement initial
    animateVisibleElements();
  });