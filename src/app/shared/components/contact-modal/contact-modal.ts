import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactModalService } from '../../../core/services/contact-modal-service';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss'
})
export class ContactModal {
  protected modalService = inject(ContactModalService);
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  close() {
    this.modalService.close();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Dados do Orçamento:', this.contactForm.value);
      alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
      this.contactForm.reset();
      this.close();
    }
  }
}