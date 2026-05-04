'use client';

import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ChevronRight,
  CloudSun,
  Coffee,
  DoorOpen,
  Headset,
  LayoutGrid,
  MonitorPlay,
  Users,
  Wifi,
} from 'lucide-react';
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

const FEATURE_ICONS: LucideIcon[] = [
  Coffee,
  DoorOpen,
  LayoutGrid,
  MonitorPlay,
  CloudSun,
  Wifi,
  Headset,
  Users,
];

function EventCta({ href, label }: { href: string; label: string }) {
  const className =
    'inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-red transition-colors hover:text-black';
  const chevron = <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden />;
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
              {t.features.map((f, i) => {
                const FeatureIcon = FEATURE_ICONS[i] ?? Coffee;
                return (
                  <FeatureCard key={f.title} title={f.title} description={f.description}>
                    <FeatureIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </FeatureCard>
                );
              })}
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
