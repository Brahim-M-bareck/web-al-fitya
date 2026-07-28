import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { VisionMissionComponent } from './sections/vision-mission/vision-mission.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works.component';
import { DomainsComponent } from './sections/domains/domains.component';
import { ProjectComponent } from './sections/project/project.component';
import { ValuesComponent } from './sections/values/values.component';
import { ClosingComponent } from './sections/closing/closing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    VisionMissionComponent,
    HowItWorksComponent,
    DomainsComponent,
    ProjectComponent,
    ValuesComponent,
    ClosingComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
