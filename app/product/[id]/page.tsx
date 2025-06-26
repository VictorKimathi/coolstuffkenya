import { ArrowLeft, ChevronRight, Heart, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-red-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/category" className="hover:text-red-600 transition-colors">
              Fashion
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">Maasai Sling Bag</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-red-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to products
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="relative h-96 md:h-[500px] mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Maasai Sling Bag"
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-600" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="h-24 bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Maasai Sling Bag view ${img}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-2">Maasai Sling Bag</h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">4.5 (24 reviews)</span>
            </div>

            <div className="mb-6">
              <p className="text-3xl font-bold mb-2">KSh 2,499</p>
              <p className="text-sm text-gray-500">
                <span className="line-through">KSh 2,999</span>
                <span className="text-red-600 ml-2">Save KSh 500</span>
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Handcrafted by skilled Maasai artisans, this beautiful sling bag combines traditional beadwork with modern
              design. Perfect for everyday use, this bag is both stylish and functional.
            </p>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-3">
                {["bg-red-600", "bg-green-600", "bg-black", "bg-yellow-600"].map((color, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} ${i === 0 ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
                    aria-label={`Select color ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-4 font-medium">1</span>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="flex-1 border border-gray-300 hover:border-red-600 text-gray-800 py-3 px-6 rounded-full font-medium transition-colors">
                Buy Now
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start mb-4">
                <Truck className="h-5 w-5 text-gray-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-sm text-gray-600">
                    On orders over KSh 5,000. Estimated delivery: 3-5 business days
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="text-sm bg-gray-100 px-3 py-1 rounded">Handmade</div>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded">Eco-friendly</div>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded">Authentic</div>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded">Limited Edition</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {["Description", "Specifications", "Reviews (24)", "Shipping & Returns"].map((tab, i) => (
                <button
                  key={tab}
                  className={`whitespace-nowrap px-6 py-3 font-medium text-sm ${i === 0 ? "text-red-600 border-b-2 border-red-600" : "text-gray-600 hover:text-red-600"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="py-6">
            <h3 className="font-bold text-lg mb-4">Product Description</h3>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                The Maasai Sling Bag is a beautiful handcrafted accessory that combines traditional Maasai beadwork with
                modern design. Each bag is unique and made by skilled artisans in Kenya.
              </p>
              <p className="mb-4">Features:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Handmade with genuine leather</li>
                <li>Traditional Maasai beadwork</li>
                <li>Adjustable shoulder strap</li>
                <li>Interior pocket for small items</li>
                <li>Durable and water-resistant</li>
              </ul>
              <p>
                By purchasing this bag, you're supporting local Kenyan artisans and helping preserve traditional
                craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Beaded Maasai Bracelet", "Kikoi Beach Towel", "Ankara Print Notebook", "Nairobi Street Hoodie"].map(
              (product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt={product}
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
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">4.0</span>
                    </div>
                    <h3 className="font-medium mb-1">{product}</h3>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">KSh {(899 + index * 300).toLocaleString()}</p>
                      <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded-full transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
