import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { IMPRESION_3D_IMAGES, IMPRESION_3D_TEXT } from '../../data/site-content';

@Component({
  selector: 'app-section-impresion3d',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './section-impresion3d.component.html',
  styleUrl: './section-impresion3d.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionImpresion3dComponent {
  readonly text = IMPRESION_3D_TEXT;
  readonly images = IMPRESION_3D_IMAGES;
}
