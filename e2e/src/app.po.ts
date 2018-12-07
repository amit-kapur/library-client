import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('h1')).getText();
	}

	getBookListText() {
		return element(by.id('booklist')).getText();
	}

	getAddBookButton() {
		return element(by.id('addBook'));
	}

	getResetButton() {
		return element(by.id('reset'));
	}

	getTitle() {
		return element(by.name('title'));
	}

	getCategory() {
		return element.all(by.cssContainingText('span.mat-option-text', 'Drama'));
	}

	getDescription() {
		return element(by.id('description'));
	}
}
