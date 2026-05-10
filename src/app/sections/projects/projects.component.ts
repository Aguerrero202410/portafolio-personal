import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Project = {
  title: string;
  description: string;
  icon: string;
  focus: string;
  technologies: string[];
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
      icon: 'bi-shield-check',
      focus: 'Gestión documental, aprobaciones y control operativo',
      description:
        'Aplicación empresarial para gestionar solicitudes, flujos de aprobación, permisos, trazabilidad y documentación asociada a cartas fianza.',
      technologies: ['.NET', 'Angular', 'SQL Server', 'Autenticación', 'Permisos', 'Arquitectura empresarial'],
    },
    {
      title: 'Integraciones empresariales',
      icon: 'bi-diagram-3',
      focus: 'Interoperabilidad segura entre plataformas corporativas',
      description:
        'Diseño de integraciones con plataformas corporativas y servicios externos, priorizando trazabilidad, seguridad, mantenibilidad y control de errores.',
      technologies: ['.NET', 'Azure', 'APIs REST', 'Salesforce', 'Dynamics 365', 'SAP'],
    },
    {
      title: 'Automatización y trazabilidad de leads',
      icon: 'bi-arrow-repeat',
      focus: 'Procesamiento confiable y reproceso de datos comerciales',
      description:
        'Implementación de flujos para recepción, validación, control de errores y reprocesamiento de leads provenientes de campañas digitales.',
      technologies: ['Zapier', 'Meta Lead Ads', 'APIs', 'Google Sheets', 'SQL Server'],
    },
    {
      title: 'Visor de Planos',
      icon: 'bi-map',
      focus: 'Visualización geográfica para procesos inmobiliarios',
      description:
        'Solución para visualización de lotes, polígonos, mapas y capas geográficas orientadas a procesos inmobiliarios.',
      technologies: ['Angular', 'Leaflet', 'Postgres', 'Integración de datos geográficos'],
    },
    {
      title: 'Gobierno técnico y seguridad aplicativa',
      icon: 'bi-lock',
      focus: 'Estándares de desarrollo y protección de aplicaciones',
      description:
        'Definición de estándares, revisión de seguridad, protección de APIs, manejo de secretos, documentación técnica y buenas prácticas de desarrollo.',
      technologies: ['.NET', 'Azure Key Vault', 'JWT', 'SSO', 'GitHub', 'Azure DevOps'],
    },
  ];

  isLastOddCard(index: number): boolean {
    return this.projects.length % 2 !== 0 && index === this.projects.length - 1;
  }
}
