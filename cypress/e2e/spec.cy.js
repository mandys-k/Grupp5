describe('learn languages website', () => {

    // Test: visits my website and clicks button to start timer
    it('visits my website and clicks button to start timer', () => {
        cy.visit('/quiz')
        cy.get(".five-min-button").click()
        cy.get(".timer-button").should("not.exist")
        cy.get(".min-sec-container", { timeout: 2000 }).should("contain.text", "04:58")
        cy.get(".min-sec-container", { timeout: 5000 }).should("contain.text", "04:55")
        cy.get(".min-sec-container").should("not.contain", "00:00")
        cy.contains("Time\'s up!").should("not.exist")
    })

    // Tests to meet our "definition of done" criteria
    // Accessibility test - uses cypress-axe npm to check for accessibility issues on the page - SAK
    it("has no accessibility issues", () => {
        cy.visit("/")
        cy.injectAxe()
        cy.checkA11y()
    })

    // Test to check prettier json file is consistent and includes tabwidth of 4, no semicolons and no trailing commas - SAK
    it("prettier config is correct", () => {
        cy.readFile(".prettierrc.json").then((config) => {
            expect(config).to.include({
                semi: false,
                trailingComma: "none",
                tabWidth: 4
            })
        })
    })

    // Test to check viewport width is responsive at different widths - SAK
    const sizes = [375, 576, 768, 980]
    sizes.forEach((width) => {
        it(`is responsive at width ${width}px`, () => {
            cy.viewport(width, 800)
            cy.visit("/")
            cy.get("body").should("be.visible")

            cy.document().then((doc) => {
                expect(doc.documentElement.scrollWidth).to.be.lte(width)
            })
        })
    })

})