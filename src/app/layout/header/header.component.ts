import { Component, inject, signal, HostListener } from '@angular/core';
import { TranslateService } from '../../core/services/translate.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import type { SupportedLang } from '../../core/services/translate.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly translate = inject(TranslateService);
  protected readonly isScrolled = signal(false);
  protected readonly mobileMenuOpen = signal(false);
  protected readonly langDropdownOpen = signal(false);
  protected readonly langMenuId = 'header-lang-menu';
  protected readonly activeSection = signal('hero');

  protected readonly navSections: { id: string; key: string }[] = [
    { id: 'hero', key: 'nav.home' },
    { id: 'about', key: 'nav.about' },
    { id: 'vision-mission', key: 'nav.visionMission' },
    { id: 'how-it-works', key: 'nav.howItWorks' },
    { id: 'domains', key: 'nav.domains' },
    { id: 'project', key: 'nav.project' },
    { id: 'values', key: 'nav.values' },
  ];

  protected readonly languages: { code: SupportedLang; label: string }[] = [
    { code: 'ar', label: 'ع' },
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.langDropdownOpen()) {
      const target = event.target as HTMLElement;
      if (!target.closest(`#lang-switcher`)) {
        this.langDropdownOpen.set(false);
      }
    }
  }

  private updateActiveSection(): void {
    const scrollY = window.scrollY + 150;
    for (const section of this.navSections) {
      const el = document.getElementById(section.id);
      if (el) {
        const offsetTop = el.offsetTop;
        const offsetBottom = offsetTop + el.offsetHeight;
        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          this.activeSection.set(section.id);
          return;
        }
      }
    }
    if (window.scrollY < 100) {
      this.activeSection.set('hero');
    }
  }

  protected isActive(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }

  protected setLang(lang: SupportedLang): void {
    this.translate.setLanguage(lang);
    this.langDropdownOpen.set(false);
  }

  protected toggleLangDropdown(): void {
    this.langDropdownOpen.update((v) => !v);
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMobileMenu();
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
