import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display Library', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Library');
	});

	it('should display Add Book button', () => {
		page.navigateTo();
		expect(page.getAddBookButton().getText()).toEqual('Add Book');
	});

	it(`should display 'Book List (count)'`, () => {
		page.navigateTo();
		expect(page.getBookListText()).toContain('Book List');
	});

	it(`should Add a new book'`, () => {
		page.navigateTo();
		page.getTitle().sendKeys('The Burning Maze.');
		page.getCategory().click();
		page.getDescription().sendKeys('The Trials Of Apollo');

		page.getAddBookButton().click();
	});

	it(`should reset the fields'`, () => {
		page.navigateTo();
		page.getTitle().sendKeys('The Burning Maze');
		page.getCategory().click();
		page.getDescription().sendKeys('The Trials Of Apollo');

		page.getResetButton().click();
	});

});
