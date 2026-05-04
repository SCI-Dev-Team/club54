import { Building2, Handshake, Shield } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

export default function OfficeLeasingPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative bg-gradient-to-br from-red to-plum py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/80">
              Partnership & long-term space — concept stage
            </p>
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold uppercase tracking-wide md:text-6xl">Space partnerships</h1>
              <p className="text-xl leading-relaxed text-gray-100">
                Club 54 contemplates durable space arrangements that keep youth programming, mentorship, and café
                culture connected. Traditional office leasing language does not fully capture the intent; instead,
                alignments are explored with partners who share youth empowerment, sustainability, and community values.
                Detailed leasing parameters will emerge through structured collaboration—not through speculative listings.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-biscuit p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red text-white">
                  <Handshake className="h-6 w-6" strokeWidth={2} aria-hidden />
                </div>
                <h2 className="mb-3 text-xl font-bold uppercase text-black">Values-first alignment</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                  Potential collaborators include mission-aligned enterprises, NGOs, and CSR teams interested in skills,
                  events, storytelling, or responsible programs—not solely tenant prospecting.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-biscuit p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-teal text-white">
                  <Building2 className="h-6 w-6" strokeWidth={2} aria-hidden />
                </div>
                <h2 className="mb-3 text-xl font-bold uppercase text-black">Integrated programming</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                  Physical space decisions consider workshop rooms, mentorship touchpoints, youth zones, and café flow.
                  Requirements are co-developed rather than sold from a static catalog.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-biscuit p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple text-white">
                  <Shield className="h-6 w-6" strokeWidth={2} aria-hidden />
                </div>
                <h2 className="mb-3 text-xl font-bold uppercase text-black">Confidential framework</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                  The Club 54 concept remains owned by the founding team. Discuss how your organization can engage without
                  assuming authorization to replicate the model without written agreement.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-red px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide text-black">Partnership inquiry</h2>
              <p className="text-xl text-gray-600">
                Outline your goals, timeline, and governance contacts. We will respond with appropriate next steps as the
                project develops.
              </p>
            </div>

            <InquiryForm formType="office" title="Space partnership inquiry" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
