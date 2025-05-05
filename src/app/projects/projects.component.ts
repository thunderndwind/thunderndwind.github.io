import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component'
import { Project } from '../models/project';
@Component({
  selector: 'app-projects',

  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Bone Fractures Detection',
      description: 'A machine learning model to detect bone fractures in medical images.',
      buttonText: 'View Project'
    },
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with Django and React.',
      buttonText: 'View Project'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular and Bootstrap.',
      buttonText: 'View Project'
    }
  ];
}