function errorHandling(arr, num){

    const customError = new Error();
    customError.message = "Erro genérico";
    customError.name = "customError";

    try{
        /**
         * Verificar se os parametros não foram enviados
         * Disparar um ReferenceError
         */
        if(!arr || !num)
            throw new ReferenceError("Todos os parâmetros devem ser enviados");

        /**
         * Verificar se o array não é do tipo object
         * Disparar um TypeError 
         */
        if(typeof arr != 'object')
            throw new TypeError("O Array não é do tipo objeto");

        /**
         * Verificar se o número não é do tipo number
         * Disparar um TypeError 
         */
        if(typeof num != 'number')
            throw new TypeError("O Número informado está em um formato inválido. favor, inserir um valor do tipo number");

        /**
         * Verificar se o tamanho do array é diferente do número enviado
         * Disparar um RangeError 
         */
        if(arr.length != num)
            throw new RangeError("O tamanho do array é diferente do número enviado no segundo parâmetro")

        /**
         * Testando disparo de erro customizado, enviando o valor 6 no numero
         */
        if(num === 6){
            throw customError;
        }

    }catch(e){
        if(e instanceof ReferenceError){
            console.log("==================== ReferenceError =====================")
            console.log(e.message);
            console.log(e.stack);
            console.log("=========================================================")
        }else if(e instanceof TypeError){
            console.log("==================== TypeError =====================")
            console.log(e.message);
            console.log(e.stack);
            console.log("====================================================")
        }else if(e instanceof RangeError){
            console.log("==================== RangeError =====================")
            console.log(e.message);
            console.log(e.stack);
            console.log("=====================================================")
        }else{
            console.log("==================== Custom Error =====================")
            console.log(e.message);
            console.log(e.stack);
            console.log("========================================================")
        }       
    }
}

errorHandling([0,1,2,3,4,5], 6);