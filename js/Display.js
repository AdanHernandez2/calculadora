class Display {
    constructor (displayValorAnterior, displayValorActual) {
        //estas son dos propiedades de la clase 
        this.displayValorActual = displayValorActual; 
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        // valores de numeros que estamos guardando
        this.valorActual = '';
        this.valorAnterior = '';
    }
    //metodos
    // la variable dentro del parentesis en una funcion es un argumento
    agregarNumero(numero) {
        this.valorActual = numero;
        this.imprimirValores();
    }

    //imprimir valores en pantalla
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }

}