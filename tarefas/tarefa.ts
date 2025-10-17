import promptSync from 'prompt-sync';

const prompt = promptSync();

class Nota {
    tom: string;
    oitava: number;
    tons_validos:Array<string>=['C','D','E','F','G','A','B'];

    constructor(tom:string,oitava: number ) {
        if(!this.tons_validos.includes(tom)){
            throw new Error("Tom inválido!");
        }
        this.tom = tom;
        this.oitava = oitava;

    }
}




class GerenciadorNotas {
    notas:Nota[];
    constructor(notas:Array<Nota>) {
        this.notas = notas;
    }
        

    perguntarNota() {
        
        let notaUsuario = prompt ('Qual o valor do Tom')
        let oitava = Number(prompt ('Qual o valor da oitava'))
        try {    
            let novaNota = new Nota(notaUsuario,oitava);
            this.notas.push(novaNota);
        } catch(error:any){
           console.log("Erro:",error.message);
        }
    }
}


const ger = new GerenciadorNotas([]);

while(true){
    ger.perguntarNota()
    console.log(ger.notas);
}

