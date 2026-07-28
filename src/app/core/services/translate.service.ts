import { Injectable, signal, computed, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { TranslationData } from '../models/translation-keys.model';

export type SupportedLang = 'ar' | 'fr' | 'en';

const STORAGE_KEY = 'alfitya_lang';
const DEFAULT_LANG: SupportedLang = 'ar';

const RTL_LANGS: ReadonlySet<string> = new Set(['ar']);

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly translations = signal<Record<SupportedLang, TranslationData>>({
    ar: {} as TranslationData,
    fr: {} as TranslationData,
    en: {} as TranslationData,
  });

  readonly currentLang = signal<SupportedLang>(this.getInitialLang());
  readonly isRtl = computed(() => RTL_LANGS.has(this.currentLang()));

  constructor() {
    if (this.isBrowser) {
      effect(() => {
        const lang = this.currentLang();
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', this.isRtl() ? 'rtl' : 'ltr');
      });
    }

    this.loadTranslations(this.currentLang());
  }

  private getInitialLang(): SupportedLang {
    if (!this.isBrowser) return DEFAULT_LANG;

    const stored = localStorage.getItem(STORAGE_KEY) as SupportedLang | null;
    if (stored && ['ar', 'fr', 'en'].includes(stored)) return stored;

    const browserLang = navigator.language.slice(0, 2);
    if (['ar', 'fr', 'en'].includes(browserLang)) return browserLang as SupportedLang;

    return DEFAULT_LANG;
  }

  private loadTranslations(lang: SupportedLang): void {
    fetch(`/assets/i18n/${lang}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
        return res.json();
      })
      .then((data: TranslationData) => {
        this.translations.update((prev) => ({ ...prev, [lang]: data }));
      })
      .catch((err) => console.error(`[TranslateService] Error loading ${lang}:`, err));
  }

  setLanguage(lang: SupportedLang): void {
    if (lang === this.currentLang()) return;
    this.currentLang.set(lang);

    if (!this.translations()[lang] || Object.keys(this.translations()[lang]).length === 0) {
      this.loadTranslations(lang);
    }
  }

  translate(key: string): string {
    const keys = key.split('.');
    let result: unknown = this.translations()[this.currentLang()];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  }
}
