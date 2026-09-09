import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CarouselImage } from '../../models/content.model';

/**
 * Carrusel simple de auto-avance para mostrar imágenes en un panel lateral.
 * Pensado para usarse dentro de las secciones de "Corte y grabado" e
 * "Impresión 3D", pero es genérico: solo necesita una lista de imágenes.
 */
@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) images: CarouselImage[] = [];
  /** Tiempo entre cada avance automático, en milisegundos. */
  @Input() intervalMs = 4000;

  activeIndex = 0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnChanges(): void {
    if (this.activeIndex >= this.images.length) {
      this.activeIndex = 0;
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goTo(index: number): void {
    this.activeIndex = index;
    this.restartAutoplay();
  }

  next(): void {
    if (!this.images.length) return;
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prev(): void {
    if (!this.images.length) return;
    this.activeIndex =
      (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  onPrevClick(): void {
    this.prev();
    this.restartAutoplay();
  }

  onNextClick(): void {
    this.next();
    this.restartAutoplay();
  }

  private startAutoplay(): void {
    if (this.images.length <= 1) return;
    this.timer = setInterval(() => this.next(), this.intervalMs);
  }

  private stopAutoplay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  /** Pausa el avance automático mientras el mouse está sobre el carrusel. */
  onMouseEnter(): void {
    this.stopAutoplay();
  }

  /** Reanuda el avance automático al salir el mouse del carrusel. */
  onMouseLeave(): void {
    this.startAutoplay();
  }
}
