import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookItemComponent } from './book-item.component';
import { IBook } from 'src/app/shared/models/book';

describe('BookItemComponent', () => {
	let component: BookItemComponent;
	let fixture: ComponentFixture<TestCmpWrapper>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				TestCmpWrapper,
				BookItemComponent
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestCmpWrapper);
		component = fixture.debugElement.children[0].componentInstance;
		fixture.detectChanges();
	});

	  it('should create the book item', () => {
	    expect(component).toBeTruthy();
	  });
});

@Component({
	selector: 'mock-component',
	template: '<app-book-item [book]="mockBook"></app-book-item>',
})
class TestCmpWrapper {
	mockBook: IBook =
		{
			id: '1',
			title: 'The Intelligent Investor',
			category: 'Drama',
			description: 'An investment book'
		};
}
