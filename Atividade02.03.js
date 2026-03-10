const pedidos = [
  { id: 1, status: "pago", valor: 200 },
  { id: 2, status: "pendente", valor: 150 },
  { id: 3, status: "pago", valor: 50 },
  { id: 4, status: "cancelado", valor: 300 },
];
const pedidospagos = pedidos.filter((a) => a.status === "pago");
const pedidosnaopagos = pedidos.filter((a) => a.status != "pago");

console.log(pedidospagos);
console.log(pedidosnaopagos);
console.log(valordevido);
