'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteLanguage } from '../lib/useSiteLanguage';
import { COMMUNITY_COPY } from '../lib/communityCopy';

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
              <h1 className="mb-6 text-4xl font-bold uppercase tracking-wide md:text-6xl">
                {t.heroTitleBefore}
                <span className="text-red">{t.heroTitleAccent}</span>
              </h1>
              <p className="text-xl leading-relaxed text-white/80">{t.heroBody}</p>
            </div>
          </div>
        </section>

        {/* Community Overview */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide text-black">
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

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm">
                  <div className="mb-2 text-4xl font-bold text-red">500+</div>
                  <div className="text-sm font-medium uppercase text-black/75">{t.statMembers}</div>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm">
                  <div className="mb-2 text-4xl font-bold text-red">50+</div>
                  <div className="text-sm font-medium uppercase text-black/75">{t.statEventsPerYear}</div>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm">
                  <div className="mb-2 text-4xl font-bold text-red">100+</div>
                  <div className="text-sm font-medium uppercase text-black/75">{t.statPartners}</div>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm">
                  <div className="mb-2 text-4xl font-bold text-red">20+</div>
                  <div className="text-sm font-medium uppercase text-black/75">{t.statWays}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Programs */}
        <section className="border-t border-black/10 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide text-black">{t.programsTitle}</h2>
              <p className="mx-auto max-w-2xl text-xl text-black/75">{t.programsSub}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {t.programCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-shadow hover:border-red/40 hover:shadow-md"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red text-white">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase text-black">{item.title}</h3>
                  <p className="mb-4 leading-relaxed text-black/80">{item.body}</p>
                  <div className="text-sm font-medium text-red">{item.when}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifestyle & spaces */}
        <section className="border-t border-black/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide text-black">{t.spaceTitle}</h2>
              <p className="mx-auto max-w-2xl text-xl text-black/75">{t.spaceSub}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.cafeBlockTitle}</h3>
                  <p className="mb-6 leading-relaxed text-black/80">{t.cafeBlockBody}</p>
                  <ul className="space-y-3 text-sm text-black/80">
                    {t.cafeBullets.map((line) => (
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
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.roomsBlockTitle}</h3>
                  <p className="mb-6 leading-relaxed text-black/80">{t.roomsBlockBody}</p>
                  <ul className="space-y-3 text-sm text-black/80">
                    {t.roomsBullets.map((line) => (
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
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.partnersBlockTitle}</h3>
                  <p className="mb-6 leading-relaxed text-black/80">{t.partnersBlockBody}</p>
                  <ul className="space-y-3 text-sm text-black/80">
                    {t.partnersBullets.map((line) => (
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
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.calmBlockTitle}</h3>
                  <p className="mb-6 leading-relaxed text-black/80">{t.calmBlockBody}</p>
                  <ul className="space-y-3 text-sm text-black/80">
                    {t.calmBullets.map((line) => (
                      <li key={line} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Member Testimonials */}
        <section className="border-t border-black/10 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide text-black">{t.testimonialsTitle}</h2>
              <p className="text-black/75">{t.testimonialsSub}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {t.testimonials.map((item) => (
                <div key={item.name} className="rounded-xl border border-black/10 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 italic leading-relaxed text-black/80">{item.quote}</p>
                  <div className="font-bold text-black">{item.name}</div>
                  <div className="text-sm text-black/60">{item.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/10 bg-black py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide md:text-5xl">
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
