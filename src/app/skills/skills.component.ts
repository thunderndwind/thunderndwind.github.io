import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillComponent } from '../skill/skill.component';
import { faPython, faJsSquare, faAngular, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {

  skills = [
    { name: 'Python', percentage: 80, icon: faPython },
    { name: 'Django', percentage: 70, icon: faPython },
    { name: 'FastAPI', percentage: 60, icon: faCode },
    { name: 'JavaScript', percentage: 70, icon: faJsSquare },
    { name: 'Angular', percentage: 60, icon: faAngular },
    { name: 'Bootstrap', percentage: 40, icon: faBootstrap },
  ];
}