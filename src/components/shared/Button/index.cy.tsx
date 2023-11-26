import { Button } from './index';

describe('<Button />', () => {
	let buttonEl: Cypress.Chainable<JQuery<HTMLElement>>;

	beforeEach(() => {
		cy.mount(<Button>button</Button>);

		buttonEl = cy.get('[data-cy="button"]');
	});

	it('Should have primary class if isPrimary is true', () => {
		cy.mount(<Button isPrimary>sfd</Button>);

		buttonEl = cy.get('[data-cy="button"]');

		buttonEl.should(($button) => {
			const classNames = $button.attr('class');
			expect(classNames).to.include('primary');
			expect(classNames).not.to.include('secondary');
		});
	});

	it('Should have disabled class if passed as prop', () => {
		cy.mount(<Button disabled>sfd</Button>);

		buttonEl = cy.get('[data-cy="button"]');

		buttonEl.should('be.disabled');

		buttonEl.should(($button) => {
			const classNames = $button.attr('class');
			expect(classNames).to.include('disabled');
		});
	});

	it('Should handle click', () => {
		buttonEl.click();
		buttonEl.should('have.been.calledOnce');
	});
});
