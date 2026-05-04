'use client';

import { Bus, CarFront, Clock, Mail, MapPin, Phone, TrainFront } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TikTokIcon from '../components/TikTokIcon';
import InquiryForm from '../components/InquiryForm';
import { SITE_CONTACT } from '../lib/siteContact';
import { CONTACT_COPY } from '../lib/contactCopy';
import { useSiteLanguage } from '../lib/useSiteLanguage';

export default function ContactPage() {
  const lang = useSiteLanguage();
  const t = CONTACT_COPY[lang];
  const addressOneLine = `${SITE_CONTACT.addressLine1}, ${SITE_CONTACT.addressLine2}, ${t.countryName}`;

  return (
    <>
      <Header />

      <main>
        <section className="relative bg-gradient-to-br from-black to-plum py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-widest text-white/70">{t.heroEyebrow}</p>
              <h1 className="mb-6 text-5xl font-bold tracking-wide md:text-6xl normal-case">
                {t.heroTitle}
              </h1>
              <p className="text-xl leading-relaxed text-gray-100">{t.heroBody}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 text-3xl font-bold tracking-wide text-black">{t.sectionContactInfo}</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red">
                      <MapPin className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black">{t.labelAddress}</h3>
                      <p className="leading-relaxed text-gray-700">
                        {SITE_CONTACT.addressLine1}
                        <br />
                        {SITE_CONTACT.addressLine2}, {t.countryName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal">
                      <Phone className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black">{t.labelPhone}</h3>
                      <p className="text-gray-700">
                        <a href={`tel:${SITE_CONTACT.phoneTel}`} className="transition-colors hover:text-teal">
                          {SITE_CONTACT.phoneDisplay}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange">
                      <Mail className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black">{t.labelEmail}</h3>
                      <p className="text-gray-700">
                        <a href={`mailto:${SITE_CONTACT.email}`} className="transition-colors hover:text-orange">
                          {SITE_CONTACT.email}
                        </a>
                      </p>
                      <p className="mt-1 text-sm text-gray-600">{t.emailNote}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple">
                      <Clock className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black">{t.labelAvailability}</h3>
                      <div className="space-y-1 text-gray-700">
                        <p>{t.availabilityBody}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="mb-4 text-xl font-bold text-black">{t.followUs}</h3>
                  <div className="flex gap-4">
                    <a
                      href={SITE_CONTACT.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-12 w-12 items-center justify-center rounded-lg bg-biscuit transition-colors hover:bg-red hover:text-white"
                      aria-label="Facebook"
                    >
                      <svg className="h-6 w-6 text-black group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={SITE_CONTACT.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-12 w-12 items-center justify-center rounded-lg bg-biscuit transition-colors hover:bg-teal hover:text-white"
                      aria-label="Instagram"
                    >
                      <svg className="h-6 w-6 text-black group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href={SITE_CONTACT.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-12 w-12 items-center justify-center rounded-lg bg-biscuit transition-colors hover:bg-purple hover:text-white"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="h-6 w-6 text-black group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <InquiryForm formType="general" inquiryLabels={t.inquiryGeneral} key={lang} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-biscuit/30 to-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-wide text-black">{t.sectionLocation}</h2>
              <p className="text-xl text-gray-600">{addressOneLine}</p>
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9022784206986!2d104.92405801003447!3d11.558862844228354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513a11e8253b%3A0x2655e7df533763a9!2sSave%20the%20Children%20in%20Cambodia!5e0!3m2!1sen!2skh!4v1777886837166!5m2!1sen!2skh"
                title={t.mapIframeTitle}
                width="600"
                height="450"
                className="h-[450px] w-full border-0 max-md:h-[320px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex justify-center bg-white px-4 py-4">
                <a
                  href={SITE_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center rounded-lg bg-red px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-plum"
                >
                  {t.openInGoogleMaps}
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal">
                    <TrainFront className="h-5 w-5 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-bold text-black">{t.dirTransitTitle}</h3>
                </div>
                <p className="text-sm text-gray-600">{t.dirTransitBody}</p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange">
                    <CarFront className="h-5 w-5 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-bold text-black">{t.dirParkingTitle}</h3>
                </div>
                <p className="text-sm text-gray-600">{t.dirParkingBody}</p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green">
                    <Bus className="h-5 w-5 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-bold text-black">{t.dirBusTitle}</h3>
                </div>
                <p className="text-sm text-gray-600">{t.dirBusBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-wide text-black">{t.faqTitle}</h2>
            </div>

            <div className="space-y-6">
              {t.faqs.map((item) => (
                <div key={item.q} className="rounded-xl bg-biscuit p-6">
                  <h3 className="mb-3 text-xl font-bold text-black">{item.q}</h3>
                  <p className="leading-relaxed text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
