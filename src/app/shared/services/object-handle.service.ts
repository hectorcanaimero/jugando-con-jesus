import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectHandleService {

  constructor() { }

  removerEspacosAcentosMinuscula(palavra: string): string {
    const replace = /\ /gi;
    return palavra.trim().replace(replace, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  retornarNumerosAleatorios(numeroInicial: number, numeroFinal: number, quantidade: number, podeRepetir: boolean): Array<number>{
    const numerosAleatorios = new Array<number>();
    while (numerosAleatorios.length < quantidade) {
      const numeroAleatoriaGerado = Math.floor(Math.random() * (numeroFinal - numeroInicial) + numeroInicial);
      if (podeRepetir === true) {
        numerosAleatorios.push(numeroAleatoriaGerado);
      } else {
        if (!numerosAleatorios.includes(numeroAleatoriaGerado)){
          numerosAleatorios.push(numeroAleatoriaGerado);
        }
      }
    }
    return numerosAleatorios;
  }
  sortArray(array: Array<any>, field: string): Array<any> {
    return array.sort((a, b) => (a[field] > b[field]) ? 1 : -1);
  }
  filterArray(array: Array<any>): Array<any> {
    return array.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);
  }

  retornarSlug = (str: string) => {
    str = `${str}`;
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    return str;
  }
}
