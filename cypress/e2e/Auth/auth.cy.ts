describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
  })

  it('Successful login should let user go to home page', () => {
    cy.get('[data-cy="cypress-title"]').should('have.text', 'Login')
    cy.contains('Username').should('exist');
    cy.contains('Password').should('exist');
    cy.get('[data-cy="cypress-user"').type('admin')
    cy.get('[data-cy="cypress-password"').type('admin')
    cy.contains('Signin').click()

    cy.url().should('equal', 'http://localhost:5173/')
    cy.contains('Dashboard').should('exist');
    cy.contains('Logout').should('exist');
  })
})