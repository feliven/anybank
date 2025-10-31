import { Component, computed, signal } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from './form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from './extrato/extrato.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  listaTransacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.listaTransacoes().reduce((acumulador, transacaoAtual) => {
      switch (transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acumulador + transacaoAtual.valor;

        case TipoTransacao.SAQUE:
          return acumulador - transacaoAtual.valor;

        default:
          throw new Error('Tipo de transação não identificado');
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    if (
      transacao.tipo === TipoTransacao.SAQUE &&
      transacao.valor > this.saldo()
    ) {
      return alert('Saldo insuficiente!');
    }

    this.listaTransacoes.update((listaAtual) => [transacao, ...listaAtual]);

    console.log(this.listaTransacoes());
  }
}
