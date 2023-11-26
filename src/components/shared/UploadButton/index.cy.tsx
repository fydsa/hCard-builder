import { UploadButton } from './index';

describe('<UploadButton />', () => {
	let fileInput: Cypress.Chainable<JQuery<HTMLElement>>;
	let uploadButton: Cypress.Chainable<JQuery<HTMLElement>>;

	beforeEach(() => {
		cy.mount(
			<UploadButton handleChange={() => {}} accept='image/*'>
				Upload
			</UploadButton>
		);

		fileInput = cy.get('[data-cy="upload-input"]');
		uploadButton = cy.get('[data-cy="button"]');
	});

	it('Should have correct input type and visiblity', () => {
		fileInput.should('have.attr', 'type', 'file');
		fileInput.should('not.be.visible');
	});

	it('Should trigger input-file when the button is clicked', () => {
		uploadButton.click();

		fileInput.should('have.been.calledOnce');
	});
});
