import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ResumeEntry = {
  title: string;
  period: string;
  organization?: string;
  description?: string;
  items?: string[];
  extraPeriods?: { period: string; items: string[] }[];
  compact?: boolean;
};

type KnowledgeBlock = {
  title: string;
  items: string[];
};

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  readonly summary = {
    name: 'Arturo Guerrero Gutierrez',
    city: 'Lima, Perú',
    email: 'arturo.guerrero.g@gmail.com',
    description:
      'Profesional de tecnología especializado en desarrollo de software empresarial, arquitectura backend, integración de sistemas y liderazgo técnico. Actualmente enfoco mi trabajo en construir soluciones mantenibles, seguras y escalables, combinando experiencia práctica en .NET, Angular, SQL Server y Azure con gestión de equipos, estandarización técnica y mejora continua.',
    language: 'Inglés intermedio',
  };

  readonly education: ResumeEntry[] = [
    {
      title: 'Ingeniería de Sistemas',
      period: '2006 - 2010',
      organization: 'Universidad Tecnológica del Perú',
    },
    {
      title: 'Computación e Informática',
      period: '2002 - 2005',
      organization: 'IDAT',
    },
  ];

  readonly complementaryEducation: ResumeEntry[] = [
    {
      title: 'Gerencia de TI y Transformación Digital',
      period: 'En curso',
      description:
        'Formación orientada a gestión tecnológica, estrategia digital, innovación y liderazgo de iniciativas de TI.',
    },
    {
      title: 'Especialización continua en desarrollo de software',
      period: '2020 - Presente',
      items: [
        'Arquitectura de aplicaciones empresariales con .NET, APIs REST y servicios backend.',
        'Desarrollo frontend con Angular, TypeScript y frameworks modernos de JavaScript.',
        'Control de versiones con Git, GitHub y Azure DevOps.',
        'Desarrollo móvil con Android Studio y React Native.',
        'Automatización, inteligencia artificial aplicada al desarrollo y mejora continua.',
      ],
    },
  ];
  readonly knowledgeBlocks: KnowledgeBlock[] = [
    {
      title: 'Backend y arquitectura',
      items: [
        '.NET, C#, APIs REST, servicios SOAP/WCF y aplicaciones empresariales.',
        'Arquitecturas en capas, orientadas al dominio, servicios y patrones de diseño.',
        'Microservicios, integración de sistemas y evolución de aplicaciones legacy.',
      ],
    },
    {
      title: 'Cloud, datos y DevOps',
      items: [
        'Azure App Service, Azure Functions, WebJobs, Azure SQL y servicios cloud.',
        'SQL Server, Azure SQL y modelado de datos relacional.',
        'Git, GitHub, Azure DevOps, control de versiones y tableros de trabajo.',
      ],
    },
    {
      title: 'Frontend y movilidad',
      items: [
        'Angular, TypeScript, JavaScript, HTML y CSS.',
        'React, React Native, Ionic, Android Studio y Flutter básico.',
      ],
    },
    {
      title: 'Gestión, documentación y calidad',
      items: [
        'Jira, Confluence, Asana, Monday y MS Project.',
        'Documentación técnica, estándares de desarrollo, revisión de código y mejora continua.',
      ],
    },
  ];

  readonly experience: ResumeEntry[] = [
    {
      title: 'Jefe de Desarrollo de Software',
      period: 'Actualidad',
      organization: 'Los Portales S.A., Lima',
      items: [
        'Liderazgo del área de desarrollo de software, coordinando iniciativas tecnológicas con equipos internos, áreas de negocio y proveedores.',
        'Definición de arquitectura, estándares de desarrollo, lineamientos de seguridad y buenas prácticas para aplicaciones empresariales.',
        'Diseño y supervisión de soluciones backend con .NET, APIs REST, SQL Server y servicios cloud en Azure.',
        'Modernización de aplicaciones internas e integración con plataformas corporativas como Salesforce, Dynamics 365, SAP y servicios externos.',
        'Impulso de prácticas de documentación, automatización, revisión de código, trazabilidad y mejora continua dentro del equipo.',
        'Evaluación de alternativas tecnológicas considerando mantenibilidad, seguridad, escalabilidad y optimización de costos.',
      ],
    },
    {
      title: 'Full Stack Developer Senior',
      period: '2022 - 2024',
      organization: 'Compañía Minera Poderosa S.A., Lima',
      items: [
        'Desarrollo y mantenimiento de aplicaciones empresariales utilizando .NET, Angular y SQL Server.',
        'Implementación de servicios, funcionalidades backend y componentes frontend orientados a procesos internos.',
        'Mantenimiento y evolución de aplicaciones legacy en VB6, asegurando continuidad operativa.',
        'Desarrollo y soporte de reportes en Crystal Reports para necesidades operativas y de gestión.',
        'Uso de control de versiones con Git/Azure DevOps y coordinación de actividades mediante tableros de trabajo.',
      ],
    },
    {
      title: 'Líder Técnico de Desarrollo',
      period: '2021',
      organization: '100% Sur - Distribuidora exclusiva de Laive, Lima',
      items: [
        'Liderazgo técnico de aplicaciones internas, asegurando continuidad, mantenimiento y evolución de los sistemas de la empresa.',
        'Diseño de arquitecturas de software para nuevos proyectos, considerando integración, escalabilidad y mantenibilidad.',
        'Administración de servicios en Azure y control de cuentas de desarrollo en Azure DevOps.',
        'Gestión y seguimiento de proyectos de software mediante tableros de trabajo en Asana.',
      ],
    },
    {
      title: 'Analista Desarrollador',
      period: '2020 - 2021',
      organization: 'Servicio de Administración Tributaria - SAT',
      items: [
        'Desarrollo y mantenimiento de aplicaciones utilizando .NET, .NET Core y SQL Server.',
        'Implementación de funcionalidades backend y servicios web para procesos internos.',
        'Consumo e integración de servicios SOAP y REST según las necesidades de los sistemas.',
        'Participación en el análisis técnico de requerimientos y soporte a aplicaciones existentes.',
      ],
    },
    {
      title: 'Líder Técnico de Desarrollo',
      period: '2019 - 2020',
      organization: '100% Sur - Distribuidora exclusiva de Laive, Lima',
      items: [
        'Responsable técnico de la evolución y soporte de aplicaciones empresariales utilizadas por la operación.',
        'Participación en la definición de soluciones para nuevos requerimientos, integrando aplicaciones, bases de datos y servicios internos.',
        'Gestión de infraestructura y despliegues en Azure, apoyando la continuidad de los servicios tecnológicos.',
        'Seguimiento de iniciativas de software, coordinación de prioridades y control de actividades mediante herramientas de gestión.',
      ],
    },
    {
      title: 'Líder Técnico de Desarrollo',
      period: '2016 - 2018',
      organization: 'Business Analytics (ATAPRO)',
      items: [
        'Liderazgo técnico en el desarrollo y mantenimiento de soluciones de software para clientes y procesos empresariales.',
        'Diseño de arquitecturas de aplicaciones orientadas a servicios, integración de datos y mantenibilidad del código.',
        'Coordinación de actividades técnicas, revisión de soluciones y soporte al equipo de desarrollo.',
        'Participación en la gestión de requerimientos, estimaciones y seguimiento de entregables de software.',
      ],
    },
    {
      title: 'Desarrollador - Analista Funcional',
      period: '2014 - 2016',
      organization: 'Aon Graña - Corredores de Seguros',
      items: [
        'Desarrollo de aplicaciones web empresariales con .NET, MVC, jQuery, JSON, Entity Framework y SQL Server.',
        'Implementación de servicios web WSDL/WCF y reportes SSRS para procesos de negocio y gestión.',
        'Análisis funcional y técnico de requerimientos orientados a sistemas de corretaje de seguros.',
        'Uso y configuración de TFS para control de versiones y seguimiento del desarrollo.',
        'Participación en proyectos bajo enfoque PMI, incluyendo sistemas gerenciales y dashboards.',
      ],
    },
    {
      title: 'Analista Programador',
      period: '2009 - 2010',
      organization: 'Transportes Pajuelo',
      description:
        'Desarrollo de sistema integrado empresarial en .NET y SQL Server, con apoyo en administración de servidor Windows.',
      compact: true,
    },
    {
      title: 'Auxiliar de Laboratorios de Cómputo',
      period: '2007 - 2008',
      organization: 'Universidad Tecnológica del Perú - UTP',
      description:
        'Soporte técnico, asesoría a alumnos y apoyo en sistemas académicos vinculados a horarios, matrículas y admisión.',
      compact: true,
    },
  ];
}
