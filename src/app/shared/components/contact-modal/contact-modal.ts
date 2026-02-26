import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactModalService } from '../../../core/services/contact-modal-service';
import { EmailService } from '../../../core/services/email-service';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss'
})
export class ContactModal{
  protected modalService = inject(ContactModalService);
  private emailService = inject(EmailService);
  private fb = inject(FormBuilder);

  isSending = signal(false);
  sentSuccess = signal(false);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], // Apenas números
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Atalho para o HTML verificar se o campo deve mostrar erro
  shouldShowError(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && (field?.dirty || field?.touched));
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSending()) {
      this.isSending.set(true);
      try {
        await this.emailService.sendContactEmail(this.contactForm.value);
        this.sentSuccess.set(true);
        this.contactForm.reset();
        
        // Fecha o modal após o sucesso
        setTimeout(() => {
          this.close();
          this.sentSuccess.set(false);
        }, 3000);
      } catch (error) {
        alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente ou use o WhatsApp.');
      } finally {
        this.isSending.set(false);
      }
    }
  }

  close() {
    this.modalService.close();
  }
}