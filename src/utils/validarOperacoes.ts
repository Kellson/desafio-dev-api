const validacoes: any = {
  tipo: (valor: number) => {
    if (Number.isNaN(valor)) return false;
    if (valor < 1 || valor > 9) return false;
    return true;
  },
  data: (valor: string) => {
    const filteredValue = valor.replace(/\D/g, '');
    if (filteredValue.length !== 8) return false;
    return true;
  },
  valor: (valor: number) => {
    if (Number.isNaN(valor)) return false;
    return true;
  },
  cpf: (valor: string) => {
    const filteredValue = valor.replace(/\D/g, '');
    if (filteredValue.length !== 11) return false;
    return true;
  },
  cartao: (valor: string) => {
    const filteredValue = valor.replace(/\D/g, '');
    if (filteredValue.length !== 8 || (valor.match(/\*/g) || [])?.length !== 4) return false;
    return true;
  },
  hora: (valor: string) => {
    const filteredValue = valor.replace(/\D/g, '');
    if (filteredValue.length !== 6) return false;
    return true;
  },
  donoLoja: (valor: string) => {
    return !!valor;
  },
  nomeLoja: (valor: string) => {
    return !!valor && valor.length === 18;
  },
};

const validarOperacoes = (operacoes: any[]): any[] | undefined => {
  const tudoOk = operacoes.every(x =>
    Object.entries(x).every((e: any) => {
      const res = validacoes[e[0]](e[1]);
      if (!res) console.log('INVALIDO: ', e);
      return res;
    }),
  );
  return tudoOk ? operacoes : undefined;
};

export default validarOperacoes;
