```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000
 const condicaoComissao1 = 100 * qtdeCarrosVendidos
 const condicaoComissao2 = valorTotalVendas * 0.05
 const comissaoTotal = condicaoComissao1 + condicaoComissao2
 const salarioNoMes = comissaoTotal + salarioFixo
 return salarioNoMes
}```