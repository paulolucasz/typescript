// import * as promptSync from "prompt-sync"
// const prompt = promptSync();

function calcularCubo(a: number): number {

    return a * a * a;

}

console.log(calcularCubo(8));

const primeiraOuUltimaLetra = (a: string, b: boolean): void => {
    if (b) {
        console.log(a[0]);
    } else {
        console.log(a[a.length - 1]);
    }

}

primeiraOuUltimaLetra("Bola",false);
primeiraOuUltimaLetra("Bola",true);