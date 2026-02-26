import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactModalService } from '../../../core/services/contact-modal-service';
import { EmailService } from '../../../core/services/email-service'; // Importe o novo serviço
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
  private contactService = inject(EmailService); // Injeção do serviço de e-mail
  private fb = inject(FormBuilder);

  // Signal para controlar o estado de carregamento do botão
  isSending = signal(false);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  close() {
    this.modalService.close();
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSending()) {
      this.isSending.set(true);
      
      try {
        await this.contactService.sendContactEmail(this.contactForm.value);
        
        alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
        this.contactForm.reset();
        this.close();
      } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      } finally {
        this.isSending.set(false);
      }
    }
  }
}