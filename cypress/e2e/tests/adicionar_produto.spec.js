import ProdutoPage from '../pages/ProdutoPage';

describe('Adicionar Produto ao Carrinho', () => {
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    ProdutoPage.visitarProduto(1);
    ProdutoPage.adicionarAoCarrinho();
    ProdutoPage.validarProdutoNoCarrinho('Produto 1');
  });
});