document.addEventListener('DOMContentLoaded', function () {

  const projects = [{
    id: 1,
    title: "Site web e-commerce",
    description: "Conception et développement d'une plateforme e-commerce complète avec système de panier, paiement sécurisé et gestion des stocks. Technologies utilisées : HTML, CSS, JavaScript, PHP, MySQL."
  }, {
    id: 2,
    title: "Application de gestion de tâches",
    description: "Développement d'une application de gestion de tâches avec authentification des utilisateurs, organisation par catégories et rappels automatiques. Technologies utilisées : React, Node.js, MongoDB."
  }, {
    id: 3,
    title: "Système de réservation en ligne",
    description: "Création d'un système de réservation pour une entreprise de services avec calendrier interactif et gestion des créneaux horaires. Technologies utilisées : JavaScript, PHP, MySQL."
  }, {
    id: 4,
    title: "Portfolio personnel",
    description: "Conception et développement de ce portfolio pour présenter mes compétences et réalisations en développement web. Technologies utilisées : HTML, CSS, JavaScript."
  }];

  const projectCards = document.querySelectorAll('.project-card');
  const projectTitle = document.querySelector('.project-title');
  const projectDescription = document.querySelector('.project-description');

  projectCards.forEach(card => {
    card.addEventListener('click', function () {

      const projectId = parseInt(this.getAttribute('data-project'));

      const project = projects.find(p => p.id === projectId);

      if (project) {

        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;

        projectCards.forEach(c => c.classList.remove('active'));

        this.classList.add('active');
      }
    });
  });

  if (projectCards.length > 0) {
    projectCards[0].click();
  }
});