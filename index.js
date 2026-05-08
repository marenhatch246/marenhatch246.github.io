//const greeting = document.getElementById("greeting");


// 1. THE GREETING INTAKE
const greetingElement = document.getElementById("greeting");

    
    // Style the greeting box
    greetingElement.style.textAlign = "center";
    greetingElement.style.marginTop = "5px";
    
    // Check the filing cabinet
    let visitorName = localStorage.getItem("visitorName");

    if (visitorName) {
        greetingElement.innerHTML = "Welcome back, " + visitorName + "!";
    } else {
        let newName = window.prompt("What's your name?", "Guest");
        
        if (newName === null || newName.trim() === "") {
            newName = "Guest";
        
        
        localStorage.setItem("visitorName", newName);
        greetingElement.innerHTML = "Welcome to my website, " + newName + "!";
    }
}
// 4. THE LOGIC: Do we know them, or are they new?
if (visitorName) {
    // If the name is in the filing cabinet, welcome them back!
    greetingElement.innerHTML = "Welcome back, " + visitorName + "!";
} else {
    // If we don't have their name, ask for it using the prompt
    visitorName = window.prompt("What's your name?", "Guest");
    
    // Crisis Management: If they hit 'Cancel' or leave it blank, default to 'Guest'
    if (visitorName === null || visitorName.trim() === "") {
        visitorName = "Guest";
    }
    
    // Save their name to the browser's memory for next time
    localStorage.setItem("visitorName", visitorName);
    
    // Give them the standard first-time welcome
    greetingElement.innerHTML = "Welcome to my website, " + visitorName + "!";
}



document.addEventListener('DOMContentLoaded', () => {
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
});

// 1. Find the button on the page
const empathyButton = document.getElementById('empathy-toggle');

// 1. THE INTAKE CHECK: When the page loads, check the "chart"
if (localStorage.getItem('themePreference') === 'calm') {
    // If the chart says 'calm', turn it on immediately
    document.body.classList.add('calm-mode');
    empathyButton.textContent = "Standard Mode";
} else {
    // Otherwise, ensure the button says 'Calm Mode'
    empathyButton.textContent = "Calm Mode";
}

// 2. THE BUTTON CLICK: Update the page AND the chart
empathyButton.addEventListener('click', () => {
    document.body.classList.toggle('calm-mode');
    
    if (document.body.classList.contains('calm-mode')) {
        empathyButton.textContent = "Standard Mode";
        // Save the preference to the browser's memory
        localStorage.setItem('themePreference', 'calm');
    } else {
        empathyButton.textContent = "Calm Mode";
        // Save the preference to the browser's memory
        localStorage.setItem('themePreference', 'standard');
    }
});
