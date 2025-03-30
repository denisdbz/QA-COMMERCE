class CheckoutPage {
  visitarCheckout() {
    cy.visit('/checkout');
  }

  preencherDados(nome, endereco, pagamento) {
    cy.get('#nome').type(nome);
    cy.get('#endereco').type(endereco);
    cy.get('#pagamento').select(pagamento);
  }

  finalizarCompra() {
    cy.get('button.finalizar-compra').click();
  }

  validarMensagemSucesso() {
    cy.get('.mensagem-sucesso').should('contain', 'Compra realizada com sucesso');
  }

  validarErrosCamposObrigatorios() {
    cy.get('.erro-nome').should('contain', 'Nome é obrigatório');
    cy.get('.erro-endereco').should('contain', 'Endereço é obrigatório');
  }
}

export default new CheckoutPage();