import random

def jogar():
    palavras = []

    print("1 - acerte o Jogo")
    print("2 - acerte o Carro")
    print("3 - acerte o Anime")
    opcao = input("Digite a opção desejada (1 a 3)")

    if opcao == "1":
        arquivo = open("jogos.txt", "r")
    elif opcao == "2":
        arquivo = open("carros.txt", "r")
    elif opcao == "3":
        arquivo = open("Anime.txt", "r")
    else:
        print("Opção invalida, selecionado tema Jogo" ) 
        arquivo = open("jogos.txt", "r")

    for linha in arquivo:
        palavras.append(linha.strip())    


    palavra = random.choice(palavras)
    palavra= palavra.upper()
    letras_acertadas = []
    for letra in palavra:
        if letra == " ":
            letras_acertadas.append("-")
        else: 
            letras_acertadas.append("_")    

    acertou = False
    enforcou = False
    limite_tentativas = len(palavra) + 6
    tentativa = 1

    def mostrar_letras_acertadas():
        for letra in letras_acertadas:
            print(letra, end=" ")

    print("Tente adivinhar a palavra secreta: ")
    while(not acertou and not enforcou):
        # mostrar as letras acertadas
        mostrar_letimport random

def jogar():
  
    tentativas = 1
    errou = True
    sorteio_max = 10
    tentativas_max = 3
    numero = random.randint(0,sorteio_max)


    while (tentativas <= tentativas_max):
        print("Tentativa:", tentativas)
        chute = int(input("Digite o seu chute (0 a 10):"))
        if chute == numero:
            print("Parabéns, você é o bonzão mesmo")
            errou = False
            break
        else:
            print("Errou :c")
        tentativas = tentativas + 1
        
    if errou == True:
        print("O número sorteado era:", numero) # mostra p quem errou
    print("### FIM DO JOGO ###")

if (__name__ == "__main__"):
    jogar()ras_acertadas()
        print("")
        chute = input("Digite uma letra: ")
        indice = 0
        for letra in palavra:
            if chute.upper() == letra:
                letras_acertadas[indice] = letra
            indice = indice + 1
        
        if tentativa == limite_tentativas:
            print("Você perdeu :(\nA palavra era: ", palavra)
            enforcou = True

        if letras_acertadas.count("_") == 0:
            print("Parabéns, você acertou a palavra secreta!")
            mostrar_letras_acertadas()
            acertou = True

        tentativa = tentativa + 1


if (__name__ == "__main__"):
    jogar()
