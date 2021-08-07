describe('ERS Reimbursements Tests', () => {

    Cypress.config('baseUrl', 'http://localhost:7000/reimbursements')

    it("GET all", () => {
        cy.request('/').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(19)
        })
    })

    it("Add Reimbursement", () => {
        const reimbursement = {
            "amount": 5000.00,
            "description": "airline tickets",
            "submitted": "2021-05-01",
            "author": 1002,
            "resolver": null,
            "resolved": null,
            "typeId": 1,
            "statusId": 1,
            "receipt": "should be a file address...."
        }
        cy.request('POST', '/', reimbursement)
            .its("body")
        })
})
