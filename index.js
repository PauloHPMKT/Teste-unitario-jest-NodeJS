import Carrinho from './carrinho';
import Item from './item';

const carrinho = new Carrinho();

carrinho.adiciona(new Item('Banana', 1, 3));
carrinho.adiciona(new Item('Melancia', 1.4, 5));
carrinho.adiciona(new Item('Uva', 2, 1));
carrinho.adiciona(new Item('Morango', 4.3, 2));
carrinho.adiciona(new Item('Abacaxi', 3, 5));

carrinho.adicionaFrete(15);

carrinho.calculaSubtotal();

carrinho.finzalizaCompra();

console.log(carrinho)
