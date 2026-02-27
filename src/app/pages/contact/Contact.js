import { Fragment } from "react/jsx-runtime"

import styles from './Contact.module.css';
import { useState } from "react";

import logo from '../../../assets/logos/AA_logo_final.svg'

function Contact() {
    const [showChatPanel, setShowChatPanel] = useState(false);
    const handleChatPanel = () => {
        setShowChatPanel(!showChatPanel);
    }
    return <Fragment>
        {/* Open/Closed Status Banner */}
        <div id="statusBanner" className={styles["status-banner"]}></div>

        {/* Hero Contact Card */}
        <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden mt-24">
            {/* Ambient Background Elements */}
            <div className={styles["ambient-arch"]}></div>
            <div className={styles["ambient-buddha"]}></div>

            <div className={`${styles['hero-contact-card']}  w-full`}>
                <div className="text-center mb-8">
                    {/* Logo/Icon */}
                    <div className={`${styles['temple-icon']} mb-6`}>
                        {/* <i className="fas fa-gopuram text-6xl text-secondary"></i> */}
                        <div className={styles["logo-icon"]} >
                            {/* <i className={"fas fa-utensils"}></i> */}
                            <img src={logo} alt="amaravathi-logo" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">
                        Amaravathi Authentics
                    </h1>
                    <p class="text-xl text-primary/80 font-light mb-8">
                        Where tradition meets taste
                    </p>

                    {/* Quick Contact Info */}
                    <div className={styles["contact-info-grid"]}>
                        <div className={styles["contact-info-item"]}>
                            <i className={`${styles['contact-icon']} ${styles['phone-vibrate']} fas fa-phone`}></i>
                            <div>
                                <p class="text-sm text-primary/60">Call Us</p>
                                <a href="tel:+919876543210" class="text-lg font-semibold text-primary hover:text-secondary transition-colors">
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>

                        <div className={styles["contact-info-item"]}>
                            <i className={`${styles['contact-icon']} ${styles['envelope-flap']} fas fa-envelope`}></i>
                            <div>
                                <p class="text-sm text-primary/60">Email Us</p>
                                <a href="mailto:hello@amaravathiauthentics.com" class="text-lg font-semibold text-primary hover:text-secondary transition-colors">
                                    hello@amaravathiauthentics.com
                                </a>
                            </div>
                        </div>

                        <div className={styles["contact-info-item"]}>
                            <i className={`fas fa-map-marker-alt ${styles['contact-icon']}`}></i>
                            <div>
                                <p class="text-sm text-primary/60">Visit Us</p>
                                <p class="text-lg font-semibold text-primary">
                                    960 US-9, South Amboy, NJ 08879
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Preview */}
                    <div className={`${styles['map-preview-container']} mt-8`}>
                        <div id="mapPreview" className={styles["map-preview"]}>
                            {/* <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6339123!2d78.486671!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjIiTiA3OMKwMjknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                // style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                title="map"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe> */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12142.091938553463!2d-74.29686205387111!3d40.46369363667911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cbc261da588d%3A0x95c56935d0f72564!2s960%20US-9%2C%20South%20Amboy%2C%20NJ%2008879%2C%20USA!5e0!3m2!1sen!2sin!4v1770641836007!5m2!1sen!2sin"
                                width="1320"
                                height="300"
                                // style="border:0;" 
                                allowfullscreen="yes"
                                loading="lazy"
                                title="map"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                            <div className={styles["map-overlay"]}>
                                <button onclick="openFullMap()" className={styles["map-cta-btn"]}>
                                    <i className="fas fa-directions mr-2"></i>
                                    Get Directions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Multi-Channel Contact Options */}
        <section class="max-w-7xl mx-auto px-4 py-16">
            <h2 className={styles["section-title"]}>Connect With Us</h2>
            <div className={styles["contact-channels-grid"]}>
                <a href="tel:+919876543210" className={styles["contact-channel-btn"]}>
                    <i className="fas fa-phone-alt"></i>
                    <span>Phone Call</span>
                </a>

                <a href="https://wa.me/919876543210" target="_blank" className={styles["contact-channel-btn"]} rel="noreferrer">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp Chat</span>
                </a>

                <a href="mailto:hello@amaravathiauthentics.com" className={styles["contact-channel-btn"]}>
                    <i className="fas fa-envelope"></i>
                    <span>Email Inquiry</span>
                </a>

                <button onclick="openFullMap()" className={styles["contact-channel-btn"]}>
                    <i className="fas fa-map-marked-alt"></i>
                    <span>Get Directions</span>
                </button>

                <a href="/amaravathi/reserve" className={styles["contact-channel-btn"]}>
                    <i className="fas fa-calendar-check"></i>
                    <span>Table Reservation</span>
                </a>

                <a href="tel:+919876543210" className={styles["contact-channel-btn"]}>
                    <i className="fas fa-motorcycle"></i>
                    <span>Delivery Support</span>
                </a>
            </div>
        </section>

        {/* Team Section */}
        <section class="max-w-7xl mx-auto px-4 py-16">
            <h2 className={styles["section-title"]}>Meet Our Team</h2>
            <div className={styles["team-grid"]}>
                <div className={styles["team-card"]}>
                    <div className={styles["team-avatar"]}>
                        <i className="fas fa-user-tie text-4xl text-secondary"></i>
                    </div>
                    <div className={styles["team-info"]}>
                        <h3 className="text-xl font-semibold text-primary mb-1">Restaurant Manager</h3>
                        <p className="text-primary/60 mb-3">General Inquiries</p>
                        <a href="tel:+919876543210" className={styles["team-contact-btn"]}>
                            <i className="fas fa-phone mr-2"></i>
                            Call Now
                        </a>
                    </div>
                </div>

                <div className={styles["team-card"]}>
                    <div className={styles["team-avatar"]}>
                        <i className="fas fa-concierge-bell text-4xl text-secondary"></i>
                    </div>
                    <div className={styles["team-info"]}>
                        <h3 className="text-xl font-semibold text-primary mb-1">Reservation Lead</h3>
                        <p className="text-primary/60 mb-3">Table Bookings</p>
                        <a href="tel:+919876543211" className={styles["team-contact-btn"]}>
                            <i className="fas fa-phone mr-2"></i>
                            Call Now
                        </a>
                    </div>
                </div>

                <div className={styles["team-card"]}>
                    <div className={styles["team-avatar"]}>
                        <i className="fas fa-utensils text-4xl text-secondary"></i>
                    </div>
                    <div className={styles["team-info"]}>
                        <h3 className="text-xl font-semibold text-primary mb-1">Catering Head</h3>
                        <p className="text-primary/60 mb-3">Events & Catering</p>
                        <a href="tel:+919876543212" className={styles["team-contact-btn"]}>
                            <i className="fas fa-phone mr-2"></i>
                            Call Now
                        </a>
                    </div>
                </div>

                <div className={styles["team-card"]}>
                    <div className={styles["team-avatar"]}>
                        <i className="fas fa-calendar-alt text-4xl text-secondary"></i>
                    </div>
                    <div className={styles["team-info"]}>
                        <h3 className="text-xl font-semibold text-primary mb-1">Events Manager</h3>
                        <p className="text-primary/60 mb-3">Special Occasions</p>
                        <a href="tel:+919876543213" className={styles["team-contact-btn"]}>
                            <i className="fas fa-phone mr-2"></i>
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 className={styles["section-title"]}>Send Us a Message</h2>
            <div className={styles["contact-form-card"]}>
                <form id="contactForm" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={styles["form-group"]}>
                            <label className={styles["form-label"]}>Your Name</label>
                            <input type="text" name="name" required className={styles["form-input"]} placeholder="Enter your name" />
                        </div>

                        <div className={styles["form-group"]}>
                            <label className={styles["form-label"]}>Email Address</label>
                            <input type="email" name="email" required className={styles["form-input"]} placeholder="your@email.com" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={styles["form-group"]}>
                            <label className={styles["form-label"]}>Phone Number</label>
                            <input type="tel" name="phone" required className={styles["form-input"]} placeholder="+91 98765 43210" />
                        </div>

                        <div className={styles["form-group"]}>
                            <label className={styles["form-label"]}>Purpose</label>
                            <select name="purpose" required class="form-input">
                                <option value="">Select purpose</option>
                                <option value="general">General Inquiry</option>
                                <option value="catering">Catering</option>
                                <option value="events">Events</option>
                                <option value="feedback">Feedback</option>
                                <option value="careers">Careers</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles["form-group"]}>
                        <label className={styles["form-label"]}>Your Message</label>
                        <textarea name="message" required className={styles["form-input"]} rows="5" placeholder="Tell us how we can help you..."></textarea>
                    </div>

                    <div className={styles["form-group"]}>
                        <label className={styles["form-label"]}>Upload File (Optional)</label>
                        <input type="file" name="file" className={styles["form-input"]} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                        <p className="text-sm text-primary/60 mt-2">For event layouts, catering menus, etc.</p>
                    </div>

                    {/* Voice Message Option */}
                    <div className={styles["voice-message-container"]}>
                        <button type="button" id="voiceRecordBtn" className={styles["voice-record-btn"]}>
                            <i className="fas fa-microphone mr-2"></i>
                            <span id="voiceRecordText">Record Voice Message (10s)</span>
                        </button>
                        <p className="text-sm text-primary/60 mt-2">Perfect for mobile - just tell us what you need!</p>
                    </div>

                    <button type="submit" className={`${styles['cta-btn']} w-full`}>
                        <span id="submitBtnText">
                            <i className="fas fa-paper-plane mr-2"></i>
                            Send Message
                        </span>
                        <span id="submitLoader" className="hidden">
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Sending...
                        </span>
                    </button>

                    <p className="text-center text-primary/60 text-sm mt-4">
                        Thank you for reaching out. Our team responds with warmth and speed.
                    </p>
                </form>
            </div>
        </section>

        {/* Restaurant Ambience Gallery */}
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className={styles["section-title"]}>Our Restaurant</h2>
            <div className={styles["ambience-gallery"]}>
                <div className={styles["ambience-card"]}>
                    <div className={styles["ambience-image"]}>
                        <i className="fas fa-store text-6xl text-secondary"></i>
                    </div>
                    <p className={styles["ambience-label"]}>Dining Hall</p>
                </div>

                <div className={styles["ambience-card"]}>
                    <div className={styles["ambience-image"]}>
                        <i className="fas fa-tree text-6xl text-secondary"></i>
                    </div>
                    <p className={styles["ambience-label"]}>Outdoor Seating</p>
                </div>

                <div className={styles["ambience-card"]}>
                    <div className={styles["ambience-image"]}>
                        <i className="fas fa-fire text-6xl text-secondary"></i>
                    </div>
                    <p className={styles["ambience-label"]}>Live Kitchen</p>
                </div>

                <div className={styles["ambience-card"]}>
                    <div className={styles["ambience-image"]}>
                        <i className="fas fa-pepper-hot text-6xl text-secondary"></i>
                    </div>
                    <p className={styles["ambience-label"]}>Signature Dishes</p>
                </div>
            </div>
        </section>

        {/* Chat Assistant Widget */}
        <div id="chatWidget" className={styles["chat-widget"]}>
            <button id="chatToggle" className={styles["chat-toggle"]} onClick={handleChatPanel}>
                <i className="fas fa-comments"></i>
            </button>
            {showChatPanel &&
                <div id="chatPanel" className={`${styles['chat-panel']} ${styles['hidden']}`}>
                    <div className={styles["chat-header"]}>
                        <div className="flex items-center">
                            <i className="fas fa-robot text-2xl text-tertiary mr-3"></i>
                            <div>
                                <h4 className="font-semibold text-tertiary">Amaravathi Assistant</h4>
                                <p className="text-xs text-tertiary/80">We're here to help!</p>
                            </div>
                        </div>
                        <button id="chatClose" className="text-tertiary hover:text-white" onClick={handleChatPanel}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className={styles["chat-body"]}>
                        <div className={styles["chat-welcome"]}>
                            <p className="text-sm text-primary/80 mb-4">Hi! How can we help you today?</p>
                        </div>

                        <div className={styles["faq-grid"]}>
                            <button onclick="handleFAQ('timing')" className={styles["faq-btn"]}>
                                <i className="fas fa-clock mr-2"></i>
                                Opening Hours
                            </button>
                            <button onclick="handleFAQ('menu')" className={styles["faq-btn"]}>
                                <i className="fas fa-utensils mr-2"></i>
                                View Menu
                            </button>
                            <button onclick="handleFAQ('reservation')" className={styles["faq-btn"]}>
                                <i className="fas fa-calendar mr-2"></i>
                                Reservations
                            </button>
                            <button onclick="handleFAQ('parking')" className={styles["faq-btn"]}>
                                <i className="fas fa-parking mr-2"></i>
                                Parking Info
                            </button>
                            <button onclick="handleFAQ('veg')" className={styles["faq-btn"]}>
                                <i className="fas fa-leaf mr-2"></i>
                                Pure Veg?
                            </button>
                            <button onclick="handleFAQ('jain')" className={styles["faq-btn"]}>
                                <i className="fas fa-om mr-2"></i>
                                Jain Food
                            </button>
                            <button onclick="handleFAQ('delivery')" className={styles["faq-btn"]}>
                                <i className="fas fa-motorcycle mr-2"></i>
                                Delivery
                            </button>
                            <button onclick="handleFAQ('contact')" className={styles["faq-btn"]}>
                                <i className="fas fa-phone mr-2"></i>
                                Call Us
                            </button>
                        </div>

                        <div id="chatMessages" className={styles["chat-messages"]}></div>
                    </div>

                    <div className={styles["chat-footer"]}>
                        <a href="https://wa.me/919876543210" target="_blank" className={styles["whatsapp-btn"]} rel='noreferrer'>
                            <i className="fab fa-whatsapp mr-2"></i>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            }
        </div>

        {/* FAQ Drawer */}
        <div id="faqDrawer" className={styles["faq-drawer"]}>
            <div className={styles["faq-drawer-header"]}>
                <h3 className="text-xl font-semibold text-primary">Frequently Asked Questions</h3>
                <button id="faqClose" className="text-primary/60 hover:text-primary">
                    <i className="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div className={styles["faq-drawer-body"]}>
                <div className={styles["faq-item"]}>
                    <button className={styles["faq-question"]}>
                        <span>Do you take reservations?</span>
                        <i className="fas fa-chevron-down"></i>
                    </button>
                    <div className={styles["faq-answer"]}>
                        Yes! We recommend booking in advance, especially for weekends and special occasions. Call us at +91 98765 43210 or use our online reservation system.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>Is it pure vegetarian?</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        Yes, we serve 100% pure vegetarian food prepared with fresh ingredients and traditional recipes.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>Do you offer Jain food?</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        Absolutely! We have a dedicated Jain menu with no onion, garlic, or root vegetables. Please inform our staff when ordering.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>Do you deliver?</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        Yes, we deliver through major food delivery platforms and also offer direct delivery. Call +91 98765 43210 for orders.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>Is parking available?</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        Yes, we have ample parking space for both cars and bikes. Valet parking is also available during peak hours.
                    </div>
                </div>
            </div>
        </div>

        {/* Fun Fact Bubble */}
        <div id="funFact" class="fun-fact-bubble hidden">
            <button id="closeFunFact" class="fun-fact-close">
                <i class="fas fa-times"></i>
            </button>
            <div class="flex items-start">
                <i class="fas fa-lightbulb text-2xl text-secondary mr-3 mt-1"></i>
                <div>
                    <h4 class="font-semibold text-primary mb-1">Did you know?</h4>
                    <p class="text-sm text-primary/80" id="funFactText">
                        Your favorite dosa is slow-fermented for 12 hours to achieve that perfect crispy texture!
                    </p>
                </div>
            </div>
        </div>

        {/* Success Modal */}
        <div id="successModal" class="modal-overlay hidden">
            <div class="success-modal">
                <div class="success-icon">
                    <i class="fas fa-check-circle text-6xl text-secondary"></i>
                </div>
                <h3 class="text-3xl font-display font-bold text-primary mb-3">
                    Message Sent Successfully!
                </h3>
                <p class="text-primary/80 mb-6">
                    Our team will get back to you within 10 minutes.
                </p>
                <p class="text-primary/60 mb-8">
                    Meanwhile, explore our signature dishes ↓
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button onclick="closeSuccessModal()" class="cta-btn">
                        <i class="fas fa-times mr-2"></i>
                        Close
                    </button>
                    <a href="#menu" class="secondary-btn">
                        <i class="fas fa-utensils mr-2"></i>
                        View Menu
                    </a>
                </div>
            </div>
        </div>

        {/* Notification Permission */}
        <div id="notificationPrompt" class="notification-prompt hidden">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <i class="fas fa-bell text-2xl text-secondary mr-3"></i>
                    <div>
                        <p class="font-semibold text-primary">Stay Updated</p>
                        <p class="text-sm text-primary/70">Get quick updates about your inquiries</p>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button onclick="enableNotifications()" class="notification-btn-yes">
                        Yes
                    </button>
                    <button onclick="closeNotificationPrompt()" class="notification-btn-no">
                        Later
                    </button>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Contact