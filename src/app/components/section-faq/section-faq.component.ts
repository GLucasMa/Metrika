import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FAQ_ITEMS } from '../../data/site-content';

@Component({
  selector: 'app-section-faq',
  standalone: true,
  templateUrl: './section-faq.component.html',
  styleUrl: './section-faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionFaqComponent {
  readonly items = FAQ_ITEMS;

  /** Índice de la pregunta abierta, o null si están todas cerradas. */
  openIndex: number | null = 0;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
