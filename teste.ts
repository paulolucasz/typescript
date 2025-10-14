// console.log(variavelInexistente);

try {
console.log(variavelInexistente);
} catch (error: any) {
console.log("Ocorreu um erro:\n", error.message);
}
console.log("Execução continua normalmente ... ");
