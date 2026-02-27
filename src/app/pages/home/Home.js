import { Fragment } from "react/jsx-runtime"
import styles from "./Home.module.css"

function Home() {
    return <Fragment>
        {/* Hero Section */}
        <section id="home" className={styles["hero-section"]}>
            <div className={styles["hero-background"]}>
                <div className={styles["hero-video-container"]} id="heroVideo"></div>
                <div className={styles["hero-overlay"]}></div>
                <div className={styles["temple-arch-glow"]}></div>
            </div>

            <div className={styles["hero-content"]}>
                <div className={styles["hero-text-container"]}>
                    <h1 className={styles["hero-title"]}>
                        <span className={styles["title-line"]}>Where Pure Veg Tradition</span>
                        <span className={styles["title-line"]}>Meets Timeless Taste</span>
                    </h1>
                    <p className={styles["hero-subtitle"]}>
                        Serving soulful South Indian flavors, authentic Andhra thalis, and crowd-favorite Indo-Chinese dishes — all crafted with purity and tradition.
                    </p>
                    <p className={styles["hero-intro"]}>
                        At Amaravathi Authentics, every dosa, meal, and delicacy is made with devotion, rich heritage, and 100% vegetarian authenticity.
                    </p>
                </div>
            </div>

            {/* Floating CTA Dock */}
            <div className={styles["floating-cta-dock"]}>
                <a href="/amaravathi/menu" className={`${styles['cta-btn']} ${styles['cta-primary']}`}>
                    <i className="fas fa-utensils"></i>
                    Explore Menu
                </a>
                <a href="/amaravathi/order" className={`${styles['cta-btn']} ${styles['cta-primary']}`}>
                    <i className="fas fa-shopping-bag"></i>
                    Order Online
                </a>
                <a href="/amaravathi/reserve" className={`${styles['cta-btn']} ${styles['cta-primary']}`}>
                    <i className="fas fa-calendar-check"></i>
                    Reserve a Table
                </a>
            </div>

            {/* Floating Leaf Particles */}
            <div className={styles["leaf-particles"]} id="leafParticles"></div>
        </section>

        {/* About Section */}
        <section id="about" className={styles["about-section"]}>
            <div className={styles["container"]}>
                <div className={styles["section-header"]}>
                    <h2 className={styles["section-title"]}>A Pure Veg Culinary Destination Inspired by Tradition</h2>
                </div>

                <div className={styles["about-content"]}>
                    <div className={styles["about-text"]}>
                        {/* <p className={styles["about-intro"]}>
                            Amaravathi Authentics brings the timeless flavors of Andhra vegetarian cooking to life. From crisp golden dosas to aromatic thalis and flavour-packed Indo-Chinese delights, our dishes celebrate the richness of India's plant-based culinary heritage.
                        </p> */}

                        <div className={styles["heritage-story"]}>
                            <h3>Our Identity Reflects Our Soul:</h3>
                            <div className={styles["icon-story-strip"]}>
                                <div className={styles["icon-story-item"]}>
                                    <div className={`${styles['story-icon']} ${styles['temple-arch-icon']}`}>
                                        <i className="fas fa-gopuram"></i>
                                    </div>
                                    <p>The temple-arch shaped golden A symbolizes purity and tradition</p>
                                </div>
                                <div className={styles["icon-story-item"]}>
                                    <div className={`${styles['story-icon']} ${styles['utensils-icon']}`}>
                                        <i className="fas fa-utensils"></i>
                                    </div>
                                    <p>The fork and spoon highlight our passion for hospitality</p>
                                </div>
                                <div className={styles["icon-story-item"]}>
                                    <div className={`${styles['story-icon']} ${styles['buddha-icon']}`}>
                                        <i className="fas fa-om"></i>
                                    </div>
                                    <p>The calm Buddha silhouette represents peace and a serene dining experience</p>
                                </div>
                            </div>
                        </div>

                        <p className={styles["about-closing"]}>
                            Every recipe is vegetarian, handcrafted with love, and rooted in the cultural essence of Amaravathi.
                        </p>
                    </div>

                    <div className={styles["parallax-bg"]} id="parallaxBg"></div>
                </div>
            </div>
        </section>

        {/* Specialities Section */}
        {/* <section id="menu" className={styles["specialities-section"]}>
            <div className={styles["container"]}>
                <div className={styles["section-header"]}>
                    <h2 className={styles["section-title"]}>Signature Veg Delights You'll Love</h2>
                </div>

                <div className={styles["category-tabs"]}>
                    <button className={`${styles['tab-btn']} ${styles['active']}`} data-category="dosa">Dosa Corner</button>
                    <button className={styles["tab-btn"]} data-category="thali">Andhra Thalis</button>
                    <button className={styles["tab-btn"]} data-category="indo-chinese">Indo-Chinese</button>
                </div>

                <div className={styles["category-content"]}>
                    Dosa Corner
                    <div className={`${styles['category-panel']} ${styles['active']}`} data-panel="dosa">
                        <div className={styles["category-hero"]}>
                            <div className={styles["category-description"]}>
                                <h3>Dosa Corner</h3>
                                <p>Crispy, golden, and irresistibly flavorful — our dosas are crafted with traditional batter, slow-fermented for authentic taste.</p>
                            </div>
                        </div>
                        <div className={styles["bento-grid"]}>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🥞</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Masala Dosa</h4>
                                <p>Classic golden crisp with spiced potato filling</p>
                            </div>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>✨</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Ghee Roast</h4>
                                <p>Buttery, crispy perfection with aromatic ghee</p>
                            </div>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🌶️</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Podi Dosa</h4>
                                <p>Spiced lentil powder for that authentic kick</p>
                            </div>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🧀</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Paneer Dosa</h4>
                                <p>Rich cottage cheese filling, absolutely delightful</p>
                            </div>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🥥</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Rava Dosa</h4>
                                <p>Crispy semolina dosa with a unique texture</p>
                            </div>
                        </div>
                    </div>

                    Andhra Thalis
                    <div className={styles["category-panel"]} data-panel="thali">
                        <div className={styles["category-hero"]}>
                            <div className={styles["category-description"]}>
                                <h3>Andhra Veg Thalis</h3>
                                <p>A complete feast that captures the soul of Andhra cuisine. A wholesome, satisfying veg meal — just like a festive feast.</p>
                            </div>
                        </div>
                        <div className={styles["thali-features"]}>
                            <div className={styles["thali-items"]}>
                                <div className={styles["thali-item"]}><i className="fas fa-check-circle"></i> Dal, Sambar, Rasam</div>
                                <div className={styles["thali-item"]}><i className="fas fa-check-circle"></i> Veg curries & stir-fries</div>
                                <div className={styles["thali-item"]}><i className="fas fa-check-circle"></i> Podi & Ghee</div>
                                <div className={styles["thali-item"]}><i className="fas fa-check-circle"></i> Pickles & Papad</div>
                                <div className={styles["thali-item"]}><i className="fas fa-check-circle"></i> Dessert</div>
                            </div>
                            <div className={styles["thali-visual"]}>
                                <div className={styles["thali-plate"]}>🍽️</div>
                            </div>
                        </div>
                    </div>

                    Indo-Chinese
                    <div className={styles["category-panel"]} data-panel="indo-chinese">
                        <div className={styles["category-hero"]}>
                            <div className={styles["category-description"]}>
                                <h3>Indo-Chinese Veg Favorites</h3>
                                <p>A fusion loved by all — spicy, tangy, and delightful. Every item is pure vegetarian — always.</p>
                            </div>
                        </div>
                        <div className={styles["bento-grid"]}>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🍚</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Veg Fried Rice</h4>
                                <p>Wok-tossed perfection with fresh vegetables</p>
                            </div>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🍜</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Schezwan Noodles</h4>
                                <p>Spicy, tangy noodles with authentic flavor</p>
                            </div>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🥦</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Gobi Manchurian</h4>
                                <p>Crispy cauliflower in tangy sauce</p>
                            </div>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🧈</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Paneer Chilli</h4>
                                <p>Spicy paneer cubes with peppers</p>
                            </div>
                            <div className={styles["dish-card"]}>
                                <div className={styles["dish-image"]}>
                                    <div className={styles["dish-placeholder"]}>🥟</div>
                                    <div className={styles["dish-aroma"]}></div>
                                </div>
                                <h4>Spring Rolls</h4>
                                <p>Crispy rolls with fresh vegetable filling</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* Why Choose Us Section */}
        <section className={styles["why-choose-section"]}>
            <div className={styles["container"]}>
                <div className={styles["section-header"]}>
                    <h2 className={styles["section-title"]}>Your New Favourite Pure Veg Restaurant</h2>
                </div>

                <div className={styles["benefits-grid"]}>
                    <div className={styles["benefit-card"]}>
                        <div className={styles["benefit-icon"]}>
                            <i className="fas fa-leaf"></i>
                        </div>
                        <h3>100% Vegetarian Menu</h3>
                        <p>Pure ingredients. Pure flavors. Pure tradition.</p>
                    </div>

                    <div className={styles["benefit-card"]}>
                        <div className={styles["benefit-icon"]}>
                            <i className="fas fa-pepper-hot"></i>
                        </div>
                        <h3>Authentic Andhra Taste</h3>
                        <p>Age-old recipes, handcrafted podis, chutneys, sambar & more.</p>
                    </div>

                    <div className={styles["benefit-card"]}>
                        <div className={styles["benefit-icon"]}>
                            <i className="fas fa-fire"></i>
                        </div>
                        <h3>Dosa Experts</h3>
                        <p>Perfect crispiness, balanced masalas, iconic flavors.</p>
                    </div>

                    <div className={styles["benefit-card"]}>
                        <div className={styles["benefit-icon"]}>
                            <i className="fas fa-bowl-rice"></i>
                        </div>
                        <h3>Wholesome Thalis</h3>
                        <p>A rich variety of dishes served fresh every day.</p>
                    </div>

                    <div className={styles["benefit-card"]}>
                        <div className={styles["benefit-icon"]}>
                            <i className="fas fa-globe-asia"></i>
                        </div>
                        <h3>Indo-Chinese With a Desi Twist</h3>
                        <p>Veg fusion dishes that are flavorful yet comforting.</p>
                    </div>

                    <div className={styles["benefit-card"]}>
                        <div className={styles["benefit-icon"]}>
                            <i className="fas fa-om"></i>
                        </div>
                        <h3>Peaceful, Culture-Inspired Ambience</h3>
                        <p>Reflecting our temple-arch motif and Buddha's tranquility.</p>
                    </div>
                </div>

                {/* Customer Counter */}
                {/* <div className={styles["customer-counter"]}>
                    <div className={styles["counter-item"]}>
                        <div className={styles["counter-number"]} data-target="4.8">0</div>
                        <div className={styles["counter-label"]}>⭐ Google Rating</div>
                    </div>
                    <div className={styles["counter-item"]}>
                        <div className={styles["counter-number"]} data-target="10000">0</div>
                        <div className={styles["counter-label"]}>🥣 Thalis Served</div>
                    </div>
                    <div className={styles["counter-item"]}>
                        <div className={styles["counter-number"]} data-target="50">0</div>
                        <div className={styles["counter-label"]}>🥞 Dosa Varieties</div>
                    </div>
                </div> */}
            </div>
        </section>

        {/* Reviews Section */}
        {/* <section className={styles["reviews-section"]}>
            <div className={styles["container"]}>
                <div className={styles["section-header"]}>
                    <h2 className={styles["section-title"]}>What Our Guests Say</h2>
                </div>

                <div className={styles["reviews-container"]}>
                    <div className={styles["review-card"]}>
                        <div className={styles["review-stars"]}>⭐⭐⭐⭐⭐</div>
                        <p className={styles["review-text"]}>"One of the best pure veg dosas in town — crispy, authentic and flavorful."</p>
                        <div className={styles["review-author"]}>- Priya M.</div>
                    </div>

                    <div className={styles["review-card"]}>
                        <div className={styles["review-stars"]}>⭐⭐⭐⭐⭐</div>
                        <p className={styles["review-text"]}>"The thali is heavenly! So many varieties and everything tastes homemade."</p>
                        <div className={styles["review-author"]}>- Rahul K.</div>
                    </div>

                    <div className={styles["review-card"]}>
                        <div className={styles["review-stars"]}>⭐⭐⭐⭐⭐</div>
                        <p className={styles["review-text"]}>"Loved the Indo-Chinese dishes — perfect balance of spice and flavor."</p>
                        <div className={styles["review-author"]}>- Anjali S.</div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* Order/Reserve Section */}
        <section id="ordering" className={styles["order-section"]}>
            <div className={styles["container"]}>
                <div className={styles["section-header"]}>
                    <h2 className={styles["section-title"]}>Dine-In, Takeaway or Delivery — Choose Your Experience</h2>
                    {/* <p className={styles["section-subtitle"]}>
                        Whether you're craving a quick dosa, a comforting thali, or a fusion Indo-Chinese treat, Amaravathi Authentics ensures purity, freshness, and the taste of tradition in every bite.
                    </p> */}
                </div>

                <div className={styles["conversion-dock"]}>
                    <a href="/amaravathi/reserve" className={styles["conversion-btn"]}>
                        <i className="fas fa-calendar-alt"></i>
                        <span className={styles["btn-text"]}>Reserve a Table</span>
                        <span className={styles["btn-subtitle"]}>Book your dining experience</span>
                    </a>
                    <a href="https://zomato.com" target="_blank" rel="noreferrer" className={styles["conversion-btn"]}>
                        <i className="fas fa-shopping-bag"></i>
                        <span className={styles["btn-text"]}>Order Online</span>
                        <span className={styles["btn-subtitle"]}>Zomato / Swiggy</span>
                    </a>
                    <a href="tel:+1234567890" className={styles["conversion-btn"]}>
                        <i className="fas fa-phone-alt"></i>
                        <span className={styles["btn-text"]}>Call for Takeaway</span>
                        <span className={styles["btn-subtitle"]}>Quick & convenient</span>
                    </a>
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className={styles["final-cta-section"]}>
            <div className={styles["temple-arch-glow-large"]}></div>
            <div className={styles["container"]}>
                <h2 className={styles["final-cta-title"]}>Come, Enjoy the Pure Veg Taste of Tradition</h2>
                <p className={styles["final-cta-subtitle"]}>
                    At Amaravathi Authentics, vegetarian food isn't just a choice — it's a celebration of culture, purity, and timeless taste.
                </p>
                <a href="/amaravathi/reserve" className={styles["final-cta-btn"]}>
                    <i className="fas fa-heart"></i>
                    Experience Amaravathi Today
                </a>
            </div>
            <div className={styles["leaf-particles-bottom"]} id="leafParticlesBottom"></div>
        </section>
    </Fragment >
}

export default Home