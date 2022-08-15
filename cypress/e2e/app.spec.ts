context("Navigation", () => {
  describe('Clicking the article', () => {
    it('should navigate to the article page', () => {
      cy.visit('/');
      expect(2).to.eq(2);
  
      cy.get('[data-cy="newest-article-title"]').then($title => {
        const title = $title.text();
  
        cy.get('[data-cy="newest-article"]').click();
        cy.url().should('include', '/articles');
        cy.get('h1').contains(title);
      });
    });
  });

  describe('Clicking the category link', () => {
    it('should navigate to the category page', () => {
      cy.visit('/');
      
      cy.get('a[data-cy="category-link"]').contains('Next.js').click();

      cy.url().should('include', '/categories');
      cy.get('h1').contains('Next.js');
    })
  });

  describe('Navigating to the wrong page', () => {
    it('should redirect to the 404 page and then navigate to home page by clicking on "Go Back" link', () => {
      cy.request({
        url: '/some-wrong-page',
        failOnStatusCode: false
      }).its('status').should('equal', 404);

      cy.visit('/404', {failOnStatusCode: false});
      cy.get('h1').contains('404');

      cy.get('a').contains('Go Back Home').click();
      cy.url().should('equal', 'http://localhost:3000/');
    });
  })
});

export {}