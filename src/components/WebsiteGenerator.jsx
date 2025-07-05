import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiCheck, FiLoader } = FiIcons;

const WebsiteGenerator = ({ brandConfig, onGenerated }) => {
  const [generationSteps, setGenerationSteps] = useState([
    { id: 'html', name: 'HTML Structure', status: 'pending' },
    { id: 'css', name: 'Branded Styling', status: 'pending' },
    { id: 'js', name: 'Interactive Features', status: 'pending' },
    { id: 'assets', name: 'Marketing Assets', status: 'pending' },
    { id: 'package', name: 'Package Creation', status: 'pending' }
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [generatedFiles, setGeneratedFiles] = useState({});

  useEffect(() => {
    generateWebsite();
  }, []);

  const generateWebsite = async () => {
    const steps = [...generationSteps];
    
    for (let i = 0; i < steps.length; i++) {
      steps[i].status = 'active';
      setGenerationSteps([...steps]);
      setCurrentStep(i);
      
      // Simulate generation time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate the actual file content
      const fileContent = await generateFileContent(steps[i].id);
      setGeneratedFiles(prev => ({ ...prev, [steps[i].id]: fileContent }));
      
      steps[i].status = 'completed';
      setGenerationSteps([...steps]);
    }

    // Complete generation
    setTimeout(() => {
      onGenerated({
        files: generatedFiles,
        brandConfig,
        timestamp: new Date().toISOString()
      });
    }, 500);
  };

  const generateFileContent = async (fileType) => {
    const { brand, offer } = brandConfig;
    
    switch (fileType) {
      case 'html':
        return generateHTML(brand, offer);
      case 'css':
        return generateCSS(brand, offer);
      case 'js':
        return generateJS(brand, offer);
      case 'assets':
        return generateAssets(brand, offer);
      case 'package':
        return generatePackage(brand, offer);
      default:
        return '';
    }
  };

  const generateHTML = (brand, offer) => {
    const heroTitle = offer.customizations.heroTitle || 
      `Transform Your ${offer.niche} with ${brand.fullName}`;
    const heroSubtitle = offer.customizations.heroSubtitle || 
      `Join thousands who've discovered the power of ${brand.brandVoice.keywords[0]}`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${offer.offerName} - ${brand.fullName}</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=${brand.fonts.heading}:wght@400;600;700&family=${brand.fonts.body}:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src="${brand.logoUrl}" alt="${brand.fullName} Logo">
                <span>${brand.name}</span>
            </div>
            <nav class="nav">
                <a href="#features">Features</a>
                <a href="#testimonials">Success Stories</a>
                <a href="#pricing">Get Started</a>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">${heroTitle}</h1>
                <p class="hero-subtitle">${heroSubtitle}</p>
                <div class="hero-cta">
                    <a href="${offer.affiliateLink}" class="cta-button primary" onclick="trackClick('hero-cta')">
                        ${offer.customizations.ctaText}
                    </a>
                    <p class="guarantee">30-Day Money-Back Guarantee</p>
                </div>
            </div>
            <div class="hero-image">
                <img src="${brand.heroImage}" alt="${offer.offerName}">
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        <div class="container">
            <h2>What You'll Get</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🚀</div>
                    <h3>Complete ${offer.niche} System</h3>
                    <p>Step-by-step blueprint to master ${brand.brandVoice.keywords[0]}</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h3>Proven Results</h3>
                    <p>Strategies that have generated millions in revenue</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3>Expert Support</h3>
                    <p>Direct access to ${brand.fullName} community</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        <div class="container">
            <h2>Success Stories</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p>"This ${offer.offerName} completely transformed my ${offer.niche} business. I saw results in just 30 days!"</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="${brand.testimonialImages[0]}" alt="Sarah Johnson">
                        <div>
                            <h4>Sarah Johnson</h4>
                            <span>Digital Entrepreneur</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p>"The strategies from ${brand.name} helped me scale to 6 figures. Highly recommended!"</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="${brand.testimonialImages[1]}" alt="Mike Rodriguez">
                        <div>
                            <h4>Mike Rodriguez</h4>
                            <span>Online Business Owner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section id="pricing" class="cta-section">
        <div class="container">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of successful entrepreneurs who've transformed their business with ${brand.fullName}</p>
            <div class="pricing-card">
                <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">197</span>
                    <span class="period">one-time</span>
                </div>
                <ul class="features-list">
                    <li>✅ Complete ${offer.offerName} System</li>
                    <li>✅ Bonus Templates & Tools</li>
                    <li>✅ Private Community Access</li>
                    <li>✅ 30-Day Money-Back Guarantee</li>
                </ul>
                <a href="${offer.affiliateLink}" class="cta-button primary large" onclick="trackClick('main-cta')">
                    ${offer.customizations.ctaText}
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 ${brand.fullName}. All rights reserved.</p>
            <div class="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;
  };

  const generateCSS = (brand, offer) => {
    return `/* ${brand.fullName} - ${offer.offerName} Styles */
:root {
    --primary-color: ${brand.colors.primary};
    --secondary-color: ${brand.colors.secondary};
    --accent-color: ${brand.colors.accent};
    --background-color: ${brand.colors.background};
    --text-color: ${brand.colors.text};
    --heading-font: '${brand.fonts.heading}', sans-serif;
    --body-font: '${brand.fonts.body}', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--body-font);
    line-height: 1.6;
    color: var(--text-color);
    background: var(--background-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--heading-font);
    font-weight: 700;
    font-size: 1.5rem;
}

.logo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.hero-title {
    font-family: var(--heading-font);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-cta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background: var(--accent-color);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.cta-button.large {
    padding: 1.5rem 3rem;
    font-size: 1.25rem;
}

.guarantee {
    font-size: 0.9rem;
    opacity: 0.8;
    text-align: center;
}

.hero-image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Features Section */
.features {
    padding: 80px 0;
    background: rgba(255, 255, 255, 0.05);
}

.features h2 {
    font-family: var(--heading-font);
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    font-family: var(--heading-font);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* Testimonials Section */
.testimonials {
    padding: 80px 0;
}

.testimonials h2 {
    font-family: var(--heading-font);
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.testimonial-content {
    margin-bottom: 1.5rem;
}

.testimonial-content p {
    font-size: 1.1rem;
    font-style: italic;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.testimonial-author img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.testimonial-author h4 {
    font-family: var(--heading-font);
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.testimonial-author span {
    color: var(--primary-color);
    font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    color: white;
    text-align: center;
}

.cta-section h2 {
    font-family: var(--heading-font);
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.cta-section p {
    font-size: 1.25rem;
    margin-bottom: 3rem;
    opacity: 0.9;
}

.pricing-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 3rem;
    border-radius: 16px;
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 2rem;
}

.currency {
    font-size: 1.5rem;
    font-weight: 600;
}

.amount {
    font-size: 4rem;
    font-weight: 700;
    font-family: var(--heading-font);
}

.period {
    font-size: 1.1rem;
    margin-left: 0.5rem;
}

.features-list {
    list-style: none;
    margin-bottom: 2rem;
    text-align: left;
}

.features-list li {
    padding: 0.5rem 0;
    font-size: 1.1rem;
}

/* Footer */
.footer {
    background: rgba(0, 0, 0, 0.3);
    padding: 2rem 0;
    text-align: center;
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-links {
    display: flex;
    gap: 2rem;
}

.footer-links a {
    color: var(--text-color);
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero .container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .nav {
        display: none;
    }
    
    .footer .container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.feature-card,
.testimonial-card {
    animation: fadeInUp 0.6s ease-out;
}`;
  };

  const generateJS = (brand, offer) => {
    return `// ${brand.fullName} - ${offer.offerName} Interactive Features

// Analytics and Tracking
function trackClick(element) {
    // Track button clicks for optimization
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'CTA',
            'event_label': element,
            'value': 1
        });
    }
    
    console.log('Tracked click:', element);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Intersection Observer for animations
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
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Form validation and submission
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add urgency timer (optional)
function startCountdown(duration, display) {
    let timer = duration;
    const interval = setInterval(function() {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;
        
        display.textContent = hours + ":" + 
            (minutes < 10 ? "0" : "") + minutes + ":" + 
            (seconds < 10 ? "0" : "") + seconds;
        
        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "EXPIRED";
        }
    }, 1000);
}

// Initialize countdown if element exists
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.querySelector('#countdown');
    if (countdownElement) {
        const twentyFourHours = 24 * 60 * 60;
        startCountdown(twentyFourHours, countdownElement);
    }
});

// Social proof notifications (optional)
const socialProofMessages = [
    "Sarah from California just purchased ${offer.offerName}",
    "Mike from Texas just joined the community",
    "Jennifer from New York just started her transformation",
    "David from Florida just downloaded the bonus materials"
];

function showSocialProof() {
    const notification = document.createElement('div');
    notification.className = 'social-proof-notification';
    notification.innerHTML = socialProofMessages[Math.floor(Math.random() * socialProofMessages.length)];
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Show social proof notifications every 30 seconds
setInterval(showSocialProof, 30000);

// Exit intent popup (optional)
let exitIntentShown = false;

document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        showExitIntentPopup();
    }
});

function showExitIntentPopup() {
    const popup = document.createElement('div');
    popup.className = 'exit-intent-popup';
    popup.innerHTML = \`
        <div class="popup-content">
            <h3>Wait! Don't Miss Out!</h3>
            <p>Get an exclusive 20% discount on ${offer.offerName}</p>
            <button onclick="closeExitIntent()" class="cta-button">Get My Discount</button>
            <button onclick="closeExitIntent()" class="close-popup">×</button>
        </div>
    \`;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.classList.add('show');
    }, 100);
}

function closeExitIntent() {
    const popup = document.querySelector('.exit-intent-popup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 300);
    }
}

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
});`;
  };

  const generateAssets = (brand, offer) => {
    return {
      socialMedia: {
        instagramPost: `🚀 JUST DROPPED: ${offer.offerName}!

Ready to transform your ${offer.niche} game? This isn't just another course – it's your complete blueprint from ${brand.fullName}.

✅ Step-by-step implementation
✅ Proven strategies that work
✅ Expert community support
✅ Perfect for all skill levels

From the trusted ${brand.name} community – you know this is GOLD.

Limited time launch pricing ends soon!

Link in bio 👆

#${offer.niche.replace(/\s+/g, '')} #${brand.name.replace(/\s+/g, '')} #DigitalSuccess #OnlineBusiness`,

        facebookPost: `🎯 ${offer.offerName} - Now Available!

Transform your ${offer.niche} business with proven strategies from ${brand.fullName}.

What you get:
→ Complete system blueprint
→ Step-by-step video training
→ Private community access
→ Bonus templates & tools
→ 30-day money-back guarantee

Join thousands who've already transformed their business.

Get instant access: ${offer.affiliateLink}

#${offer.niche.replace(/\s+/g, '')} #${brand.name}`,

        twitterPost: `🚀 ${offer.offerName} is LIVE!

Complete ${offer.niche} system from @${brand.name}

✅ Proven strategies
✅ Step-by-step training
✅ Community support
✅ 30-day guarantee

Transform your business today 👉 ${offer.affiliateLink}

#${offer.niche.replace(/\s+/g, '')} #DigitalSuccess`
      },

      emailSequence: [
        {
          subject: `🚨 ${offer.offerName} - Launch Week Special`,
          body: `Hey there!

The moment you've been waiting for is here...

${brand.fullName} just released "${offer.offerName}" and it's already creating massive buzz in the ${offer.niche} community.

This isn't just another course - it's a complete transformation system that includes:

→ Step-by-step implementation guide
→ Proven strategies with real results
→ Private community access
→ Done-for-you templates
→ 30-day money-back guarantee

But here's the thing...

Early bird pricing ends in 48 hours.

👉 GET INSTANT ACCESS: ${offer.affiliateLink}

To your success,
[Your Name]`
        },
        {
          subject: `Last chance: ${offer.offerName} pricing expires tonight`,
          body: `This is it...

In just a few hours, the special launch pricing for "${offer.offerName}" expires forever.

I've been getting messages all day from people who've already started implementing and seeing results.

If you're serious about transforming your ${offer.niche} business, this is your moment.

👉 SECURE YOUR SPOT NOW: ${offer.affiliateLink}

Don't let this opportunity pass you by.

[Your Name]`
        }
      ],

      chatgptPrompt: `Create a comprehensive marketing campaign for "${offer.offerName}" in the ${offer.niche} niche. This offer comes from the ${brand.fullName} community and will be launched as a ${offer.launchType}.

IMPORTANT: Please generate complete HTML, CSS, and JavaScript code for a high-converting landing page that includes:

HTML REQUIREMENTS:
- Complete responsive landing page structure
- Hero section with compelling headline
- Features/benefits section
- Testimonials section
- Pricing/CTA section
- Footer with legal links
- Mobile-optimized layout

CSS REQUIREMENTS:
- Custom branded styling using these colors:
  Primary: ${brand.colors.primary}
  Secondary: ${brand.colors.secondary}
  Accent: ${brand.colors.accent}
  Background: ${brand.colors.background}
  Text: ${brand.colors.text}
- Responsive design for all devices
- Modern animations and transitions
- Professional typography using ${brand.fonts.heading} and ${brand.fonts.body}

JAVASCRIPT REQUIREMENTS:
- Smooth scrolling navigation
- Interactive elements and animations
- Form validation
- Analytics tracking code
- Mobile menu functionality
- Social proof notifications
- Exit intent popup

MARKETING COPY REQUIREMENTS:
1. 10 compelling headlines for different audiences
2. 5 pain points this offer solves
3. 3 unique value propositions
4. A launch sequence timeline (7-day campaign)
5. 5 social proof examples
6. 3 scarcity/urgency tactics
7. FAQ responses for common objections
8. 5 follow-up email subject lines
9. Call-to-action variations for different platforms
10. Bonus stack suggestions

BRAND VOICE: ${brand.brandVoice.tone}
STYLE: ${brand.brandVoice.style}
KEYWORDS: ${brand.brandVoice.keywords.join(', ')}
AFFILIATE LINK: ${offer.affiliateLink}

Target audience: People interested in ${offer.niche} who are looking for proven systems and strategies.

Please make all copy conversion-focused and authentic, avoiding overly salesy language while maintaining excitement and urgency. The website should be production-ready with complete, functional code.`
    };
  };

  const generatePackage = (brand, offer) => {
    return {
      instructions: `# ${offer.offerName} - Website Setup Instructions

## Quick Setup Guide

1. **Upload Files**
   - Upload all files to your web hosting
   - Ensure index.html is in the root directory

2. **Verify Affiliate Links**
   - All links are pre-configured with your affiliate URL: ${offer.affiliateLink}
   - Test all CTA buttons and links before going live

3. **Customize Content**
   - Edit hero title/subtitle in index.html if needed
   - Update testimonials with your own if desired
   - Add your contact information in footer

4. **Test Everything**
   - Test all affiliate links
   - Verify mobile responsiveness
   - Check contact forms
   - Test on different browsers

## Files Included

- index.html (Main landing page)
- styles.css (Branded styling)
- script.js (Interactive features)
- images/ (Brand assets)
- marketing-assets.txt (Social media copy)
- setup-instructions.txt (This file)

## Brand Colors Used

Primary: ${brand.colors.primary}
Secondary: ${brand.colors.secondary}
Accent: ${brand.colors.accent}
Background: ${brand.colors.background}
Text: ${brand.colors.text}

## Fonts Used

Heading: ${brand.fonts.heading}
Body: ${brand.fonts.body}

## Your Affiliate Link

${offer.affiliateLink}

## Support

For technical support, contact: support@${brand.name.toLowerCase().replace(/\s+/g, '')}.com

## Legal

Remember to include proper disclaimers and follow ${brand.fullName} affiliate guidelines.`,

      checklist: `# Launch Checklist for ${offer.offerName}

## Pre-Launch (Complete before going live)
□ Upload all website files
□ Test affiliate links: ${offer.affiliateLink}
□ Verify mobile responsiveness
□ Add Google Analytics
□ Set up social media accounts
□ Prepare email sequences
□ Create backup of all files
□ Test on different browsers
□ Verify all forms work
□ Check page load speed

## Launch Day
□ Announce on social media
□ Send launch email
□ Update bio links
□ Monitor analytics
□ Respond to comments
□ Track conversions
□ Monitor affiliate link performance
□ Share in relevant groups
□ Create launch day story content

## Post-Launch (First week)
□ Send follow-up emails
□ Share testimonials
□ Optimize based on data
□ Scale successful campaigns
□ Collect feedback
□ A/B test headlines
□ Monitor conversion rates
□ Adjust marketing copy

## Ongoing
□ Weekly performance review
□ Monthly content updates
□ Quarterly strategy review
□ Annual brand refresh
□ Track affiliate commissions
□ Optimize for better conversions`
    };
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Generating Your Website
          </h2>
          <p className="text-gray-300 text-lg">
            Creating a fully branded website for {brandConfig.offer.offerName}
          </p>
        </div>

        <div className="space-y-6">
          {generationSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center space-x-4 p-4 rounded-lg border ${
                step.status === 'completed'
                  ? 'bg-green-500/10 border-green-500/30'
                  : step.status === 'active'
                  ? 'bg-purple-500/10 border-purple-500/30'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex-shrink-0">
                {step.status === 'completed' ? (
                  <SafeIcon icon={FiCheck} className="text-green-400 text-xl" />
                ) : step.status === 'active' ? (
                  <SafeIcon icon={FiLoader} className="text-purple-400 text-xl animate-spin" />
                ) : (
                  <SafeIcon icon={FiCode} className="text-gray-400 text-xl" />
                )}
              </div>
              
              <div className="flex-1">
                <h3 className={`font-medium ${
                  step.status === 'completed'
                    ? 'text-green-400'
                    : step.status === 'active'
                    ? 'text-purple-400'
                    : 'text-gray-400'
                }`}>
                  {step.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {step.status === 'completed'
                    ? 'Completed'
                    : step.status === 'active'
                    ? 'Generating...'
                    : 'Pending'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="text-sm text-gray-400">
            This may take a few moments while we create your custom branded website...
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteGenerator;