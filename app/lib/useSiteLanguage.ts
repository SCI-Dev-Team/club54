"use client";

import { useSyncExternalStore } from "react";

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

function getSnapshot(): "en" | "km" {
  if (typeof window === "undefined") return "en";
  return (localStorage.getItem(STORAGE_KEY) as "en" | "km") || "en";
}

function getServerSnapshot(): "en" | "km" {
  return "en";
}

/** Reads `localStorage` language and re-renders when it changes (navbar toggle or other tab). */
export function useSiteLanguage(): "en" | "km" {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Persists language and notifies subscribers (same tab uses `languageChange`; other tabs use `storage`). */
export function setSiteLanguage(lang: "en" | "km"): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, lang);
  window.dispatchEvent(new CustomEvent("languageChange"));
}
