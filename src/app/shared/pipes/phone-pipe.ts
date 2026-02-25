import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    if (!value) return '';

    // 1. Converte para string e remove qualquer caractere que não seja número
    const cleaned = value.toString().replace(/\D/g, '');

    // 2. Formato Celular: (31) 98888-7777 (11 dígitos)
    if (cleaned.length === 11) {
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7)}`;
    }

    // 3. Formato Fixo: (31) 3334-5555 (10 dígitos)
    if (cleaned.length === 10) {
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)}-${cleaned.substring(6)}`;
    }

    // 4. Caso não tenha 10 ou 11 dígitos, retorna o valor apenas limpo (ou original)
    return cleaned;
  }
}