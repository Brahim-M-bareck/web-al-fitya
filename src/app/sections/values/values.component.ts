import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface ValueItem {
  key: string;
}

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss',
})
export class ValuesComponent {
  protected readonly values: ValueItem[] = [
    { key: 'sincerity' },
    { key: 'commitment' },
    { key: 'honesty' },
    { key: 'discipline' },
    { key: 'cooperation' },
    { key: 'seekingKnowledge' },
    { key: 'perseverance' },
    { key: 'ambition' },
  ];
}
