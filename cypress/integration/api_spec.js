describe('GET all reimbursements', () => {
    it("GET all", () => {
        cy.request('http://localhost:7000/reimbursements').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(13)
        })
    })
})
