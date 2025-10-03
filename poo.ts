class Estudante {

    nome: string;
    matricula: string;
    media: number = 0;

    constructor(nome: string, matricula: string,) {
        this.nome = nome;
        this.matricula = matricula;
    }

    calcularMedia(g1: number, g2: number) {
        this.media = (g1 + 2 * g2) / 3;
    }

}

const aluno1 = new Estudante("Marcos", "1");
const aluno2 = new Estudante("Vasco", "2");
const aluno3 = new Estudante("Pedro", "3");
const aluno4 = new Estudante("João", "4");
const aluno5 = new Estudante("Juh", "5");

let listaAlunos = [];
listaAlunos.push(aluno1)
listaAlunos.push(aluno2)
listaAlunos.push(aluno3)
listaAlunos.push(aluno4)
listaAlunos.push(aluno5)

type Aluno = {
    nome: string,
    matricula: string,
    media: number
}

class Turma {
    nome: string;
    alunos: Array<Aluno>

    constructor(nome: string, alunos: Array<Aluno>) {
        this.nome = nome
        this.alunos = alunos
    }


    gerarNotaAleatoria(): number {
        let numeroAleatorio = Math.random() * 10;
        return parseFloat(numeroAleatorio.toFixed(1));
    }


    atribuirNotasMalucas() {
        for (let i = 0; i < this.alunos.length; i++) {
            this.alunos[i].media = this.gerarNotaAleatoria()
        }

    }
}

const turma1 = new Turma("Jota", listaAlunos)

turma1.atribuirNotasMalucas();
console.log(turma1.alunos)

// console.log("--- Alunos Antes da Atribuição ---");
// // Usando JSON.stringify para uma visualização mais clara dos objetos
// console.log(JSON.stringify(turma1.alunos, null, 2));

// // **Passo crucial: Chamar o método para que ele seja executado**
// turma1.atribuirNotasMalucas();

// console.log("\n--- Alunos Depois da Atribuição ---");
// console.log(JSON.stringify(turma1.alunos, null, 2));
