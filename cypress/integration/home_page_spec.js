describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/') // change URL to match your dev URL
        cy.contains('Edit src/App.js and save to reload.')
        cy.contains('Learn React')
        cy.get('.App-link').click()
        cy.get('#logo')
    })
})