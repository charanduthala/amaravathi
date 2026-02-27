import { Fragment } from "react/jsx-runtime";
import styles from "./Catering.module.css"

function Catering() {
    return <Fragment>
        {/* Hero Section */}
        <section className={`${styles['hero-section']} ${styles['text-tertiary']} py-20 px-4 relative z-10`}>
            <div className="max-w-6xl mx-auto text-center mt-[5rem]">
                <div className="mb-6">
                    <span className={`${styles['bg-secondary']} text-white px-6 py-2 rounded-full text-sm font-semibold inline-block`}>
                        🌿 100% Pure Vegetarian • Traditional Recipes • Premium Service
                    </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Authentic Pure Vegetarian<br />South Indian Catering Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                    At Amaravathi Authentics, catering is more than food — it is tradition served with devotion.
                </p>
                <p className="text-lg mb-10 opacity-80 max-w-4xl mx-auto">
                    We bring the essence of temple-style South Indian hospitality to your weddings, housewarmings, corporate events, poojas, birthdays, and cultural celebrations. Every dish is prepared with purity, authenticity, and uncompromising quality.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#quote" className={styles["cta-button"]}>
                        <i className="fas fa-calendar-check"></i>
                        Get Custom Quote
                    </a>
                    <a href="tel:+1234567890" className={styles["cta-button"]}>
                        <i className="fas fa-phone-alt"></i>
                        Call Catering Manager
                    </a>
                </div>
            </div>
        </section>

        {/* Key Features Section  */}
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* 100% Pure Vegetarian */}
                    <div className={`${styles['feature-card']} bg-white p-8 rounded-2xl`}>
                        <div className={`${styles['icon-box']} mx-auto`}>
                            <i className="fas fa-leaf"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4 text-center">100% Pure Vegetarian</h3>
                        <p className="text-gray-700 leading-relaxed text-center">
                            We follow strict vegetarian preparation methods. No cross-contamination. Sattvic (no onion & garlic) options available on request.
                        </p>
                    </div>

                    {/* Traditional Banana Leaf Service */}
                    <div className={`${styles['feature-card']} bg-white p-8 rounded-2xl`}>
                        <div className={`${styles['icon-box']} mx-auto`}>
                            <i className="fas fa-utensils"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4 text-center">Traditional Banana Leaf Service</h3>
                        <p className="text-gray-700 leading-relaxed text-center">
                            Experience authentic South Indian meals served on fresh banana leaves, just like in traditional ceremonies.
                        </p>
                    </div>

                    {/* Custom Menu Planning */}
                    <div className={`${styles['feature-card']} bg-white p-8 rounded-2xl`}>
                        <div className={`${styles['icon-box']} mx-auto`}>
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4 text-center">Custom Menu Planning</h3>
                        <p className="text-gray-700 leading-relaxed text-center mb-4">
                            Every event is unique. We curate menus based on:
                        </p>
                        <ul className="text-gray-700 text-left space-y-2">
                            <li><i className="fas fa-check text-secondary mr-2"></i>Guest count</li>
                            <li><i className="fas fa-check text-secondary mr-2"></i>Event type</li>
                            <li><i className="fas fa-check text-secondary mr-2"></i>Regional preference</li>
                            <li><i className="fas fa-check text-secondary mr-2"></i>Spice tolerance</li>
                            <li><i className="fas fa-check text-secondary mr-2"></i>Budget</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Premium Food Images Section */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className={`${styles['section-title']} text-4xl font-bold mb-12 text-center block`}>Our Signature Offerings</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Andhra Thali */}
                    <div className="text-center">
                        <div className={`${styles['food-image']} mb-4`}>
                            <img src="https://sspark.genspark.ai/cfimages?u1=qOnuVgnLzN3EtdEHNZH%2FeuoN0rei%2BLNuDmyWYMWYM72WFOTVRFiTMbcgrgenxsWv4ME6XUwIwj8ruOqAj5lYJnVz6iJu8WlQF%2FrmYdFOySVS2mLWLSzpiqh%2BBuklzVtudHg1ConbAhBM8TnyfR%2B3dbH165JXBtWFtUdQSxUOgpWyQ2n5wyUJVHGF1dMe1t8Kkw5Lo%2BGvQYcGQHN6gxIopgE7WKG3C2g%2Bxdk0RaQORiINxw%3D%3D&u2=mrL7L5qU%2FmlIPaMQ&width=2560"
                                alt="Traditional Andhra Thali on Banana Leaf"
                                className="w-full h-80 object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Andhra Thali</h3>
                        <p className="text-gray-600">Complete traditional meal served on banana leaf with authentic Andhra flavors</p>
                    </div>

                    {/* Masala Dosa */}
                    <div className="text-center">
                        <div className={`${styles['food-image']} mb-4`}>
                            <img src="https://sspark.genspark.ai/cfimages?u1=tbgU2ignSJzszMr9anHrONac9PZgzKUeMAkPmPS4277isH%2FXeIFfu%2BMaNrFUuvn0A3eJRJty%2Fy%2FFbf6pWeIi946zLpzc9p%2BS7AzeyF9OZMM644chZuOUEGQqWeZtnciyhh%2B3FyFldQ%3D%3D&u2=g59mXAW5d6va1ozq&width=2560"
                                alt="Crispy Masala Dosa with Sambar and Chutney"
                                className="w-full h-80 object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Crispy Dosas</h3>
                        <p className="text-gray-600">Golden crispy dosas with authentic potato masala, sambar, and assorted chutneys</p>
                    </div>

                    {/* Indo-Chinese */}
                    <div className="text-center">
                        <div className={`${styles['food-image']} mb-4`}>
                            <img src="https://sspark.genspark.ai/cfimages?u1=WbiUmb2xL7vyUvr3VDCpicau%2FUUkbIviPFUbTABvelcVxypmc4yR2493uipHr1XSf%2FRObJtlvict4QyxerKUZ7DGGgxtIQ%2BcweyppYTs77jZvJN9pF%2FbplTLPjhGRrHG3g%3D%3D&u2=3QTS3puNpEH99xFB&width=2560"
                                alt="Vegetarian Indo-Chinese Platter"
                                className="w-full h-80 object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Indo-Chinese Delights</h3>
                        <p className="text-gray-600">Manchurian, fried rice, hakka noodles - perfect fusion flavors for any celebration</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Catering for Every Occasion */}
        <section class="py-16 px-4">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold section-title mb-12 text-center block">Catering for Every Occasion</h2>

                <div class="grid md:grid-cols-2 gap-8">
                    {/* Weddings */}
                    <div class="bg-white p-8 rounded-2xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="text-4xl text-secondary"><i class="fas fa-rings-wedding"></i></div>
                            <div>
                                <h3 class="text-2xl font-bold text-primary mb-3">Weddings & Receptions</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Celebrate your big day with a grand traditional feast served with elegance and warmth.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Gruhapravesam & Poojas */}
                    <div class="bg-white p-8 rounded-2xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="text-4xl text-secondary"><i class="fas fa-om"></i></div>
                            <div>
                                <h3 class="text-2xl font-bold text-primary mb-3">Gruhapravesam & Poojas</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Sacred sattvic menus prepared with purity and devotion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Corporate Catering */}
                    <div class="bg-white p-8 rounded-2xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="text-4xl text-secondary"><i class="fas fa-building"></i></div>
                            <div>
                                <h3 class="text-2xl font-bold text-primary mb-3">Corporate Catering</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Professional buffet setups, executive thalis, live counters, and hygienic packed lunch boxes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Birthday & Anniversary */}
                    <div class="bg-white p-8 rounded-2xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="text-4xl text-secondary"><i class="fas fa-birthday-cake"></i></div>
                            <div>
                                <h3 class="text-2xl font-bold text-primary mb-3">Birthday & Anniversary Celebrations</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Buffet or seated dining options customized for intimate or grand celebrations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Our Catering Process */}
        <section class="py-16 px-4 bg-white">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl font-bold section-title mb-12 text-center block">Our Catering Process</h2>

                <div class="space-y-8">
                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            1
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold text-primary mb-2">Inquiry & Consultation</h3>
                            <p class="text-gray-700 leading-relaxed">
                                Share your event details, guest count, and preferences with our catering team.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            2
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold text-primary mb-2">Menu Discussion & Customization</h3>
                            <p class="text-gray-700 leading-relaxed">
                                We create a personalized menu tailored to your taste, tradition, and budget.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            3
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold text-primary mb-2">Event Planning & Setup</h3>
                            <p class="text-gray-700 leading-relaxed">
                                Our team coordinates all logistics, from setup to service arrangements.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            4
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold text-primary mb-2">Seamless Execution & Clean Wrap-Up</h3>
                            <p class="text-gray-700 leading-relaxed">
                                Enjoy flawless service on event day with complete post-event cleanup.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Hygiene & Quality Promise */}
        <section class="py-16 px-4">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold section-title mb-12 text-center block">Hygiene & Quality Promise</h2>

                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-md text-center">
                        <div class="text-4xl mb-4 text-secondary"><i class="fas fa-seedling"></i></div>
                        <p class="text-gray-700 font-semibold">Fresh ingredients sourced daily</p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-md text-center">
                        <div class="text-4xl mb-4 text-secondary"><i class="fas fa-tint"></i></div>
                        <p class="text-gray-700 font-semibold">RO purified water</p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-md text-center">
                        <div class="text-4xl mb-4 text-secondary"><i class="fas fa-certificate"></i></div>
                        <p class="text-gray-700 font-semibold">FSSAI compliant kitchen</p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-md text-center">
                        <div class="text-4xl mb-4 text-secondary"><i class="fas fa-hands-wash"></i></div>
                        <p class="text-gray-700 font-semibold">Staff with gloves & caps</p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-md text-center">
                        <div class="text-4xl mb-4 text-secondary"><i class="fas fa-thermometer-half"></i></div>
                        <p class="text-gray-700 font-semibold">Temperature-controlled transport</p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-md text-center">
                        <div class="text-4xl mb-4 text-secondary"><i class="fas fa-clock"></i></div>
                        <p class="text-gray-700 font-semibold">On-time delivery guarantee</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Request Quote Section */}
        <section id="quote" class="py-20 px-4 bg-primary text-tertiary">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl md:text-5xl font-bold mb-6">Request a Catering Quote</h2>
                <p class="text-xl mb-10 opacity-90">
                    Let us make your celebration a sacred culinary experience.
                </p>

                <div class="bg-white rounded-2xl p-8 md:p-12 text-left">
                    <form class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-primary font-semibold mb-2">Your Name *</label>
                                <input type="text" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary outline-none" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label class="block text-primary font-semibold mb-2">Phone Number *</label>
                                <input type="tel" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary outline-none" placeholder="Enter phone number" />
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-primary font-semibold mb-2">Email Address *</label>
                                <input type="email" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary outline-none" placeholder="Enter email" />
                            </div>
                            <div>
                                <label class="block text-primary font-semibold mb-2">Event Date *</label>
                                <input type="date" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary outline-none" />
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-primary font-semibold mb-2">Event Type *</label>
                                <select required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary outline-none">
                                    <option value="">Select event type</option>
                                    <option value="wedding">Wedding & Reception</option>
                                    <option value="pooja">Gruhapravesam & Pooja</option>
                                    <option value="corporate">Corporate Event</option>
                                    <option value="birthday">Birthday/Anniversary</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-primary font-semibold mb-2">Guest Count *</label>
                                <input type="number" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary outline-none" placeholder="Expected guests" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-primary font-semibold mb-2">Special Requirements</label>
                            <textarea rows="4" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary outline-none" placeholder="Any dietary preferences, specific dishes, or special requests..."></textarea>
                        </div>

                        <div class="text-center pt-4">
                            <button type="submit" class="cta-button text-lg">
                                <i class="fas fa-paper-plane"></i>
                                Submit Quote Request
                            </button>
                        </div>
                    </form>
                </div>

                <div class="mt-12 pt-8 border-t border-tertiary/30">
                    <p class="text-lg mb-6">Prefer to talk directly? Call our catering manager</p>
                    <a href="tel:+1234567890" class="cta-button text-lg">
                        <i class="fas fa-phone-alt"></i>
                        +1 (234) 567-890
                    </a>
                </div>
            </div>
        </section>
    </Fragment>
}

export default Catering