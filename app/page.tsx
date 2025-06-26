import { Search, ShoppingCart, User, Menu, Heart, Star, ChevronDown, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          {/* Top bar - mobile only */}
          <div className="flex md:hidden items-center justify-between py-3">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="font-bold text-xl">
              Cool Stuff Kenya
            </Link>
            <div className="flex items-center gap-3">
              <button className="p-2">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Desktop header */}
          <div className="hidden md:flex items-center justify-between py-4">
            <Link href="/" className="font-bold text-2xl">
              Cool Stuff Kenya
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="font-medium hover:text-red-600 transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center font-medium hover:text-red-600 transition-colors">
                  Shop
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50">
                      New Arrivals
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50">
                      Best Sellers
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50">
                      Sale Items
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center font-medium hover:text-red-600 transition-colors">
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50">
                      Fashion
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50">
                      Home & Living
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50">
                      Electronics
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50">
                      Handcrafts
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="#" className="font-medium hover:text-red-600 transition-colors">
                About Us
              </Link>
              <Link href="#" className="font-medium hover:text-red-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <button className="p-2 hover:text-red-600 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:text-red-600 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 relative hover:text-red-600 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[60vh] overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Stylish Kenyan products"
              width={1600}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Kenya's Coolest Products</h1>
                  <p className="text-lg mb-6">
                    Trendy, affordable, and uniquely Kenyan. Shop our curated collection today.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 transform hover:scale-105">
                    Shop the Hottest Deals
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Fashion", "Home & Living", "Electronics", "Handcrafts"].map((category) => (
                <div key={category} className="group relative rounded-lg overflow-hidden h-40 cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt={category}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <h3 className="text-white font-medium text-lg">{category}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <div className="flex items-center">
                <button className="flex items-center text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar - Desktop only */}
              <div className="hidden md:block w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
                <h3 className="font-medium text-lg mb-4">Filter Products</h3>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Categories</h4>
                  {["All Products", "Fashion", "Home & Living", "Electronics", "Handcrafts"].map((cat) => (
                    <div key={cat} className="flex items-center mb-2">
                      <input type="checkbox" id={cat} className="mr-2" />
                      <label htmlFor={cat} className="text-sm">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Min"
                      className="w-full p-2 border border-gray-200 rounded text-sm"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      placeholder="Max"
                      className="w-full p-2 border border-gray-200 rounded text-sm"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Brand</h4>
                  {["Nairobi Trends", "Maasai Crafts", "Kenyan Essentials", "Mombasa Style"].map((brand) => (
                    <div key={brand} className="flex items-center mb-2">
                      <input type="checkbox" id={brand} className="mr-2" />
                      <label htmlFor={brand} className="text-sm">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-medium transition-colors">
                  Apply Filters
                </button>
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "Maasai Sling Bag", price: 2499, rating: 4.5 },
                    { name: "Nairobi Street Hoodie", price: 1899, rating: 4.8 },
                    { name: "Eco-friendly Jiko", price: 3299, rating: 4.2 },
                    { name: "Kikoi Beach Towel", price: 1299, rating: 4.7 },
                    { name: "Ankara Print Notebook", price: 599, rating: 4.9 },
                    { name: "Beaded Maasai Bracelet", price: 899, rating: 4.6 },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=400"
                          alt={product.name}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart className="h-4 w-4 text-gray-600 hover:text-red-600" />
                        </button>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                        </div>
                        <h3 className="font-medium mb-1">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <p className="font-bold">KSh {product.price.toLocaleString()}</p>
                          <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded-full transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <button className="bg-white border border-gray-200 hover:border-red-600 text-gray-800 font-medium px-6 py-2 rounded-full transition-colors">
                    Load More Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Free Shipping", desc: "On orders over KSh 5,000" },
                { title: "Secure Payment", desc: "Multiple payment methods" },
                { title: "24/7 Support", desc: "Dedicated customer service" },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold">0{index + 1}</span>
                  </div>
                  <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Join Our Newsletter</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none"
              />
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Cool Stuff Kenya</h3>
              <p className="text-gray-600 mb-4">
                Your one-stop shop for trendy, affordable products that showcase the best of Kenya.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center">
                      {social[0].toUpperCase()}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                {["New Arrivals", "Best Sellers", "Sale Items", "Men's Collection", "Women's Collection"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                {["Contact Us", "FAQs", "Shipping & Returns", "Track Order", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <address className="not-italic text-gray-600">
                <p className="mb-2">123 Kenyatta Avenue</p>
                <p className="mb-2">Nairobi, Kenya</p>
                <p className="mb-2">+254 712 345 678</p>
                <p className="mb-2">info@coolstuffkenya.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">© 2025 Cool Stuff Kenya. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              {["Visa", "Mastercard", "M-Pesa", "PayPal"].map((payment) => (
                <div key={payment} className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
