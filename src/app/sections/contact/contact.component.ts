import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly contactItems = [
    {
      icon: 'bi-geo-alt',
      label: 'Ubicación',
      value: 'Lima, Perú',
    },
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: 'arturo.guerrero.g@gmail.com',
      href: 'mailto:arturo.guerrero.g@gmail.com',
    },
    {
      icon: 'bi-telephone',
      label: 'Teléfono',
      value: '+51 976 980 781',
      href: 'tel:+51976980781',
    },
    {
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      value: 'arturo-martin-guerrero-gutierrez',
      href: 'https://www.linkedin.com/in/arturo-martin-guerrero-gutierrez',
      external: true,
    },
  ];
}
