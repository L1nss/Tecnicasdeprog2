const lampada = {
  cor: "laranja fluorescente",
  ligada: false,
  mostrarestado() {
    if (lampada.ligada) {
      console.log("a lâmpada está ligada ");
    } else {
      console.log("a lâmpada esta desligada");
    }
  },
};
lampada.mostrarestado();
lampada.ligada = true;
lampada.mostrarestado();
