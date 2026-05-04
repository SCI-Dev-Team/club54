import { Bus, CarFront, Clock, Mail, MapPin, Phone, TrainFront } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TikTokIcon from '../components/TikTokIcon';
import InquiryForm from '../components/InquiryForm';
import { SITE_CONTACT } from '../lib/siteContact';

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black to-plum text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                Working concept — confidential
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wide">
                Contact & CSR alignment
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Reach out for communication, partnership exploration, or general inquiries about Club 54. Further operational details are shared in subsequent collaboration stages as the project develops.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 uppercase tracking-wide">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Office Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Address</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {SITE_CONTACT.addressLine1}
                        <br />
                        {SITE_CONTACT.addressLine2}, {SITE_CONTACT.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Phone</h3>
                      <p className="text-gray-700">
                        <a
                          href={`tel:${SITE_CONTACT.phoneTel}`}
                          className="hover:text-teal transition-colors"
                        >
                          {SITE_CONTACT.phoneDisplay}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Email</h3>
                      <p className="text-gray-700">
                        <a href={`mailto:${SITE_CONTACT.email}`} className="hover:text-orange transition-colors">
                          {SITE_CONTACT.email}
                        </a>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">We aim to respond within a few business days</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">Availability</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Scheduling details will follow formal alignment discussions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-black mb-4 uppercase">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href={SITE_CONTACT.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-biscuit rounded-lg flex items-center justify-center hover:bg-red hover:text-white transition-colors group"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6 text-black group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href={SITE_CONTACT.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-biscuit rounded-lg flex items-center justify-center hover:bg-teal hover:text-white transition-colors group"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6 text-black group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href={SITE_CONTACT.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-biscuit rounded-lg flex items-center justify-center hover:bg-purple hover:text-white transition-colors group"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="h-6 w-6 text-black group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <InquiryForm formType="general" title="Send Us a Message" />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-biscuit/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                Location
              </h2>
              <p className="text-xl text-gray-600">{SITE_CONTACT.addressFull}</p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2 uppercase">Club 54</h3>
                <p className="text-gray-700 mb-1">{SITE_CONTACT.addressLine1}</p>
                <p className="text-gray-700">{SITE_CONTACT.addressLine2}, {SITE_CONTACT.country}</p>
                <a
                  href={SITE_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-plum transition-colors uppercase tracking-wide"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Directions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                    <TrainFront className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-bold text-black uppercase">Transit</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Central Phnom Penh — plan extra time during peak traffic; grab apps serve Street 242 well.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                    <CarFront className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-bold text-black uppercase">Parking</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Street-side and nearby paid parking vary by time of day; confirm locally when you visit.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green rounded-lg flex items-center justify-center">
                    <Bus className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-bold text-black uppercase">Bus &amp; tuk-tuk</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Use Google Maps or local ride apps from your hotel or meeting point for the quickest route.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-biscuit rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3 uppercase">How do we explore partnership?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Share your organization’s focus (skills, events, storytelling, or responsible product collaborations) via the form or email. We will route your note to the appropriate lead and suggest next steps aligned with the Club 54 concept.
                </p>
              </div>

              <div className="bg-biscuit rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Is this a public venue listing?</h3>
                <p className="text-gray-700 leading-relaxed">
                  This site presents a working concept for communication and CSR alignment. It is not authorization to reproduce or implement the model without written agreement from the founding team.
                </p>
              </div>

              <div className="bg-biscuit rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3 uppercase">When will operational details be available?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Timelines, staffing, pricing (if applicable), and venue specifics will be shared as collaborations mature—consistent with the overview shared here.
                </p>
              </div>

              <div className="bg-biscuit rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Can media or communications teams get assets?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes—note your needs (brand narrative, impact storytelling, co-branded campaigns, or partner materials) and the communications team will coordinate under agreed guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
