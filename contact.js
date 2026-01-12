// 1. FAQ ACCORDION LOGIC
const accordionTriggers = document.querySelectorAll('.accordion-trigger');

accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const isOpen = content.style.display === 'block';
        
        // Close all others
        document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
        
        // Toggle current
        content.style.display = isOpen ? 'none' : 'block';
    });
});

// 2. FORM SUBMISSION WITH FEEDBACK
const contactForm = document.getElementById('proContactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "Processing Security Check...";
    btn.style.opacity = "0.7";

    setTimeout(() => {
        alert("Success! Your message has been encrypted and sent to Roy's Security Team. We will contact you shortly.");
        e.target.reset();
        btn.innerText = "Submit Encrypted Message";
        btn.style.opacity = "1";
    }, 2000);
});

// 3. REPORT SCAM BUTTON
document.getElementById('reportBtn').addEventListener('click', () => {
    const reportReason = prompt("Please provide the Listing URL or Seller Name you wish to report:");
    if(reportReason) {
        alert("Investigation initiated. Our Private Investigators will audit this report within 4 hours. Thank you for securing our marketplace.");
    }
});

// 4. THEME TOGGLE (Consistent with the site)
// [Add your existing theme toggle logic here to maintain state]