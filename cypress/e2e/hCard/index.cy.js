describe('HCard Builder', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/home'); // TODO: import this as baseUrl
	});

	it('Should fill out the HCard form and previews the card', () => {
		cy.get('[name="name"]').type('test').blur();

		cy.get('[data-cy="name-preview"]').should('contain.text', 'test');

		cy.get('[name="surname"]').type('test2').blur();

		cy.get('[data-cy="name-preview"]').should('contain.text', 'test test2');

		cy.get('[name="email"]').type('test@test.com').blur();

		cy.get('[data-cy="email-preview"]').should(
			'contain.text',
			'test@test.com'
		);

		cy.get('[name="phone"]').type('1234567890').blur();

		cy.get('[data-cy="phone-preview"]').should(
			'contain.text',
			'1234567890'
		);

		cy.get('[name="houseName"]').type('house').blur();

		cy.get('[name="street"]').type('street').blur();

		cy.get('[name="suburb"]').type('suburb').blur();

		cy.get('[data-cy="address-preview"]').should(
			'contain.text',
			'house street suburb'
		);

		cy.get('[name="postcode"]').type('3000').blur();

		cy.get('[data-cy="postcode-preview"]').should('contain.text', '3000');

		cy.get('[name="country"]').type('country').blur();

		cy.get('[data-cy="country-preview"]').should('contain.text', 'country');
	});

	//TODO: Add more tests
});
