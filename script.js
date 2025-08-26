// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Toggle hamburger animation
            const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
            hamburgers.forEach((hamburger, index) => {
                if (mobileMenu.classList.contains('active')) {
                    if (index === 0) hamburger.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) hamburger.style.opacity = '0';
                    if (index === 2) hamburger.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    hamburger.style.transform = '';
                    hamburger.style.opacity = '';
                }
            });
        });
        
        // Close mobile menu when clicking on links
        const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                
                // Reset hamburger animation
                const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
                hamburgers.forEach(hamburger => {
                    hamburger.style.transform = '';
                    hamburger.style.opacity = '';
                });
            });
        });
    }
});

// FAQ Toggle Function
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains('faq-open');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('faq-open');
    });
    
    // Open clicked item if it wasn't already open
    if (!isOpen) {
        faqItem.classList.add('faq-open');
    }
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or external link
            if (href === '#' || href.startsWith('http')) {
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate offset for sticky header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .step-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
});

// Form Validation (if needed for future forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Loading State for Buttons
function addLoadingState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span>Laden...</span>';
    button.disabled = true;
    
    // Remove loading state after 3 seconds (or when actual loading is complete)
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 3000);
}

// Track CTA Clicks (for analytics)
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('a[href*="paypro.nl"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track the click event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: this.textContent.trim(),
                    value: 1
                });
            }
            
            // Add loading state
            addLoadingState(this);
        });
    });
});

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = function() {
                    img.style.opacity = '1';
                };
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Scroll Progress Indicator
document.addEventListener('DOMContentLoaded', function() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #1d4ed8);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            
            // Reset hamburger animation
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
            hamburgers.forEach(hamburger => {
                hamburger.style.transform = '';
                hamburger.style.opacity = '';
            });
        }
    }
});

// Performance Optimization
document.addEventListener('DOMContentLoaded', function() {
    // Preload critical images
    const criticalImages = [
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    
    // Optionally send error to analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: e.error.toString(),
            fatal: false
        });
    }
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}