programa {
  funcao inicio() {
    real v1,v2
    inteiro op,opmenu = 1
    fun_calculadora()
    enquanto (opmenu==1){
    escreva ("::::::::::::::::::::::::::::::::::::\n")
    escreva (":::::::::::::CALCULATOR:::::::::::::\n")
    escreva ("::::::::::::::::::::::::::::::::::::\n")

    escreva ("Welcome to Kick students calculator!\n")
    escreva ("::::::::::::::::::::::::::::::::::::\n")
    escreva ("Digite um valor:\n")
    leia (v1)
    escreva ("Digite o segundo valor:\n")
    leia (v2)
    limpa ()

    escreva ("Agora escolha uma operação:\n")
    escreva ("(1) Adição\t (2) Subtração\t (3) Multiplicação\t (4) Divisão:\t ")
    leia (op)
    limpa ()

    escolha (op){
      caso 1 : escreva ("O resultado da soma é: ", v1+v2, "\n")
      pare
      caso 2 : escreva ("O resultado da subtração é: ", v1-v2, "\n")
      pare
      caso 3 : escreva ("O resultado da multiplicação é: ", v1*v2, "\n")
      pare
      caso 4 : escreva ("O resultado da divisão é: ", v1/v2, "\n")
      pare 
      caso contrario : escreva ("É necessário escolher uma operação registrada.")
      }

escreva("\nAgora escolha uma opção: \n (1) Menu\n (2) Encerrar\n")
			leia(opmenu)
			limpa()
			}
			escreva(":::::::::::::::::::::::\n")
			escreva(":::CALCULATOR CLOSED:::\n")
			escreva(":::::::::::::::::::::::\n")
			escreva("Powered by many people.\n")
			escreva(":::::::::::::::::::::::\n")
		}
	
	  funcao fun_calculadora() {
	  cadeia calculadora }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1121; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */