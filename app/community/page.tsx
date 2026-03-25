import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CommunityPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple to-pink text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wide">
                Community Ecosystem
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                More than workspace, Club54 is a vibrant ecosystem where professionals connect, collaborate, and thrive together. Experience a lifestyle designed around your success.
              </p>
            </div>
          </div>
        </section>

        {/* Community Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6 uppercase tracking-wide">
                  Join Our <span className="text-purple">Community</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Club54, we believe that the best ideas emerge when diverse minds come together. Our community brings together entrepreneurs, creatives, freelancers, startups, and established businesses under one roof.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Through regular events, workshops, and social gatherings, we create opportunities for meaningful connections, knowledge sharing, and collaborative growth.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink transition-colors uppercase tracking-wide"
                >
                  Become a Member
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple/10 to-pink/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-purple mb-2">500+</div>
                  <div className="text-gray-700 font-medium uppercase text-sm">Members</div>
                </div>
                <div className="bg-gradient-to-br from-teal/10 to-green/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-teal mb-2">50+</div>
                  <div className="text-gray-700 font-medium uppercase text-sm">Events/Year</div>
                </div>
                <div className="bg-gradient-to-br from-orange/10 to-mustard/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-orange mb-2">100+</div>
                  <div className="text-gray-700 font-medium uppercase text-sm">Companies</div>
                </div>
                <div className="bg-gradient-to-br from-red/10 to-plum/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-red mb-2">20+</div>
                  <div className="text-gray-700 font-medium uppercase text-sm">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Programs */}
        <section className="py-20 bg-gradient-to-br from-biscuit/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                Community Programs
              </h2>
              <p className="text-xl text-gray-600">
                Curated experiences designed to foster growth and connection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Networking Mixers</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Monthly evening socials where members connect over food and drinks. A relaxed atmosphere perfect for building relationships.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <span className="text-purple">Every last Thursday</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-teal rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Expert Workshops</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Learn from industry leaders through hands-on workshops covering business strategy, marketing, technology, and personal development.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <span className="text-teal">Bi-weekly sessions</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Lunch & Learns</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Midday knowledge-sharing sessions where members present their expertise or invite guest speakers for informal discussions.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <span className="text-orange">Weekly Wednesdays</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-pink rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Happy Hours</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Unwind with fellow members over complimentary drinks and appetizers. Perfect for casual networking and making friends.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <span className="text-pink">First Friday monthly</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Member Showcases</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Platform for members to present their businesses, projects, or ideas to the community and receive valuable feedback.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <span className="text-green">Monthly presentations</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-mustard rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">Wellness Programs</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Yoga sessions, meditation workshops, and wellness seminars to support your holistic well-being and work-life balance.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <span className="text-mustard">Multiple sessions weekly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle & Retail */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                Lifestyle & Amenities
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need for a balanced, productive day
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cafe & Lounge */}
              <div className="bg-gradient-to-br from-orange/5 to-mustard/5 rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 uppercase">Cafe & Lounge</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Artisan coffee bar, fresh pastries, and healthy meal options. Comfortable lounge seating for informal meetings or relaxation.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Premium coffee & espresso drinks
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Fresh breakfast & lunch options
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Snacks & beverages throughout the day
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fitness & Wellness */}
              <div className="bg-gradient-to-br from-teal/5 to-green/5 rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 uppercase">Fitness & Wellness</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    On-site fitness facilities and wellness rooms designed to help you stay healthy, focused, and energized throughout your workday.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Yoga & meditation space
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Shower & changing facilities
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Wellness programs & classes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Retail & Services */}
              <div className="bg-gradient-to-br from-purple/5 to-pink/5 rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="w-16 h-16 bg-purple rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 uppercase">Retail & Services</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Curated retail spaces and services that complement your professional lifestyle and make your day more convenient.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Pop-up shops & markets
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Dry cleaning & concierge
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Local artisan products
                    </li>
                  </ul>
                </div>
              </div>

              {/* Recreation */}
              <div className="bg-gradient-to-br from-pink/5 to-red/5 rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="w-16 h-16 bg-pink rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 uppercase">Recreation Areas</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Spaces designed for relaxation and informal collaboration. Take a break and recharge in style.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Game room & entertainment
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Outdoor terrace & garden
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Quiet zones for reflection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Member Testimonials */}
        <section className="py-20 bg-gradient-to-br from-biscuit/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                What Our Members Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-mustard" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "Club54 transformed how I work. The community here is incredibly supportive, and I've made connections that led to real business opportunities."
                </p>
                <div className="font-bold text-black">Sarah Chen</div>
                <div className="text-sm text-gray-600">Founder, Tech Startup</div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-mustard" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "The perfect blend of professional workspace and lifestyle amenities. I love the cafe, the events, and especially the collaborative atmosphere."
                </p>
                <div className="font-bold text-black">Marcus Johnson</div>
                <div className="text-sm text-gray-600">Creative Director</div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-mustard" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "Being part of Club54 means being part of something bigger. The networking events and workshops have been invaluable for my professional growth."
                </p>
                <div className="font-bold text-black">Elena Rodriguez</div>
                <div className="text-sm text-gray-600">Marketing Consultant</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-purple to-pink text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Experience the Club54 difference. Schedule a tour and meet our vibrant community.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple px-10 py-5 rounded-lg font-semibold text-xl hover:bg-biscuit transition-colors uppercase tracking-wide"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
