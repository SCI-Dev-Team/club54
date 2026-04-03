'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSiteLanguage } from './lib/useSiteLanguage';
import { HOME_COPY } from './lib/homeCopy';

export default function Home() {
  const lang = useSiteLanguage();
  const t = HOME_COPY[lang];

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mb-6 text-5xl font-bold uppercase leading-tight tracking-wide md:text-7xl">
                  {t.heroTitleBefore} <span className="text-red">{t.heroTitleAccent}</span>
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-white/80 md:text-2xl">{t.heroSubtitle}</p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-red px-8 py-4 text-center text-lg font-semibold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-red"
                  >
                    {t.visitUsToday}
                  </Link>
                  <Link
                    href="#menu"
                    className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-center text-lg font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                  >
                    {t.viewMenu}
                  </Link>
                </div>
              </div>

              <div className="hidden justify-center lg:flex">
                <div className="relative w-full max-w-lg">
                  <Image
                    src="/hero-coffee.png"
                    alt={t.heroImageAlt}
                    width={600}
                    height={600}
                    className="h-auto w-full drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section id="menu" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide text-black md:text-5xl">
                {t.whatWeOffer}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-black/75">{t.whatWeOfferSub}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red/40 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red transition-transform group-hover:scale-110">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.premiumCoffee}</h3>
                <p className="mb-6 leading-relaxed text-black/80">{t.premiumCoffeeDesc}</p>
                <Link
                  href="/#menu"
                  className="inline-flex items-center font-semibold uppercase tracking-wide text-red transition-colors hover:text-black"
                >
                  {t.viewFullMenu}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red/40 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red transition-transform group-hover:scale-110">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.freshFood}</h3>
                <p className="mb-6 leading-relaxed text-black/80">{t.freshFoodDesc}</p>
                <Link
                  href="/#menu"
                  className="inline-flex items-center font-semibold uppercase tracking-wide text-red transition-colors hover:text-black"
                >
                  {t.seeMenu}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red/40 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red transition-transform group-hover:scale-110">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.privateEvents}</h3>
                <p className="mb-6 leading-relaxed text-black/80">{t.privateEventsDesc}</p>
                <Link
                  href="/events"
                  className="inline-flex items-center font-semibold uppercase tracking-wide text-red transition-colors hover:text-black"
                >
                  {t.bookEventSpace}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Experience */}
        <section className="border-t border-black/10 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide text-black md:text-5xl">
                  {t.moreThanJust} <span className="text-red">{t.coffeeWord}</span>
                </h2>
                <p className="mb-8 text-xl leading-relaxed text-black/80">{t.communityBlurb}</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold uppercase text-black">{t.communityVibes}</h3>
                      <p className="text-black/75">{t.communityVibesDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold uppercase text-black">{t.liveEvents}</h3>
                      <p className="text-black/75">{t.liveEventsDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold uppercase text-black">{t.cozyAtmosphere}</h3>
                      <p className="text-black/75">{t.cozyAtmosphereDesc}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/community"
                  className="mt-8 inline-block rounded-lg bg-red px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black"
                >
                  {t.joinCommunity}
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-black/10 bg-black p-8 text-white">
                  <h3 className="mb-6 text-3xl font-bold uppercase">
                    {t.upcoming} <span className="text-red">{t.eventsWord}</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-red"></div>
                        <span className="font-semibold">{t.event1Title}</span>
                      </div>
                      <p className="text-sm text-white/80">{t.event1Time}</p>
                    </div>
                    <div className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-red"></div>
                        <span className="font-semibold">{t.event2Title}</span>
                      </div>
                      <p className="text-sm text-white/80">{t.event2Time}</p>
                    </div>
                    <div className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-white"></div>
                        <span className="font-semibold">{t.event3Title}</span>
                      </div>
                      <p className="text-sm text-white/80">{t.event3Time}</p>
                    </div>
                  </div>
                  <Link
                    href="/events"
                    className="mt-6 block w-full rounded-lg bg-red px-6 py-3 text-center font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-red"
                  >
                    {t.seeAllEvents}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide md:text-5xl">
              {t.readyPrefix} <span className="text-red">{t.readyAccent}</span>
              {t.readySuffix}
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-white/80">{t.ctaSub}</p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-red px-10 py-5 text-xl font-semibold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-red"
            >
              {t.visitOrBook}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
