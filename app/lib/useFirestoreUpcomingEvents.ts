'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestoreDb } from './firebase';
import type { SiteLanguage } from './useSiteLanguage';

export type FirestoreUpcomingEventRow = {
  documentId: string;
  id: number | null;
  day: string;
  month: string;
  year: string;
  image: string;
  locale: string;
  location: string;
  spots: string;
  spotsUrgent: boolean;
  title: string;
  type: string;
  /** Tailwind utility classes for the type badge (see `globals.css` @source inline if using arbitrary values). */
  typeColor: string;
};

const MONTH_ORDER: Record<string, number> = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
};

function monthOrder(month: string): number {
  const key = month.trim().toUpperCase().slice(0, 3);
  return MONTH_ORDER[key] ?? 99;
}

function sortUpcoming(a: FirestoreUpcomingEventRow, b: FirestoreUpcomingEventRow): number {
  const ya = parseInt(a.year, 10) || 0;
  const yb = parseInt(b.year, 10) || 0;
  if (ya !== yb) return ya - yb;
  const ma = monthOrder(a.month);
  const mb = monthOrder(b.month);
  if (ma !== mb) return ma - mb;
  const da = parseInt(a.day, 10) || 0;
  const db = parseInt(b.day, 10) || 0;
  if (da !== db) return da - db;
  return (a.id ?? 0) - (b.id ?? 0);
}

function parseNumericId(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return null;
}

function mapDoc(documentId: string, data: Record<string, unknown>): FirestoreUpcomingEventRow | null {
  const title = typeof data.title === 'string' ? data.title.trim() : '';
  if (!title) return null;

  const day = typeof data.day === 'string' ? data.day : '';
  const month = typeof data.month === 'string' ? data.month : '';
  const year = typeof data.year === 'string' ? data.year : '';
  const image = typeof data.image === 'string' ? data.image : '';
  const locale = typeof data.locale === 'string' ? data.locale : '';
  const location = typeof data.location === 'string' ? data.location : '';
  const spots = typeof data.spots === 'string' ? data.spots : '';
  const type = typeof data.type === 'string' ? data.type : '';
  const typeColor =
    typeof data.typeColor === 'string' && data.typeColor.trim() !== ''
      ? data.typeColor.trim()
      : 'text-white/90 bg-white/10';

  const spotsUrgent = data.spotsUrgent === true;

  return {
    documentId,
    id: parseNumericId(data.id),
    day,
    month,
    year,
    image,
    locale,
    location,
    spots,
    spotsUrgent,
    title,
    type,
    typeColor,
  };
}

export function useFirestoreUpcomingEvents(lang: SiteLanguage) {
  const [upcoming, setUpcoming] = useState<FirestoreUpcomingEventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const db = getFirestoreDb();
    if (!db) {
      setUpcoming([]);
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
        const snap = await getDocs(collection(firestore, 'upcomingEvents'));
        if (cancelled) return;

        const rows: FirestoreUpcomingEventRow[] = [];
        snap.forEach((docSnap) => {
          const mapped = mapDoc(docSnap.id, docSnap.data() as Record<string, unknown>);
          if (!mapped || mapped.locale !== lang) return;
          rows.push(mapped);
        });
        rows.sort(sortUpcoming);
        setUpcoming(rows);
      } catch (e) {
        if (!cancelled) {
          setUpcoming([]);
          const message = e instanceof Error ? e.message : 'Failed to load upcoming events';
          setError(message);
          console.error('[club54] Firestore `upcomingEvents` fetch failed:', e);
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

  return { upcoming, loading, error, configured: getFirestoreDb() !== null };
}
