import {
  Building2,
  Check,
  Clock,
  MapPin,
  Puzzle,
  Settings2,
  ShieldCheck,
  User,
  Users,
  Wifi,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

export default function OfficeLeasingPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red to-plum text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wide">
                Office Leasing
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Professional office spaces designed for growing businesses. From intimate private offices to expansive team suites, find the perfect space for your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Office Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                Choose Your Office Space
              </h2>
              <p className="text-xl text-gray-600">
                Flexible leasing options tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Private Office */}
              <div className="bg-biscuit rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red rounded-lg flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Private Office</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Individual lockable office space
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    1-3 people
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    24/7 access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    Furnished
                  </li>
                </ul>
              </div>

              {/* Team Suite */}
              <div className="bg-biscuit rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Team Suite</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Open-plan team workspace
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    5-15 people
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    Collaborative layout
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    Meeting room access
                  </li>
                </ul>
              </div>

              {/* Executive Suite */}
              <div className="bg-biscuit rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Executive Suite</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Premium corner office space
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    3-5 people
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    Premium finishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    Private reception
                  </li>
                </ul>
              </div>

              {/* Custom Space */}
              <div className="bg-biscuit rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-mustard rounded-lg flex items-center justify-center mb-4">
                  <Puzzle className="w-6 h-6 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 uppercase">Custom Space</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Tailored to your specifications
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    15+ people
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    Custom layout
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green" strokeWidth={3} aria-hidden />
                    Build-to-suit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Amenities */}
        <section className="py-20 bg-gradient-to-br from-biscuit/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-black mb-12 text-center uppercase tracking-wide">
              What's Included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">High-Speed Internet</h3>
                  <p className="text-sm text-gray-600">Enterprise-grade fiber connection</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings2 className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Meeting Rooms</h3>
                  <p className="text-sm text-gray-600">Bookable conference spaces</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Fully Furnished</h3>
                  <p className="text-sm text-gray-600">Modern ergonomic furniture</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">24/7 Security</h3>
                  <p className="text-sm text-gray-600">Secure access control system</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Prime Location</h3>
                  <p className="text-sm text-gray-600">Central business district access</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Flexible Terms</h3>
                  <p className="text-sm text-gray-600">Short or long-term leases</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-wide">
                Request Office Information
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and our team will contact you within 24 hours
              </p>
            </div>

            <InquiryForm formType="office" title="Office Leasing Inquiry" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
