import { AfterViewInit, Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { SkillsComponent } from './sections/skills/skills.component';

declare global {
  interface Window {
    customInitFunctions?: () => void;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent implements AfterViewInit {
  readonly title = 'aguerrero-portafolio';

  ngAfterViewInit(): void {
    window.customInitFunctions?.();
  }
}
