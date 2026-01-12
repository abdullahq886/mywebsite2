/**
 * ZimSafeAuto - Diaspora Portal Interactivity
 */

// 1. Accordion Logic for FAQ
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        
        // Toggle the current one
        content.classList.toggle('active');
        
        // Dynamic styling
        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "20px";
            header.style.color = "var(--primary)";
        } else {
            content.style.maxHeight = 0;
            content.style.padding = "0 20px";
            header.style.color = "inherit";
        }
    });
});

// 2. Simple Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.step, .package-card').forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
});

// 3. Currency Selector Placeholder Logic
document.getElementById('currencySelector').addEventListener('change', (e) => {
    alert(`Currency changed to ${e.target.value}. Prices will be estimated in this currency across the portal.`);
});