const prompt = require('prompt-sync')();

// Exemplo 1: Cadastro de Alunos
let alunos = [];
let continuarCadastro;

do {
    let nome = prompt("Digite o nome do aluno: ");
    let idade = parseInt(prompt("Digite a idade do aluno: "));
    alunos.push({ nome, idade });
    continuarCadastro = prompt("Deseja cadastrar outro aluno? (s/n): ");
} while (continuarCadastro === 's');

// Exemplo 2: Simulador de Notas
let notas = [];
let continuarNotas;

do {
    let nota = parseFloat(prompt("Digite a nota da prova: "));
    notas.push(nota);
    continuarNotas = prompt("Deseja simular outra nota? (s/n): ");
} while (continuarNotas === 's');

let mediaNotas = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
console.log(`A média das notas é: ${mediaNotas}`);

// Exemplo 3: Tentativas de Login
let usuarioCorreto = "admin";
let senhaCorreta = "1234";
let tentativas = 0;
let loginOk = false;

do {
    let usuario = prompt("Digite o nome de usuário: ");
    let senha = prompt("Digite a senha: ");
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log("Login bem-sucedido!");
        loginOk = true;
    } else {
        tentativas++;
        console.log("Usuário ou senha incorretos.");
        if (tentativas >= 3) {
            console.log("Número máximo de tentativas alcançado.");
            break;
        }
    }
} while (!loginOk);

// Exemplo 4: Calculadora de Potência
let continuarPotencia;

do {
    let numero = parseInt(prompt("Digite um número: "));
    let expoente = parseInt(prompt("Digite o expoente: "));
    console.log(`${numero} elevado a ${expoente} é: ${Math.pow(numero, expoente)}`);
    continuarPotencia = prompt("Deseja calcular outra potência? (s/n): ");
} while (continuarPotencia === 's');

// Exemplo 5: Validação de Senha Forte
let senha;

do {
    senha = prompt("Digite uma senha forte (mínimo 8 caracteres, com letras e números): ");
    if (senha.length >= 8 && /[a-zA-Z]/.test(senha) && /\d/.test(senha)) {
        console.log("Senha válida!");
    } else {
        console.log("Senha inválida. Tente novamente.");
    }
} while (senha.length < 8 || !/[a-zA-Z]/.test(senha) || !/\d/.test(senha));

// Exemplo 6: Calculadora de Média de Notas
let continuarMediaNotas;

do {
    let nota = parseFloat(prompt("Digite uma nota: "));
    notas.push(nota);
    continuarMediaNotas = prompt("Deseja inserir outra nota? (s/n): ");
} while (continuarMediaNotas === 's');

let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
console.log(`A média das notas é: ${media}`);

// Exemplo 7: Jogo de Adivinhação
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa;
let acerto = false;

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10: "));
    if (tentativa !== numeroSecreto) {
        console.log("Errado, tente novamente!");
    } else {
        console.log("Parabéns, você acertou!");
        acerto = true;
    }
} while (!acerto);

// Exemplo 8: Validação de Nome e Idade
let nome;
let idade;

do {
    nome = prompt("Digite o nome do aluno: ");
    idade = parseInt(prompt("Digite a idade do aluno: "));
    if (idade < 16 || idade > 100) {
        console.log("Idade inválida. A idade deve estar entre 16 e 100.");
    }
} while (idade < 16 || idade > 100);

// Exemplo 9: Cadastro de Produtos
let produtos = [];
let continuarProduto;

do {
    let nomeProduto = prompt("Digite o nome do produto: ");
    let quantidade = parseInt(prompt("Digite a quantidade em estoque: "));
    produtos.push({ nome: nomeProduto, quantidade });
    continuarProduto = prompt("Deseja cadastrar outro produto? (s/n): ");
} while (continuarProduto === 's');

// Exemplo 10: Cálculo de Fatorial
let continuarFatorial;

do {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
    continuarFatorial = prompt("Deseja calcular outro fatorial? (s/n): ");
} while (continuarFatorial === 's');

// Exemplo 11: Cálculo de Saldo Bancário
let saldo = 0;
let continuarSaldo;

do {
    let operacao = prompt("Digite 'dep' para depósito ou 'saq' para saque: ");
    if (operacao === 'dep') {
        let deposito = parseFloat(prompt("Digite o valor do depósito: "));
        saldo += deposito;
    } else if (operacao === 'saq') {
        let saque = parseFloat(prompt("Digite o valor do saque: "));
        saldo -= saque;
    }
    console.log(`Saldo atual: R$ ${saldo}`);
    continuarSaldo = prompt("Deseja realizar outra operação? (s/n): ");
} while (continuarSaldo === 's');

// Exemplo 12: Conversão de Temperatura
let continuarTemperatura;

do {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C equivale a ${fahrenheit}°F`);
    continuarTemperatura = prompt("Deseja realizar outra conversão? (s/n): ");
} while (continuarTemperatura === 's');

// Exemplo 13: Simulação de Compras
let total = 0;
let continuarCompras;

do {
    let valorProduto = parseFloat(prompt("Digite o valor do produto: "));
    total += valorProduto;
    continuarCompras = prompt("Deseja adicionar outro produto? (s/n): ");
} while (continuarCompras === 's');

console.log(`Total das compras: R$ ${total}`);

// Exemplo 14: Cálculo de Juros Simples
let continuarJurosSimples;

do {
    let capital = parseFloat(prompt("Digite o capital: "));
    let taxa = parseFloat(prompt("Digite a taxa de juros (em %): "));
    let tempo = parseFloat(prompt("Digite o tempo (em anos): "));
    let juros = capital * (taxa / 100) * tempo;
    let valorFinal = capital + juros;
    console.log(`Valor final: R$ ${valorFinal}`);
    continuarJurosSimples = prompt("Deseja calcular outro valor? (s/n): ");
} while (continuarJurosSimples === 's');

// Exemplo 15: Pesquisa de Satisfação
let continuarPesquisa;

do {
    let satisfacao = parseInt(prompt("Qual sua satisfação com o curso (1 a 5): "));
    if (satisfacao < 1 || satisfacao > 5) {
        console.log("Nota inválida. Digite entre 1 e 5.");
    }
    continuarPesquisa = prompt("Deseja encerrar a pesquisa? (s/n): ");
} while (continuarPesquisa !== 's');

// Exemplo 16: Cálculo de Parcelamento de Compra
let continuarParcelamento;

do {
    let valorCompra = parseFloat(prompt("Digite o valor total da compra: "));
    let parcelas = parseInt(prompt("Digite o número de parcelas: "));
    let valorParcela = valorCompra / parcelas;
    console.log(`Valor de cada parcela: R$ ${valorParcela}`);
    continuarParcelamento = prompt("Deseja calcular outra parcela? (s/n): ");
} while (continuarParcelamento === 's');

// Exemplo 17: Conversão de Moedas
let continuarConversaoMoeda;

do {
    let reais = parseFloat(prompt("Digite o valor em reais: "));
    let dolar = reais / 5.25;  // Supondo o valor do dólar a 5.25
    console.log(`R$ ${reais} equivale a $ ${dolar.toFixed(2)} dólares.`);
    continuarConversaoMoeda = prompt("Deseja realizar outra conversão? (s/n): ");
} while (continuarConversaoMoeda === 's');

// Exemplo 18: Verificação de Palíndromo
let continuarPalindromo;

do {
    let palavra = prompt("Digite uma palavra: ");
    let palavraInvertida = palavra.split('').reverse().join('');
    if (palavra === palavraInvertida) {
        console.log(`${palavra} é um palíndromo!`);
    } else {
        console.log(`${palavra} não é um palíndromo.`);
    }
    continuarPalindromo = prompt("Deseja testar outra palavra? (s/n): ");
} while (continuarPalindromo === 's');

// Exemplo 19: Jogo de Pedra, Papel e Tesoura
let continuarJogo;

do {
    let escolhaUsuario = prompt("Escolha pedra, papel ou tesoura: ");
    let escolhas = ["pedra", "papel", "tesoura"];
    let escolhaComputador = escolhas[Math.floor(Math.random() * 3)];
    console.log(`Computador escolheu: ${escolhaComputador}`);

    if (escolhaUsuario === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        console.log("Você venceu!");
    } else {
        console.log("Você perdeu!");
    }

    continuarJogo = prompt("Deseja jogar novamente? (s/n): ");
} while (continuarJogo === 's');

// Exemplo 20: Sistema de Contagem Regressiva
let continuarContagem;

do {
    let numero = parseInt(prompt("Digite um número para iniciar a contagem regressiva: "));
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
    continuarContagem = prompt("Deseja fazer outra contagem regressiva? (s/n): ");
} while (continuarContagem === 's');
