import { AfterViewInit, Component } from '@angular/core';

declare global {
  interface Window {
    customInitFunctions?: () => void;
  }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
  readonly title = 'aguerrero-portafolio';

  ngAfterViewInit(): void {
    window.customInitFunctions?.();
  }
}
