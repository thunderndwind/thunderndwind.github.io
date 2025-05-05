import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() skillName: string = '';
  @Input() skillPercentage: number = 0;
  @Input() skillIcon: IconProp = 'question-circle';
}