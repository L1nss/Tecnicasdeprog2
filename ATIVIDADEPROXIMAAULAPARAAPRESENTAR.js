class usuario {
  nome = this.nome;
  #email = this.#email;
  #senha = this.#senha;
  constructor(nome, email, senha) {
    this.nome = nome;
    this.#email = email;
    this.#senha = senha;
  }
  get email() {
    return this.#email;
  }

  autenticar(senha) {
    return senha === this.#senha;
  }
}

const user1 = new usuario("João", "joao@example.com", "123456");
console.log(user1.nome);
console.log(user1.email);
console.log(user1.autenticar("123456"));
