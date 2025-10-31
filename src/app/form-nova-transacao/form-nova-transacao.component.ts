import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css',
})
export class FormNovaTransacaoComponent {
  tipoTransacao: string = '';
  valorTransacao: number = 0;
  transacaoCriada = output();

  onSubmit() {
    this.transacaoCriada.emit();
    new Transacao(this.tipoTransacao as TipoTransacao, this.valorTransacao);
  }
}
