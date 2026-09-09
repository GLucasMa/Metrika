import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MATERIALES,
  MATERIALES_INTRO,
  MATERIALES_NOTA,
} from '../../data/site-content';

@Component({
  selector: 'app-section-materiales',
  standalone: true,
  templateUrl: './section-materiales.component.html',
  styleUrl: './section-materiales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionMaterialesComponent {
  readonly intro = MATERIALES_INTRO;
  readonly materiales = MATERIALES;
  readonly nota = MATERIALES_NOTA;
}
