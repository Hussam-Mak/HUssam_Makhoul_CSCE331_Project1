// Simple Theme Toggle
let currentTheme = localStorage.getItem('theme') || 'light';

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
}

function applyTheme() {
    // Get current page name
    const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    // Skip AI page
    if (pageName === 'AIpage') return;
    
    // Toggle stylesheets
    const lightSheet = document.getElementById(`${pageName}-light-stylesheet`);
    const darkSheet = document.getElementById(`${pageName}-dark-stylesheet`);
    
    if (lightSheet && darkSheet) {
        lightSheet.disabled = currentTheme === 'dark';
        darkSheet.disabled = currentTheme === 'light';
    }
    
    // Update button text
    const button = document.getElementById('theme-toggle');
    if (button) button.textContent = currentTheme === 'light' ? '🌙 Dark' : '☀️ Light';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
});
