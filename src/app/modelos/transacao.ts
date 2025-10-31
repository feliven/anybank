import { nanoid } from 'nanoid';

export class Transacao {
  readonly id = nanoid();

  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}

export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque',
}
// É importante que a string esteja em letras minúsculas,
// pois deve ser igual à string utilizada no atributo value da tag <option> no HTML do formulário.
