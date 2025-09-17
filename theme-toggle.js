let currentLayout = localStorage.getItem('layout') || 'layout-a';

function toggleLayout() {
    currentLayout = currentLayout === 'layout-a' ? 'layout-b' : 'layout-a';
    localStorage.setItem('layout', currentLayout);
    applyLayout();
}

function applyLayout() {
    const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    if (pageName === 'AIpage') return;
   
    const layoutASheet = document.getElementById(`${pageName}-layout-a-stylesheet`);
    const layoutBSheet = document.getElementById(`${pageName}-layout-b-stylesheet`);
    
    if (layoutASheet && layoutBSheet) {
        layoutASheet.disabled = currentLayout === 'layout-b';
        layoutBSheet.disabled = currentLayout === 'layout-a';
    }
    
 
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = currentLayout === 'layout-a' ? '📐 Layout B' : '📱 Layout A';
        button.className = 'layout-toggle';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applyLayout();
    document.getElementById('theme-toggle')?.addEventListener('click', toggleLayout);
});
