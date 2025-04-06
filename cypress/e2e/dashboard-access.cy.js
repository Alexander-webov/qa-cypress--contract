describe('Dashboard Access Control', () => {
    it('should redirect unauthenticated user to login page', () => {
        // delete cookies/token, if exists
        cy.clearCookies();
        cy.visit('/dashboard');
        cy.url().should('include', '/login');
        cy.contains('Please log in'); // или другой текст, который ты видишь на странице
    });

    it('should allow access to dashboard after login', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').type('Password123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.contains('Welcome to your dashboard'); // подставь свой заголовок
    });
});
