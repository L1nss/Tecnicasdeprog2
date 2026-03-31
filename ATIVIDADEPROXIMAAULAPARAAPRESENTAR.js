class usuario {
  #email;
  #senha;

  constructor(nome, email, senha) {
    this.nome = nome;
    this.#email = email;
    this.#senha = senha;
  }
  get email() {
    return this.#email;
  }

  set email(novoEmail) {
    this.#email = novoEmail;
  }
  autenticar(senha) {
    return senha === this.#senha;
  }
  set senha(novaSenha) {
    if (novaSenha.length >= 8) {
      this.#senha = novaSenha;
    } else {
      console.log("A senha deve ter pelo menos 8 caracteres.");
    }
  }
  info() {
    return `Nome: ${this.nome}, Email: ${this.#email}`;
  }
}
const user1 = new usuario("João", "joao@egmail.com", "12345678");
console.log(user1.autenticar("12345678"));
console.log(user1.info());
