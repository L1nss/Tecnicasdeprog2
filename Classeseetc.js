//otimização com classes
class pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  saudar() {
    return console.log(
      `olá, meu nome é ${this.nome}, e tenho ${this.idade} anos`,
    );
  }
}

const p1 = new pessoa("João", 30);
const p2 = new pessoa("ana", 25);
const p3 = new pessoa("alberto", 999);

class produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = 0;
  }
  set preco(preco) {
    this._preco = preco;
  }
  get mostrarpreco() {
    return this._preco;
  }
  get mostrarNome() {
    return this.nome;
  }
}
const pr1 = new produto("camiseta", 29.9);
console.log(pr1.mostrarNome);
console.log(pr1.mostrarNome);

pr1.alterarNome = "camiseta polo";
console.log(pr1.mostrarpreco);
