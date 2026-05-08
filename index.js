document.addEventListener('DOMContentLoaded', () => {
  const greetingElement = document.getElementById('greeting');

  if (greetingElement) {
    greetingElement.style.textAlign = 'center';
    greetingElement.style.marginTop = '5px';

    let visitorName = localStorage.getItem('visitorName');

    if (!visitorName) {
      visitorName = window.prompt("What's your name?", 'Guest');

      if (visitorName === null || visitorName.trim() === '') {
        visitorName = 'Guest';
      }

      localStorage.setItem('visitorName', visitorName);
      greetingElement.innerHTML = `Welcome to my website, ${visitorName}!`;
    } else {
      greetingElement.innerHTML = `Welcome back, ${visitorName}!`;
    }
  }

  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initial display
  showSlide(currentSlide);

  // Change slide every 5 seconds (adjust as needed)
  setInterval(nextSlide, 5000);

  const skillElements = document.querySelectorAll('.skills-list li');
  const technicalSkills = new Set(['HTML', 'CSS', 'JavaScript', 'GitHub', 'Microsoft Office', 'Slack', 'React']);

  const skills = Array.from(skillElements, item => {
    const name = item.textContent.trim();
    const category = technicalSkills.has(name) ? 'technical' : 'care-based';
    item.dataset.category = category;
    return {
      name,
      category
    };
  });

  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  const filters = {
    all: () => true,
    technical: skill => skill.category === 'technical',
    care: skill => skill.category === 'care-based'
  };

  function updateSkillFilter(filterName) {
    skillElements.forEach((item, index) => {
      item.style.display = filters[filterName](skills[index]) ? '' : 'none';
    });

    filterButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.filter === filterName);
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => updateSkillFilter(button.dataset.filter));
  });

  updateSkillFilter('all');
  console.log('Skills array:', skills);

  const empathyButton = document.getElementById('empathy-toggle');

  if (empathyButton) {
    if (localStorage.getItem('themePreference') === 'calm') {
      document.body.classList.add('calm-mode');
      empathyButton.textContent = 'Standard Mode';
    } else {
      empathyButton.textContent = 'Calm Mode';
    }

    empathyButton.addEventListener('click', () => {
      document.body.classList.toggle('calm-mode');

      if (document.body.classList.contains('calm-mode')) {
        empathyButton.textContent = 'Standard Mode';
        localStorage.setItem('themePreference', 'calm');
      } else {
        empathyButton.textContent = 'Calm Mode';
        localStorage.setItem('themePreference', 'standard');
      }
    });
  }
});
