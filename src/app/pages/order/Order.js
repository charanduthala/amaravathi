import { Fragment } from "react/jsx-runtime";

function Order() {
    return <Fragment>
        {/* <div className="min-h-screen" style={{ backgroundColor: '#f7f0e1', paddingTop: '120px' }}> */}
        {/* Navbar - Webapp Style */}
        {/* <div dangerouslySetInnerHTML={{ __html: getNavbarHTML('ordering') }} /> */}

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-12">
            <div className="text-center mb-12 mt-[10.5rem]">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#553122' }}>
                    Authentic Andhra Cuisine
                </h2>
                <p className="text-xl mb-8" style={{ color: '#b78831' }}>
                    Experience the rich flavors of traditional South Indian food
                </p>
                {/* Link to Menu Page */}
                <div className="mb-8">
                    <a href="/amaravathi/menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: '#553122', color: '#f7f0e1' }}>
                        <i className="fas fa-book-open"></i>
                        View Full Menu
                    </a>
                </div>
            </div>

            {/* Order Options - Pickup & Delivery Cards with Icons */}
            {/* Enhanced with Font Awesome icons for better user experience */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Pickup Card - Shopping bag icon for easy recognition */}
                <a href="/pickup" className="block p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: 'white', borderLeft: '8px solid #b78831' }}>
                    <div className="text-center">
                        {/* Shopping bag icon indicates pickup service */}
                        <div className="text-6xl mb-4"><i className="fas fa-shopping-bag" style={{ color: '#b78831' }}></i></div>
                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#553122' }}>
                            Order Pickup
                        </h3>
                        <p className="mb-6" style={{ color: '#b78831' }}>
                            Select outlet, choose items, pick up at your convenience — at ease!
                        </p>
                        <div className="inline-block px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: '#553122', color: '#f7f0e1' }}>
                            Start Pickup Order →
                        </div>
                    </div>
                </a>

                {/* Delivery Card - Motorcycle icon for delivery service */}
                <a href="/delivery" className="block p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: 'white', borderLeft: '8px solid #b78831' }}>
                    <div className="text-center">
                        {/* Motorcycle icon indicates home delivery service */}
                        <div className="text-6xl mb-4"><i className="fas fa-motorcycle" style={{ color: '#b78831' }}></i></div>
                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#553122' }}>
                            Home Delivery
                        </h3>
                        <p className="mb-6" style={{ color: '#b78831' }}>
                            Get fresh food delivered to your doorstep — at ease!
                        </p>
                        <div className="inline-block px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: '#553122', color: '#f7f0e1' }}>
                            Start Delivery Order →
                        </div>
                    </div>
                </a>
            </div>

            {/* Features */}
            <div className="mt-16 grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'white' }}>
                    <div className="text-4xl mb-3">⚡</div>
                    <h4 className="font-bold mb-2" style={{ color: '#553122' }}>Fast Service</h4>
                    <p className="text-sm" style={{ color: '#b78831' }}>Ready in 18-30 mins</p>
                </div>
                <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'white' }}>
                    <div className="text-4xl mb-3">🔥</div>
                    <h4 className="font-bold mb-2" style={{ color: '#553122' }}>Fresh & Hot</h4>
                    <p className="text-sm" style={{ color: '#b78831' }}>Made to order</p>
                </div>
                <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'white' }}>
                    <div className="text-4xl mb-3">✅</div>
                    <h4 className="font-bold mb-2" style={{ color: '#553122' }}>Hygiene First</h4>
                    <p className="text-sm" style={{ color: '#b78831' }}>Safety compliant</p>
                </div>
                <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'white' }}>
                    <div className="text-4xl mb-3">🎯</div>
                    <h4 className="font-bold mb-2" style={{ color: '#553122' }}>Real Tracking</h4>
                    <p className="text-sm" style={{ color: '#b78831' }}>Live updates</p>
                </div>
            </div>

            {/* Menu Preview Section */}
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold mb-2" style={{ color: '#553122' }}>
                        <i className="fas fa-book-open mr-2" style={{ color: '#b78831' }}></i>
                        Explore Our Full Menu
                    </h3>
                    <p className="text-lg" style={{ color: '#b78831' }}>
                        Discover our complete selection of authentic dishes
                    </p>
                </div>
                <div className="text-center">
                    <a href="/amaravathi/menu" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: '#553122', color: '#f7f0e1' }}>
                        <i className="fas fa-utensils"></i>
                        View Complete Menu
                    </a>
                </div>
            </div>
        </main>
        {/* </div> */}
        {/* Navbar functionality script - required for mobile menu and scroll effects */}
        {/* <script src="/static/index.js"></script> */}
    </Fragment>
}

export default Order