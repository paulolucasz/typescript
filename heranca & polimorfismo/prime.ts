// Classe Pai
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

// Subclasse
class GuardaSegredo extends GuardaInformacao {
    private senha: string;

    constructor(senha: string) {
        super();
        this.senha = senha;
    }

    // --- Sobrecarga de guardarInfo ---
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

    // --- Sobrecarga de falarInfo ---
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

// --- Exemplo de Uso ---
console.log("--- Testando GuardaSegredo ---");
const segredo = new GuardaSegredo("senha123");

// Tentativa de acessar a informação sem a senha correta
segredo.guardarInfo("Este é um grande segredo", "senhaerrada"); // Falha
segredo.falarInfo("senhaerrada"); // Falha

console.log("\n--- Tentando com a senha correta ---");
// Utilizando a senha correta
segredo.guardarInfo("Este é um grande segredo", "senha123"); // Sucesso
segredo.falarInfo("senha123"); // Sucesso

// Tentativa sem senha
console.log("\n--- Tentando sem senha ---");
segredo.guardarInfo("Nova informação"); // Requer senha
segredo.falarInfo(); // Requer senha
