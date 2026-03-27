import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-black text-white min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wide leading-tight">
                  Where Coffee Meets <span className="text-red">Community</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                  Premium coffee, vibrant atmosphere, and unforgettable events in one dynamic space.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red transition-all uppercase tracking-wide text-center"
                  >
                    Visit Us Today
                  </Link>
                  <Link
                    href="#menu"
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all uppercase tracking-wide text-center border border-white/30"
                  >
                    View Menu
                  </Link>
                </div>
              </div>

              {/* Right side - Coffee Image */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative w-full max-w-lg">
                  <Image
                    src="/hero-coffee.png"
                    alt="Coffee Latte Art"
                    width={600}
                    height={600}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section id="menu" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 uppercase tracking-wide">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exceptional coffee, delicious food, and the perfect venue for your events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Coffee & Drinks */}
              <div className="group bg-biscuit rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-red rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Premium Coffee</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Artisan coffee crafted by expert baristas. From espresso classics to signature drinks, we source the finest beans for every cup.
                </p>
                <Link
                  href="/#menu"
                  className="inline-flex items-center text-red font-semibold hover:text-plum transition-colors uppercase tracking-wide"
                >
                  View Full Menu
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Food & Pastries */}
              <div className="group bg-biscuit rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Fresh Food & Pastries</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Daily baked goods, light bites, and full meals. Perfect for breakfast, lunch, or a quick snack with your coffee.
                </p>
                <Link
                  href="/#menu"
                  className="inline-flex items-center text-teal font-semibold hover:text-green transition-colors uppercase tracking-wide"
                >
                  See Menu
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Event Hosting */}
              <div className="group bg-biscuit rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Private Events</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Host your next gathering in our versatile space. Perfect for meetings, celebrations, workshops, live music, and community events.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center text-orange font-semibold hover:text-mustard transition-colors uppercase tracking-wide"
                >
                  Book Event Space
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Experience */}
        <section className="py-20 bg-gradient-to-br from-purple/10 to-pink/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase tracking-wide">
                  More Than Just <span className="text-red">Coffee</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Club54 is a vibrant community hub where coffee lovers connect, create, and celebrate together.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Community Vibes</h3>
                      <p className="text-gray-600">
                        Join a welcoming community of coffee enthusiasts, creatives, and locals. Regular gatherings and shared experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Live Events</h3>
                      <p className="text-gray-600">
                        Open mic nights, acoustic sessions, art exhibitions, and pop-up markets. There's always something happening at Club54.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mustard rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Cozy Atmosphere</h3>
                      <p className="text-gray-600">
                        Comfortable seating, great music, and warm ambiance. Whether you're working, relaxing, or socializing, feel right at home.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/community"
                  className="inline-block mt-8 bg-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black transition-colors uppercase tracking-wide"
                >
                  Join Our Community
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-red to-orange rounded-2xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-6 uppercase">Upcoming Events</h3>
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green rounded-full"></div>
                        <span className="font-semibold">Live Jazz Night</span>
                      </div>
                      <p className="text-sm text-white/90">This Friday at 7 PM</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green rounded-full"></div>
                        <span className="font-semibold">Coffee Tasting Workshop</span>
                      </div>
                      <p className="text-sm text-white/90">Saturday at 2 PM</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-mustard rounded-full"></div>
                        <span className="font-semibold">Open Mic Night</span>
                      </div>
                      <p className="text-sm text-white/90">Next Thursday at 8 PM</p>
                    </div>
                  </div>
                  <Link
                    href="/events"
                    className="block w-full mt-6 bg-white text-red px-6 py-3 rounded-lg font-semibold text-center hover:bg-biscuit transition-colors uppercase tracking-wide"
                  >
                    See All Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
              Ready to Experience <span className="text-red">Club54</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Visit us today for exceptional coffee, or get in touch to book your next event.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-red transition-all uppercase tracking-wide"
            >
              Visit or Book Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
