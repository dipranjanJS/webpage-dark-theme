const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navbar = document.getElementById('navbar');
const toggleIcon = document.querySelector('#toggle-icon > i');
function switchTheme(event) {
    console.log(event.target.value);
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        navbar.classList.remove('navbar-default');
        navbar.classList.add('navbar-inverse');
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        navbar.classList.remove('navbar-inverse');
        navbar.classList.add('navbar-default');
        toggleIcon.classList.add('fa-sun');
        toggleIcon.classList.remove('fa-moon');
    }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);