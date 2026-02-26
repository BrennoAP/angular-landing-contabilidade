import { Injectable, Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//servico pre-configurado para enviar email atraves do formulario de contato usando email.js

export class EmailService {

  private http = inject(HttpClient);

  private readonly SERVICE_ID = 'seu_service_id';
  private readonly TEMPLATE_ID = 'seu_template_id';
  private readonly PUBLIC_KEY = 'sua_public_key';
  private readonly API_URL = 'https://api.emailjs.com/api/v1.0/email/send';

  sendContactEmail(formData: any) {

    const payload = {
      service_id: this.SERVICE_ID,
      template_id: this.TEMPLATE_ID,
      user_id: this.PUBLIC_KEY,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message
      }
    };

    return firstValueFrom(
      this.http.post(this.API_URL, payload, { responseType: 'text' })
    );

  }


}
