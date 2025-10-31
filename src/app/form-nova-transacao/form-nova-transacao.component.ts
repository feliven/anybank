import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css',
})
export class FormNovaTransacaoComponent {
  tipoTransacao: string = '';
  valorTransacao: number = 0;

  onSubmit() {
    console.log(this.tipoTransacao);
    console.log(this.valorTransacao);
    console.log('enviado');
    this.tipoTransacao = '';
    this.valorTransacao = 0;
  }
}
