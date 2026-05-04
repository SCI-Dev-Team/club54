'use client';

import Link from 'next/link';
import { Coffee, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

export default function CoworkingPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative bg-gradient-to-br from-teal to-green py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/80">
              Working concept — collaborative workspace
            </p>
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold tracking-wide md:text-6xl">Collaborative workspace</h1>
              <p className="text-xl leading-relaxed text-gray-100">
                Club54 combines a community café with collaborative workspace and youth learning so professionals,
                mentors, and partners can share real-world learning moments alongside young people. Specific layouts,
                capacity, and booking models will be confirmed as collaborations advance—consistent with the
                confidential overview shared for CSR alignment.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-xl border border-black/10 p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-teal text-white">
                <Users className="h-7 w-7" strokeWidth={2} aria-hidden />
              </div>
              <h2 className="mb-4 text-2xl font-bold tracking-wide text-black">Purpose in the space</h2>
              <p className="leading-relaxed text-black/80">
                The workspace exists to host youth ideation and creative projects, training and mentorship activities,
                community dialogues, and partner meetings that reinforce empowerment—not as a generic hot-desk
                marketplace. Revenue approaches (where applicable) support the social enterprise vision described in
                the Club54 overview.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-green text-white">
                <Coffee className="h-7 w-7" strokeWidth={2} aria-hidden />
              </div>
              <h2 className="mb-4 text-2xl font-bold tracking-wide text-black">Coffee culture & rhythm</h2>
              <p className="leading-relaxed text-black/80">
                Café activity anchors daily rhythm: responsible coffee culture, informal mentorship moments, and entry
                points for neighbors and partners. Operational menus, hours, and staffing plans roll out in later project
                stages once agreements are in place.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-gradient-to-br from-biscuit/30 to-white py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-black">Next steps</h2>
            <p className="mb-8 text-lg leading-relaxed text-black/75">
              Use the inquiry form to introduce your organization, preferred collaboration track, and timeline. If you
              need communications support (brand narrative, impact storytelling, partner materials), mention that in your
              note.
            </p>
            <Link
              href="/community"
              className="inline-block rounded-lg border border-black/20 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:border-red hover:text-red"
            >
              Read full overview
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <InquiryForm formType="coworking" title="Collaborative space inquiry" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
