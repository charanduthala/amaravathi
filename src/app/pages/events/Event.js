import { Fragment } from "react/jsx-runtime";
import styles from "./Event.module.css"

function Event() {

    return <Fragment>
        {/* Hero Section */}
        <section className={`${styles["hero"]} mt-[2rem]`}>
            <div className={styles["container"]}>
                <h1>Celebrate Your Special Moments with Amaravathi Authentics</h1>
                <p className={styles["hero-subtitle"]}>
                    Some moments deserve more than just celebration — they deserve tradition, warmth, and unforgettable flavors.
                </p>
                <p className={styles["hero-description"]}>
                    At Amaravathi Authentics, we offer a beautifully designed space for private events, religious gatherings,
                    family celebrations, and corporate functions — paired with authentic South Indian vegetarian cuisine.
                </p>
            </div>
        </section>

        {/* Event Types Section */}
        <section className={styles["event-types"]}>
            <div className={styles["container"]}>
                <div className={styles["event-grid"]}>
                    <div className={styles["event-card"]}>
                        <div className={styles["event-icon"]}>🎂</div>
                        <h3>Birthday Celebrations</h3>
                        <p>Custom menu, décor options, cake arrangements, and music setup for memorable celebrations.</p>
                    </div>

                    <div className={styles["event-card"]}>
                        <div className={styles["event-icon"]}>💍</div>
                        <h3>Engagements & Small Weddings</h3>
                        <p>Elegant vegetarian feast with traditional décor elements and ceremonial dining arrangements.</p>
                    </div>

                    <div className={styles["event-card"]}>
                        <div className={styles["event-icon"]}>🕉️</div>
                        <h3>Poojas & Religious Gatherings</h3>
                        <p>Sattvic menu options and calm, spiritually aligned ambiance.</p>
                    </div>

                    <div className={styles["event-card"]}>
                        <div className={styles["event-icon"]}>💼</div>
                        <h3>Corporate Events</h3>
                        <p>Team lunches, annual meetings, networking events, and product launches.</p>
                    </div>

                    <div className={styles["event-card"]}>
                        <div className={styles["event-icon"]}>👨‍👩‍👧‍👦</div>
                        <h3>Family Get-Togethers</h3>
                        <p>Private dining spaces designed for intimate gatherings.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Event Space Features */}
        <section className={styles["features-section"]}>
            <div className={styles["container"]}>
                <h2>Our Event Space Features</h2>
                <div className={styles["features-grid"]}>
                    <div className={styles["feature-item"]}>
                        <span className={styles["feature-bullet"]}>✓</span>
                        <span>Spacious seating arrangements</span>
                    </div>
                    <div className={styles["feature-item"]}>
                        <span className={styles["feature-bullet"]}>✓</span>
                        <span>Private dining hall</span>
                    </div>
                    <div className={styles["feature-item"]}>
                        <span className={styles["feature-bullet"]}>✓</span>
                        <span>Stage setup (on request)</span>
                    </div>
                    <div className={styles["feature-item"]}>
                        <span className={styles["feature-bullet"]}>✓</span>
                        <span>Audio system</span>
                    </div>
                    <div className={styles["feature-item"]}>
                        <span className={styles["feature-bullet"]}>✓</span>
                        <span>Projector & screen (corporate use) – On request</span>
                    </div>
                    <div className={styles["feature-item"]}>
                        <span className={styles["feature-bullet"]}>✓</span>
                        <span>Custom décor options</span>
                    </div>
                    <div className={styles["feature-item"]}>
                        <span className={styles["feature-bullet"]}>✓</span>
                        <span>Dedicated event coordinator</span>
                    </div>
                    <div className={styles["feature-item"]}>
                        <span className={styles["feature-bullet"]}>✓</span>
                        <span>Ample parking space</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Event Packages */}
        <section className={styles["packages-section"]}>
            <div className={styles["container"]}>
                <h2>Event Packages</h2>
                <div className={styles["packages-grid"]}>
                    {/* Silver Package */}
                    <div className={styles["package-card"]}>
                        <div className={`${styles['package-header']} ${styles['silver']}`}>
                            <h3>Silver Package</h3>
                        </div>
                        <ul className={styles["package-features"]}>
                            <li>Buffet dining</li>
                            <li>Standard décor</li>
                            <li>Fixed menu</li>
                        </ul>
                    </div>

                    {/* Gold Package */}
                    <div className={`${styles['package-card']} ${styles['featured']}`}>
                        <div className={`${styles['package-header']} ${styles['gold']}`}>
                            <h3>Gold Package</h3>
                            <span className={styles["popular-badge"]}>POPULAR</span>
                        </div>
                        <ul className={styles["package-features"]}>
                            <li>Premium buffet décor</li>
                            <li>Welcome drinks</li>
                            <li>One live counter</li>
                            <li>Event coordination support</li>
                        </ul>
                    </div>

                    {/* Platinum Package */}
                    <div className={styles["package-card"]}>
                        <div className={`${styles['package-header']} ${styles['platinum']}`}>
                            <h3>Platinum Package</h3>
                        </div>
                        <ul className={styles["package-features"]}>
                            <li>Themed décor</li>
                            <li>Customized premium menu</li>
                            <li>Multiple live counters</li>
                            <li>Dedicated service team</li>
                            <li>Optional photography & videography</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Host With Us */}
        <section className={styles["why-section"]}>
            <div className={styles["container"]}>
                <h2>Why Host Your Event With Us?</h2>
                <div className={styles["why-grid"]}>
                    <div className={styles["why-card"]}>
                        <div className={styles["why-icon"]}>🌿</div>
                        <h4>Authentic Pure Vegetarian Cuisine</h4>
                    </div>
                    <div className={styles["why-card"]}>
                        <div className={styles["why-icon"]}>🪑</div>
                        <h4>Flexible Seating Capacity</h4>
                    </div>
                    <div className={styles["why-card"]}>
                        <div className={styles["why-icon"]}>🎨</div>
                        <h4>Customizable Menu & Décor</h4>
                    </div>
                    <div className={styles["why-card"]}>
                        <div className={styles["why-icon"]}>🙏</div>
                        <h4>Warm South Indian Hospitality</h4>
                    </div>
                    <div className={styles["why-card"]}>
                        <div className={styles["why-icon"]}>✨</div>
                        <h4>End-to-End Event Coordination</h4>
                    </div>
                </div>
            </div>
        </section>

        {/* Booking Process */}
        <section className={styles["booking-process"]}>
            <div className={styles["container"]}>
                <h2>How to Book Your Event</h2>
                <div className={styles["process-steps"]}>
                    <div className={styles["step"]}>
                        <div className={styles["step-number"]}>1</div>
                        <div className={styles["step-content"]}>
                            <h4>Submit Event Inquiry Form</h4>
                        </div>
                    </div>
                    <div className={styles["step"]}>
                        <div className={styles["step-number"]}>2</div>
                        <div className={styles["step-content"]}>
                            <h4>Check Date Availability</h4>
                        </div>
                    </div>
                    <div className={styles["step"]}>
                        <div className={styles["step-number"]}>3</div>
                        <div className={styles["step-content"]}>
                            <h4>Choose Package</h4>
                        </div>
                    </div>
                    <div className={styles["step"]}>
                        <div className={styles["step-number"]}>4</div>
                        <div className={styles["step-content"]}>
                            <h4>Confirm with Advance Payment</h4>
                        </div>
                    </div>
                    <div className={styles["step"]}>
                        <div className={styles["step-number"]}>5</div>
                        <div className={styles["step-content"]}>
                            <h4>Celebrate Stress-Free</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className={styles["cta-section"]}>
            <div className={styles["container"]}>
                <h2>Book Your Event Today</h2>
                <p className={styles["cta-subtitle"]}>
                    Let your celebration be blessed with authentic taste and timeless tradition.
                </p>
                <div className={styles["cta-buttons"]}>
                    <a href="#availability" className={`${styles['btn']} ${styles['btn-primary']}`}>Check Availability</a>
                    <a href="tel:+1234567890" className={`${styles['btn']} ${styles['btn-primary']}`}>Call Event Manager</a>
                </div>
            </div>
        </section>
    </Fragment>
}

export default Event