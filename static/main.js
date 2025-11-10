//Hamburger menu
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        if (navbar.classList.contains('hidden-nav')) {
            navbar.classList.remove('hidden-nav');
        }
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            }
        });
    });
}

//Dark mode
const darkModeBtn = document.getElementById('darkModeToggleBtn');
const BODY_CLASS = 'dark-mode';
const TOGGLE_CLASS = 'light-mode';

const enableLightMode = () => {
    document.body.classList.remove(BODY_CLASS);
    darkModeBtn.classList.remove(TOGGLE_CLASS);
    darkModeBtn.setAttribute('title', 'Switch to Dark Mode');
    localStorage.setItem('theme', 'light');
};
const enableDarkMode = () => {
    document.body.classList.add(BODY_CLASS);
    darkModeBtn.classList.add(TOGGLE_CLASS);
    darkModeBtn.setAttribute('title', 'Switch to Light Mode');
    localStorage.setItem('theme', 'dark');
};
const toggleMode = () => {
    if (document.body.classList.contains(BODY_CLASS)) enableLightMode();
    else enableDarkMode();
};
const initMode = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
};

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleMode);
    initMode();
}

