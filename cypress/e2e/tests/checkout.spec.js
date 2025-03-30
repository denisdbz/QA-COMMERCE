import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Simples', () => {
  beforeEach(() => {
    CheckoutPage.visitarCheckout();
  });

  it('Deve finalizar o checkout com sucesso', () => {
    CheckoutPage.preencherDados('João Silva', 'Rua Exemplo, 123', 'Cartão de Crédito');
    CheckoutPage.finalizarCompra();
    CheckoutPage.validarMensagemSucesso();
  });

  it('Deve exibir mensagens de erro ao não preencher campos obrigatórios', () => {
    CheckoutPage.finalizarCompra();
    CheckoutPage.validarErrosCamposObrigatorios();
  });
});