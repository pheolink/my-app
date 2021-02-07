describe('UI Tests', function() {
 it('should navigate to Success Page after submitting.',function(){
        // first visit the site
        cy.visit('http://localhost:3000');
        // get elements we will be
        // interacting with and alias them
        cy.contains('h2#title', 'This is a React App.');
  });
});