import styles from "./Footer.module.css"

function Footer() {
    return <footer className={styles["restaurant-footer"]}>
        <div className={styles["footer-container"]}>
            {/* Row 1: Main Sections */}
            <div className={styles["footer-grid"]}>
                {/* About Section */}
                <div className={styles["footer-column"]}>
                    <h3 className={styles["footer-heading"]}>Amaravathi Authentics</h3>
                    <p className={styles["footer-description"]}>
                        Experience the authentic taste of traditional Indian cuisine, crafted with love and the finest ingredients.
                        We bring you the rich flavors of Amaravathi.
                    </p>
                    <div className={styles["social-links"]}>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-tripadvisor"></i>
                    </div>
                </div>

                {/* Quick Links  */}
                <div className={styles["footer-column"]}>
                    <h3 className={styles["footer-heading"]}>Quick Links</h3>
                    <ul className={styles["footer-links"]}>
                        <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
                        <li><a href="#about"><i className="fas fa-chevron-right"></i> About Us</a></li>
                        <li><a href="#menu"><i className="fas fa-chevron-right"></i> Menu</a></li>
                        <li><a href="#reserve"><i className="fas fa-chevron-right"></i> Reserve Table</a></li>
                        <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className={styles["footer-column"]}>
                    <h3 className={styles["footer-heading"]}>Our Services</h3>
                    <ul className={styles["footer-links"]}>
                        <li><a href="#pickup"><i className="fas fa-shopping-bag"></i> Pickup Orders</a></li>
                        <li><a href="#delivery"><i className="fas fa-motorcycle"></i> Delivery</a></li>
                        <li><a href="#catering"><i className="fas fa-utensils"></i> Catering</a></li>
                        <li><a href="#events"><i className="fas fa-calendar-alt"></i> Events</a></li>
                        <li><a href="#giftcards"><i className="fas fa-gift"></i> Gift Cards</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className={styles["footer-column"]}>
                    <h3 className={styles["footer-heading"]}>Contact Us</h3>
                    <div className={styles["contact-info"]}>
                        <div className={styles["contact-item"]}>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>123 Spice Street, Amaravathi<br />Culinary District, CD 12345</span>
                        </div>
                        <div className={styles["contact-item"]}>
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:+11234567890">+1 (123) 456-7890</a>
                        </div>
                        <div className={styles["contact-item"]}>
                            <i className="fab fa-whatsapp"></i>
                            <a href="https://wa.me/11234567890">WhatsApp Orders</a>
                        </div>
                        <div className={styles["contact-item"]}>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@amaravathiauthentics.com">info@amaravathiauthentics.com</a>
                        </div>
                    </div>
                </div>

                {/* Opening Hours */}
                <div className={styles["footer-column"]}>
                    <h3 className={styles["footer-heading"]}>Opening Hours</h3>
                    <div className={styles["opening-hours"]}>
                        <div className={styles["hours-item"]}>
                            <span className={styles["day"]}>Monday - Thursday</span>
                            <span className={styles["time"]}>11:00 AM - 10:00 PM</span>
                        </div>
                        <div className={styles["hours-item"]}>
                            <span className={styles["day"]}>Friday - Saturday</span>
                            <span className={styles["time"]}>11:00 AM - 11:00 PM</span>
                        </div>
                        <div className={styles["hours-item"]}>
                            <span className={styles["day"]}>Sunday</span>
                            <span className={styles["time"]}>12:00 PM - 9:00 PM</span>
                        </div>
                        <div className={styles["hours-special"]}>
                            <i className="fas fa-star"></i>
                            <span>Happy Hour: 3-6 PM Daily</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Newsletter & Map */}
            <div className={styles["footer-secondary"]}>
                <div className={styles["newsletter-section"]}>
                    <div className={styles["newsletter-content"]}>
                        <h3 className={styles["footer-heading"]}>
                            <i className="fas fa-envelope-open-text"></i> Subscribe to Our Newsletter
                        </h3>
                        <p>Get exclusive offers, recipes, and updates delivered to your inbox!</p>
                        <form className={styles["newsletter-form"]}>
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit">
                                <i className="fas fa-paper-plane"></i> Subscribe
                            </button>
                        </form>
                        <p className={styles["newsletter-privacy"]}>
                            <i className="fas fa-lock"></i> We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>
                </div>

                <div className={styles["map-section"]}>
                    <h3 className={styles["footer-heading"]}>
                        <i className="fas fa-map-marked-alt"></i> Find Us Here
                    </h3>
                    <div className={styles["map-container"]}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841124732587!2d-73.98823492346444!3d40.748441734504855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                            width="100%"
                            height="250"
                            // style="border:0;"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <a href="https://maps.google.com" target="_blank" className={styles["map-link"]}>
                            <i className="fas fa-directions"></i> Get Directions
                        </a>
                    </div>
                </div>
            </div>

            {/* Payment Methods */}
            <div className={styles["payment-section"]}>
                <h3 className={styles["footer-heading"]}>We Accept</h3>
                <div className={styles["payment-methods"]}>
                    <div className={styles["payment-icon"]} title="Visa">
                        <i className="fab fa-cc-visa"></i>
                    </div>
                    <div className={styles["payment-icon"]} title="Mastercard">
                        <i className="fab fa-cc-mastercard"></i>
                    </div>
                    <div className={styles["payment-icon"]} title="American Express">
                        <i className="fab fa-cc-amex"></i>
                    </div>
                    <div className={styles["payment-icon"]} title="Discover">
                        <i className="fab fa-cc-discover"></i>
                    </div>
                    <div className={styles["payment-icon"]} title="PayPal">
                        <i className="fab fa-cc-paypal"></i>
                    </div>
                    <div className={styles["payment-icon"]} title="Apple Pay">
                        <i className="fab fa-apple-pay"></i>
                    </div>
                    <div className={styles["payment-icon"]} title="Google Pay">
                        <i className="fab fa-google-pay"></i>
                    </div>
                    <div className={styles["payment-icon"]} title="Cash">
                        <i className="fas fa-money-bill-wave"></i>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles["footer-bottom"]}>
                <div className={styles["footer-bottom-content"]}>
                    <p className={styles["copyright"]}>
                        <i className="fas fa-copyright"></i> 2024 Amaravathi Authentics. All Rights Reserved.
                    </p>
                    <div className={styles["footer-legal"]}>
                        <a href="#privacy">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#terms">Terms & Conditions</a>
                        <span className="separator">|</span>
                        <a href="#accessibility">Accessibility</a>
                    </div>
                    <p className={styles["developer-credit"]}>
                        <i className="fas fa-heart"></i> Crafted with passion for authentic flavors
                    </p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer