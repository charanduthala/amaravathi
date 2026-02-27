// import { Fragment } from "react/jsx-runtime"

// function Menu() {
//     return <Fragment>
//         {/* Loading Screen */}
//         <div id="loading" className="fixed inset-0 bg-primary flex items-center justify-center z-50">
//             <div className="text-center">
//                 <div className="loader mb-4"></div>
//                 <p className="text-tertiary font-display text-xl">Loading Menu...</p>
//             </div>
//         </div>

//         {/* Search Bar (Hidden by default) */}
//         <div id="searchBar" className="hidden bg-white shadow-lg py-4 sticky top-[76px] z-30">
//             <div className="container mx-auto px-4">
//                 <div className="relative">
//                     <input
//                         type="text"
//                         id="searchInput"
//                         placeholder="Search for dishes, categories..."
//                         className="w-full px-4 py-3 pl-12 border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//                     />
//                     <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary"></i>
//                 </div>
//                 <div id="popularSearches" className="mt-3 flex flex-wrap gap-2">
//                     <span className="text-sm text-gray-600">Popular:</span>
//                     <button className="search-tag">Dosa</button>
//                     <button className="search-tag">Thali</button>
//                     <button className="search-tag">Biryani</button>
//                     <button className="search-tag">Paneer</button>
//                     <button className="search-tag">Manchurian</button>
//                 </div>
//             </div>
//         </div>

//         {/* Floating Cart Button */}
//         <button id="cartBtn" className="fixed bottom-6 right-6 bg-primary text-tertiary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-transform">
//             <i className="fas fa-shopping-cart text-xl"></i>
//             <span id="cartCount" className="absolute -top-2 -right-2 bg-secondary text-tertiary w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">0</span>
//         </button>

//         {/* Order Now Button - Link to Ordering Page */}
//         <a href="/order" className="fixed bottom-6 right-28 bg-secondary text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-40 hover:scale-110 transition-transform font-semibold">
//             <i className="fas fa-shopping-bag"></i>
//             <span className="hidden md:inline">Order Now</span>
//         </a>

//         {/* Main Content */}
//         <div className="container mx-auto px-4 py-8">
//             {/* Filter Bar */}
//             <div className="bg-white rounded-xl shadow-md p-4 mb-8 sticky top-[76px] z-20">
//                 <div className="flex items-center justify-between mb-3">
//                     <h2 className="font-display text-lg font-semibold text-primary">
//                         <i className="fas fa-filter mr-2"></i>Filters
//                     </h2>
//                     <button id="clearFilters" className="text-secondary hover:text-primary text-sm">
//                         <i className="fas fa-times mr-1"></i>Clear All
//                     </button>
//                 </div>
//                 <div className="flex flex-wrap gap-2" id="filterContainer">
//                     <button className="filter-btn" data-filter="all">
//                         <i className="fas fa-list mr-1"></i>All Items
//                     </button>
//                     <button className="filter-btn" data-filter="bestseller">
//                         <i className="fas fa-star mr-1"></i>Bestseller
//                     </button>
//                     <button className="filter-btn" data-filter="chef-special">
//                         <i className="fas fa-award mr-1"></i>Chef's Special
//                     </button>
//                     <button className="filter-btn" data-filter="spicy">
//                         <i className="fas fa-pepper-hot mr-1"></i>Spicy
//                     </button>
//                     <button className="filter-btn" data-filter="jain-special">
//                         <i className="fas fa-leaf mr-1"></i>Jain Options
//                     </button>
//                     <button className="filter-btn" data-filter="quick-bites">
//                         <i className="fas fa-bolt mr-1"></i>Quick Bites
//                     </button>
//                     <button className="filter-btn" data-filter="new">
//                         <i className="fas fa-sparkles mr-1"></i>New
//                     </button>
//                 </div>
//             </div>

//             {/* Chef's Recommendations Banner */}
//             <div className="bg-gradient-to-r from-secondary to-primary rounded-xl p-6 mb-8 text-tertiary">
//                 <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
//                     <i className="fas fa-crown mr-2"></i>Chef's Recommendations
//                 </h2>
//                 <div id="specialsContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {/* Special items will be loaded here */}
//                 </div>
//             </div>

//             {/* Category Navigation (Sticky Sidebar on Desktop) */}
//             <div className="flex flex-col lg:flex-row gap-8">
//                 {/* Sidebar Categories */}
//                 <div className="lg:w-64 lg:sticky lg:top-40 lg:self-start">
//                     <div className="bg-white rounded-xl shadow-md p-4">
//                         <h3 className="font-display text-lg font-semibold text-primary mb-4">Categories</h3>
//                         <nav id="categoryNav" className="space-y-2">
//                             {/* Categories will be loaded here */}
//                         </nav>
//                     </div>
//                 </div>

//                 {/* Menu Items Grid */}
//                 <div className="flex-1">
//                     <div id="menuContainer">
//                         {/* Menu items will be loaded here by category */}
//                     </div>
//                 </div>
//             </div>

//             {/* Order Now CTA Section */}
//             <div className="mt-12 mb-8 bg-gradient-to-r from-secondary to-primary rounded-xl p-8 text-center text-white shadow-xl">
//                 <h3 className="font-display text-3xl font-bold mb-4">
//                     <i className="fas fa-utensils mr-2"></i>Ready to Order?
//                 </h3>
//                 <p className="text-lg mb-6 opacity-90">Choose pickup or delivery and enjoy our authentic flavors!</p>
//                 <div className="flex flex-wrap justify-center gap-4">
//                     <a href="/order" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2">
//                         <i className="fas fa-shopping-bag"></i>
//                         Order Now
//                     </a>
//                     <a href="/pickup" className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all flex items-center gap-2 border-2 border-white">
//                         <i className="fas fa-shopping-basket"></i>
//                         Pickup
//                     </a>
//                     <a href="/delivery" className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all flex items-center gap-2 border-2 border-white">
//                         <i className="fas fa-truck"></i>
//                         Delivery
//                     </a>
//                 </div>
//             </div>
//         </div>

//         {/* Item Detail Modal */}
//         <div id="itemModal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//                 <div id="modalContent">
//                     {/* Modal content will be loaded here */}
//                 </div>
//             </div>
//         </div>

//         {/* Cart Sidebar */}
//         <div id="cartSidebar" className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-50 overflow-y-auto">
//             <div className="p-6">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="font-display text-2xl font-bold text-primary">
//                         <i className="fas fa-shopping-cart mr-2"></i>Your Order
//                     </h2>
//                     <button id="closeCart" className="text-gray-500 hover:text-primary">
//                         <i className="fas fa-times text-2xl"></i>
//                     </button>
//                 </div>
//                 <div id="cartItems">
//                     {/* Cart items will be loaded here */}
//                 </div>
//                 <div className="mt-6 border-t pt-4">
//                     <div className="flex justify-between mb-2">
//                         <span className="text-gray-600">Subtotal</span>
//                         <span className="font-semibold" id="cartSubtotal">₹0</span>
//                     </div>
//                     <div className="flex justify-between mb-2">
//                         <span className="text-gray-600">GST (5%)</span>
//                         <span className="font-semibold" id="cartTax">₹0</span>
//                     </div>
//                     <div className="flex justify-between text-xl font-bold text-primary">
//                         <span>Total</span>
//                         <span id="cartTotal">₹0</span>
//                     </div>
//                     <button className="w-full bg-primary text-tertiary py-3 rounded-lg mt-4 font-semibold hover:bg-opacity-90 transition">
//                         <i className="fas fa-check-circle mr-2"></i>Proceed to Checkout
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </Fragment>
// }

// export default Menu

import styles from "./Menu.module.css";

const menuData = [
    {
        category: "SUNRISE SPECIALS – TIFFIN AHAARAM",
        items: [
            {
                id: "classic-idli",
                name: "Classic Idli",
                price: 7,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Soft steamed rice cakes served with sambar & chutney",
                tags: ["bestseller"],
                spiceLevel: 1,
                prepTime: "10 min",
                calories: 250,
                badges: ["Gluten Free", "Healthy"]
            },
            {
                id: "ghee-karam-idli",
                name: "Ghee Karam Idli",
                price: 8,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Idli tossed with ghee and spicy karam podi",
                tags: ["spicy"],
                spiceLevel: 2,
                prepTime: "12 min",
                calories: 280,
                badges: ["Chef Special"]
            },
            {
                id: "ghee-button-idli",
                name: "Ghee Button Idli",
                price: 10,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Mini idlis soaked in aromatic ghee",
                tags: ["new"],
                spiceLevel: 1,
                prepTime: "12 min",
                calories: 300,
                badges: ["Kids Favorite"]
            },
            {
                id: "medu-vada",
                name: "Medu Vada",
                price: 8,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Crispy lentil fritters served with chutney",
                tags: ["bestseller"],
                spiceLevel: 1,
                prepTime: "10 min",
                calories: 320,
                badges: ["Protein Rich"]
            },
            {
                id: "dahi-wada",
                name: "Dahi Wada",
                price: 10,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Vadas soaked in spiced yogurt",
                tags: ["new"],
                spiceLevel: 1,
                prepTime: "12 min",
                calories: 350,
                badges: ["Cooling"]
            },
            {
                id: "rasam-vada",
                name: "Rasam Vada",
                price: 8,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Vadas dipped in tangy rasam",
                tags: ["spicy"],
                spiceLevel: 2,
                prepTime: "12 min",
                calories: 300,
                badges: ["Traditional"]
            },
            {
                id: "khara-upma",
                name: "Khara Upma",
                price: 8,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Savory semolina cooked with spices",
                tags: ["healthy"],
                spiceLevel: 1,
                prepTime: "10 min",
                calories: 280,
                badges: ["Light Meal"]
            },
            {
                id: "ven-pongal",
                name: "Ven Pongal",
                price: 9,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Rice and lentils cooked with ghee & pepper",
                tags: ["bestseller"],
                spiceLevel: 1,
                prepTime: "12 min",
                calories: 330,
                badges: ["Comfort Food"]
            },
            {
                id: "poori-bhaji",
                name: "Poori Bhaji",
                price: 10,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Fried bread served with potato curry",
                tags: ["bestseller"],
                spiceLevel: 2,
                prepTime: "15 min",
                calories: 420,
                badges: ["Popular"]
            },
            {
                id: "chole-batura",
                name: "Chole Batura",
                price: 13,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Spicy chickpeas with fluffy batura",
                tags: ["spicy"],
                spiceLevel: 3,
                prepTime: "15 min",
                calories: 500,
                badges: ["North Indian"]
            },
            {
                id: "pesarattu",
                name: "Pesarattu",
                price: 10,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Green gram dosa served with ginger chutney",
                tags: ["healthy"],
                spiceLevel: 1,
                prepTime: "12 min",
                calories: 300,
                badges: ["High Protein"]
            },
            {
                id: "onion-pesarattu",
                name: "Onion Pesarattu",
                price: 11,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Pesarattu topped with onions",
                tags: ["new"],
                spiceLevel: 2,
                prepTime: "12 min",
                calories: 320,
                badges: ["Special"]
            },
            {
                id: "mla-pesarattu",
                name: "MLA Pesarattu",
                price: 12,
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                description: "Stuffed pesarattu with spicy filling",
                tags: ["chef-special"],
                spiceLevel: 3,
                prepTime: "15 min",
                calories: 380,
                badges: ["Signature Dish"]
            }
        ]
    },

    {
        category: "DOSA DARBAR",
        items: [
            { id: "plain-dosa", name: "Plain Dosa", price: 9, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Crispy dosa served with chutneys", tags: ["bestseller"], spiceLevel: 1, prepTime: "12 min", calories: 350, badges: ["Vegan"] },
            { id: "masala-dosa", name: "Masala Dosa", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Stuffed dosa with potato masala", tags: ["bestseller"], spiceLevel: 2, prepTime: "15 min", calories: 400, badges: ["Classic"] },
            { id: "ghee-roast-dosa", name: "Ghee Roast Dosa", price: 12, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Extra crispy dosa with ghee", tags: ["chef-special"], spiceLevel: 1, prepTime: "15 min", calories: 420, badges: ["Rich Taste"] },
            { id: "ghee-karam-dosa", name: "Ghee Karam Dosa", price: 13, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spicy dosa with karam podi & ghee", tags: ["spicy"], spiceLevel: 3, prepTime: "15 min", calories: 450, badges: ["Hot"] },
            { id: "benne-dosa", name: "Benne Dosa", price: 13, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Butter roasted dosa", tags: ["bestseller"], spiceLevel: 1, prepTime: "15 min", calories: 430, badges: ["Popular"] },
            { id: "nellore-kaaram-dosa", name: "Nellore Kaaram Dosa", price: 13, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spicy Nellore style dosa", tags: ["spicy"], spiceLevel: 3, prepTime: "15 min", calories: 460, badges: ["Regional"] },
            { id: "rava-dosa", name: "Rava Dosa", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Thin crispy rava dosa", tags: ["healthy"], spiceLevel: 1, prepTime: "12 min", calories: 300, badges: ["Light"] },
            { id: "onion-rava-dosa", name: "Onion Rava Dosa", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Rava dosa with onions", tags: ["new"], spiceLevel: 2, prepTime: "12 min", calories: 320, badges: ["Special"] },
            { id: "mysore-masala-dosa", name: "Mysore Masala Dosa", price: 12, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spicy Mysore style masala dosa", tags: ["spicy"], spiceLevel: 3, prepTime: "15 min", calories: 420, badges: ["Famous"] },
            { id: "cheese-dosa", name: "Cheese Dosa", price: 13, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Dosa stuffed with cheese", tags: ["kids"], spiceLevel: 1, prepTime: "15 min", calories: 480, badges: ["Fusion"] },
            { id: "pizza-dosa", name: "Pizza Dosa", price: 12, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Fusion dosa with pizza toppings", tags: ["new"], spiceLevel: 1, prepTime: "15 min", calories: 500, badges: ["Fusion"] },
            { id: "family-dosa", name: "Family Dosa", price: 19, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Large dosa for sharing", tags: ["bestseller"], spiceLevel: 1, prepTime: "20 min", calories: 700, badges: ["Family Pack"] }
        ]
    },

    {
        category: "PRAARAMBHAM – STARTERS",
        items: [
            { id: "mokka-jonna-garelu", name: "Mokka Jonna Garelu", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Traditional millet fritters", tags: ["traditional"], spiceLevel: 1, prepTime: "12 min", calories: 300, badges: ["Healthy"] },
            { id: "mogalturu-mokka-jonna-vada", name: "Mogalturu Mokka Jonna Vada", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Village style vada", tags: ["traditional"], spiceLevel: 2, prepTime: "12 min", calories: 320, badges: ["Regional"] },
            { id: "saggubiyyam-vada", name: "Saggubiyyam Vada", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Sabudana fritters", tags: ["gluten-free"], spiceLevel: 1, prepTime: "10 min", calories: 280, badges: ["Light"] },
            { id: "kaalan-peratal", name: "Kaalan Peratal", price: 12, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spicy mushroom fry", tags: ["spicy"], spiceLevel: 3, prepTime: "12 min", calories: 350, badges: ["Hot"] },
            { id: "uralai-podi-varuval", name: "Uralai Podi Varuval", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Potato fry with podi", tags: ["crispy"], spiceLevel: 2, prepTime: "10 min", calories: 330, badges: ["Popular"] },
            { id: "koon-olithiyathu", name: "Koon Olithiyathu", price: 12, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Kerala style mushroom fry", tags: ["spicy"], spiceLevel: 2, prepTime: "12 min", calories: 340, badges: ["Kerala"] },
            { id: "thotakura-liver-fry", name: "Thotakura Liver Fry", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spinach stir fry", tags: ["healthy"], spiceLevel: 1, prepTime: "10 min", calories: 260, badges: ["Iron Rich"] },
            { id: "jeedipappu-mushroom-fry", name: "Jeedipappu Mushroom Fry", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Cashew mushroom fry", tags: ["chef-special"], spiceLevel: 2, prepTime: "12 min", calories: 380, badges: ["Rich"] },
            { id: "crispy-corn", name: "Crispy Corn", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Golden fried corn kernels", tags: ["bestseller"], spiceLevel: 1, prepTime: "10 min", calories: 300, badges: ["Crispy"] },
            { id: "palnadu-paneer-vepudu", name: "Palnadu Paneer Vepudu", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Paneer stir fry Andhra style", tags: ["spicy"], spiceLevel: 2, prepTime: "12 min", calories: 400, badges: ["Andhra"] },
            { id: "perugu-vankaya-bajji", name: "Perugu Vankaya Bajji", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Brinjal fritters in yogurt", tags: ["new"], spiceLevel: 1, prepTime: "12 min", calories: 350, badges: ["Unique"] },
            { id: "bbq-chilli-mushroom", name: "Barbeque Chilli Mushroom", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Smoky chilli mushroom", tags: ["spicy"], spiceLevel: 3, prepTime: "12 min", calories: 380, badges: ["Hot"] },
            { id: "veg-cigar-rolls", name: "Veg Cigar Rolls", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Crispy stuffed rolls", tags: ["kids"], spiceLevel: 1, prepTime: "10 min", calories: 300, badges: ["Crunchy"] },
            { id: "sweet-chilli-lotus-stem", name: "Sweet Chilli Lotus Stem", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Lotus stem in sweet chilli sauce", tags: ["fusion"], spiceLevel: 2, prepTime: "12 min", calories: 320, badges: ["Special"] }
        ]
    },
    {
        category: "TANDOOR & TIKKA SPECIALS",
        items: [
            { id: "amaravathi-veg-tikka", name: "Amaravathi Veg Tikka", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Assorted vegetables grilled in tandoor", tags: ["chef-special"], spiceLevel: 2, prepTime: "15 min", calories: 380, badges: ["Grilled"] },
            { id: "palamuru-paneer-tikka", name: "Palamuru Paneer Tikkaa", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Paneer marinated and grilled", tags: ["bestseller"], spiceLevel: 2, prepTime: "15 min", calories: 420, badges: ["Protein Rich"] },
            { id: "veg-sheekh-kebab", name: "Veg Sheekh Kebab", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Minced veg kebabs grilled", tags: ["chef-special"], spiceLevel: 2, prepTime: "15 min", calories: 400, badges: ["Grilled"] },
            { id: "malai-broccoli", name: "Malai Broccoli", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Broccoli in creamy marinade", tags: ["new"], spiceLevel: 1, prepTime: "15 min", calories: 350, badges: ["Creamy"] },
            { id: "assorted-veg-platter", name: "Assorted Veg Platter", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mixed grilled vegetable platter", tags: ["bestseller"], spiceLevel: 2, prepTime: "18 min", calories: 500, badges: ["Sharing"] }
        ]
    },

    {
        category: "AMARAVATHI REGIONALS – ANDHRA & TELANGANA",
        items: [
            { id: "gutti-vankaya-kura", name: "Gutti Vankaya Kura", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Stuffed brinjal curry", tags: ["spicy"], spiceLevel: 3, prepTime: "15 min", calories: 350, badges: ["Traditional"] },
            { id: "veg-kurma", name: "Veg Kurma", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Vegetable curry with coconut gravy", tags: ["bestseller"], spiceLevel: 2, prepTime: "15 min", calories: 360, badges: ["Popular"] },
            { id: "cashew-mushroom-curry", name: "Cashew Mushroom Curry", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mushroom cooked with cashew paste", tags: ["chef-special"], spiceLevel: 2, prepTime: "15 min", calories: 420, badges: ["Rich"] },
            { id: "paneer-butter-masala", name: "Paneer Butter Masala", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Paneer in creamy tomato gravy", tags: ["bestseller"], spiceLevel: 1, prepTime: "15 min", calories: 480, badges: ["Classic"] },
            { id: "avakaya-pappu-thalimpu", name: "Avakaya Pappu Thalimpu", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Dal tempered with avakaya pickle", tags: ["traditional"], spiceLevel: 2, prepTime: "12 min", calories: 300, badges: ["Signature"] },
            { id: "dal-makhani", name: "Dal Makhani", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Creamy black lentil curry", tags: ["bestseller"], spiceLevel: 1, prepTime: "15 min", calories: 450, badges: ["North Indian"] },
            { id: "jeedipappu-thotakura-liver-kura", name: "Jeedipappu Thotakura Liver Kura", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spinach curry with cashew", tags: ["healthy"], spiceLevel: 1, prepTime: "12 min", calories: 280, badges: ["Iron Rich"] }
        ]
    },

    {
        category: "KERALA – MALABAR MAGIC",
        items: [
            { id: "vegetable-stew", name: "Vegetable Stew", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Vegetables in coconut milk gravy", tags: ["healthy"], spiceLevel: 1, prepTime: "12 min", calories: 300, badges: ["Kerala"] },
            { id: "avial", name: "Avial", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mixed vegetable curry with coconut", tags: ["traditional"], spiceLevel: 1, prepTime: "12 min", calories: 320, badges: ["Kerala"] },
            { id: "thoran", name: "Thoran", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Stir fried vegetables with coconut", tags: ["healthy"], spiceLevel: 1, prepTime: "10 min", calories: 260, badges: ["Light"] },
            { id: "kaalan", name: "Kaalan", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Yogurt based curry", tags: ["traditional"], spiceLevel: 1, prepTime: "12 min", calories: 300, badges: ["Kerala"] },
            { id: "olan", name: "Olan", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Ash gourd coconut curry", tags: ["healthy"], spiceLevel: 1, prepTime: "12 min", calories: 250, badges: ["Light"] },
            { id: "pulisherry", name: "Pulisherry", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Sour yogurt curry", tags: ["traditional"], spiceLevel: 1, prepTime: "12 min", calories: 280, badges: ["Kerala"] },
            { id: "erissery", name: "Erissery", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Pumpkin and beans curry", tags: ["healthy"], spiceLevel: 1, prepTime: "12 min", calories: 300, badges: ["Festive"] },
            { id: "morru-kachiyathu", name: "Morru Kachiyathu", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spiced buttermilk curry", tags: ["cooling"], spiceLevel: 1, prepTime: "10 min", calories: 220, badges: ["Refreshing"] }
        ]
    },

    {
        category: "TAMIL NADU – SAAPAADU STORIES",
        items: [
            { id: "vathal-kuzhambu", name: "Vathal Kuzhambu", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Tangy tamarind curry", tags: ["spicy"], spiceLevel: 2, prepTime: "12 min", calories: 300, badges: ["Traditional"] },
            { id: "keerai-masiyal", name: "Keerai Masiyal", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mashed spinach curry", tags: ["healthy"], spiceLevel: 1, prepTime: "10 min", calories: 250, badges: ["Iron Rich"] },
            { id: "vendiyam-poondu-kuzhambu", name: "Vendiyam Poondu Kuzhambu", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Fenugreek garlic curry", tags: ["traditional"], spiceLevel: 2, prepTime: "12 min", calories: 300, badges: ["Aromatic"] },
            { id: "kai-kari-chettinad", name: "Kai Kari Chettinad", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Chettinad vegetable curry", tags: ["spicy"], spiceLevel: 3, prepTime: "12 min", calories: 350, badges: ["Chettinad"] }
        ]
    },

    {
        category: "KARNATAKA – NAMMA OOTA",
        items: [
            { id: "saagu", name: "Saagu", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mixed veg curry", tags: ["traditional"], spiceLevel: 1, prepTime: "12 min", calories: 300, badges: ["Karnataka"] },
            { id: "kai-korma", name: "Kai Korma", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Vegetable korma", tags: ["bestseller"], spiceLevel: 1, prepTime: "12 min", calories: 320, badges: ["Popular"] },
            { id: "battani-double-beans-masala", name: "Battani Double Beans Masala", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Peas and beans curry", tags: ["healthy"], spiceLevel: 1, prepTime: "12 min", calories: 300, badges: ["Protein"] },
            { id: "bisi-bela-bhath", name: "Bisi Bela Bhath", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spicy rice and lentil dish", tags: ["bestseller"], spiceLevel: 2, prepTime: "15 min", calories: 400, badges: ["Famous"] }
        ]
    },

    {
        category: "RICE, PULAV & BIRYANI",
        items: [
            { id: "veg-biryani", name: "Veg Biryani", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Aromatic basmati rice with vegetables", tags: ["bestseller"], spiceLevel: 2, prepTime: "18 min", calories: 500, badges: ["Popular"] },
            { id: "nethi-vankaya-pulav", name: "Nethi Vankaya Pulav", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Pulav with baby brinjal", tags: ["traditional"], spiceLevel: 2, prepTime: "18 min", calories: 480, badges: ["Andhra"] },
            { id: "cashew-paneer-biryani", name: "Cashew Paneer Biryani", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Paneer biryani with cashews", tags: ["chef-special"], spiceLevel: 2, prepTime: "18 min", calories: 520, badges: ["Rich"] },
            { id: "avakaya-bundi-pulav", name: "Avakaya Bundi Pulav", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Pulav with avakaya pickle", tags: ["spicy"], spiceLevel: 3, prepTime: "18 min", calories: 500, badges: ["Spicy"] },
            { id: "chitti-muthyala-mushroom-biryani", name: "Chitti Muthyala Mushroom Biryani", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mushroom biryani", tags: ["bestseller"], spiceLevel: 2, prepTime: "18 min", calories: 480, badges: ["Popular"] },
            { id: "chettinadu-veg-pulav", name: "Chettinadu Veg Pulav", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Chettinad style vegetable pulav", tags: ["spicy"], spiceLevel: 3, prepTime: "18 min", calories: 490, badges: ["Chettinad"] }
        ]
    },

    {
        category: "INDO-CHINESE FUSION",
        items: [
            { id: "veg-manchurian-(Dry)", name: "Veg Manchurian (Dry)", price: 13, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Aromatic basmati rice with vegetables", tags: ["bestseller"], spiceLevel: 2, prepTime: "18 min", calories: 500, badges: ["Popular"] },
            { id: "veg-manchurian-(Gravy)", name: "Veg Manchurian (Gravy)", price: 14, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Pulav with baby brinjal", tags: ["traditional"], spiceLevel: 2, prepTime: "18 min", calories: 480, badges: ["Andhra"] },
            { id: "gobi-manchurian", name: "Gobi Manchurian", price: 13, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Paneer biryani with cashews", tags: ["chef-special"], spiceLevel: 2, prepTime: "18 min", calories: 520, badges: ["Rich"] },
            { id: "paneer-chilli", name: "Paneer Chilli", price: 15, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Pulav with avakaya pickle", tags: ["spicy"], spiceLevel: 3, prepTime: "18 min", calories: 500, badges: ["Spicy"] },
            { id: "hakka-noodles", name: "Hakka Noodles", price: 13, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mushroom biryani", tags: ["bestseller"], spiceLevel: 2, prepTime: "18 min", calories: 480, badges: ["Popular"] },
            { id: "schezwan-noodles", name: "Schezwan Noodles", price: 14, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Chettinad style vegetable pulav", tags: ["spicy"], spiceLevel: 3, prepTime: "18 min", calories: 490, badges: ["Chettinad"] },
            { id: "veg-fried-rice", name: "Veg Fried Rice", price: 12, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Chettinad style vegetable pulav", tags: ["spicy"], spiceLevel: 3, prepTime: "18 min", calories: 490, badges: ["Chettinad"] },
            { id: "schezwan-fried-rice", name: "Schezwan Fried Rice", price: 13, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Chettinad style vegetable pulav", tags: ["spicy"], spiceLevel: 3, prepTime: "18 min", calories: 490, badges: ["Chettinad"] }

        ]
    },

    {
        category: "INDIAN HOMEMADE SNACKS & CHAAT",
        items: [
            { id: "pani-puri", name: "Pani Puri", price: 9, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Crispy puris with tangy water", tags: ["bestseller"], spiceLevel: 2, prepTime: "8 min", calories: 200, badges: ["Street Food"] },
            { id: "masala-puri", name: "Masala Puri", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Crushed puri with spicy gravy", tags: ["spicy"], spiceLevel: 2, prepTime: "8 min", calories: 250, badges: ["Chaat"] },
            { id: "dahi-puri", name: "Dahi Puri", price: 10, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Puris filled with yogurt", tags: ["cooling"], spiceLevel: 1, prepTime: "8 min", calories: 260, badges: ["Sweet & Sour"] },
            { id: "samosa-chaat", name: "Samosa Chaat", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Samosa topped with chutneys", tags: ["bestseller"], spiceLevel: 2, prepTime: "10 min", calories: 350, badges: ["Popular"] }
        ]
    },

    {
        category: "HOMESTYLE CRUNCHIES",
        items: [
            { id: "punugulu", name: "Punugulu", price: 8, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Deep fried batter fritters", tags: ["bestseller"], spiceLevel: 1, prepTime: "8 min", calories: 280, badges: ["Crispy"] },
            { id: "mysore-bonda", name: "Mysore Bonda", price: 8, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Soft fried dumplings", tags: ["traditional"], spiceLevel: 1, prepTime: "8 min", calories: 260, badges: ["Soft"] },
            { id: "mirchi-bajji", name: "Mirchi Bajji", price: 8, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Stuffed chilli fritters", tags: ["spicy"], spiceLevel: 3, prepTime: "8 min", calories: 300, badges: ["Hot"] },
            { id: "onion-pakodi", name: "Onion Pakodi", price: 8, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Crispy onion fritters", tags: ["bestseller"], spiceLevel: 2, prepTime: "8 min", calories: 320, badges: ["Crunchy"] }
        ]
    },

    {
        category: "RICE, BREAD & ADD-ONS",
        items: [
            { id: "steam-rice", name: "Steam Rice", price: 5, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Steamed white rice", tags: ["plain"], spiceLevel: 0, prepTime: "5 min", calories: 200, badges: ["Basic"] },
            { id: "ragi-sankati", name: "Ragi Sankati", price: 7, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Finger millet rice balls", tags: ["healthy"], spiceLevel: 0, prepTime: "8 min", calories: 220, badges: ["High Fiber"] },
            { id: "phulka", name: "Phulka (2 pcs)", price: 5, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Soft wheat rotis", tags: ["plain"], spiceLevel: 0, prepTime: "5 min", calories: 180, badges: ["Basic"] },
            { id: "parotta", name: "Parotta (2 pcs)", price: 6, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Layered flatbread", tags: ["popular"], spiceLevel: 0, prepTime: "6 min", calories: 220, badges: ["South Indian"] },
            { id: "appam", name: "Appam (2 pcs)", price: 6, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Soft fermented rice pancakes", tags: ["kerala"], spiceLevel: 0, prepTime: "6 min", calories: 200, badges: ["Kerala"] },
            { id: "idiappam", name: "Idiappam (3 pcs)", price: 7, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Rice noodles", tags: ["light"], spiceLevel: 0, prepTime: "6 min", calories: 180, badges: ["Light"] },
            { id: "sambar", name: "Sambar", price: 6, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Lentil vegetable stew", tags: ["bestseller"], spiceLevel: 1, prepTime: "5 min", calories: 150, badges: ["Classic"] },
            { id: "rasam", name: "Rasam", price: 6, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Pepper tamarind soup", tags: ["traditional"], spiceLevel: 1, prepTime: "5 min", calories: 120, badges: ["Light"] },
            { id: "plain-curd", name: "Plain Curd", price: 4, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Fresh yogurt", tags: ["cooling"], spiceLevel: 0, prepTime: "3 min", calories: 100, badges: ["Cooling"] },
            { id: "coconut-milk", name: "Coconut Milk", price: 4, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Fresh coconut milk", tags: ["vegan"], spiceLevel: 0, prepTime: "3 min", calories: 120, badges: ["Vegan"] }
        ]
    },

    {
        category: "MOCKTAILS & BEVERAGES",
        items: [
            { id: "virgin-mojito", name: "Virgin Mojito", price: 8, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mint lime cooler", tags: ["refreshing"], spiceLevel: 0, prepTime: "5 min", calories: 120, badges: ["Cold"] },
            { id: "mango-mule", name: "Mango Mule", price: 8, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mango ginger mocktail", tags: ["sweet"], spiceLevel: 0, prepTime: "5 min", calories: 150, badges: ["Fruity"] },
            { id: "kokum-cooler", name: "Kokum Cooler", price: 7, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Kokum infused drink", tags: ["cooling"], spiceLevel: 0, prepTime: "5 min", calories: 110, badges: ["Digestive"] },
            { id: "nannari-fizz", name: "Nannari Fizz", price: 7, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Herbal soda drink", tags: ["refreshing"], spiceLevel: 0, prepTime: "5 min", calories: 130, badges: ["Herbal"] },
            { id: "fresh-lime-soda", name: "Fresh Lime Soda", price: 7, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Classic lime soda", tags: ["refreshing"], spiceLevel: 0, prepTime: "5 min", calories: 100, badges: ["Classic"] },
            { id: "buttermilk", name: "Buttermilk", price: 5, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spiced yogurt drink", tags: ["cooling"], spiceLevel: 0, prepTime: "3 min", calories: 80, badges: ["Healthy"] },
            { id: "filter-coffee", name: "Filter Coffee", price: 6, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "South Indian coffee", tags: ["hot"], spiceLevel: 0, prepTime: "5 min", calories: 120, badges: ["Classic"] },
            { id: "masala-chai", name: "Masala Chai", price: 6, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Spiced tea", tags: ["hot"], spiceLevel: 0, prepTime: "5 min", calories: 120, badges: ["Traditional"] }
        ]
    },

    {
        category: "DESSERTS",
        items: [
            { id: "classic-banana-pudding", name: "Classic Banana Pudding", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Creamy banana pudding", tags: ["sweet"], spiceLevel: 0, prepTime: "5 min", calories: 300, badges: ["Dessert"] },
            { id: "motichuri-phirni", name: "Motichuri Phirni", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Sweet rice pudding", tags: ["traditional"], spiceLevel: 0, prepTime: "5 min", calories: 320, badges: ["Classic"] },
            { id: "brownie-icecream", name: "Brownie with Ice Cream", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Warm brownie with vanilla ice cream", tags: ["bestseller"], spiceLevel: 0, prepTime: "5 min", calories: 450, badges: ["Popular"] },
            { id: "apricot-delight", name: "Apricot Delight", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Apricot dessert with cream", tags: ["sweet"], spiceLevel: 0, prepTime: "5 min", calories: 350, badges: ["Special"] },
            { id: "putharekulu-icecream", name: "Putharekulu with Ice Cream", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Traditional sweet with ice cream", tags: ["traditional"], spiceLevel: 0, prepTime: "5 min", calories: 380, badges: ["Andhra Sweet"] },
            { id: "sitapal-rabdi", name: "Sitapal Rabdi", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Custard apple rabdi", tags: ["sweet"], spiceLevel: 0, prepTime: "5 min", calories: 360, badges: ["Seasonal"] },
            { id: "pot-junnu", name: "Pot Junnu", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Steamed milk pudding", tags: ["traditional"], spiceLevel: 0, prepTime: "5 min", calories: 300, badges: ["Signature"] },
            { id: "mango-tres-leches", name: "Mango Tres Leches", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Mango milk cake dessert", tags: ["sweet"], spiceLevel: 0, prepTime: "5 min", calories: 400, badges: ["Fusion"] },
            { id: "fried-ice-cream", name: "Fried Ice Cream", price: 11, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Crispy fried ice cream", tags: ["bestseller"], spiceLevel: 0, prepTime: "5 min", calories: 420, badges: ["Popular"] }
        ]
    }
];


function Menu() {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-center mt-[8rem] mb-8">
                Amaravathi Authentics Menu
            </h1>

            {menuData.map((section, index) => (
                <div key={index} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-primary">
                        {section.category}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {section.items.map((item) => (
                            <div
                                key={item.id}
                                className={styles["menu-card"]}
                                onClick={() => console.log("show detail", item.id)}
                            >
                                {/* Bestseller */}
                                {item.tags.includes("bestseller") && (
                                    <div className={styles["ribbon"]}>Bestseller</div>
                                )}

                                {item.tags.includes("new") && (
                                    <div className={styles["seasonal-indicator"]}>NEW</div>
                                )}

                                <div className={styles["overflow-hidden"]} >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className={styles["menu-card-image"]}
                                    />
                                </div>

                                <div className={styles["menu-card-content"]}>
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-display text-xl font-bold text-primary flex-1">
                                            {item.name}
                                        </h3>

                                        <div className="flex items-center space-x-1 ml-2">
                                            {[...Array(3)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`${styles['spice-dot']} ${i < item.spiceLevel ? styles["active"] : ""
                                                        }`}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-3">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className={`badge badge-${tag}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="hover-reveal">
                                        <div className="border-t pt-3 mb-3">
                                            <div className="text-xs text-gray-600 mb-2">
                                                <i className="fas fa-clock mr-1"></i>
                                                {item.prepTime}
                                                <span className="mx-2">•</span>
                                                <i className="fas fa-fire mr-1"></i>
                                                {item.calories} cal
                                            </div>

                                            <div className="flex flex-wrap gap-1">
                                                {item.badges.map((badge, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs bg-tertiary text-primary px-2 py-1 rounded"
                                                    >
                                                        {badge}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <span className="text-2xl font-bold text-primary">
                                                ${item.price}
                                            </span>
                                            <span className="text-xs text-gray-500 ml-1">
                                                Medium
                                            </span>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log("Add to cart", item.id);
                                            }}
                                            className="bg-primary text-tertiary px-4 py-2 rounded-lg hover:bg-secondary transition"
                                        >
                                            <i className="fas fa-plus mr-1"></i>Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
