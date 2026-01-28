import { Fragment } from "react/jsx-runtime"

function Menu() {
    return <Fragment>
        {/* Loading Screen */}
        <div id="loading" className="fixed inset-0 bg-primary flex items-center justify-center z-50">
            <div className="text-center">
                <div className="loader mb-4"></div>
                <p className="text-tertiary font-display text-xl">Loading Menu...</p>
            </div>
        </div>

        {/* Search Bar (Hidden by default) */}
        <div id="searchBar" className="hidden bg-white shadow-lg py-4 sticky top-[76px] z-30">
            <div className="container mx-auto px-4">
                <div className="relative">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search for dishes, categories..."
                        className="w-full px-4 py-3 pl-12 border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary"></i>
                </div>
                <div id="popularSearches" className="mt-3 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Popular:</span>
                    <button className="search-tag">Dosa</button>
                    <button className="search-tag">Thali</button>
                    <button className="search-tag">Biryani</button>
                    <button className="search-tag">Paneer</button>
                    <button className="search-tag">Manchurian</button>
                </div>
            </div>
        </div>

        {/* Floating Cart Button */}
        <button id="cartBtn" className="fixed bottom-6 right-6 bg-primary text-tertiary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-transform">
            <i className="fas fa-shopping-cart text-xl"></i>
            <span id="cartCount" className="absolute -top-2 -right-2 bg-secondary text-tertiary w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">0</span>
        </button>

        {/* Order Now Button - Link to Ordering Page */}
        <a href="/order" className="fixed bottom-6 right-28 bg-secondary text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-40 hover:scale-110 transition-transform font-semibold">
            <i className="fas fa-shopping-bag"></i>
            <span className="hidden md:inline">Order Now</span>
        </a>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
            {/* Filter Bar */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-8 sticky top-[76px] z-20">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="font-display text-lg font-semibold text-primary">
                        <i className="fas fa-filter mr-2"></i>Filters
                    </h2>
                    <button id="clearFilters" className="text-secondary hover:text-primary text-sm">
                        <i className="fas fa-times mr-1"></i>Clear All
                    </button>
                </div>
                <div className="flex flex-wrap gap-2" id="filterContainer">
                    <button className="filter-btn" data-filter="all">
                        <i className="fas fa-list mr-1"></i>All Items
                    </button>
                    <button className="filter-btn" data-filter="bestseller">
                        <i className="fas fa-star mr-1"></i>Bestseller
                    </button>
                    <button className="filter-btn" data-filter="chef-special">
                        <i className="fas fa-award mr-1"></i>Chef's Special
                    </button>
                    <button className="filter-btn" data-filter="spicy">
                        <i className="fas fa-pepper-hot mr-1"></i>Spicy
                    </button>
                    <button className="filter-btn" data-filter="jain-special">
                        <i className="fas fa-leaf mr-1"></i>Jain Options
                    </button>
                    <button className="filter-btn" data-filter="quick-bites">
                        <i className="fas fa-bolt mr-1"></i>Quick Bites
                    </button>
                    <button className="filter-btn" data-filter="new">
                        <i className="fas fa-sparkles mr-1"></i>New
                    </button>
                </div>
            </div>

            {/* Chef's Recommendations Banner */}
            <div className="bg-gradient-to-r from-secondary to-primary rounded-xl p-6 mb-8 text-tertiary">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    <i className="fas fa-crown mr-2"></i>Chef's Recommendations
                </h2>
                <div id="specialsContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Special items will be loaded here */}
                </div>
            </div>

            {/* Category Navigation (Sticky Sidebar on Desktop) */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Categories */}
                <div className="lg:w-64 lg:sticky lg:top-40 lg:self-start">
                    <div className="bg-white rounded-xl shadow-md p-4">
                        <h3 className="font-display text-lg font-semibold text-primary mb-4">Categories</h3>
                        <nav id="categoryNav" className="space-y-2">
                            {/* Categories will be loaded here */}
                        </nav>
                    </div>
                </div>

                {/* Menu Items Grid */}
                <div className="flex-1">
                    <div id="menuContainer">
                        {/* Menu items will be loaded here by category */}
                    </div>
                </div>
            </div>

            {/* Order Now CTA Section */}
            <div className="mt-12 mb-8 bg-gradient-to-r from-secondary to-primary rounded-xl p-8 text-center text-white shadow-xl">
                <h3 className="font-display text-3xl font-bold mb-4">
                    <i className="fas fa-utensils mr-2"></i>Ready to Order?
                </h3>
                <p className="text-lg mb-6 opacity-90">Choose pickup or delivery and enjoy our authentic flavors!</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="/order" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2">
                        <i className="fas fa-shopping-bag"></i>
                        Order Now
                    </a>
                    <a href="/pickup" className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all flex items-center gap-2 border-2 border-white">
                        <i className="fas fa-shopping-basket"></i>
                        Pickup
                    </a>
                    <a href="/delivery" className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all flex items-center gap-2 border-2 border-white">
                        <i className="fas fa-truck"></i>
                        Delivery
                    </a>
                </div>
            </div>
        </div>

        {/* Item Detail Modal */}
        <div id="itemModal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div id="modalContent">
                    {/* Modal content will be loaded here */}
                </div>
            </div>
        </div>

        {/* Cart Sidebar */}
        <div id="cartSidebar" className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-50 overflow-y-auto">
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="font-display text-2xl font-bold text-primary">
                        <i className="fas fa-shopping-cart mr-2"></i>Your Order
                    </h2>
                    <button id="closeCart" className="text-gray-500 hover:text-primary">
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                </div>
                <div id="cartItems">
                    {/* Cart items will be loaded here */}
                </div>
                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold" id="cartSubtotal">₹0</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">GST (5%)</span>
                        <span className="font-semibold" id="cartTax">₹0</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-primary">
                        <span>Total</span>
                        <span id="cartTotal">₹0</span>
                    </div>
                    <button className="w-full bg-primary text-tertiary py-3 rounded-lg mt-4 font-semibold hover:bg-opacity-90 transition">
                        <i className="fas fa-check-circle mr-2"></i>Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Menu