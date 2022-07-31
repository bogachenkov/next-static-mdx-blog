describe('site', () => {
  beforeEach(() => {
    cy.visit('/articles/dynamic-routing');
  });

  it('should render the title of the article', () => {
    cy.get('iframe').should('be.visible');
  });
});

export {};