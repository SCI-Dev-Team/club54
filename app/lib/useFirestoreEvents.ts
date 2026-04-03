'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { getFirestoreDb } from './firebase';
import type { SiteLanguage } from './useSiteLanguage';

export type FirestoreEventRow = {
  /** Firestore document id */
  documentId: string;
  id: number | null;
  ctaHref: string;
  ctaLabel: string;
  date: Date;
  description: string;
  image: string;
  locale: string;
  location: string;
  title: string;
};

function toDate(value: unknown): Date | null {
  if (value instanceof Timestamp) return value.toDate();
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
  if (typeof value === 'string' || typeof value === 'number') {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  return null;
}

function mapDoc(
  documentId: string,
  data: Record<string, unknown>,
): FirestoreEventRow | null {
  const date = toDate(data.date);
  if (!date) return null;

  const title = typeof data.title === 'string' ? data.title : '';
  const description = typeof data.description === 'string' ? data.description : '';
  const image = typeof data.image === 'string' ? data.image : '';
  const locale = typeof data.locale === 'string' ? data.locale : '';
  const location = typeof data.location === 'string' ? data.location : '';
  const ctaHref = typeof data.ctaHref === 'string' ? data.ctaHref : '#';
  const ctaLabel = typeof data.ctaLabel === 'string' ? data.ctaLabel : '';

  let id: number | null = null;
  if (typeof data.id === 'number' && Number.isFinite(data.id)) id = data.id;
  else if (typeof data.id === 'string' && data.id.trim() !== '') {
    const n = Number(data.id);
    if (Number.isFinite(n)) id = n;
  }

  return {
    documentId,
    id,
    ctaHref,
    ctaLabel,
    date,
    description,
    image,
    locale,
    location,
    title,
  };
}

export function formatEventDate(date: Date, lang: SiteLanguage): string {
  const localeTag = lang === 'km' ? 'km-KH' : 'en-GB';
  return new Intl.DateTimeFormat(localeTag, {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Asia/Bangkok',
  }).format(date);
}

export function useFirestoreEvents(lang: SiteLanguage) {
  const [events, setEvents] = useState<FirestoreEventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const db = getFirestoreDb();
    if (!db) {
      setEvents([]);
      setLoading(false);
      setError(null);
      return;
    }

    const firestore = db;
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const snap = await getDocs(collection(firestore, 'events'));
        if (cancelled) return;

        const rows: FirestoreEventRow[] = [];
        snap.forEach((docSnap) => {
          const mapped = mapDoc(docSnap.id, docSnap.data() as Record<string, unknown>);
          if (!mapped || mapped.locale !== lang) return;
          rows.push(mapped);
        });
        rows.sort((a, b) => a.date.getTime() - b.date.getTime());
        setEvents(rows);
      } catch (e) {
        if (!cancelled) {
          setEvents([]);
          setError(e instanceof Error ? e.message : 'Failed to load events');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [lang]);

  return { events, loading, error, configured: getFirestoreDb() !== null };
}
