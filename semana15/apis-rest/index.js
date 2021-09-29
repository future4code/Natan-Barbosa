console.log(`Aopa!`)
console.log(`

Setup do tsconfig.json:

{
    "compilerOptions": {
        "target": "es6",         // define a ultima versao do JS
        "module": "commonjs",    // especifica o modo de geração do código
        "sourceMap": true,       // gera um arquivo .map para debug
        "outDir": "./build",     // direciona a saida da transpilação
        "rootDir": "./src",      // especifica a pasta raiz dos arquivos de entrada
        "removeComments": true,  // não emitir comentários na saída
        "noImplicitAny": true    // gerar erro em declarações de código tipo 'any'
    }
 }

`)