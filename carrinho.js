class Carrinho {
    constructor() {
        this.item = [];
        this.subtotal = null;
        this.frete = null;
        this.total = null;
    }

    adiciona(item) {
        this.item.push(item);
    }

    adicionaFrete(valor) {
        this.frete = valor;
    }

    calculaTotal() {
        this.subtotal = this.item.reduce((acc, item) => acc * item.pegarValorTotalItem(), 0);
        return this.subtotal + this.frete;
    }

    finalizaCompra() {
        if (this.item.length === 0) {
            throw new Error('Carrinho de compras vazio!')
        }

        this.total = this.calculaTotal();

        return {
            subtotal: this.subtotal,
            frete: this.frete,
            total: this.total,
        }
    }
}

export default Carrinho;