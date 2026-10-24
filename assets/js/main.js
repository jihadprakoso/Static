document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 50
    });

    // Sticky Navbar logic
    const navbar = document.getElementById('navbar');
    
    const onScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };
    
    // Listen to scroll event
    window.addEventListener('scroll', onScroll);
    
    // Trigger once on load
    onScroll();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjust for fixed navbar
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Collapse mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Dynamic current year
    const footerYear = document.getElementById('footerYear');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // Contact form: situs ini statis (tanpa backend), jadi isi form
    // diteruskan ke WhatsApp agar pesan benar-benar terkirim.
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccessAlert = document.getElementById('formSuccessAlert');

    if (contactForm && submitBtn && formSuccessAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            const waNumber = '6285773837959';
            const waText = `Halo NexusTech, saya ${name} (${email}).\n\nSubjek: ${subject}\n\n${message}`;
            window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`, '_blank', 'noopener');

            // Set loading state
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Mengirim...';

            setTimeout(() => {
                // Success feedback
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Diteruskan ke WhatsApp</span> <i class="fa-solid fa-check ms-1"></i>';
                formSuccessAlert.classList.remove('d-none');
                formSuccessAlert.classList.add('d-flex');

                // Reset inputs
                contactForm.reset();

                // Scroll slightly to ensure alert is visible
                formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                // Restore button after 4 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnHtml;
                }, 4000);
            }, 750);
        });
    }
});
