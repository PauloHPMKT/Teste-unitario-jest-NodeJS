import Item from "../item";
import Carrinho from "../carrinho";

describe('Teste dos itens', () => {
    it('Deve retornar 3 campos: nome, valor e quantidade', () => {
        const item = new Item('Melancia', 2.5, 10);

        expect(item.nome).toBe('Melancia');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    });
});