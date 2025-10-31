import { Component, computed, signal } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from './form-nova-transacao/form-nova-transacao.component';
import { Transacao } from './modelos/transacao';
import {} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  listaTransacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.listaTransacoes().reduce((acumulador, transacaoAtual) => {
      return acumulador + transacaoAtual.valor;
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    this.listaTransacoes.update((listaAtual) => [transacao, ...listaAtual]);

    console.log(this.listaTransacoes());
  }
}
