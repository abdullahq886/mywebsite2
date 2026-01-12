/**
 * FAQ Accordion Interaction
 */
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const span = header.querySelector('span');
        
        // Toggle Display
        if (body.style.display === 'block') {
            body.style.display = 'none';
            span.innerText = '+';
        } else {
            body.style.display = 'block';
            span.innerText = '-';
        }
    });
});

/**
 * Simple Counter Animation for Stats
 */
const stats = document.querySelectorAll('.stat strong');
stats.forEach(stat => {
    const target = parseInt(stat.innerText.replace(/\D/g,''));
    if(!isNaN(target) && target > 0) {
        let count = 0;
        const updateCount = () => {
            const increment = target / 50;
            if(count < target) {
                count += increment;
                stat.innerText = Math.ceil(count) + (stat.innerText.includes('+') ? '+' : '');
                setTimeout(updateCount, 20);
            } else {
                stat.innerText = target + (stat.innerText.includes('+') ? '+' : '');
            }
        };
        updateCount();
    }
});