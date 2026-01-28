import { Fragment } from "react/jsx-runtime";
import styles from "./About.module.css"
import { useEffect } from "react";

function About() {

    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible); // important
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(`
    .${styles["fade-in-up"]},
    .${styles["story-block"]},
    .${styles["timeline-item"]},
    .${styles["philosophy-card"]},
    .${styles["chef-card"]},
    .${styles["promise-card"]},
    .${styles["testimonial-card"]},
    .${styles["event-card"]},
    .${styles["fact-bubble"]},
    .${styles["satvik-point"]}
  `);

        elements.forEach(el => fadeInObserver.observe(el));

        return () => fadeInObserver.disconnect();
    }, []);

    return <Fragment>
        <section className={styles["hero-section"]} id="hero">
            <div className={styles["hero-background"]}>
                <div className={`${styles['parallax-layer']} ${styles['layer-1']}`}></div>
                <div className={`${styles['parallax-layer']} ${styles['layer-2']}`}></div>
                <div className={`${styles['parallax-layer']} ${styles['layer-3']}`}></div>
                <div className={styles["smoke-overlay"]}></div>
            </div>
            <div className={styles["hero-content"]}>
                <div className={styles["hero-ornament top"]}>✦</div>
                <h1 className={`${styles['hero-title']} ${styles['animate-reveal']}`}>
                    <span className={styles["title-line"]}>A Living Heritage:</span>
                    <span className={styles["title-line"]}>The Genesis of</span>
                    <span className={styles["title-highlight"]}>Annam Brahma</span>
                </h1>
                <p className={styles["hero-subtitle"]}>(अन्नं ब्रह्म - Food is God)</p>
                <div className={`${styles['hero-ornament']} ${styles['bottom']}`}>⚘</div>
            </div>
            <div className={styles["scroll-indicator"]}>
                <span>Scroll to Begin Your Journey</span>
                <div className={styles["scroll-arrow"]}>↓</div>
            </div>
        </section>

        {/* Storytelling Journey */}
        <section className={styles["story-section"]} id="story">
            <div className={`${styles["section-divider"]} ${styles["arch-top"]}`}></div>

            <div className={styles["story-container"]}>
                <div className={`${styles['story-block']} ${styles['fade-in-up']}`}>
                    <div className={styles["story-icon"]}>🕉️</div>
                    <h2 className={styles["section-title"]}>Welcome to a Sanctuary of Sacred Taste</h2>
                    <p className={styles["story-text"]}>
                        Welcome not just to a restaurant, but to a <span className={styles["highlight-term"]} data-meaning="Sacred Promise">sanctuary</span> built on a sacred promise. Amaravathi Authentics is the custodian of the untouched, uncompromised legacy of pure vegetarian South Indian cuisine.
                    </p>
                </div>

                <div className={`${styles['story-block']} ${styles['fade-in-up']}`}>
                    <div className={styles["story-icon"]}>🪷</div>
                    <h3 className={styles["story-subtitle"]}>The Eternal Place</h3>
                    <p className={styles["story-text"]}>
                        Our inspiration flows from the spiritual pulse of ancient Amaravathi, where life was guided by the principle of <span className={styles["highlight-term"]} data-meaning="Pure, wholesome food that nourishes body, mind, and spirit">Satvik Bhōjana</span>—food that nourishes the body, calms the mind, and uplifts the spirit.
                    </p>
                    <p className={styles["story-text"]}>
                        This is where food was a ritual, kindness was an ingredient, and the kitchen was a temple. We don't just cook; we practice <span className={styles["highlight-term"]} data-meaning="Sacred Hospitality">Ātithya</span>.
                    </p>
                </div>

                <div className={styles["poetic-cards"]}>
                    <div className={`${styles['poetic-card']} ${styles['imagine']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon"]}>💭</div>
                        <h4>Imagine</h4>
                        <p>The secret wisdom of grandmothers' recipes whispering through the steam of today's plate.</p>
                        <div className={styles["card-image-overlay"]}></div>
                    </div>
                    <div className={`${styles['poetic-card']} ${styles['feel']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon"]}>❤️</div>
                        <h4>Feel</h4>
                        <p>The stories of the spice routes unfolding on your tongue.</p>
                        <div className={styles["card-image-overlay"]}></div>
                    </div>
                    <div className={`${styles['poetic-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon"]}>🙏</div>
                        <h4>Know</h4>
                        <p>That every bite is a homecoming.</p>
                        <div className={styles["card-image-overlay"]}></div>
                    </div>
                </div>
            </div>

            <div className={`${styles['section-divider']} ${styles['arch-bottom']}`}></div>
        </section>

        {/* Heritage Timeline */}
        <section className={styles["timeline-section"]} id="heritage">
            <div className={styles["timeline-container"]}>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>Our Heritage Timeline</h2>
                <div className={styles["timeline-vertical"]}>
                    <div className={`${styles['timeline-item']} ${styles['fade-in-up']}`}>
                        <div className={styles["timeline-dot"]}></div>
                        <div className={styles["timeline-content"]}>
                            <div className={styles["timeline-icon"]}>🛕</div>
                            <h3>Origins of Amaravathi</h3>
                            <p>The ancient cultural capital where vegetarian traditions flourished for millennia</p>
                        </div>
                    </div>
                    <div className={`${styles['timeline-item']} ${styles['fade-in-up']}`}>
                        <div className={styles["timeline-dot"]}></div>
                        <div className={styles["timeline-content"]}>
                            <div className={styles["timeline-icon"]}>🧘</div>
                            <h3>Satvik Philosophy</h3>
                            <p>The foundation of pure, mindful eating that balances body and spirit</p>
                        </div>
                    </div>
                    <div className={`${styles['timeline-item']} ${styles['fade-in-up']}`}>
                        <div className={styles["timeline-dot"]}></div>
                        <div className={styles["timeline-content"]}>
                            <div className={styles["timeline-icon"]}>👵</div>
                            <h3>Family Recipes</h3>
                            <p>Grandmother's secret wisdom passed down through generations</p>
                        </div>
                    </div>
                    <div className={`${styles["timeline-item"]} ${styles["fade-in-up"]}`}>
                        <div className={styles["timeline-dot"]}></div>
                        <div className={styles["timeline-content"]}>
                            <div className={styles["timeline-icon"]}>🏛️</div>
                            <h3>Amaravathi Authentics</h3>
                            <p>Our doors open to share this timeless heritage with you</p>
                        </div>
                    </div>
                    <div className={`${styles['timeline-item']} ${styles['fade-in-up']}`}>
                        <div className={styles["timeline-dot"]}></div>
                        <div className={styles["timeline-content"]}>
                            <div className={styles["timeline-icon"]}>🎉</div>
                            <h3>Cultural Celebrations</h3>
                            <p>Monthly festival feasts, cooking demonstrations, and recipe storytelling</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Philosophy Grid */}
        <section className={styles["philosophy-section"]} id="philosophy">
            <div className={styles["philosophy-container"]}>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>The Amaravathi Philosophy</h2>
                <div className={styles["philosophy-grid"]}>
                    <div className={`${styles['philosophy-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon-circle"]}>
                            <span className={styles["icon"]}>🌱</span>
                        </div>
                        <h3>Pure Vegetarian</h3>
                        <p className={styles["sanskrit-term"]} data-meaning="Free from meat, eggs, and animal products">Śudh Śākāhāra</p>
                        <p>100% vegetarian kitchen with no compromise on purity</p>
                    </div>
                    <div className={`${styles['philosophy-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon-circle"]}>
                            <span className={styles["icon"]}>🕉️</span>
                        </div>
                        <h3>Satvik</h3>
                        <p className={styles["sanskrit-term"]} data-meaning="Pure, balanced, and elevating">Sāttvika Bhojana</p>
                        <p>Food that nourishes body, calms mind, and uplifts spirit</p>
                    </div>
                    <div className={`${styles['philosophy-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon-circle"]}>
                            <span className={styles["icon"]}>🙏</span>
                        </div>
                        <h3>Annam Brahma</h3>
                        <p className={styles["sanskrit-term"]} data-meaning="Food is God - divine offering">अन्नं ब्रह्म</p>
                        <p>Every meal is a sacred offering, prepared with reverence</p>
                    </div>
                    <div className={`${styles['philosophy-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon-circle"]}>
                            <span className={styles["icon"]}>🤝</span>
                        </div>
                        <h3>Ātithya</h3>
                        <p className={styles["sanskrit-term"]} data-meaning="Sacred hospitality - guest is God">अतिथि देवो भव</p>
                        <p>You are not a customer, you are family</p>
                    </div>
                    <div className={`${styles['philosophy-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon-circle"]}>
                            <span className={styles["icon"]}>📜</span>
                        </div>
                        <h3>Culinary Heritage</h3>
                        <p className={styles["sanskrit-term"]} data-meaning="Eternal, timeless tradition">Sanātana Paramparā</p>
                        <p>Recipes unchanged for generations, taste eternal</p>
                    </div>
                    <div className={`${styles['philosophy-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["card-icon-circle"]}>
                            <span className={styles["icon"]}>🍃</span>
                        </div>
                        <h3>Purity</h3>
                        <p className={styles["sanskrit-term"]} data-meaning="Absolute cleanliness of intention">Śuddhatā</p>
                        <p>Pure ingredients, pure intention, pure experience</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Chef Showcase */}
        <section className={styles["chef-section"]} id="chefs">
            <div className={`${styles['section-divider']} ${styles['arch-top']}`}></div>
            <div className={styles["chef-container"]}>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>Master Chefs from the Heartland</h2>
                <p className={styles["section-description"]}>Our culinary artists bring authentic regional mastery</p>

                <div className={styles["chef-grid"]}>
                    <div className={`${styles['chef-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["chef-image"]}>
                            <div className={styles["chef-placeholder"]}>👨‍🍳</div>
                            <div className={`${styles['chef-badge']} ${styles['andhra']}`}>Andhra</div>
                        </div>
                        <div className={styles["chef-info"]}>
                            <h3>Chef Ramakrishna</h3>
                            <p className={styles["chef-quote"]}>"Every dosa must sing before it reaches the plate"</p>
                            <div className={styles["chef-skills"]}>
                                <span className={styles["skill-tag"]}>Dosa Mastery</span>
                                <span className={styles["skill-tag"]}>Andhra Spices</span>
                                <span className={styles["skill-tag"]}>Traditional Tiffin</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['chef-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["chef-image"]}>
                            <div className={styles["chef-placeholder"]}>👨‍🍳</div>
                            <div className={`${styles['chef-badge']} ${styles['tamil']}`}>Tamil Nadu</div>
                        </div>
                        <div className={styles["chef-info"]}>
                            <h3>Chef Murugan</h3>
                            <p className={styles["chef-quote"]}>"The sambar pot holds the soul of our ancestors"</p>
                            <div className={styles["chef-skills"]}>
                                <span className={styles["skill-tag"]}>Sambar Specialist</span>
                                <span className={styles["skill-tag"]}>Rasam Expert</span>
                                <span className={styles["skill-tag"]}>Thali Craft</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['chef-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["chef-image"]}>
                            <div className={styles["chef-placeholder"]}>👩‍🍳</div>
                            <div className={`${styles['chef-badge']} ${styles['andhra']}`}>Andhra</div>
                        </div>
                        <div className={styles["chef-info"]}>
                            <h3>Chef Lakshmi</h3>
                            <p className={styles["chef-quote"]}>"Sweetness is not sugar, it is the love we stir in"</p>
                            <div className={styles["chef-skills"]}>
                                <span className={styles["skill-tag"]}>Festival Sweets</span>
                                <span className={styles["skill-tag"]}>Halwa Artisan</span>
                                <span className={styles["skill-tag"]}>Traditional Desserts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles['section-divider']} ${styles['arch-bottom']}`}></div>
        </section>

        {/* Ingredients Experience */}
        <section className={styles["ingredients-section"]}>
            <div className={styles["ingredients-container"]}>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>Ingredients of Purity</h2>
                <p className={styles["section-description"]}>Hover to discover the story behind each ingredient</p>

                <div className={styles["ingredients-grid"]}>
                    <div className={styles["ingredient-item"]} data-ingredient="curry-leaves">
                        <div className={styles["ingredient-icon"]}>🍃</div>
                        <span className={styles["ingredient-name"]}>Curry Leaves</span>
                        <div className={styles["ingredient-details"]}>
                            <p><strong>Origin:</strong> Fresh from South Indian farms</p>
                            <p><strong>Benefits:</strong> Digestive aid, rich in antioxidants</p>
                            <p><strong>Tradition:</strong> Sacred tempering for every curry</p>
                        </div>
                    </div>
                    <div className={styles["ingredient-item"]} data-ingredient="red-chili">
                        <div className={styles["ingredient-icon"]}>🌶️</div>
                        <span className={styles["ingredient-name"]}>Red Chilies</span>
                        <div className={styles["ingredient-details"]}>
                            <p><strong>Origin:</strong> Guntur, Andhra Pradesh</p>
                            <p><strong>Benefits:</strong> Metabolism booster, vitamin C</p>
                            <p><strong>Tradition:</strong> The fire of Andhra cuisine</p>
                        </div>
                    </div>
                    <div className={styles["ingredient-item"]} data-ingredient="lentils">
                        <div className={styles["ingredient-icon"]}>🫘</div>
                        <span className={styles["ingredient-name"]}>Lentils</span>
                        <div className={styles["ingredient-details"]}>
                            <p><strong>Origin:</strong> Organic farms</p>
                            <p><strong>Benefits:</strong> Protein-rich, heart healthy</p>
                            <p><strong>Tradition:</strong> Base of every dal and sambar</p>
                        </div>
                    </div>
                    <div className={styles["ingredient-item"]} data-ingredient="tamarind">
                        <div className={styles["ingredient-icon"]}>🍂</div>
                        <span className={styles["ingredient-name"]}>Tamarind</span>
                        <div className={styles["ingredient-details"]}>
                            <p><strong>Origin:</strong> Tamil Nadu groves</p>
                            <p><strong>Benefits:</strong> Digestive tonic, vitamin B</p>
                            <p><strong>Tradition:</strong> Soul of rasam and sambar</p>
                        </div>
                    </div>
                    <div className={styles["ingredient-item"]} data-ingredient="coconut">
                        <div className={styles["ingredient-icon"]}>🥥</div>
                        <span className={styles["ingredient-name"]}>Coconut</span>
                        <div className={styles["ingredient-details"]}>
                            <p><strong>Origin:</strong> Fresh coastal harvest</p>
                            <p><strong>Benefits:</strong> Healthy fats, hydrating</p>
                            <p><strong>Tradition:</strong> Essential for chutneys</p>
                        </div>
                    </div>
                    <div className={styles["ingredient-item"]} data-ingredient="rice">
                        <div className={styles["ingredient-icon"]}>🌾</div>
                        <span className={styles["ingredient-name"]}>Rice</span>
                        <div className={styles["ingredient-details"]}>
                            <p><strong>Origin:</strong> Premium sona masuri</p>
                            <p><strong>Benefits:</strong> Energy, easy to digest</p>
                            <p><strong>Tradition:</strong> Heart of every meal</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Satvik Explanation */}
        <section className={styles["satvik-section"]}>
            <div className={styles["satvik-container"]}>
                <div className={styles["satvik-content"]}>
                    <div className={styles["satvik-icon"]}>🧘‍♂️</div>
                    <h2 className={styles["section-title"]}>What is Satvik?</h2>
                    <div className={styles["satvik-explanation"]}>
                        <div className={`${styles['satvik-point']} ${styles['fade-in-up']}`}>
                            <div className={styles["point-icon"]}>✨</div>
                            <div className={styles["point-content"]}>
                                <h3>Pure & Natural</h3>
                                <p>Food prepared with fresh, seasonal, natural ingredients - no preservatives, no artificial additives</p>
                            </div>
                        </div>
                        <div className={`${styles['satvik-point']} ${styles['fade-in-up']}`}>
                            <div className={styles["point-icon"]}>🧠</div>
                            <div className={styles["point-content"]}>
                                <h3>Mind & Body Balance</h3>
                                <p>Nourishes not just the body but calms the mind and elevates consciousness</p>
                            </div>
                        </div>
                        <div className={`${styles['satvik-point']} ${styles['fade-in-up']}`}>
                            <div className={styles["point-icon"]}>🚫</div>
                            <div className={styles["point-content"]}>
                                <h3>No Onion or Garlic</h3>
                                <p>In our Satvik menu, we exclude onion and garlic as they are believed to increase heat and disturb mental clarity</p>
                            </div>
                        </div>
                        <div className={`${styles['satvik-point']} ${styles['fade-in-up']}`}>
                            <div className={styles["point-icon"]}>💚</div>
                            <div className={styles["point-content"]}>
                                <h3>Healing Properties</h3>
                                <p>Satvik meals improve digestion, boost immunity, and promote overall well-being</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Promise of Purity */}
        <section className={styles["promise-section"]} id="purity">
            <div className={styles["promise-container"]}>
                <div className={styles["purity-seal"]}>
                    <div className={styles["seal-circle"]}>
                        <div className={styles["seal-inner"]}>
                            <span className={styles["seal-icon"]}>✓</span>
                            <span className={styles["seal-text"]}>Our Sacred Promise</span>
                        </div>
                    </div>
                </div>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>The Amaravathi Oath</h2>
                <div className={styles["oath-content"]}>
                    <p className={`${styles['oath-text']} ${styles['sanskrit']}`}>"सत्यं वद । धर्मं चर"</p>
                    <p className={styles["oath-translation"]}>Speak Truth. Follow Righteousness.</p>
                    <div className={styles["promise-grid"]}>
                        <div className={`${styles['promise-card']} ${styles['fade-in-up']}`}>
                            <div className={styles["promise-icon"]}>🌱</div>
                            <h3>100% Vegetarian</h3>
                            <p>No meat, no eggs, no compromise. Our kitchen is a pure vegetarian sanctuary.</p>
                        </div>
                        <div className={`${styles['promise-card']} ${styles['fade-in-up']}`}>
                            <div className={styles["promise-icon"]}>🌾</div>
                            <h3>Farm-Fresh Daily</h3>
                            <p>We hand-select fresh, seasonal produce every morning from trusted local farms.</p>
                        </div>
                        <div className={`${styles['promise-card']} ${styles['fade-in-up']}`}>
                            <div className={styles["promise-icon"]}>👵</div>
                            <h3>Generational Recipes</h3>
                            <p>Every dish follows the exact recipe passed down through generations - unchanged, authentic.</p>
                        </div>
                        <div className={`${styles['promise-card']} ${styles['fade-in-up']}`}>
                            <div className={styles["promise-icon"]}>🚫</div>
                            <h3>No Shortcuts</h3>
                            <p>No preservatives, no artificial colors, no flavor enhancers. Only pure, honest cooking.</p>
                        </div>
                        <div className={`${styles['promise-card']} ${styles['fade-in-up']}`}>
                            <div className={styles["promise-icon"]}>🙏</div>
                            <h3>Prepared with Love</h3>
                            <p>Each meal is cooked with reverence, intention, and care - like a sacred offering.</p>
                        </div>
                        <div className={`${styles['promise-card']} ${styles['fade-in-up']}`}>
                            <div className={styles["promise-icon"]}>🕉️</div>
                            <h3>Sanātana Taste</h3>
                            <p>The eternal, timeless flavors of authentic South Indian cuisine preserved in every bite.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className={styles["testimonials-section"]}>
            <div className={styles["testimonials-container"]}>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>What Our Guests Say</h2>
                <div className={styles["testimonials-grid"]}>
                    <div className={`${styles['testimonial-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["quote-icon"]}>"</div>
                        <p className={styles["testimonial-text"]}>The most authentic, original Andhra meal I've had outside my mother's kitchen. This is pure nostalgia on a plate! A true Prasadam.</p>
                        <div className={styles["testimonial-author"]}>
                            <div className={styles["author-avatar"]}>P</div>
                            <div className={styles["author-info"]}>
                                <h4>Priya S.</h4>
                                <div className={styles["stars"]}>⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['testimonial-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["quote-icon"]}>"</div>
                        <p className={styles["testimonial-text"]}>Not just a meal—a mindful pause. The Satvik Thali cleansed my senses and rejuvenated my spirit. It felt like a meditation in flavour.</p>
                        <div className={styles["testimonial-author"]}>
                            <div className={styles["author-avatar"]}>A</div>
                            <div className={styles["author-info"]}>
                                <h4>Arvind M.</h4>
                                <div className={styles["stars"]}>⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['testimonial-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["quote-icon"]}>"</div>
                        <p className={styles["testimonial-text"]}>Their dosas are legendary. Crisp, golden, buttery, and utterly unforgettable. The chutneys are a masterpiece. Truly FoodieDiaries.com approved!</p>
                        <div className={styles["testimonial-author"]}>
                            <div className={styles["author-avatar"]}>FD</div>
                            <div className={styles["author-info"]}>
                                <h4>The Local Epicure</h4>
                                <div className={styles["badge"]}>FoodieDiaries.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Origin Map */}
        <section className={styles["map-section"]}>
            <div className={styles["map-container"]}>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>Our Culinary Roots</h2>
                <p className={styles["section-description"]}>Discover the regions that inspire our authentic flavors</p>
                <div className={styles["map-interactive"]}>
                    <div className={`${styles['map-region']} ${styles['andhra-region']}`} data-region="andhra">
                        <div className={styles["region-marker"]}>
                            <span className={styles["marker-dot"]}></span>
                            <span className={styles["region-name"]}>Andhra Pradesh</span>
                        </div>
                        <div className={styles["region-info"]}>
                            <h3>Andhra Pradesh</h3>
                            <p>The land of spicy curries, tangy pickles, and bold flavors. Home to Guntur chilies and the legendary Andhra thali.</p>
                            <div className={styles["signature-dishes"]}>
                                <span>Gongura Pachadi</span>
                                <span>Pesarattu</span>
                                <span>Pulihora</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['map-region']} ${styles['tamil-region']}`} data-region="tamil">
                        <div className={styles["region-marker"]}>
                            <span className={styles["marker-dot"]}></span>
                            <span className={styles["region-name"]}>Tamil Nadu</span>
                        </div>
                        <div className={styles["region-info"]}>
                            <h3>Tamil Nadu</h3>
                            <p>The birthplace of filter coffee, crispy dosas, and aromatic sambar. Where every meal is an art form.</p>
                            <div className={styles["signature-dishes"]}>
                                <span>Pongal</span>
                                <span>Rasam</span>
                                <span>Chettinad Curry</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Cultural Calendar */}
        <section className={styles["calendar-section"]}>
            <div className={styles["calendar-container"]}>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>Cultural Experiences</h2>
                <p className={styles["section-description"]}>Join us for special events and celebrations</p>
                <div className={styles["events-slider"]}>
                    <div className={`${styles['event-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["event-icon"]}>🎉</div>
                        <h3>Festival Thali Days</h3>
                        <p>Experience authentic festival meals during Pongal, Ugadi, and Diwali</p>
                        <span className={styles["event-frequency"]}>Monthly</span>
                    </div>
                    <div className={`${styles['event-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["event-icon"]}>👨‍🍳</div>
                        <h3>Live Cooking Demonstrations</h3>
                        <p>Watch our master chefs prepare traditional dishes and learn their secrets</p>
                        <span className={styles["event-frequency"]}>Bi-weekly</span>
                    </div>
                    <div className={`${styles['event-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["event-icon"]}>📖</div>
                        <h3>Recipe Storytelling Sessions</h3>
                        <p>Discover the history and cultural significance behind each dish</p>
                        <span className={styles["event-frequency"]}>Weekly</span>
                    </div>
                    <div className={`${styles['event-card']} ${styles['fade-in-up']}`}>
                        <div className={styles["event-icon"]}>🙏</div>
                        <h3>Prasadam Special Days</h3>
                        <p>Sacred meals prepared with traditional temple-style cooking methods</p>
                        <span className={styles["event-frequency"]}>Monthly</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Did You Know */}
        <section className={styles["fun-facts-section"]}>
            <div className={styles["fun-facts-container"]}>
                <h2 className={`${styles['section-title']} ${styles['centered']}`}>Did You Know?</h2>
                <div className={styles["facts-grid"]}>
                    <div className={`${styles['fact-bubble']} ${styles['fade-in-up']}`}>
                        <div className={styles["bubble-icon"]}>⏰</div>
                        <p>Our idli batter ferments for exactly <strong>12 hours</strong> to achieve the perfect fluffy texture</p>
                    </div>
                    <div className={`${styles['fact-bubble']} ${styles['fade-in-up']}`}>
                        <div className={styles["bubble-icon"]}>🍃</div>
                        <p>Serving on <strong>banana leaf</strong> is auspicious and adds natural nutrients to the food</p>
                    </div>
                    <div className={`${styles['fact-bubble']} ${styles['fade-in-up']}`}>
                        <div className={styles["bubble-icon"]}>🧘</div>
                        <p>Satvik meals originated in <strong>ancient Vedic texts</strong> over 5,000 years ago</p>
                    </div>
                    <div className={`${styles['fact-bubble']} ${styles['fade-in-up']}`}>
                        <div className={styles["bubble-icon"]}>🌶️</div>
                        <p>Guntur chilies used in our kitchen are among the <strong>hottest in the world</strong></p>
                    </div>
                </div>
            </div>
        </section>

        {/* Manifesto Quote */}
        <section className={styles["manifesto-section"]}>
            <div className={styles["manifesto-container"]}>
                <div className={styles["lotus-ornament"]}>🪷</div>
                <blockquote className={styles["manifesto-quote"]}>
                    <p className={styles["sanskrit-quote"]}>"अतिथि देवो भव"</p>
                    <p className={styles["quote-translation"]}>The Guest is God</p>
                </blockquote>
                <p className={styles["manifesto-text"]}>
                    A promise of purity, legacy, and Sanātana taste.<br></br>
                    Where every meal is a memory, and every flavour is eternal.
                </p>
                <div className={styles["lotus-ornament"]}>🪷</div>
            </div>
        </section>

        {/* CTA Section */}
        <section className={styles["cta-section"]}>
            <div className={styles["cta-container"]}>
                <h2 className={styles["cta-title"]}>Your Table Awaits</h2>
                <p className={styles["cta-text"]}>Come. Sit. Feast. Remember.</p>
                <div className={styles["cta-buttons"]}>
                    <a href="/reserve" className={`${styles['cta-button']} ${styles['primary']}`}>Reserve Your Experience</a>
                    <a href="/menu" className={`${styles['cta-button']} ${styles['secondary']}`}>Explore Our Menu</a>
                    <a href="/order" className={`${styles['cta-button']} ${styles['secondary']}`}>Order Online</a>
                </div>
            </div>
        </section>

        {/* Sticky CTA Panel */}
        <div className={styles["sticky-cta"]} id="stickyCta">
            <div className={styles["sticky-cta-content"]}>
                <span className={styles["sticky-cta-text"]}>Experience Amaravathi</span>
                <div className={styles["sticky-cta-buttons"]}>
                    <a href="/menu" className={styles["sticky-btn"]}>Menu</a>
                    <a href="/reserve" className={`${styles['sticky-btn']} ${styles['primary']}`}>Reserve</a>
                    <a href="/order" className={styles["sticky-btn"]}>Order</a>
                </div>
            </div>
        </div>

        {/* Footer */}


        {/* Tooltip for Sanskrit terms */}
        <div className={styles["tooltip"]} id="tooltip"></div>
    </Fragment >
}

export default About