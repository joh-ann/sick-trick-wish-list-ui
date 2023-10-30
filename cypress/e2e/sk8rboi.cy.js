describe('sick trick wish list', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      body: [
        {
        "stance": "regular",
        "name": "treflip",
        "obstacle": "flat ground",
        "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
        "id": 1
        },
        {
        "stance": "switch",
        "name": "heelflip",
        "obstacle": "stairs",
        "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
        "id": 2
        },
        {
        "stance": "regular",
        "name": "frontside 50-50, backside 180 out",
        "obstacle": "ledge",
        "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
        "id": 3
        }
        ]
    }).as('getTricks')
    cy.visit('http://localhost:3000')
    cy.wait('@getTricks')
  })
  it('should show home page', () => {
    cy.get("h1")
      .contains("Sick Trick Wish List")
      .get('form')
      .get('.all-tricks').children().should('have.length', 3)
  })
  it('should show data put into the form', () => {
    cy.get('form').get('select[name="stance"]').select("Regular")
    cy.get('form').get('input[name="trickName"]').type("Kickflip")
    cy.get('form').get('select[name="obstacle"]').select("Flatground")
    cy.get('form').get('input[name="link"]').type("https://www.youtube.com/watch?v=9siogRgZo3Y")
  })
  it('should add the new trick and display it on the DOM', () => {
    cy.get('form').get('select[name="stance"]').select("Regular")
    cy.get('form').get('input[name="trickName"]').type("Kickflip")
    cy.get('form').get('select[name="obstacle"]').select("Flatground")
    cy.get('form').get('input[name="link"]').type("https://www.youtube.com/watch?v=9siogRgZo3Y")
    cy.get('button').click()
    cy.get('.all-tricks').children().should('have.length', 4)
    cy.get('.all-tricks').first().contains('Regular Treflip')
    cy.get('.all-tricks').last().contains('Regular Kickflip')
  })
})