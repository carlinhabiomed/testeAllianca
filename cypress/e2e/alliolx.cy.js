
describe('Teste Alliança - OlX', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('#cookie-notice-ok-button').click()
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

    })
    it('OLX busca válida 2', () => {
        cy.fixture('itensPesquisados.json').then((data) => {
            //cy.get('[data-testid="oraculo-4-input"]').should('be.visible').type(`${data.itemValido}{enter}`)
            cy.visit(`/estado-sp?q=${data.itemValido}`).then(() => {

                cy.get('h1').should('contain.text', data.itemValido);
            });

        })
    })

    it('OLX busca inválida 2', () => {
        cy.fixture('itensPesquisados.json').then((data) => {
            //cy.get('[data-testid="oraculo-4-input"]').should('be.visible').type(`${data.itemInvalido}{enter}`)
            cy.visit(`/estado-sp?q=` + data.itemInvalido).then(() => {

                cy.get('#main-content > div > span').should('contain.text', "Ops! Nenhum anúncio foi encontrado.");
            })
        })


    });
});

