import { Component } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./app-nova-transferencia.component.html',
    styleUrls:['./app-nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent {

  

  valor: number;
  destino: number;

    transferir() {
    console.log('solicitada nova transferência');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }
}
