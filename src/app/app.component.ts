import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionCorteComponent } from './components/section-corte/section-corte.component';
import { SectionImpresion3dComponent } from './components/section-impresion3d/section-impresion3d.component';
import { SectionModelado3dComponent } from './components/section-modelado3d/section-modelado3d.component';
import { SectionMaterialesComponent } from './components/section-materiales/section-materiales.component';
import { SectionFaqComponent } from './components/section-faq/section-faq.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SectionCorteComponent,
    SectionImpresion3dComponent,
    SectionModelado3dComponent,
    SectionMaterialesComponent,
    SectionFaqComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
