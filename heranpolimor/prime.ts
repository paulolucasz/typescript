class GuardaInformacao {
    protected info: string = "";

    public guardarInfo(novaInfo: string): void {
        this.info = novaInfo;
        console.log("Informação guardada com sucesso.");
    }

    public falarInfo(): void {
        if (this.info) {
            console.log("A informação é: " + this.info);
        } else {
            console.log("Nenhuma informação guardada.");
        }
    }
}


class GuardaSegredo extends GuardaInformacao {
    private senha: string;

    constructor(senha: string) {
        super();
        this.senha = senha;
    }

    
    public guardarInfo(novaInfo: string): void;
    public guardarInfo(novaInfo: string, senhaFornecida: string): void;
    public guardarInfo(novaInfo: string, senhaFornecida?: string): void {
        if (senhaFornecida === undefined) {
            console.log("Necessário fornecer a senha para guardar a informação.");
        } else if (senhaFornecida === this.senha) {
            super.guardarInfo(novaInfo);
        } else {
            console.log("Acesso negado. Senha incorreta.");
        }
    }

    
    public falarInfo(): void;
    public falarInfo(senhaFornecida: string): void;
    public falarInfo(senhaFornecida?: string): void {
        if (senhaFornecida === undefined) {
            console.log("Necessário fornecer a senha para ver a informação.");
        } else if (senhaFornecida === this.senha) {
            super.falarInfo();
        } else {
            console.log("Acesso negado. Senha incorreta.");
        }
    }
}


console.log("--- Testando GuardaSegredo ---");
const segredo = new GuardaSegredo("senha123");


segredo.guardarInfo("Este é um grande segredo", "senhaerrada"); 
segredo.falarInfo("senhaerrada"); 

console.log("\n--- Tentando com a senha correta ---");

segredo.guardarInfo("Este é um grande segredo", "senha123");
segredo.falarInfo("senha123"); 


console.log("\n--- Tentando sem senha ---");
segredo.guardarInfo("Nova informação");
segredo.falarInfo(); 
