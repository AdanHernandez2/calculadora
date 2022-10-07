class Display {
    constructor (displayValorAnterior, displayValorActual) {
        //estas son dos propiedades de la clase 
        this.displayValorActual = displayValorActual; 
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        // valores de numeros que estamos guardando
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
    }
    //metodos
    // la variable dentro del parentesis en una funcion es un argumento
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    //imprimir valores en pantalla
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }

}