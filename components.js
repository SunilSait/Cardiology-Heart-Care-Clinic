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
  <defs><linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#B91C3A"/><stop offset="100%" stop-color="#8B1429"/></linearGradient></defs>
  <rect width="100" height="100" rx="20" fill="url(#logoBg)"/>
  <path d="M50 72 C50 72 25 55 25 40 C25 32 31 26 38 26 C43 26 47 29 50 33 C53 29 57 26 62 26 C69 26 75 32 75 40 C75 55 50 72 50 72Z" fill="white" opacity="0.95"/>
  <path d="M38 44 L44 44 L47 38 L50 50 L53 42 L56 44 L62 44" stroke="#B91C3A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
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
window.initDashboard = initDashboard;

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
    updateDarkIcons();
    updateRTLIndicators();
    renderNavbar();
    renderFooter();
    initFadeUp();
    initHeroSlider();
    initCounters();
    initPasswordToggles();
    initFaqAccordion();

    if (document.querySelector('.dash-layout')) {
        initDashboard();
    }
});
