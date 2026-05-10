# Portafolio Profesional - Arturo Guerrero

Portafolio personal desarrollado en Angular para presentar mi experiencia profesional, habilidades técnicas, formación y trayectoria como líder técnico y jefe de desarrollo de software.

## Perfil profesional

Jefe de Desarrollo de Software especializado en desarrollo backend con .NET, arquitectura de soluciones, integración de sistemas empresariales, seguridad aplicativa, gobierno técnico y servicios cloud en Azure.

Mi enfoque combina experiencia técnica hands-on con liderazgo de equipos, documentación, estandarización, automatización y mejora continua para construir soluciones mantenibles, seguras y alineadas a los objetivos del negocio.

## Especialidades

- Arquitectura backend con .NET y C#
- APIs REST, servicios empresariales e integración de sistemas
- Angular, TypeScript y desarrollo frontend empresarial
- SQL Server, Azure SQL y bases de datos relacionales
- Azure App Service, Functions, Service Bus, Key Vault y API Management
- Seguridad aplicativa, JWT, SSO, protección de APIs y gestión de secretos
- Gobierno técnico, documentación, estándares de código y buenas prácticas
- Liderazgo de equipos de desarrollo y coordinación con áreas de negocio

## Tecnologías principales

- **Backend:** .NET, C#, APIs REST, Entity Framework, servicios SOAP/REST
- **Frontend:** Angular, TypeScript, JavaScript, HTML, CSS
- **Base de datos:** SQL Server, Azure SQL, MySQL
- **Cloud:** Azure App Service, Azure Functions, Service Bus, Key Vault, API Management
- **Herramientas:** Git, GitHub, Azure DevOps, Jira, Confluence, Power BI
- **Integraciones:** Salesforce, Dynamics 365, SAP y servicios externos

## Objetivo del proyecto

Este repositorio funciona como hoja de vida web y portafolio profesional. Su objetivo es presentar de manera clara mi experiencia, fortalezas técnicas y enfoque de trabajo en proyectos de software empresarial.

## Ejecución local

Instalar dependencias:

```bash
npm install
```

Ejecutar en ambiente local:

```bash
npm start
```

También puede ejecutarse con Angular CLI:

```bash
ng serve
```

Luego abrir:

```text
http://localhost:4200
```

## Build

```bash
ng build
```

Los artefactos generados se ubicarán en la carpeta `dist/aguerrero-portafolio/`.

También puedes usar:

```bash
npm run build:pages
```

## Despliegue en GitHub Pages

Este repositorio publica el portafolio en:

```text
https://aguerrero202410.github.io/portafolio-personal/
```

Configuración aplicada:

- GitHub Pages publica mediante GitHub Actions
- El workflow construye Angular y publica el artefacto generado desde `dist/aguerrero-portafolio/`
- El build de producción usa `base href` igual a `/portafolio-personal/`

Flujo recomendado:

```bash
git commit -m "Actualizar sitio"
git push
```

Con cada push a `main`, GitHub Actions despliega automáticamente la última versión.

## Contacto

- LinkedIn: [Arturo Guerrero Gutierrez](https://www.linkedin.com/in/arturo-martin-guerrero-gutierrez)
- GitHub: [Aguerrero202410](https://github.com/Aguerrero202410)
