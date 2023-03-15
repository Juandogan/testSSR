import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConverter'
})
export class DateConverterPipe implements PipeTransform {

  transform(value: string): string {
    const fecha = new Date(value);
    const ahora = new Date();
    const diferencia = ahora.getTime() - fecha.getTime();

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    let resultado = '';

    if (dias > 0) {
      resultado += `${dias} día${dias > 1 ? 's' : ''} `;
    }

    if (horas > 0) {
      resultado += `${horas} hr${horas > 1 ? 's' : ''} `;
    }

    resultado += `${minutos} min${minutos > 1 ? 's' : ''}`;

    return resultado.trim();
  }
}
