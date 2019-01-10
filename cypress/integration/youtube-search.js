/// <reference types="cypress" />

describe('youtube api', () => {
    const searchTerm = 'angular';
    
    beforeEach(() => {
      cy.visit('http://localhost:4200');
    })

    it('has a title', () => {
      cy.contains('Angular Youtube Search')
    })

    it('sends search request to youtube', () => {
      cy.get('input').type(searchTerm);
      cy.get('mat-icon').click();
    })

})