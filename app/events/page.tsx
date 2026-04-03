'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';
import { useSiteLanguage } from '../lib/useSiteLanguage';
import { EVENTS_COPY } from '../lib/eventsCopy';
import { formatEventDate, useFirestoreEvents } from '../lib/useFirestoreEvents';
import { useFirestoreUpcomingEvents } from '../lib/useFirestoreUpcomingEvents';

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-black">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

function FeatureCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:border-red/40 hover:shadow-md">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-red text-white">
        {children}
      </div>
      <h3 className="text-base font-semibold uppercase tracking-wide text-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-black/75">{description}</p>
    </div>
  );
}

const FEATURE_ICONS: ReactNode[] = [
  <svg key="0" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8.25c-1.657 0-3 1.007-3 2.25s1.343 2.25 3 2.25 3-1.007 3-2.25-1.343-2.25-3-2.25zM12 8.25V3m0 5.25v11.25m0 0c1.657 0 3-1.007 3-2.25s-1.343-2.25-3-2.25-3 1.007-3 2.25 1.343 2.25 3 2.25z"
    />
  </svg>,
  <svg key="1" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>,
  <svg key="2" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    />
  </svg>,
  <svg key="3" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
    />
  </svg>,
  <svg key="4" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>,
  <svg key="5" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.288 15.036a5.5 5.5 0 017.424 0M5.106 11.289a9 9 0 0113.788 0M1.757 7.575a13.5 13.5 0 0120.486 0M12.75 18.75h.008v.008h-.008v-.008z"
    />
  </svg>,
  <svg key="6" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
    />
  </svg>,
  <svg key="7" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>,
];

function EventCta({ href, label }: { href: string; label: string }) {
  const className =
    'inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-red transition-colors hover:text-black';
  const chevron = (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
  if (href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link href={href} className={className}>
        {label}
        {chevron}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {label}
      {chevron}
    </a>
  );
}

export default function EventsPage() {
  const lang = useSiteLanguage();
  const t = EVENTS_COPY[lang];
  const { events, loading, error, configured } = useFirestoreEvents(lang);
  const {
    upcoming,
    loading: upcomingLoading,
    error: upcomingError,
    configured: upcomingConfigured,
  } = useFirestoreUpcomingEvents(lang);

  return (
    <>
      <Header />

      <main className="bg-white text-black">
        {/* Hero */}
        <section className="border-b border-black/10 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-red">{t.heroEyebrow}</p>
            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="text-lg leading-relaxed text-black/80">{t.heroBody}</p>
          </div>
        </section>

        {!configured && (
          <section className="border-b border-amber-200 bg-amber-50 py-5 text-black">
            <div className="mx-auto max-w-3xl px-4 text-center text-sm leading-relaxed text-amber-950 sm:px-6 lg:px-8">
              {t.eventsFirebaseMissing}
            </div>
          </section>
        )}

        {/* Firestore: scheduled events (`events`) — headings always show; data needs env + rules */}
        <section className="border-b border-black/10 bg-black/[0.02] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold text-black md:text-4xl">{t.eventsScheduleTitle}</h2>
              <p className="mt-3 text-lg text-black/75">{t.eventsScheduleSub}</p>
              <div className="mx-auto mt-4 h-1 w-14 bg-red" aria-hidden />
            </div>

            {!configured ? null : loading ? (
              <p className="text-center text-black/70">{t.eventsLoading}</p>
            ) : error ? (
              <p className="text-center text-red">{t.eventsError}</p>
            ) : events.length === 0 ? (
              <p className="text-center text-black/70">{t.eventsEmpty}</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {events.map((ev) => (
                  <article
                    key={ev.documentId}
                    className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:border-red/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] w-full bg-black/5">
                      {ev.image ? (
                        <Image
                          src={ev.image}
                          alt={ev.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          unoptimized
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-medium uppercase tracking-widest text-red">
                        {formatEventDate(ev.date, lang)}
                      </p>
                      {ev.location ? (
                        <p className="mt-1 text-sm text-black/60">{ev.location}</p>
                      ) : null}
                      <h3 className="mt-3 text-xl font-semibold text-black">{ev.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-black/75">{ev.description}</p>
                      <div className="mt-6">
                        <EventCta href={ev.ctaHref} label={ev.ctaLabel} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Firestore: spotlight (`upcomingEvents`) */}
        <section className="border-b border-black/10 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold text-black md:text-4xl">{t.eventsSpotlightTitle}</h2>
              <p className="mt-3 text-lg text-black/75">{t.eventsSpotlightSub}</p>
              <div className="mx-auto mt-4 h-1 w-14 bg-red" aria-hidden />
            </div>

            {!upcomingConfigured ? null : upcomingLoading ? (
              <p className="text-center text-black/70">{t.eventsSpotlightLoading}</p>
            ) : upcomingError ? (
              <p className="text-center text-red">{t.eventsSpotlightError}</p>
            ) : upcoming.length === 0 ? (
              <p className="text-center text-black/70">{t.eventsSpotlightEmpty}</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((ev) => (
                  <article
                    key={ev.documentId}
                    className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] shadow-sm transition-shadow hover:border-red/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] w-full bg-black/5">
                      {ev.image ? (
                        <Image
                          src={ev.image}
                          alt={ev.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          unoptimized
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      {ev.type ? (
                        <span
                          className={`mb-3 inline-flex w-fit rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide ${ev.typeColor}`}
                        >
                          {ev.type}
                        </span>
                      ) : null}
                      <h3 className="text-xl font-semibold text-black">{ev.title}</h3>
                      <p className="mt-2 text-sm text-black/70">
                        {[ev.day, ev.month, ev.year].filter(Boolean).join(' ')}
                        {ev.location ? ` · ${ev.location}` : ''}
                      </p>
                      {ev.spots ? (
                        <p
                          className={`mt-3 text-sm ${ev.spotsUrgent ? 'font-semibold text-red' : 'text-black/60'}`}
                        >
                          {ev.spots}
                        </p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* What you can host */}
        {/* <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-black md:text-4xl">{t.hostTitle}</h2>
              <p className="mt-3 text-lg text-black/75">{t.hostSub}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8.25c-1.657 0-3 1.007-3 2.25s1.343 2.25 3 2.25 3-1.007 3-2.25-1.343-2.25-3-2.25zM12 8.25V3m0 5.25v11.25m0 0c1.657 0 3-1.007 3-2.25s-1.343-2.25-3-2.25-3 1.007-3 2.25 1.343 2.25 3 2.25z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-black">{t.cafeColumnTitle}</h3>
                <ul className="space-y-3 text-black">
                  {t.cafeItems.map((line) => (
                    <CheckItem key={line}>{line}</CheckItem>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H17.25v-.008zm0 3h.008v.008H17.25v-.008zm0 3h.008v.008H17.25v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-black">{t.roomColumnTitle}</h3>
                <ul className="space-y-3 text-black">
                  {t.roomItems.map((line) => (
                    <CheckItem key={line}>{line}</CheckItem>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12c-1.657 0-3.156.67-4.243 1.757M12 12V9m0 3H9m3 0h3m-3 0v3m0-3V9"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-black">{t.otherColumnTitle}</h3>
                <ul className="space-y-3 text-black">
                  {t.otherItems.map((line) => (
                    <CheckItem key={line}>{line}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section> */}

        {/* Space & service */}
        <section className="border-t border-black/10 bg-black py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">{t.spaceTitle}</h2>
              <div className="mx-auto mt-4 h-1 w-14 bg-red" aria-hidden />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.features.map((f, i) => (
                <FeatureCard key={f.title} title={f.title} description={f.description}>
                  {FEATURE_ICONS[i]}
                </FeatureCard>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry */}
        <section className="border-t border-black/10 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-black md:text-4xl">{t.inquiryTitle}</h2>
              <p className="mt-3 text-lg text-black/75">{t.inquirySub}</p>
            </div>

            <InquiryForm formType="event" title={t.inquiryFormTitle} key={lang} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
