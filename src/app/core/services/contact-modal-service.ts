import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// esse service é para controla a visibilidade do modal em todo o app

export class ContactModalService {
  
  private isOpenSignal = signal(false);
  readonly isOpen = this.isOpenSignal.asReadonly();

  open() {
    this.isOpenSignal.set(true);
   
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpenSignal.set(false);
   
    document.body.style.overflow = 'auto';
  }
}