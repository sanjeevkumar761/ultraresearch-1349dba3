import styles from "../styles/Home.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>UltraResearch</div>
      <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
      <label htmlFor="menu-toggle" className={styles.menuIcon}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={styles.navLinks}>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How it Works</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li className={styles.navCta}><a href="#cta" className={styles.ctaPrimary}>Get Started</a></li>
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            UltraResearch
            <span className={styles.heroAccent}>.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            The AI-powered market research platform for <strong>real-time insights</strong> & actionable growth.
          </p>
          <div className={styles.heroActions}>
            <a href="#pricing" className={styles.ctaPrimary}>
              Get Started
            </a>
            <a href="#features" className={styles.ctaSecondary}>
              See Features
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          {/* Inline SVG illustration */}
          <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="60" width="280" height="180" rx="24" fill="var(--accent-light)"/>
            <rect x="80" y="80" width="240" height="140" rx="18" fill="#fff"/>
            <g>
              <rect x="110" y="120" width="50" height="70" rx="10" fill="var(--accent)"/>
              <rect x="175" y="150" width="50" height="40" rx="8" fill="var(--accent-dark)"/>
              <rect x="240" y="100" width="50" height="90" rx="12" fill="var(--accent)"/>
            </g>
            <circle cx="340" cy="90" r="16" fill="var(--accent)" stroke="#fff" strokeWidth="6"/>
          </svg>
        </div>
      </section>

      {/* Features Overview */}
      <section className={styles.features} id="features">
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>
              {/* Lightning Bolt SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 2L6 18h8l-2 12L26 14h-8l2-12z" fill="var(--accent)"/></svg>
            </span>
            <h3>Real-time Market Insights</h3>
            <p>Stay ahead with up-to-the-minute trends and competitive intelligence.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>
              {/* Gear SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="8" stroke="var(--accent-dark)" strokeWidth="3"/><path d="M16 4v4M16 24v4M4 16h4M24 16h4M8.93 8.93l2.83 2.83M20.24 20.24l2.83 2.83M8.93 23.07l2.83-2.83M23.07 8.93l-2.83 2.83" stroke="var(--accent)" strokeWidth="2"/></svg>
            </span>
            <h3>Automated Data Analysis</h3>
            <p>AI-driven analytics uncover patterns fast&mdash;no manual crunching.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>
              {/* Dashboard SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="10" width="6" height="12" rx="2" fill="var(--accent-light)"/><rect x="14" y="6" width="6" height="16" rx="2" fill="var(--accent)"/><rect x="22" y="14" width="4" height="8" rx="2" fill="var(--accent-dark)"/></svg>
            </span>
            <h3>Customizable Dashboards</h3>
            <p>Personalize insights and KPIs to your business priorities.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>
              {/* Target SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="var(--accent)" strokeWidth="2"/><circle cx="16" cy="16" r="6" stroke="var(--accent-dark)" strokeWidth="2"/><circle cx="16" cy="16" r="2" fill="var(--accent)"/></svg>
            </span>
            <h3>Actionable Recommendations</h3>
            <p>AI suggests next steps&mdash;not just data, but decisions.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>
              {/* Cloud Lock SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 20a8 8 0 1115.9-2.1A5 5 0 1124 28H10a6 6 0 01-2-11.7" stroke="var(--accent)" strokeWidth="2"/><rect x="14" y="20" width="4" height="6" rx="2" fill="var(--accent-dark)"/><circle cx="16" cy="22" r="1.2" fill="#fff"/></svg>
            </span>
            <h3>Secure Cloud Platform</h3>
            <p>Your research and data are encrypted, safe, and always accessible.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks} id="how-it-works">
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.hiwSteps}>
          <div className={styles.hiwStep}>
            <span className={styles.hiwIcon}>
              {/* Step 1 SVG */}
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="22" fill="var(--accent-light)"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="20" fontFamily="Poppins" dy=".3em">1</text></svg>
            </span>
            <h4>Connect Your Data</h4>
            <p>Integrate your sources in seconds, from spreadsheets to CRM.</p>
          </div>
          <div className={styles.hiwStep}>
            <span className={styles.hiwIcon}>
              {/* Step 2 SVG */}
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="22" fill="var(--accent)"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="20" fontFamily="Poppins" dy=".3em">2</text></svg>
            </span>
            <h4>AI Analyzes Instantly</h4>
            <p>Our models process and visualize your market data in real time.</p>
          </div>
          <div className={styles.hiwStep}>
            <span className={styles.hiwIcon}>
              {/* Step 3 SVG */}
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="22" fill="var(--accent-dark)"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="20" fontFamily="Poppins" dy=".3em">3</text></svg>
            </span>
            <h4>Unlock Insights</h4>
            <p>Get tailored dashboards & actionable recommendations—instantly.</p>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className={styles.testimonials} id="testimonials">
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialQuote}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7 12c0-3.87 3.13-7 7-7" stroke="var(--accent)" strokeWidth="2"/><circle cx="7" cy="21" r="3" fill="var(--accent-light)"/></svg>
              <p>UltraResearch turned raw data into clear growth actions. Our team can finally focus on strategy, not spreadsheets.</p>
            </div>
            <div className={styles.testimonialUser}>
              <span className={styles.avatar} style={{backgroundColor:'#6C63FF'}}>JD</span>
              <div>
                <strong>Julia Donovan</strong>
                <br />Head of Marketing, NovaSoft
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialQuote}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7 12c0-3.87 3.13-7 7-7" stroke="var(--accent)" strokeWidth="2"/><circle cx="7" cy="21" r="3" fill="var(--accent-light)"/></svg>
              <p>Impressed by the AI's accuracy & dashboard flexibility. Secure and easy to use—even for our non-tech teams!</p>
            </div>
            <div className={styles.testimonialUser}>
              <span className={styles.avatar} style={{backgroundColor:'#4D42CC'}}>MK</span>
              <div>
                <strong>Michael Kim</strong>
                <br />COO, RetailX
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialQuote}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7 12c0-3.87 3.13-7 7-7" stroke="var(--accent)" strokeWidth="2"/><circle cx="7" cy="21" r="3" fill="var(--accent-light)"/></svg>
              <p>UltraResearch gave us the edge in a fast-moving market. Highly recommended for any data-driven business.</p>
            </div>
            <div className={styles.testimonialUser}>
              <span className={styles.avatar} style={{backgroundColor:'#897CFF'}}>LS</span>
              <div>
                <strong>Lisa Suarez</strong>
                <br />Growth Lead, FinDyn
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className={styles.pricing} id="pricing">
        <h2 className={styles.sectionTitle}>Pricing Plans</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Starter</h3>
            <div className={styles.price}>$39<span>/mo</span></div>
            <ul>
              <li>Up to 3 dashboards</li>
              <li>Real-time insights</li>
              <li>Basic AI analytics</li>
              <li>Email support</li>
            </ul>
            <a className={styles.ctaPrimary} href="#cta">Start Free Trial</a>
          </div>
          <div className={styles.pricingCard + ' ' + styles.pricingPopular}>
            <div className={styles.popularBadge}>Most Popular</div>
            <h3>Pro</h3>
            <div className={styles.price}>$89<span>/mo</span></div>
            <ul>
              <li>Unlimited dashboards</li>
              <li>Advanced AI analytics</li>
              <li>Custom integrations</li>
              <li>Priority support</li>
            </ul>
            <a className={styles.ctaPrimary} href="#cta">Start Free Trial</a>
          </div>
          <div className={styles.pricingCard}>
            <h3>Enterprise</h3>
            <div className={styles.price}>Custom</div>
            <ul>
              <li>Dedicated onboarding</li>
              <li>Custom models & SLAs</li>
              <li>White-label dashboards</li>
              <li>24/7 premium support</li>
            </ul>
            <a className={styles.ctaSecondary} href="#cta">Contact Sales</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} id="faq">
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <div className={styles.faqList}>
          <details>
            <summary>Is my data secure with UltraResearch?</summary>
            <p>Absolutely. All data is encrypted at rest and in transit, and we maintain strict access controls in our secure cloud environment.</p>
          </details>
          <details>
            <summary>Can I try UltraResearch before subscribing?</summary>
            <p>Yes, we offer a free 14-day trial with full access to all features—no credit card required.</p>
          </details>
          <details>
            <summary>Which integrations are supported?</summary>
            <p>We support spreadsheets (Excel/Google Sheets), CRMs, marketing platforms, and can build custom connectors for Pro/Enterprise plans.</p>
          </details>
          <details>
            <summary>Can I customize the dashboards?</summary>
            <p>Yes, dashboards are fully customizable with widgets, KPIs, and branding to suit your needs.</p>
          </details>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaBanner} id="cta">
        <div className={styles.ctaBannerContent}>
          <h2>Ready to unlock smarter market decisions?</h2>
          <p>Start your free trial now &mdash; no credit card required.</p>
          <a className={styles.ctaPrimary} href="#">Get Started</a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>UltraResearch</div>
        <nav className={styles.footerNav}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.footerCopy}>
          &copy; {new Date().getFullYear()} UltraResearch. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
