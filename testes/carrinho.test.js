import Item from "../item";
import Carrinho from "../carrinho";

describe('Teste dos itens', () => {
    it('Deve retornar 3 campos: nome, valor e quantidade', () => {
        const item = new Item('Melancia', 2.5, 10);

        expect(item.nome).toBe('Melancia');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    });

    it('Deve ter o preco calculado de acordo com a quantidade', () => {
        const item = new Item('Morango', 0.1, 3)

        expect(item.pegarValorTotalItem()).toBeCloseTo(0.3)
    });

    //testando metodo de adicionar itens ao carrinho
    it('Deve retornar os itens descritos', () => {
        const item = new Item('Banana', 2.5, 5);
        const item2 = new Item('Morango', 0.5, 1);

        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);
    });

    //teste de exception
    it('Deve lancar erro ao finalizar compra com o carrinho vazio', () => {
        
        function englobaErroCarrinho() {
            const  carrinho = new Carrinho();
            carrinho.finalizaCompra()
        }

        expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio!')
    });

    it('Deve adicionar o frete', () => {
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(10);

        expect(carrinho.frete).toBe(10);
    });

    //testando metodo de finalizar compra
    it('Deve finalizar as compras com sucesso!', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Melancia', 3.5, 10);
        const carrinho = new Carrinho();

        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        carrinho.adicionaFrete(10);

        expect(carrinho.finalizaCompra()).toStrictEqual({
            subtotal: 15,
            frete: 10,
            total: 25,
        })

    });
});