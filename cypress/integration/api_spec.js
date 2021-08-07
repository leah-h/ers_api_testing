describe('ERS Reimbursements Tests', () => {

    Cypress.config('baseUrl', 'http://localhost:7000/reimbursements')

    it("GET all", () => {
        cy.request('/').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(19)
        })
    })

    it('GET reimbursements by user id', () => {
        cy.request('/1001').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.length(20)
        })
    })

    it('GET reimbursements by status id', () => {
        cy.request('/filtered/1').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.length(30)
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

    it('Update Reimbursement', () => {
        const reimbursement = {
            "resolver": 1001,
            "resolved": "2021-05-02",
            "statusId": 1,
            "id": 6268

        }
        cy.request('PUT', '/6828', reimbursement)
            .its('body')
    })
})
