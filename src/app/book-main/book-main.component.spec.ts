import { ToastrModule } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookMainComponent } from './book-main.component';
import { BookItemComponent } from './book-item/book-item.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatBadgeModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('BookMainComponent', () => {
	let component: BookMainComponent;
	let fixture: ComponentFixture<BookMainComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				BookMainComponent,
				BookItemComponent
			],
			imports: [
				FormsModule,
				BrowserAnimationsModule,
				ReactiveFormsModule,
				MatFormFieldModule,
				MatInputModule,
				MatOptionModule,
				MatSelectModule,
				MatBadgeModule,
				HttpClientModule,
				ToastrModule.forRoot({
					positionClass: 'toast-top-center'
				})
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BookMainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the main component', () => {
		expect(component).toBeTruthy();
	});

	it('should render title in a h1 tag', () => {
	    fixture = TestBed.createComponent(BookMainComponent);
	    fixture.detectChanges();
	    const compiled = fixture.debugElement.nativeElement;
	    expect(compiled.querySelector('h1').textContent).toContain('Add Book');
	  });

	it('check the length of drop down', async () => {

		const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
		trigger.click();
		fixture.detectChanges();
		await fixture.whenStable().then(() => {
			const inquiryOptions = fixture.debugElement.queryAll(By.css('.mat-option-text'));
			expect(inquiryOptions.length).toEqual(4);
		});
	});

	it(`form should not be invalid`, () => {
		component.bookForm.controls['title'].setValue('');
		component.bookForm.controls['category'].setValue('');
		component.bookForm.controls['description'].setValue('');
		expect(component.bookForm.valid).toBeFalsy();
	});

	it(`form should be Valid`, () => {
		component.bookForm.controls['title'].setValue('The good book');
		const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
		trigger.click();
		fixture.detectChanges();
		component.bookForm.controls['category'].setValue('drama');
		component.bookForm.controls['description'].setValue('this is a good book');
		expect(component.bookForm.valid).toBeTruthy();
	});
});
