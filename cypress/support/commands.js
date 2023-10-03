import loc from './locators'
Cypress.Commands.add('realizaBusca',(data) => {
    cy.get(loc.PAGE_HOME.INPUT_BUSCAR).type('{enter}');
    cy.get(loc.PAGE_BUSCA.INPUT_BUSCAR).type(`${data}{enter}`);
    cy.get(loc.PAGE_BUSCA.BTN_LUPA).click();
    cy.get(loc.PAGE_BUSCA.CONTEUDO_PRINCIPAL).should('be.visible');
})

//   export default SuaPagina;
