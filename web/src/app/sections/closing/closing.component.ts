import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-closing',
  standalone: true,
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './closing.component.html',
  styleUrl: './closing.component.scss',
})
export class ClosingComponent {}
