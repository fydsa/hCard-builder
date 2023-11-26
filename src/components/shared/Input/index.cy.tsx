import { Input } from './index';

describe('<Input />', () => {
	let inputEl: Cypress.Chainable<JQuery<HTMLElement>>;

	beforeEach(() => {
		cy.mount(<Input />);

		inputEl = cy.get('[data-cy="input"]');
	});

	it('Should have the correct class', () => {
		inputEl.should('have.class', 'input');
	});

	it('Should support onChange', () => {
		inputEl.type('hello');

		inputEl.should('have.value', 'hello');
	});
});
