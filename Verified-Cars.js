// Search Tab Logic
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Simulated Car Filter Logic (Phase 1)
document.querySelector('.search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Roy's Security Engine is searching verified database...");
});

// Scroll Reveal Effect (Professional Touch)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});