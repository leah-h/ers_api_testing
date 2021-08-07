describe('GET all reimbursements', () => {
    it("GET all", () => {
        cy.request('GET', 'http://localhost:7000/reimbursements')
    })
})
