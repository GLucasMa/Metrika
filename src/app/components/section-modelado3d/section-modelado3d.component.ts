import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MODELADO_3D_TEXT, MODELADO_3D_VIDEO_SRC } from '../../data/site-content';

@Component({
  selector: 'app-section-modelado3d',
  standalone: true,
  templateUrl: './section-modelado3d.component.html',
  styleUrl: './section-modelado3d.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionModelado3dComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly text = MODELADO_3D_TEXT;
  readonly videoSrc = MODELADO_3D_VIDEO_SRC;

  get hasVideo(): boolean {
    return !!this.videoSrc;
  }

  /** true si el video es un embed externo (YouTube/Vimeo) en vez de un archivo propio. */
  get isEmbed(): boolean {
    return /youtube|youtu\.be|vimeo/.test(this.videoSrc);
  }

  /** URL de embed marcada como segura para usar en el [src] del <iframe>. */
  get safeEmbedUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
  }
}
