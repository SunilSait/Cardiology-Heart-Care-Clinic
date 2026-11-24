/* ===================================================
   CARDIOVITA — COMPONENTS.JS
   Shared navbar, footer, dark/RTL toggles, utilities
   Cardiology & Heart Care Clinic
   =================================================== */

// Immediate Theme & Direction Initialization (prevents theme flash) + Scroll Control
(function() {
    try {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        if (!window.location.hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            if (document.documentElement) document.documentElement.scrollTop = 0;
            if (document.body) document.body.scrollTop = 0;
        }
        window.addEventListener('pageshow', function() {
            if (!window.location.hash) {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                if (document.documentElement) document.documentElement.scrollTop = 0;
                if (document.body) document.body.scrollTop = 0;
            }
        });

        const savedDark = localStorage.getItem('cv-dark');
        if (savedDark === '1') {
            document.documentElement.classList.add('dark');
        } else if (savedDark === '0') {
            document.documentElement.classList.remove('dark');
        }
        const savedDir = localStorage.getItem('cv-rtl');
        if (savedDir === '1') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else if (savedDir === '0') {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    } catch (e) {}
})();

/* ---- LOGO SVG ---- */
const LOGO_SVG = `<svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#E61C1C"/><stop offset="100%" stop-color="#B91C1C"/></linearGradient></defs>
  <rect width="100" height="100" rx="20" fill="url(#logoBg)"/>
  <path d="M50 72 C50 72 25 55 25 40 C25 32 31 26 38 26 C43 26 47 29 50 33 C53 29 57 26 62 26 C69 26 75 32 75 40 C75 55 50 72 50 72Z" fill="white" opacity="0.95"/>
  <path d="M38 44 L44 44 L47 38 L50 50 L53 42 L56 44 L62 44" stroke="#E61C1C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

/* ---- FontAwesome Icon Helper ---- */
const ICONS = {
    sun: '<i class="fa-solid fa-sun"></i>',
    moon: '<i class="fa-solid fa-moon"></i>',
    menu: '<i class="fa-solid fa-bars"></i>',
    x: '<i class="fa-solid fa-xmark"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down"></i>',
    facebook: '<i class="fa-brands fa-facebook-f"></i>',
    instagram: '<i class="fa-brands fa-instagram"></i>',
    linkedin: '<i class="fa-brands fa-linkedin-in"></i>',
    twitter: '<i class="fa-brands fa-x-twitter"></i>',
    eye: '<i class="fa-solid fa-eye"></i>',
    eyeOff: '<i class="fa-solid fa-eye-slash"></i>',
};

/* ---- SOCIAL SVGs (for OAuth) ---- */
const GOOGLE_SVG = `<svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.9 33.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.8-3.5-11.3-8.3l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.2-2.7-.4-3.9z"/></svg>`;
const APPLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.96 4.41-3.74 4.25z"/></svg>`;
const FACEBOOK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>`;

/* ---- CURRENT PAGE ---- */
function getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
}

/* ---- NAVBAR ---- */
function renderNavbar() {
    const page = getCurrentPage();
    if (page === 'dashboard.html' || document.querySelector('.dash-layout') || page === 'login.html' || page === 'signup.html' || page === '404.html' || page === 'coming-soon.html' || document.querySelector('.auth-page') || (document.body && document.body.classList.contains('auth-page')) || document.querySelector('.utility-page') || (document.body && document.body.classList.contains('utility-page'))) return;
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'about.html', label: 'About' },
        { href: 'services.html', label: 'Services' },
        { href: 'doctors.html', label: 'Doctors' },
        { href: 'pricing.html', label: 'Pricing' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHtml = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobLinksHtml = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const html = `
    <nav class="navbar" id="navbar">
        <div class="nav-inner">
            <!-- Logo -->
            <a href="index.html" class="nav-logo" aria-label="CardioVita Home">
                ${LOGO_SVG}
                <div class="nav-logo-text">
                    <span class="brand-top">Heart Care</span>
                    <span class="brand-bottom">CardioVita</span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <div class="nav-links">
                ${navLinksHtml}
            </div>

            <!-- Right Actions -->
            <div class="nav-actions">
                <!-- RTL Toggle -->
                <button onclick="toggleDir()" class="nav-icon-btn" id="rtlToggleNav" aria-label="Toggle layout direction / RTL" title="Toggle RTL">
                    <span class="dir-indicator dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <!-- Theme Toggle -->
                <button onclick="toggleTheme()" class="nav-icon-btn" id="darkToggleNav" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <!-- CTAs -->
                <a href="login.html" class="btn btn-primary btn-sm nav-cta-btn">Sign In</a>
                <a href="dashboard.html" class="btn-nav-dashboard ${page === 'dashboard.html' ? 'active' : ''}">Dashboard</a>
                <!-- Mobile Hamburger -->
                <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu(event)" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <!-- Mobile Backdrop -->
        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            ${mobLinksHtml}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
                <a href="dashboard.html" class="btn btn-secondary w-full">Dashboard</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir()" class="nav-icon-btn" id="rtlToggleMob" aria-label="Toggle layout direction / RTL" title="Toggle Direction">
                    <span class="dir-indicator dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <button onclick="toggleTheme()" class="nav-icon-btn" id="darkToggleMob" aria-label="Toggle dark mode" title="Toggle Theme">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </nav>
    <div class="navbar-spacer"></div>`;

    const container = document.getElementById('navbar-placeholder') || document.getElementById('main-nav');
    if (container) container.innerHTML = html;
    else document.body.insertAdjacentHTML('afterbegin', html);

    initNavbar();
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (iconEl) iconEl.innerHTML = ICONS.x;
    }
}
window.toggleMobileMenu = toggleMobileMenu;

function initNavbar() {
    const nav = document.getElementById('navbar') || document.getElementById('mainNavbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 15);
        }, { passive: true });
    }

    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');

    if (menu) {
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', (e) => {
                const href = a.getAttribute('href');
                const currentPage = getCurrentPage();
                if (href) {
                    const targetPage = href.split('#')[0].split('?')[0];
                    if ((targetPage === currentPage || (targetPage === 'index.html' && (currentPage === '' || currentPage === 'index.html'))) && !href.includes('#')) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }
                }
                menu.classList.remove('open');
                if (backdrop) backdrop.classList.remove('open');
                const iconEl = document.querySelector('.mobile-menu-icon');
                if (iconEl) iconEl.innerHTML = ICONS.menu;
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            const currentPage = getCurrentPage();
            if (href) {
                const targetPage = href.split('#')[0].split('?')[0];
                if ((targetPage === currentPage || (targetPage === 'index.html' && (currentPage === '' || currentPage === 'index.html'))) && !href.includes('#')) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!menu || !menu.classList.contains('open')) return;
        if (btn && (btn === e.target || btn.contains(e.target))) return;
        if (menu.contains(e.target)) return;
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        const iconEl = document.querySelector('.mobile-menu-icon');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            const iconEl = document.querySelector('.mobile-menu-icon');
            if (iconEl) iconEl.innerHTML = ICONS.menu;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            const iconEl = document.querySelector('.mobile-menu-icon');
            if (iconEl) iconEl.innerHTML = ICONS.menu;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    }, { passive: true });

    updateDarkIcons();
    updateRTLIndicators();
}

/* ---- FOOTER ---- */
function renderFooter() {
    const page = getCurrentPage();
    if (page === 'dashboard.html' || document.querySelector('.dash-layout') || page === 'login.html' || page === 'signup.html' || page === '404.html' || page === 'coming-soon.html' || document.querySelector('.auth-page') || (document.body && document.body.classList.contains('auth-page')) || document.querySelector('.utility-page') || (document.body && document.body.classList.contains('utility-page'))) return;
    const html = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Column 1: Brand & Socials -->
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="CardioVita Home">
                        ${LOGO_SVG}
                        <div class="nav-logo-text">
                            <span class="brand-top">Heart Care</span>
                            <span class="brand-bottom">CardioVita</span>
                        </div>
                    </a>
                    <p>Expert cardiology and heart care services. From advanced diagnostics to interventional procedures, your heart is in trusted hands.</p>
                    <div class="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook" title="Facebook">${ICONS.facebook}</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram" title="Instagram">${ICONS.instagram}</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn" title="LinkedIn">${ICONS.linkedin}</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Twitter / X" title="Twitter / X">${ICONS.twitter}</a>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2 — Premium</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Our Services</a></li>
                        <li><a href="doctors.html">Our Cardiologists</a></li>
                        <li><a href="pricing.html">Pricing Plans</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 3: Resources -->
                <div class="footer-col">
                    <h4 class="footer-col-title">RESOURCES</h4>
                    <ul class="footer-links">
                        <li><a href="dashboard.html">Patient Dashboard</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="login.html">Sign In</a></li>
                        <li><a href="signup.html">Sign Up</a></li>
                    </ul>
                </div>

                <!-- Column 4: Stay Updated Card -->
                <div class="footer-col footer-col-newsletter">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Heart Health Updates</h4>
                        <p class="footer-newsletter-desc">Subscribe for cardiovascular wellness tips, screening reminders, and clinic news from our expert cardiologists.</p>
                        <form class="footer-newsletter-form" onsubmit="event.preventDefault(); alert('Thank you! You are now subscribed to CardioVita updates.'); this.reset();">
                            <input type="email" class="footer-newsletter-input" placeholder="your@email.com" aria-label="Email address" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} CARDIOVITA. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy Policy</a>
                    <a href="coming-soon.html">Terms of Service</a>
                    <a href="tel:18004327428">+1 (800) HEART-28</a>
                </div>
            </div>
        </div>
    </footer>`;

    const container = document.getElementById('footer-placeholder') || document.getElementById('main-footer');
    if (container) container.innerHTML = html;
}

/* ---- DARK MODE ---- */
function toggleDark() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('cv-dark', isDark ? '1' : '0');
    updateDarkIcons();
}
window.toggleTheme = toggleDark;

function updateDarkIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-wrap').forEach(el => {
        el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    });
}

/* ---- RTL ---- */
function toggleRTL() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.documentElement.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('cv-rtl', isRTL ? '0' : '1');
    updateRTLIndicators();
}
window.toggleDir = toggleRTL;

function updateRTLIndicators() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.dir-indicator, .dir-label').forEach(el => {
        el.textContent = isRTL ? 'RTL' : 'LTR';
    });
}
window.updateDarkIcons = updateDarkIcons;
window.updateRTLIndicators = updateRTLIndicators;

/* ---- AUTH & UTILITY HELPER ---- */
function initAuthPage() {
    updateDarkIcons();
    updateRTLIndicators();
}
window.initAuthPage = initAuthPage;

function togglePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const iconWrap = (btnEl && btnEl.querySelector('.pw-icon')) || btnEl;
    if (iconWrap) {
        iconWrap.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
    }
}
window.togglePasswordVisibility = togglePasswordVisibility;

/* ---- FADE-UP Observer ---- */
function initFadeUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ---- HERO SLIDER ---- */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    if (slides.length < 2) return;

    let current = 0;
    let interval;

    function goTo(idx) {
        slides[current].classList.remove('active');
        if (dots[current]) dots[current].classList.remove('active');
        current = (idx + slides.length) % slides.length;
        slides[current].classList.add('active');
        if (dots[current]) dots[current].classList.add('active');
    }

    function startAuto() {
        interval = setInterval(() => goTo(current + 1), 6000);
    }

    function resetAuto() {
        clearInterval(interval);
        startAuto();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));

    startAuto();
}

/* ---- COUNTER ANIMATION ---- */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                const prefix = el.getAttribute('data-prefix') || '';
                let count = 0;
                const duration = 2000;
                const steps = 60;
                const increment = target / steps;
                const stepTime = duration / steps;

                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        count = target;
                        clearInterval(timer);
                    }
                    el.textContent = prefix + Math.floor(count).toLocaleString() + suffix;
                }, stepTime);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(el => observer.observe(el));
}

/* ---- PASSWORD VISIBILITY ---- */
function initPasswordToggles() {
    document.querySelectorAll('.password-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.closest('.password-wrap').querySelector('input');
            if (input) {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                btn.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
            }
        });
    });
}

/* ---- FAQ ACCORDION ---- */
function initFaqAccordion() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('.faq-question');
        if (btn) {
            btn.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!isOpen) item.classList.add('active');
            });
        }
    });
}

/* ---- DASHBOARD ---- */
function initDashboard() {
    const tabs = document.querySelectorAll('.dash-nav-item[data-tab]');
    const panels = document.querySelectorAll('.dash-tab');
    const headerTitle = document.getElementById('dashHeaderTitle');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            panels.forEach(p => {
                p.classList.toggle('active', p.id === 'tab-' + target);
            });
            if (headerTitle) {
                const labels = {
                    overview: 'Overview',
                    consultations: 'My Consultations',
                    reports: 'ECG & Test Reports',
                    medications: 'Medication Reminders',
                    billing: 'Billing & Invoices',
                    settings: 'Settings'
                };
                headerTitle.innerHTML = `<span class="dash-title-prefix">Dashboard </span>${labels[target] || target}`;
            }

            // Scroll immediately to the 1st section at the very top
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            const dashMain = document.querySelector('.dash-main');
            if (dashMain) dashMain.scrollTop = 0;
            const dashContent = document.querySelector('.dash-content');
            if (dashContent) dashContent.scrollTop = 0;

            // Mobile: close sidebar
            const sidebar = document.getElementById('dashSidebar');
            const overlay = document.getElementById('dashSidebarOverlay');
            if (sidebar) sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
        });
    });

    // Mobile toggle
    const mobileToggle = document.getElementById('dashMobileToggle');
    const sidebar = document.getElementById('dashSidebar');
    const overlay = document.getElementById('dashSidebarOverlay');

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
        });
    }

    initLogoutModal();

    if (overlay) {
        overlay.addEventListener('click', () => {
            if (sidebar) sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // Notifications
    const notifBtn = document.getElementById('dashNotifBtn');
    const notifDrop = document.getElementById('dashNotifDropdown');
    if (notifBtn && notifDrop) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifDrop.classList.toggle('open');
            const profileDrop = document.getElementById('dashProfileDropdown');
            if (profileDrop) profileDrop.classList.remove('open');
        });
    }

    // Profile
    const profileBtn = document.getElementById('dashProfileBtn');
    const profileDrop = document.getElementById('dashProfileDropdown');
    if (profileBtn && profileDrop) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDrop.classList.toggle('open');
            if (notifDrop) notifDrop.classList.remove('open');
        });
    }

    document.addEventListener('click', () => {
        if (notifDrop) notifDrop.classList.remove('open');
        if (profileDrop) profileDrop.classList.remove('open');
    });
}

/* ---- LOGOUT CONFIRMATION MODAL ---- */
function initLogoutModal() {
    const modal = document.getElementById('logoutModal');
    if (!modal) return;

    const sidebarLogout = document.getElementById('sidebarLogoutBtn');
    const profileLogout = document.getElementById('profileLogoutBtn');
    const cancelBtn = document.getElementById('cancelLogoutBtn');
    const closeBtn = document.getElementById('closeLogoutModalBtn');
    const confirmBtn = document.getElementById('confirmLogoutBtn');

    function openModal(e) {
        if (e) e.preventDefault();
        // Close profile dropdown or mobile sidebar if open
        const profileDrop = document.getElementById('dashProfileDropdown');
        if (profileDrop) profileDrop.classList.remove('open');
        const sidebar = document.getElementById('dashSidebar');
        const overlay = document.getElementById('dashSidebarOverlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (cancelBtn) cancelBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Bind triggers
    if (sidebarLogout) sidebarLogout.addEventListener('click', openModal);
    if (profileLogout) profileLogout.addEventListener('click', openModal);

    document.querySelectorAll('.dash-logout-btn').forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // Close triggers
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Click outside card
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    // Confirm Logout
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    window.openLogoutModal = openModal;
    window.closeLogoutModal = closeModal;
}

window.initDashboard = initDashboard;

/* ---- CARDIOVASCULAR RISK CALCULATOR ---- */
function initRiskCalculator() {
    const riskSection = document.querySelector('.cardiac-risk-section');
    if (!riskSection) return;

    // Pill selectors
    riskSection.querySelectorAll('.risk-pill-selector').forEach(selector => {
        selector.addEventListener('click', (e) => {
            const btn = e.target.closest('.risk-pill-btn');
            if (!btn) return;
            selector.querySelectorAll('.risk-pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    const calcBtn = document.getElementById('btnCalculateRisk');
    if (!calcBtn) return;

    calcBtn.addEventListener('click', () => {
        let score = 0;
        let isChestPain = false;

        // Age
        const activeAge = riskSection.querySelector('.age-selector .risk-pill-btn.active');
        if (activeAge) {
            const ageVal = activeAge.dataset.val;
            if (ageVal === '35-49') score += 1;
            else if (ageVal === '50-64') score += 2;
            else if (ageVal === '65+') score += 3;
        }

        // Risk factor checkboxes
        riskSection.querySelectorAll('.risk-factor-chk:checked').forEach(() => {
            score += 2;
        });

        // Symptoms
        riskSection.querySelectorAll('.risk-symptom-chk:checked').forEach(chk => {
            if (chk.value === 'chest_pain') {
                isChestPain = true;
                score += 5;
            } else if (chk.value === 'sob') {
                score += 3;
            } else if (chk.value === 'palpitations') {
                score += 2;
            } else if (chk.value === 'dizziness') {
                score += 2;
            }
        });

        const circle = document.getElementById('riskScoreCircle');
        const scoreVal = document.getElementById('riskScoreVal');
        const badge = document.getElementById('riskStatusBadge');
        const recTitle = document.getElementById('riskRecTitle');
        const recText = document.getElementById('riskRecText');
        const ctaBtn = document.getElementById('riskCtaBtn');

        if (!circle || !scoreVal || !badge) return;

        circle.classList.remove('moderate', 'high');
        badge.classList.remove('moderate', 'high');

        const actionsList = document.getElementById('riskActionsList');

        if (isChestPain || score >= 8) {
            circle.classList.add('high');
            badge.classList.add('high');
            const percent = Math.min(28 + score * 2, 45);
            scoreVal.textContent = percent + '%';
            badge.textContent = 'High Priority Clinical Alert';
            recTitle.textContent = 'Priority Cardiologist Consultation Advised';
            recText.textContent = 'Your reported symptom profile and cardiovascular markers suggest heightened cardiac strain. We strongly recommend scheduling an urgent diagnostic ECG and clinical consultation within 24–48 hours.';
            if (ctaBtn) {
                ctaBtn.innerHTML = '<i class="fas fa-calendar-check"></i> Schedule Priority Evaluation';
                ctaBtn.className = 'btn btn-primary w-100';
            }
            if (actionsList) {
                actionsList.innerHTML = `
                    <div class="risk-action-item">
                        <div class="risk-action-icon" style="background:rgba(239,68,68,0.12);color:#EF4444"><i class="fas fa-heart-pulse"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">Urgent 12-Lead Telemetry</div>
                            <div class="risk-action-desc">Immediate diagnostic rhythm &amp; ischemia scan</div>
                        </div>
                    </div>
                    <div class="risk-action-item">
                        <div class="risk-action-icon" style="background:rgba(239,68,68,0.12);color:#EF4444"><i class="fas fa-vial-circle-check"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">High-Sensitivity Troponin</div>
                            <div class="risk-action-desc">Rapid myocardial strain &amp; enzyme screening</div>
                        </div>
                    </div>
                    <div class="risk-action-item">
                        <div class="risk-action-icon" style="background:rgba(239,68,68,0.12);color:#EF4444"><i class="fas fa-user-doctor"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">Senior Cardiologist Consult</div>
                            <div class="risk-action-desc">Direct clinical evaluation within 24–48 hours</div>
                        </div>
                    </div>
                `;
            }
        } else if (score >= 4) {
            circle.classList.add('moderate');
            badge.classList.add('moderate');
            const percent = 12 + score * 2;
            scoreVal.textContent = percent + '%';
            badge.textContent = 'Moderate Cardiovascular Risk';
            recTitle.textContent = 'Preventative Screening Recommended';
            recText.textContent = 'You exhibit cardiovascular risk factors that benefit from proactive medical oversight. We recommend an Advanced Lipid Panel, 12-Lead ECG, and an initial consultation with our prevention specialist.';
            if (ctaBtn) {
                ctaBtn.innerHTML = '<i class="fas fa-stethoscope"></i> Book Preventative Screening';
                ctaBtn.className = 'btn btn-primary w-100';
            }
            if (actionsList) {
                actionsList.innerHTML = `
                    <div class="risk-action-item">
                        <div class="risk-action-icon" style="background:rgba(245,158,11,0.12);color:#D97706"><i class="fas fa-heart-pulse"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">12-Lead ECG &amp; Echocardiogram</div>
                            <div class="risk-action-desc">Structural myocardial &amp; valvular Doppler scan</div>
                        </div>
                    </div>
                    <div class="risk-action-item">
                        <div class="risk-action-icon" style="background:rgba(245,158,11,0.12);color:#D97706"><i class="fas fa-vial"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">ApoB &amp; hs-CRP Inflammation Panel</div>
                            <div class="risk-action-desc">Atherosclerotic particle &amp; vascular inflammation check</div>
                        </div>
                    </div>
                    <div class="risk-action-item">
                        <div class="risk-action-icon" style="background:rgba(245,158,11,0.12);color:#D97706"><i class="fas fa-user-doctor"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">Preventative Cardiology Consult</div>
                            <div class="risk-action-desc">Personalized clinical lifestyle &amp; lipid care plan</div>
                        </div>
                    </div>
                `;
            }
        } else {
            scoreVal.textContent = '5%';
            badge.textContent = 'Low Preventative Risk';
            recTitle.textContent = 'Healthy Cardiovascular Baseline';
            recText.textContent = 'Your cardiovascular indicators reflect a healthy baseline. Continue maintaining heart-healthy nutrition and regular aerobic exercise, and schedule routine annual cardiovascular wellness checks.';
            if (ctaBtn) {
                ctaBtn.innerHTML = '<i class="fas fa-heart"></i> Schedule Routine Checkup';
                ctaBtn.className = 'btn btn-primary w-100';
            }
            if (actionsList) {
                actionsList.innerHTML = `
                    <div class="risk-action-item">
                        <div class="risk-action-icon"><i class="fas fa-heart-pulse"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">12-Lead Baseline ECG</div>
                            <div class="risk-action-desc">Establish resting electrical conduction profile</div>
                        </div>
                    </div>
                    <div class="risk-action-item">
                        <div class="risk-action-icon"><i class="fas fa-vial"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">Comprehensive Lipid Panel</div>
                            <div class="risk-action-desc">Fasting LDL, HDL &amp; metabolic risk markers</div>
                        </div>
                    </div>
                    <div class="risk-action-item">
                        <div class="risk-action-icon"><i class="fas fa-user-doctor"></i></div>
                        <div class="risk-action-info">
                            <div class="risk-action-title">Annual Wellness Review</div>
                            <div class="risk-action-desc">Routine cardiovascular checkup with our team</div>
                        </div>
                    </div>
                `;
            }
        }

        circle.style.transform = 'scale(1.05)';
        setTimeout(() => { circle.style.transform = 'scale(1)'; }, 300);
    });
}

/* ---- SURGICAL COMPARISON MATRIX TABS ---- */
function initSurgicalMatrix() {
    const matrixSection = document.querySelector('.surgical-matrix-section');
    if (!matrixSection) return;

    const tabs = matrixSection.querySelectorAll('.matrix-tab-btn');
    if (!tabs.length) return;

    const data = {
        stenting: {
            titleMin: 'Radial-First Coronary Stenting',
            subMin: 'Ultra-thin drug-eluting stents deployed via wrist artery',
            titleTrad: 'Coronary Artery Bypass Graft (CABG)',
            subTrad: 'Traditional open-chest coronary bypass surgery',
            min: {
                incision: '< 2mm Wrist Puncture',
                anesthesia: 'Local Numbing + Mild Sedation',
                bypass: 'None (Heart beats naturally)',
                stay: 'Same-Day or Overnight (24h)',
                recovery: '48 to 72 Hours return to work',
                pain: 'Minimal (Managed with mild analgesics)',
                success: '99.4% Procedural Success Rate'
            },
            trad: {
                incision: '8-Inch Median Sternotomy',
                anesthesia: 'General Anesthesia with Intubation',
                bypass: 'Full Cardiopulmonary Bypass Machine',
                stay: '7 to 10 Days in Hospital & ICU',
                recovery: '8 to 12 Weeks restricted mobility',
                pain: 'Substantial surgical bone healing pain',
                success: 'Standard surgical risk & transfusion needs'
            }
        },
        tavr: {
            titleMin: 'Transcatheter Aortic Valve (TAVR)',
            subMin: 'Percutaneous prosthetic valve replacement via femoral catheter',
            titleTrad: 'Surgical Aortic Valve Replacement (SAVR)',
            subTrad: 'Open-heart mechanical or bioprosthetic valve replacement',
            min: {
                incision: '< 3mm Femoral Puncture',
                anesthesia: 'Conscious Sedation without breathing tube',
                bypass: 'None required',
                stay: '24 to 48 Hours discharge',
                recovery: '3 to 5 Days return to activity',
                pain: 'Very low discomfort at puncture site',
                success: '99.2% Hemodynamic Success Rate'
            },
            trad: {
                incision: 'Full Open Sternotomy Incision',
                anesthesia: 'Deep General Anesthesia',
                bypass: 'Cardiopulmonary Bypass Required',
                stay: '6 to 9 Days (3 days in ICU)',
                recovery: '10 to 14 Weeks rehabilitation',
                pain: 'Heavy sternal incision pain',
                success: 'Higher stroke & infection risk profile'
            }
        },
        ablation: {
            titleMin: 'Pulse-Field Cardiac Ablation (PFA)',
            subMin: 'Non-thermal pulsed electric fields to isolate AFib pathways',
            titleTrad: 'Surgical Maze Open Procedure',
            subTrad: 'Surgical incisions on atrial tissue during open surgery',
            min: {
                incision: 'Catheter Access via Femoral Vein',
                anesthesia: 'Conscious Sedation / Twilight',
                bypass: 'None',
                stay: 'Same-Day Discharge',
                recovery: '24 to 48 Hours',
                pain: 'Minimal to none',
                success: 'Zero risk of thermal esophageal damage'
            },
            trad: {
                incision: 'Open Sternotomy or Mini-Thoracotomy',
                anesthesia: 'General Anesthesia',
                bypass: 'Often requires bypass machine',
                stay: '5 to 8 Days',
                recovery: '6 to 8 Weeks',
                pain: 'Chest wall surgical trauma',
                success: 'Prolonged postoperative pleural recovery'
            }
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const proc = tab.dataset.procedure || 'stenting';
            const info = data[proc];
            if (!info) return;

            // Update titles
            const minTitle = matrixSection.querySelector('#matrixMinTitle');
            const minSub = matrixSection.querySelector('#matrixMinSub');
            const tradTitle = matrixSection.querySelector('#matrixTradTitle');
            const tradSub = matrixSection.querySelector('#matrixTradSub');

            if (minTitle) minTitle.textContent = info.titleMin;
            if (minSub) minSub.textContent = info.subMin;
            if (tradTitle) tradTitle.textContent = info.titleTrad;
            if (tradSub) tradSub.textContent = info.subTrad;

            // Update rows
            for (const key in info.min) {
                const elMin = matrixSection.querySelector(`[data-val-min="${key}"]`);
                if (elMin) {
                    elMin.innerHTML = `<i class="fas fa-check-circle"></i> ${info.min[key]}`;
                }
            }
            for (const key in info.trad) {
                const elTrad = matrixSection.querySelector(`[data-val-trad="${key}"]`);
                if (elTrad) {
                    elTrad.innerHTML = `<i class="fas fa-circle-minus"></i> ${info.trad[key]}`;
                }
            }
        });
    });
}

/* ---- CARDIAC HUD HERO VISUAL ---- */
function initCardiacHero() {
    const card = document.getElementById('cardiacHeroCard');
    if (!card) return;

    const bpmText = document.getElementById('liveBpmText');
    const buttons = card.querySelectorAll('.rhythm-pill-btn');
    const heartWrap = document.getElementById('realisticHeartWrap');
    let currentBpm = 72;

    if (heartWrap) {
        heartWrap.addEventListener('click', () => {
            heartWrap.style.transform = 'scale(1.14) rotate(1.5deg)';
            setTimeout(() => { heartWrap.style.transform = ''; }, 260);
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentBpm = parseInt(btn.dataset.bpm, 10);
            if (bpmText) bpmText.textContent = currentBpm + ' BPM';
            const duration = (60 / currentBpm).toFixed(3) + 's';
            document.documentElement.style.setProperty('--cardiac-duration', duration);
            document.documentElement.style.setProperty('--cardiac-bpm', currentBpm);
        });
    });

    // ═════════════════════════════════════════════════════════════
    // ANIMATED CARDIAC BACKGROUND (3D RBCs, Shockwaves, ECG Sweep)
    // ═════════════════════════════════════════════════════════════
    const bgCanvas = document.getElementById('cardiacAnimatedBgCanvas');
    if (bgCanvas) {
        const bgCtx = bgCanvas.getContext('2d');
        if (bgCtx) {
            let bgW = bgCanvas.width = card.clientWidth || 520;
            let bgH = bgCanvas.height = card.clientHeight || 520;

            const rbcSources = [
                'assets/images/rbc-1.png?v=2',
                'assets/images/rbc-2.png?v=2',
                'assets/images/rbc-3.png?v=2'
            ];
            const rbcImages = rbcSources.map(src => {
                const img = new Image();
                img.src = src;
                return img;
            });

            const cells = [];
            for (let i = 0; i < 16; i++) {
                cells.push({
                    x: Math.random() * bgW,
                    y: Math.random() * bgH,
                    depth: 0.35 + Math.random() * 0.8,
                    vx: (Math.random() - 0.48) * 0.45,
                    vy: (Math.random() - 0.52) * 0.35,
                    rot: Math.random() * Math.PI * 2,
                    vRot: (Math.random() - 0.5) * 0.012,
                    spriteIdx: i % 3,
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: 0.015 + Math.random() * 0.02
                });
            }

            const shockwaves = [];
            let lastBeat = performance.now();
            let bgEcgPhase = 0;

            if (heartWrap) {
                heartWrap.addEventListener('click', () => {
                    shockwaves.push({
                        radius: 20,
                        maxRadius: Math.max(bgW, bgH) * 0.88,
                        alpha: 0.95
                    });
                });
            }

            function animateBg(now) {
                const beatInterval = (60 / currentBpm) * 1000;
                if (now - lastBeat > beatInterval) {
                    lastBeat = now;
                    shockwaves.push({
                        radius: 30,
                        maxRadius: Math.max(bgW, bgH) * 0.78,
                        alpha: 0.6
                    });
                }

                bgCtx.clearRect(0, 0, bgW, bgH);

                const cx = bgW * 0.5;
                const cy = bgH * 0.45;

                // 1. Radiant Cardiac Core Pulse
                const beatPhase = ((now - lastBeat) % beatInterval) / beatInterval;
                let pulse = 1.0;
                if (beatPhase < 0.16) {
                    pulse = 1.0 + Math.sin(beatPhase / 0.16 * Math.PI) * 0.22;
                } else if (beatPhase > 0.22 && beatPhase < 0.42) {
                    pulse = 1.0 + Math.sin((beatPhase - 0.22) / 0.20 * Math.PI) * 0.32;
                }

                const grad = bgCtx.createRadialGradient(
                    cx, cy, 20 * pulse,
                    cx, cy, (bgW * 0.68) * pulse
                );
                grad.addColorStop(0, 'rgba(255, 35, 55, 0.48)');
                grad.addColorStop(0.35, 'rgba(220, 15, 30, 0.32)');
                grad.addColorStop(0.68, 'rgba(120, 5, 15, 0.18)');
                grad.addColorStop(1, 'rgba(11, 4, 6, 0.0)');

                bgCtx.fillStyle = grad;
                bgCtx.fillRect(0, 0, bgW, bgH);

                // 2. Medical Grid
                bgCtx.lineWidth = 1;
                bgCtx.strokeStyle = 'rgba(230, 28, 28, 0.08)';
                bgCtx.beginPath();
                for (let x = 0; x < bgW; x += 24) {
                    bgCtx.moveTo(x, 0);
                    bgCtx.lineTo(x, bgH);
                }
                for (let y = 0; y < bgH; y += 24) {
                    bgCtx.moveTo(0, y);
                    bgCtx.lineTo(bgW, y);
                }
                bgCtx.stroke();

                // 3. Shockwave rings
                for (let i = shockwaves.length - 1; i >= 0; i--) {
                    const sw = shockwaves[i];
                    sw.radius += (currentBpm / 72) * 3.2;
                    sw.alpha = Math.max(0, 0.6 * (1 - sw.radius / sw.maxRadius));

                    if (sw.alpha <= 0.01 || sw.radius >= sw.maxRadius) {
                        shockwaves.splice(i, 1);
                        continue;
                    }

                    bgCtx.save();
                    bgCtx.beginPath();
                    bgCtx.arc(cx, cy, sw.radius, 0, Math.PI * 2);
                    bgCtx.strokeStyle = `rgba(255, 65, 80, ${sw.alpha})`;
                    bgCtx.lineWidth = 2.5;
                    bgCtx.shadowColor = '#FF2E44';
                    bgCtx.shadowBlur = 16;
                    bgCtx.stroke();
                    bgCtx.restore();
                }

                // 4. Horizontal Luminous ECG Trace behind heart
                const ecgSpeed = (currentBpm / 72) * 0.008;
                bgEcgPhase = (bgEcgPhase + ecgSpeed) % 1.0;
                const ecgY = cy + 20;
                const scanX = bgEcgPhase * bgW;

                bgCtx.save();
                bgCtx.beginPath();
                bgCtx.moveTo(0, ecgY);
                for (let px = 0; px < bgW; px += 3) {
                    const normX = px / bgW;
                    let offset = 0;
                    const diff = ((normX - bgEcgPhase + 1.0) % 1.0);
                    if (diff > 0.0 && diff < 0.24) {
                        const t = diff / 0.24;
                        if (t >= 0.12 && t < 0.26) offset = -Math.sin((t - 0.12) / 0.14 * Math.PI) * 18;
                        else if (t >= 0.30 && t < 0.46) offset = Math.sin((t - 0.30) / 0.16 * Math.PI) * 48;
                        else if (t >= 0.46 && t < 0.58) offset = -Math.sin((t - 0.46) / 0.12 * Math.PI) * 22;
                    }
                    bgCtx.lineTo(px, ecgY + offset);
                }
                bgCtx.strokeStyle = 'rgba(255, 60, 80, 0.24)';
                bgCtx.lineWidth = 2;
                bgCtx.stroke();

                // Spark sweep bead
                bgCtx.beginPath();
                bgCtx.arc(scanX, ecgY, 3.5, 0, Math.PI * 2);
                bgCtx.fillStyle = '#FFFFFF';
                bgCtx.shadowColor = '#FF3B4E';
                bgCtx.shadowBlur = 14;
                bgCtx.fill();
                bgCtx.restore();

                // 5. Floating 3D Red Blood Cells
                const rateMult = (currentBpm / 72);
                cells.forEach(cell => {
                    cell.wobble += cell.wobbleSpeed;
                    cell.rot += cell.vRot * rateMult;
                    cell.x += (cell.vx * cell.depth + Math.sin(cell.wobble) * 0.25) * rateMult;
                    cell.y += (cell.vy * cell.depth + Math.cos(cell.wobble) * 0.18) * rateMult;

                    const margin = 90 * cell.depth;
                    if (cell.x < -margin) cell.x = bgW + margin;
                    if (cell.x > bgW + margin) cell.x = -margin;
                    if (cell.y < -margin) cell.y = bgH + margin;
                    if (cell.y > bgH + margin) cell.y = -margin;

                    const sprite = rbcImages[cell.spriteIdx];
                    if (sprite && sprite.complete && sprite.naturalWidth > 0) {
                        bgCtx.save();
                        bgCtx.translate(cell.x, cell.y);
                        bgCtx.rotate(cell.rot);
                        const s = 105 * cell.depth;
                        bgCtx.globalAlpha = Math.min(0.92, 0.4 + cell.depth * 0.5);
                        bgCtx.shadowColor = 'rgba(200, 10, 25, 0.45)';
                        bgCtx.shadowBlur = 18 * cell.depth;
                        bgCtx.drawImage(sprite, -s / 2, -s / 2, s, s);
                        bgCtx.restore();
                    }
                });

                requestAnimationFrame(animateBg);
            }

            requestAnimationFrame(animateBg);

            function resizeBg() {
                if (card && card.clientWidth > 0) {
                    bgW = bgCanvas.width = card.clientWidth;
                    bgH = bgCanvas.height = card.clientHeight;
                }
            }
            window.addEventListener('resize', resizeBg);
            setTimeout(resizeBg, 150);
        }
    }

    const canvas = document.getElementById('cardiacWaveCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const holder = canvas.parentElement;

    let width = canvas.width = (holder && holder.clientWidth) ? holder.clientWidth : 460;
    let height = canvas.height = (holder && holder.clientHeight) ? holder.clientHeight : 48;
    const midY = height / 2;

    const points = [];
    const maxPoints = 140;
    let cyclePhase = 0;

    function getLeadIIValue(t) {
        if (t >= 0.10 && t < 0.20) {
            return -Math.sin((t - 0.10) / 0.10 * Math.PI) * (height * 0.16);
        } else if (t >= 0.23 && t < 0.26) {
            return Math.sin((t - 0.23) / 0.03 * Math.PI) * (height * 0.12);
        } else if (t >= 0.26 && t < 0.32) {
            return -Math.sin((t - 0.26) / 0.06 * Math.PI) * (height * 0.44);
        } else if (t >= 0.32 && t < 0.36) {
            return Math.sin((t - 0.32) / 0.04 * Math.PI) * (height * 0.16);
        } else if (t >= 0.45 && t < 0.65) {
            return -Math.sin((t - 0.45) / 0.20 * Math.PI) * (height * 0.22);
        }
        return 0;
    }

    for (let i = 0; i < maxPoints; i++) {
        points.push(midY);
    }

    function drawWave() {
        const speed = (currentBpm / 72) * 0.014;
        cyclePhase = (cyclePhase + speed) % 1.0;
        const val = midY + getLeadIIValue(cyclePhase) + (Math.random() - 0.5) * 0.8;

        points.push(val);
        if (points.length > maxPoints) points.shift();

        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = 'rgba(230, 28, 28, 0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x < width; x += 20) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
        for (let y = 0; y < height; y += 16) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
        ctx.stroke();

        if (points.length > 1) {
            ctx.beginPath();
            const dx = width / (maxPoints - 1);
            for (let i = 0; i < points.length; i++) {
                const px = i * dx;
                const py = points[i];
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.strokeStyle = '#FF2E44';
            ctx.lineWidth = 2.2;
            ctx.shadowColor = '#FF2E44';
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;

            const headX = (points.length - 1) * dx;
            const headY = points[points.length - 1];
            ctx.beginPath();
            ctx.arc(headX, headY, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowColor = '#FF2E44';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        requestAnimationFrame(drawWave);
    }
    drawWave();

    function resizeCanvas() {
        if (holder) {
            canvas.width = holder.clientWidth || 460;
            canvas.height = holder.clientHeight || 48;
            width = canvas.width;
            height = canvas.height;
        }
    }
    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 150);
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
    updateDarkIcons();
    updateRTLIndicators();
    renderNavbar();
    renderFooter();
    initFadeUp();
    initHeroSlider();
    initCardiacHero();
    initCounters();
    initPasswordToggles();
    initFaqAccordion();
    initRiskCalculator();
    initSurgicalMatrix();

    if (document.querySelector('.dash-layout')) {
        initDashboard();
    }
});
