/**
 * Portfolio JavaScript
 * Bilal Hussen
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Theme Toggle Logic
    // ----------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check local storage for theme preference, default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        document.documentElement.classList.add('light-theme');
    }
    
    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-theme');
        
        let theme = 'dark';
        if (document.documentElement.classList.contains('light-theme')) {
            theme = 'light';
        }
        localStorage.setItem('theme', theme);
    });

    // ----------------------------------------------------
    // 2. Mobile Menu Toggle
    // ----------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Simple visual feedback: change menu SVG to cross (optional, managed by class toggle)
        const lineMid = mobileMenuBtn.querySelector('.line-mid');
        const lineTop = mobileMenuBtn.querySelector('.line-top');
        const lineBot = mobileMenuBtn.querySelector('.line-bot');
        
        if (navLinks.classList.contains('active')) {
            // Transform to 'X' using inline styling if desired, but we can do it via CSS
            // For simple JavaScript control, we update transform/opacity
            if (lineMid) lineMid.style.opacity = '0';
            if (lineTop) {
                lineTop.style.transform = 'translateY(6px) rotate(45deg)';
                lineTop.style.transformOrigin = 'center';
            }
            if (lineBot) {
                lineBot.style.transform = 'translateY(-6px) rotate(-45deg)';
                lineBot.style.transformOrigin = 'center';
            }
        } else {
            // Reset to Hamburger
            if (lineMid) lineMid.style.opacity = '1';
            if (lineTop) lineTop.style.transform = 'none';
            if (lineBot) lineBot.style.transform = 'none';
        }
    });

    // Close menu when clicking navigation links
    const navLinkItems = document.querySelectorAll('.nav-link');
    navLinkItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                const lineMid = mobileMenuBtn.querySelector('.line-mid');
                const lineTop = mobileMenuBtn.querySelector('.line-top');
                const lineBot = mobileMenuBtn.querySelector('.line-bot');
                
                if (lineMid) lineMid.style.opacity = '1';
                if (lineTop) lineTop.style.transform = 'none';
                if (lineBot) lineBot.style.transform = 'none';
            }
        });
    });

    // ----------------------------------------------------
    // 3. Highlight Nav Item on Scroll
    // ----------------------------------------------------
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Highlight when 30% of the section is visible
            if (pageYOffset >= (sectionTop - sectionHeight * 0.3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        // Add sticky style to navbar on scroll
        const navbar = document.querySelector('.navbar-container');
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ----------------------------------------------------
    // 4. Scroll To Top Button
    // ----------------------------------------------------
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ----------------------------------------------------
    // 5. Certifications Show More/Less Toggle
    // ----------------------------------------------------
    const toggleCertsBtn = document.getElementById('toggle-certs-btn');
    const certGrid = document.getElementById('certifications-list');

    if (toggleCertsBtn && certGrid) {
        const toggleableCerts = Array.from(certGrid.querySelectorAll('.cert-card.hidden'));
        let certsExpanded = false;

        toggleCertsBtn.addEventListener('click', () => {
            certsExpanded = !certsExpanded;
            
            toggleableCerts.forEach(cert => {
                if (certsExpanded) {
                    cert.classList.remove('hidden');
                } else {
                    cert.classList.add('hidden');
                }
            });

            if (certsExpanded) {
                toggleCertsBtn.textContent = 'Show Less Certifications';
            } else {
                toggleCertsBtn.textContent = 'Show More Certifications';
                document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ----------------------------------------------------
    // 6. Scroll Fade-in Intersection Observer
    // ----------------------------------------------------
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, fadeObserverOptions);
    
    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });
});
