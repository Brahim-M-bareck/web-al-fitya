import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.scss',
})
export class VisionMissionComponent {}
