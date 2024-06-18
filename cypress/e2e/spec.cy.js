describe('Google Search', () => {
  it('should search for teater vanemuine on Google', () => {
    // Open Google.com
    cy.visit('https://www.google.com');

    // Accept cookies if the cookie consent banner appears
    cy.get('button').contains('Nõustu kõigiga').click();
      
    // Wait for the search input field to be visible
    cy.get('[name="q"]').type('teater vanemuine');

    // Wait for the search results to load and verify that the search results are visible
    cy.get('input[value="Google otsing"]').eq(0).click();  });
});
