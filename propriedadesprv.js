class ContaBancaria {
  #saldo = 0;
  #limite = 500;

  constructor(titular, saldoinicial) {
    this.titular = titular;
    this.#saldo = saldoinicial;
  }

  get saldo() {
    return this.#saldo;
  }
  get disponivel() {
    return this.#saldo + this.#limite;
  }
  depositar(valor) {
    if (valor > 0) this.#saldo += valor;
  }
  sacar(valor) {
    if (valor <= this.disponivel) {
      this.#saldo -= valor;
      return true;
    }
    return false;
  }
}

const c1 = new ContaBancaria("vitor", 650);
console.log(c1.titular);
console.log(c1.disponivel);
c1.depositar(670);
console.log(c1.titular);
console.log(c1.disponivel);
