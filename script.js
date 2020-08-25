const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navbar = document.getElementById('navbar');
const toggleIcon = document.querySelector('#toggle-icon > i');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

// Dark and light images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

// Dark mode
function darkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');
    navbar.classList.remove('navbar-default');
    navbar.classList.add('navbar-inverse');
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// Light Theme
function lightMode() {
    document.documentElement.setAttribute('data-theme', 'light');
    navbar.classList.remove('navbar-inverse');
    navbar.classList.add('navbar-default');
    toggleIcon.classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}
// Theme change function
function switchTheme(event) {
    if(event.target.checked) {
        darkMode();
    } else {
        lightMode()
    }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);