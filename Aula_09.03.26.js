// const entrada = [1, 2, 3];
// const a = entrada.map((n) => n * 2);
// console.log(a);

// const nomes = ["aNa", "brUno", "cArla"];
// const formatados = nomes.map((nome) => nome.toUpperCase());
// const formatadosminusculos = nomes.map((nome) => nome.toLowerCase());
// const formatadoscomponto = nomes.map((nome) => nome.replaceAll(",", "."));
// console.log(formatados);
// console.log(formatadosminusculos);
// console.log(formatadoscomponto);

// const produtos = [
//   { id: 1, nome: "teclado", preco: 100 },
//   { id: 2, nome: "mouse", preco: 50 },
//   { id: 3, nome: "pendrive", preco: 70 },
// ];

// const caros = produtos.filter((p) => p.preco >= 100);
// const baratos = produtos.filter((p) => p.preco < 100);

// console.log(caros);
// console.log(baratos);

// const resumo = produtos.map((p) => ({
//   nome: p.nome.toUpperCase(),
//   precoformatado: `R$ ${p.preco.toFixed(2)}`,
// }));
// console.log(resumo);

// const numeros = [1, 2, 3, 4, 5, 6];
// const pares = numeros.filter((n) => n % 2 === 0);
// const impares = numeros.filter((n) => n % 2 === 1);
// console.log(pares);
// console.log(impares);
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Beto", nota: 5 },
  { nome: "carla", nota: 9 },
];
const GoodEnding = alunos
  .filter((a) => a.nota >= 7)
  .map((a) => `Parabéns ${a.nome}!`);
console.log(GoodEnding);
const badEnding = alunos
  .filter((a) => a.nota < 7)
  .map((a) => `te vejo denovo, ${a.nome}!`);
console.log(badEnding);
