// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Category toggle functionality
function toggleCategory(categoryId) {
    const content = document.getElementById(categoryId + '-content');
    const icon = document.getElementById(categoryId + '-icon');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.classList.remove('rotated');
    } else {
        // Close all other categories first
        document.querySelectorAll('.category-content').forEach(cat => {
            cat.classList.remove('active');
        });
        document.querySelectorAll('.toggle-icon').forEach(ic => {
            ic.classList.remove('rotated');
        });
        
        // Open the clicked category
        content.classList.add('active');
        icon.classList.add('rotated');
    }
}

// Brand tab switching function
function switchBrandTab(brandName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.brand-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.brand-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    // Show corresponding content
    const contentId = brandName + '-content';
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
}

// Initialize categories - open first category by default
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Open the first category by default
    // toggleCategory('descartables');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .flavor-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact info click handlers
document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp 1 click handler
    const whatsappItem1 = document.querySelector('.contact-item:first-child');
    if (whatsappItem1) {
        whatsappItem1.style.cursor = 'pointer';
        whatsappItem1.addEventListener('click', () => {
            window.open('https://wa.me/5493534018085', '_blank');
        });
    }

    // WhatsApp 2 click handler
    const whatsappItem2 = document.querySelector('.contact-item:nth-child(2)');
    if (whatsappItem2) {
        whatsappItem2.style.cursor = 'pointer';
        whatsappItem2.addEventListener('click', () => {
            window.open('https://wa.me/5493535623801', '_blank');
        });
    }

    // Instagram click handler
    const instagramItem = document.querySelector('.contact-item:last-child');
    if (instagramItem) {
        instagramItem.style.cursor = 'pointer';
        instagramItem.addEventListener('click', () => {
            window.open('https://instagram.com/nubex.import', '_blank');
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add CSS for active navigation
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #2563eb !important;
        font-weight: 600;
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);
