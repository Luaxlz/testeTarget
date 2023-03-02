// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//Número a ser testado na sequencia de fibo:
let number = 2584

let n1 = 0
let n2 = 1
let n3 = 0
count = 2

if(typeof number != 'number' || number >= 0) {
        if (number > 2) {
            while ( number > n3) {
                n3 = n2 + n1;
                n1 = n2;
                n2 = n3;
                count++;
            }

            if ( number === n3) {
                console.log(`O número ${number} pertence à sequencia de Fibonacci e é o ${count}° número da sequencia.`)
            } else {
                console.log(`O número ${number} não pertence à sequencia de Fibonacci.`)
            }
        } else {
            switch(number) {
                case 0 : 
                    console.log(`O número ${number} pertence à sequencia de Fibonacci e é o 1° número da sequencia.`)
                    break;
                case 1 : 
                    console.log(`O número ${number} pertence à sequencia de Fibonacci e é o 2° e o 3° número da sequencia.`)
                    break;
                case 2 : 
                    console.log(`O número ${number} pertence à sequencia de Fibonacci e é o 4° número da sequencia.`)
                break;
            }
        }
} else {
    console.log("Dado informado inválido, informe um número inteiro maior que zero.")
}