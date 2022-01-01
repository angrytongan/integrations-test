/// <reference types="cypress" />

describe('simple tests', () => {
    before(() => {
        /*
         * We need to wait a little, to let the client side kick in, otherwise
         * we are doing testing on SSR, then the client side starts
         */
        cy.visit('http://localhost:3000').wait(1000);
    });

    it('clicks the button three times', () => {
        cy.wrap([ ...Array(3) ]).each(() => {
            cy.get('[data-cy=click-me]').click();
        });

        cy.get('[data-cy=paragraph-count]').contains('3');
    });

    it('clicks the button another three times', () => {
        cy.get('[data-cy=click-me]').click();
        cy.get('[data-cy=click-me]').click();
        cy.get('[data-cy=click-me]').click();

        cy.get('[data-cy=paragraph-count]').contains('6');
    });

    it('types some text', () => {
        cy.get('[data-cy=text]').type('this is some text');
        cy.get('[data-cy=paragraph-text]').contains('this is some text');
    });
});
