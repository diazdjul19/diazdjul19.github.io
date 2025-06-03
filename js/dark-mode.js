// Dark Mode Implementation
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Theme Variables
    const darkTheme = 'dark';
    const lightTheme = 'light';
    const darkIcon = 'bx-sun';
    const lightIcon = 'bx-moon';

    // Get Previous Theme
    const getCurrentTheme = () => document.documentElement.getAttribute('data-theme');
    const getPreviousTheme = () => localStorage.getItem('selected-theme');

    // Apply Previous Theme
    const previousTheme = getPreviousTheme();
    if (previousTheme) {
        document.documentElement.setAttribute('data-theme', previousTheme);
        if (previousTheme === darkTheme) {
            themeIcon.classList.remove(lightIcon);
            themeIcon.classList.add(darkIcon);
        }
    }

    // Toggle Theme Function
    const toggleTheme = () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
        const newIcon = currentTheme === lightTheme ? darkIcon : lightIcon;

        // Update DOM
        document.documentElement.setAttribute('data-theme', newTheme);
        themeIcon.classList.remove(currentTheme === lightTheme ? lightIcon : darkIcon);
        themeIcon.classList.add(newIcon);

        // Save Preference
        localStorage.setItem('selected-theme', newTheme);
    };

    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);

    // Add Smooth Transition
    document.documentElement.style.setProperty('transition', 'background-color 0.3s ease, color 0.3s ease');
});

// Optional: Reset theme on orientation change
window.addEventListener('orientationchange', () => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
});