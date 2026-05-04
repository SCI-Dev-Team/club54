'use client';

import Link from 'next/link';
import { CalendarDays, Coffee, Lightbulb, Megaphone, Presentation, UsersRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteLanguage } from '../lib/useSiteLanguage';
import { COMMUNITY_COPY } from '../lib/communityCopy';

const PROGRAM_ICONS: LucideIcon[] = [Lightbulb, Presentation, CalendarDays, Coffee];

export default function CommunityPage() {
  const lang = useSiteLanguage();
  const t = COMMUNITY_COPY[lang];

  return (
    <>
      <Header />

      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="relative border-b border-black/10 bg-black py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-red">{t.heroEyebrow}</p>
              <h1 className="mb-6 text-4xl font-bold tracking-wide md:text-6xl">
                {t.heroTitleBefore}
                <span className="text-red">{t.heroTitleAccent}</span>
              </h1>
              <p className="text-xl leading-relaxed text-white/80">{t.heroBody}</p>
            </div>
          </div>
        </section>

        {/* About & impact focus */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold tracking-wide text-black">
                  {t.joinTitleBefore}
                  <span className="text-red">{t.joinTitleAccent}</span>
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-black/80">{t.overviewP1}</p>
                <p className="mb-8 text-lg leading-relaxed text-black/80">{t.overviewP2}</p>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-red px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black"
                >
                  {t.becomeMember}
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                {t.impactAreas.map((area) => (
                  <div key={area.title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                    <h3 className="mb-2 text-lg font-bold leading-snug text-red">{area.title}</h3>
                    <p className="text-sm leading-relaxed text-black/75">{area.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Purpose & programming pillars */}
        <section className="border-t border-black/10 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-wide text-black">{t.programsTitle}</h2>
              <p className="mx-auto max-w-2xl text-xl text-black/75">{t.programsSub}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {t.programCards.map((item, index) => {
                const ProgramIcon = PROGRAM_ICONS[index] ?? Lightbulb;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-shadow hover:border-red/40 hover:shadow-md"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red text-white">
                      <ProgramIcon className="h-7 w-7" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-black">{item.title}</h3>
                    <p className="mb-4 leading-relaxed text-black/80">{item.body}</p>
                    <div className="text-sm font-medium text-red">{item.when}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership & communication */}
        <section className="border-t border-black/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red text-white">
                    <UsersRound className="h-8 w-8" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black">{t.partnershipTitle}</h3>
                  <p className="mb-6 leading-relaxed text-black/80">{t.partnershipSub}</p>
                  <ul className="space-y-3 text-sm text-black/80">
                    {t.partnershipBullets.map((line) => (
                      <li key={line} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red text-white">
                    <Megaphone className="h-8 w-8" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black">{t.communicationTitle}</h3>
                  <p className="mb-6 leading-relaxed text-black/80">{t.communicationSub}</p>
                  <ul className="space-y-3 text-sm text-black/80">
                    {t.communicationBullets.map((line) => (
                      <li key={line} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-black/65">
              {t.operationalNote}
            </p>
          </div>
        </section>

        {/* Intellectual ownership */}
        <section className="border-t border-black/10 bg-black/[0.03] py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold tracking-wide text-black">{t.ipTitle}</h2>
            <p className="mb-6 text-lg leading-relaxed text-black/80">{t.ipLead}</p>
            <p className="text-base leading-relaxed text-black/75">{t.ipClosing}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/10 bg-black py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-4xl font-bold tracking-wide md:text-5xl">
              {t.ctaTitleBefore}
              <span className="text-red">{t.ctaTitleAccent}</span>
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-white/80">{t.ctaSub}</p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-red px-10 py-5 text-xl font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-red"
            >
              {t.ctaButton}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
