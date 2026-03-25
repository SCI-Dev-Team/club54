'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

export default function CoworkingPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSpace, setSelectedSpace] = useState('');
  const [availabilityResult, setAvailabilityResult] = useState<{
    available: boolean;
    message: string;
  } | null>(null);

  const checkAvailability = () => {
    if (!selectedDate || !selectedSpace) {
      setAvailabilityResult({
        available: false,
        message: 'Please select both date and space type',
      });
      return;
    }

    // Simulate availability check
    const isAvailable = Math.random() > 0.3; // 70% chance of availability
    setAvailabilityResult({
      available: isAvailable,
      message: isAvailable
        ? `Great news! ${selectedSpace} is available on ${new Date(selectedDate).toLocaleDateString()}`
        : `Sorry, ${selectedSpace} is fully booked on ${new Date(selectedDate).toLocaleDateString()}. Try another date or contact us for alternatives.`,
    });
  };

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal to-green text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wide">
                Coworking Spaces
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Join a vibrant community of professionals in our flexible coworking spaces. Hot desks, dedicated desks, and private offices available.
              </p>
            </div>
          </div>
        </section>

        {/* Availability Checker */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-teal/10 to-green/10 rounded-xl p-8 border border-teal/20">
              <h2 className="text-3xl font-bold text-black mb-6 uppercase">
                Check Availability
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-black mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="spaceType" className="block text-sm font-medium text-black mb-2">
                    Space Type
                  </label>
                  <select
                    id="spaceType"
                    value={selectedSpace}
                    onChange={(e) => setSelectedSpace(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="">Select space type</option>
                    <option value="Hot Desk">Hot Desk</option>
                    <option value="Dedicated Desk">Dedicated Desk</option>
                    <option value="Private Office">Private Office</option>
                    <option value="Meeting Room">Meeting Room</option>
                  </select>
                </div>
              </div>

              <button
                onClick={checkAvailability}
                className="w-full bg-teal text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-green transition-colors uppercase tracking-wide"
              >
                Check Availability
              </button>

              {availabilityResult && (
                <div
                  className={`mt-6 p-4 rounded-lg border ${
                    availabilityResult.available
                      ? 'bg-green/10 border-green text-green'
                      : 'bg-orange/10 border-orange text-orange'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {availabilityResult.available ? (
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    <p className="font-medium">{availabilityResult.message}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Coworking Options */}
        <section className="py-20 bg-gradient-to-br from-biscuit/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                Flexible Membership Options
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your work style
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Hot Desk */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Hot Desk</h3>
                <p className="text-3xl font-bold text-teal mb-4">$29<span className="text-lg text-gray-600">/day</span></p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Any available desk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    High-speed WiFi
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Common areas
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Coffee & tea
                  </li>
                </ul>
              </div>

              {/* Dedicated Desk */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border-2 border-teal">
                <div className="bg-teal text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 uppercase">
                  Popular
                </div>
                <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Dedicated Desk</h3>
                <p className="text-3xl font-bold text-green mb-4">$399<span className="text-lg text-gray-600">/mo</span></p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your own desk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24/7 access
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lockable storage
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    5 hrs meeting room
                  </li>
                </ul>
              </div>

              {/* Private Office */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Private Office</h3>
                <p className="text-3xl font-bold text-purple mb-4">$899<span className="text-lg text-gray-600">/mo</span></p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Private lockable office
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    1-4 people
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fully furnished
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    10 hrs meeting room
                  </li>
                </ul>
              </div>

              {/* Meeting Room */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Meeting Room</h3>
                <p className="text-3xl font-bold text-orange mb-4">$45<span className="text-lg text-gray-600">/hr</span></p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Book by the hour
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    6-12 people capacity
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    AV equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Whiteboard & display
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Community Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-black mb-12 text-center uppercase tracking-wide">
              Coworking Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Networking Events</h3>
                <p className="text-gray-600">
                  Monthly meetups, workshops, and happy hours to connect with fellow members
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Premium Amenities</h3>
                <p className="text-gray-600">
                  On-site cafe, wellness room, phone booths, and recreational areas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Productivity Boost</h3>
                <p className="text-gray-600">
                  Designed spaces that inspire focus and creativity in a professional environment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-20 bg-gradient-to-br from-biscuit/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                Get Started Today
              </h2>
              <p className="text-xl text-gray-600">
                Contact us to schedule a tour or learn more about membership options
              </p>
            </div>

            <InquiryForm formType="coworking" title="Coworking Inquiry" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
