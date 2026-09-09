import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import {
  CONTACT_PHONE,
  NAV_LINKS,
  SOCIAL_LINKS,
} from '../../data/site-content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly navLinks = NAV_LINKS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly contactPhone = CONTACT_PHONE;

  isMenuOpen = false;
  isContactOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.isContactOpen = false;
  }

  toggleContact(event: MouseEvent): void {
    event.stopPropagation();
    this.isContactOpen = !this.isContactOpen;
  }

  // Cierra el panel de contacto al hacer clic afuera.
  @HostListener('document:click')
  onDocumentClick(): void {
    this.isContactOpen = false;
  }
}
