class ProdutoPage {
  visitarProduto(id) {
    cy.visit(`/produto/${id}`);
  }

  adicionarAoCarrinho() {
    cy.get('button.add-to-cart').click();
  }

  validarProdutoNoCarrinho(produtoNome) {
    cy.get('.cart-items').should('contain', produtoNome);
  }
}

export default new ProdutoPage();