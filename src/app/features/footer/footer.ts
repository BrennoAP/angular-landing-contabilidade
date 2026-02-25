import { PhonePipe } from './../../shared/pipes/phone-pipe';
import { CnpjPipe } from './../../shared/pipes/cnpj-pipe';
import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { COMPANY } from '../../core/models/company.model';
import { ButtonComponent } from '../../shared/components/button/button';
//import { phone } from '../../shared/pipes/phone.pipe';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CnpjPipe,PhonePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  private sanitizer = inject(DomSanitizer);
  readonly company = signal(COMPANY);
  readonly currentYear = new Date().getFullYear();

  readonly mapUrl = computed<SafeResourceUrl>(() => {
    const { lat, lng, zoom } = this.company().location;
    const url = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  openContactModal() {
    console.log("Abrindo formulário de contato...");
  }
}