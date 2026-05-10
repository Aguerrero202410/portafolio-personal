import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Project = {
  title: string;
  description: string;
  technologies: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Sistema de Cartas Fianza',
      description: 'Aplicación empresarial para gestionar solicitudes, flujos, permisos y trazabilidad de cartas fianza.',
      technologies: '.NET, Angular, SQL Server, autenticación, permisos',
    },
    {
      title: 'Integraciones empresariales',
      description:
        'Diseño de integraciones con plataformas corporativas y servicios externos, priorizando trazabilidad, seguridad y mantenibilidad.',
      technologies: '.NET, Azure, APIs REST, Salesforce, Dynamics 365, SAP',
    },
    {
      title: 'Automatización y trazabilidad de leads',
      description:
        'Flujos de integración y control de errores para procesamiento de leads provenientes de Meta Lead Ads y Zapier.',
      technologies: 'Zapier, APIs, Google Sheets, SQL Server',
    },
    {
      title: 'Visor de Planos',
      description:
        'Solución para visualización de lotes, polígonos, mapas y capas geográficas orientadas a procesos inmobiliarios.',
      technologies: 'Angular, Leaflet, Postgres, integración de datos geográficos',
    },
  ];
}
