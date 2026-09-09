import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_PHONE, SOCIAL_LINKS } from '../../data/site-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly socialLinks = SOCIAL_LINKS;
  readonly contactPhone = CONTACT_PHONE;
  readonly year = new Date().getFullYear();
}
