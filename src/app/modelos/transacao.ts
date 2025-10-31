export class Transacao {
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}

export enum TipoTransacao {
  DEPOSITO = 'deposito',
  SAQUE = 'saque',
}
// É importante que a string esteja em letras minúsculas,
// pois deve ser igual à string utilizada no atributo value da tag <option> no HTML do formulário.
