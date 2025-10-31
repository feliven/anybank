import { Component, computed } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css',
})
export class TransacaoComponent {
  valor = computed(() => {});
  transacao() {}
}
