import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-plum to-black text-white min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wide leading-tight">
                Where Work Meets <span className="text-red">Community</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Premium office spaces, vibrant coworking, and unforgettable events in one dynamic ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red transition-all uppercase tracking-wide text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="#features"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all uppercase tracking-wide text-center border border-white/30"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 uppercase tracking-wide">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible spaces designed for modern businesses and dynamic communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Office Leasing */}
              <div className="group bg-biscuit rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-red rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Office Leasing</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Professional office spaces tailored to your business needs. From private offices to full suites, find your perfect workspace.
                </p>
                <Link
                  href="/office-leasing"
                  className="inline-flex items-center text-red font-semibold hover:text-plum transition-colors uppercase tracking-wide"
                >
                  Explore Offices
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Coworking */}
              <div className="group bg-biscuit rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Coworking Spaces</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Flexible desks in a collaborative environment. Hot desks, dedicated spaces, and meeting rooms available.
                </p>
                <Link
                  href="/coworking"
                  className="inline-flex items-center text-teal font-semibold hover:text-green transition-colors uppercase tracking-wide"
                >
                  View Spaces
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
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Event Hosting</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Host memorable events in our versatile spaces. Perfect for workshops, launches, networking, and corporate gatherings.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center text-orange font-semibold hover:text-mustard transition-colors uppercase tracking-wide"
                >
                  Plan Event
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
                  More Than Just <span className="text-red">Workspace</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Club54 is a thriving ecosystem where professionals connect, collaborate, and grow together.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Community Ecosystem</h3>
                      <p className="text-gray-600">
                        Join a network of entrepreneurs, creatives, and professionals. Regular networking events and collaborative opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Retail + Lifestyle</h3>
                      <p className="text-gray-600">
                        On-site cafe, fitness center, and curated retail spaces. Everything you need for work-life balance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mustard rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Flexible Multi-Use Spaces</h3>
                      <p className="text-gray-600">
                        Adaptable spaces that transform from quiet work zones to vibrant event venues. Your space, your way.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/community"
                  className="inline-block mt-8 bg-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black transition-colors uppercase tracking-wide"
                >
                  Explore Community
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-red to-orange rounded-2xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-6 uppercase">Check Availability</h3>
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green rounded-full"></div>
                        <span className="font-semibold">Private Offices</span>
                      </div>
                      <p className="text-sm text-white/90">Available now</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green rounded-full"></div>
                        <span className="font-semibold">Hot Desks</span>
                      </div>
                      <p className="text-sm text-white/90">Available now</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-mustard rounded-full"></div>
                        <span className="font-semibold">Event Space</span>
                      </div>
                      <p className="text-sm text-white/90">Limited availability</p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full mt-6 bg-white text-red px-6 py-3 rounded-lg font-semibold text-center hover:bg-biscuit transition-colors uppercase tracking-wide"
                  >
                    Request Information
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
              Ready to Join <span className="text-red">Club54</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get in touch with our team to discuss your workspace needs and schedule a tour.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-red transition-all uppercase tracking-wide"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
