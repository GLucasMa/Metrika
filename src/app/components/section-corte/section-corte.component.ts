import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CORTE_GRABADO_IMAGES, CORTE_GRABADO_TEXT } from '../../data/site-content';

@Component({
  selector: 'app-section-corte',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './section-corte.component.html',
  styleUrl: './section-corte.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionCorteComponent {
  readonly text = CORTE_GRABADO_TEXT;
  readonly images = CORTE_GRABADO_IMAGES;
}
