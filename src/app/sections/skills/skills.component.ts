import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Skill = {
  name: string;
  level: number;
  delay?: string;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly skillColumns: Skill[][] = [
    [
      { name: 'Arquitectura backend con .NET y C#', level: 95 },
      { name: 'Diseño de APIs, servicios REST e integraciones', level: 90 },
      { name: 'Angular, TypeScript y desarrollo frontend empresarial', level: 80 },
    ],
    [
      { name: 'Azure, SQL Server y soluciones cloud empresariales', level: 90, delay: '100' },
      { name: 'Seguridad aplicativa, JWT, SSO y gestión de secretos', level: 85, delay: '100' },
      { name: 'Gobierno técnico, documentación y buenas prácticas', level: 90, delay: '100' },
    ],
  ];
}
