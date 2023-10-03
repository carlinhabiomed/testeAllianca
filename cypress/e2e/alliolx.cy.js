
describe('Teste Alliança - OlX', () => {
    const itemValido = "Jeep Renegade";
    const itemInvalido = "****";

    beforeEach(() => {
        cy.visit('/')

    });

    afterEach(() => {
        cy.get('#main-content').screenshot();

    });


    it('pesquisa válida', () => {
       cy.fixture('itensPesquisados.json').then((data) => {
            cy.realizaBusca(data.itemValido)
            cy.get('h1').should('contain.text', data.itemValido);
            

        })

    });

    it('pesquisa inválida', () => {
        cy.fixture('itensPesquisados.json').then((data) => {
             cy.realizaBusca(data.itemInvalido)
             cy.get('#main-content > div > span').should('contain.text', "Ops! Nenhum anúncio foi encontrado.");
             
 
         })
 
     });

});

