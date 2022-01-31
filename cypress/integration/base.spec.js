/// <reference types="cypress" />

describe('simple tests', () => {
    before(() => {
        cy.visit('http://localhost:3000');
    });

    it('wait for loading to finish', () => {
        cy.get('[data-cy=loading]').should('not.exist');
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
