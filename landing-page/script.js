// ==========================================
// MARCUS OSTERHOUT - AI Implementation Consulting
// Landing Page Scripts
// ==========================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-up animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = [
    '.hero-headline',
    '.hero-subheadline', 
    '.section-headline',
    '.problem .body-text',
    '.pain-point',
    '.pricing-card',
    '.client-card',
    '.proof-card',
    '.stat-block'
];

animateElements.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// CTA button click tracking (placeholder for analytics)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        console.log(`CTA Clicked: ${buttonText}`);
        // Add your analytics tracking here
        // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': buttonText });
    });
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observe stat numbers for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const text = statNumber.textContent;
                const numberMatch = text.match(/(\d+)/);
                if (numberMatch) {
                    const target = parseInt(numberMatch[1]);
                    const prefix = text.split(numberMatch[1])[0];
                    const suffix = text.split(numberMatch[1])[1];
                    animateCounter(statNumber, target);
                    setTimeout(() => {
                        statNumber.textContent = prefix + target + suffix;
                    }, 2000);
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-block').forEach(block => {
    statsObserver.observe(block);
});

// Mobile menu toggle (if needed in future)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Add loaded class to body for any initial animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console easter egg
console.log(
    '%cMARCUS OSTERHOUT | AI Implementation Consulting',
    'font-family: Playfair Display, serif; font-size: 20px; font-weight: 900; color: #c9a84c;'
);
console.log(
    '%cReal. Raw. Relevant. Results.',
    'font-family: IBM Plex Mono, monospace; font-size: 12px; letter-spacing: 3px; color: #f5f0e8;'
);
