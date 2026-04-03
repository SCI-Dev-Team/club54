"use client";

import { useSyncExternalStore } from "react";

export type SiteLanguage = "en" | "km";

const STORAGE_KEY = "language";

function subscribe(onStoreChange: () => void) {
  const onCustom = () => onStoreChange();
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY || e.key === null) onStoreChange();
  };
  window.addEventListener("languageChange", onCustom);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("languageChange", onCustom);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): SiteLanguage {
  if (typeof window === "undefined") return "en";
  return (localStorage.getItem(STORAGE_KEY) as SiteLanguage) || "en";
}

function getServerSnapshot(): SiteLanguage {
  return "en";
}

/** Reads `localStorage` language and re-renders when it changes (navbar toggle or other tab). */
export function useSiteLanguage(): SiteLanguage {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Persists language and notifies subscribers (same tab uses `languageChange`; other tabs use `storage`). */
export function setSiteLanguage(lang: SiteLanguage): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, lang);
  window.dispatchEvent(new CustomEvent("languageChange"));
}
