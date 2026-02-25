import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj',
  standalone: true
})
export class CnpjPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';

    // Remove tudo que não for número
    const cnpj = value.toString().replace(/\D/g, '');

    // Verifica se tem os 14 dígitos antes de aplicar a máscara
    if (cnpj.length !== 14) {
      return cnpj; 
    }

    // Aplica a máscara: 00.000.000/0000-00
    return cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      '$1.$2.$3/$4-$5'
    );
  }
}