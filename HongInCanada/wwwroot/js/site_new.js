// Mobile menu functionality and other interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible');
                backToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
});
