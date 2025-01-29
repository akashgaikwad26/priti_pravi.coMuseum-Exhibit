describe('For Visitors', () => {

    it('Get Visitors', () => {
        cy.api('GET',`http://localhost:3000/visitor-progress`)
        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200) 
            assert.equal(response.body, {
                "message": "Visitor progress retrieved"
                })  
        })       
    })

    it('Post Visitors', () => {
        cy.request({
            method: 'POST',
            url: `http://localhost:3000/quiz/submit-quiz`,
            headers: {
                        'Content-Type' : 'application/json'
                     }
            body: {
                "visitor_id": 1,
                "progress": {
                    "key": "artifact3",
                    "value": "viewed"
                }
            }
        })

        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200) 
            assert.equal(response.body, {"message":"Visitor data tracked successfully",
                "visitorData":{"visitor_id":1,"progress":{"key":"artifact3","value":"viewed"}
                }})  
        })       
    })

});
