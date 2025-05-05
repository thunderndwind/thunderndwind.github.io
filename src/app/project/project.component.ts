import { Component, input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  // @Input() project: Project = {};
  project = input.required<Project>();

}
