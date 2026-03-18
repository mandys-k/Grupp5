describe('learn languages website', () => {
  it('visits my website and clicks button to start timer', () => {
    cy.visit('/quiz')
    cy.get(".five-min-button").click()
    cy.get(".timer-button").should("not.exist")
    cy.get(".min-sec-container", { timeout: 2000 }).should("contain.text", "04:58")
    cy.get(".min-sec-container", { timeout: 5000 }).should("contain.text", "04:55")
    cy.get(".min-sec-container").should("not.contain", "00:00")
    cy.contains("Time's up!").should("not.exist")
  })
}),

// Accessibility test - uses cyporess-axe npm to check for accessibility issues on the page
it("has no accessibility issues", () => {
    cy.visit("/")
    cy.injectAxe()
    cy.checkA11y()
})