describe('For User', () => {

    it('Post User', () => {
        cy.request({
            method: 'POST',
            url: `http://localhost:3000/auth/login`,
            headers: {
                        'Content-Type' : 'application/json'
                     }
            body: {
                {
                    "username": "visitor2",
                    "password": "password2"
                }                  
            }
        })

        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200) 
            assert.equal(response.body,{
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpc2l0b3IyIiwiaWF0IjoxNzM4MTUwNjUzLCJleHAiOjE3MzgxNTQyNTN9.R0nAEsaF6ycApIF-sB9AY6lj433MFaIza5kKQAJRwGA"
                })  
        })       
    })

    it('Get Admin Data', () => {
        cy.request({
            method: 'GET',
            url: `http://localhost:3000/admin-data`,
            authorization: {'Bearer Token' :
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQHByYXZpLmNvIiwiaWF0IjoxNzM4MTUxNDMxLCJleHAiOjE3MzgxNTUwMzF9.wFWKr-UnbMyK4Pjrl0rsUDmdpI8Y7eWCAkxUMqX8wX4'}
        })

        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200) 
            assert.equal(response.body, {
                "message": "Forbidden"
                })   
        })       
    })

    it('Get Visitor Data', () => {
        cy.request({
            method: 'GET',
            url: `http://localhost:3000/visitor-data`,
            authorization: {'Bearer Token' :
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpc2l0b3IzIiwiaWF0IjoxNzM4MTUwODgzLCJleHAiOjE3MzgxNTQ0ODN9.6lJmGOEePOTJ5UOj7MAnPrVxCcFdOjj6ksuvAqt_WtU'}
        })
        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200) 
            assert.equal(response.body, {
                "message": "Forbidden"
                })  
        })       
    })

});
