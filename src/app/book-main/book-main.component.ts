import { IBook } from '../shared/models/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-home',
	templateUrl: './book-main.component.html',
	styleUrls: ['./book-main.component.scss']
})
export class BookMainComponent implements OnInit {

	public bookForm: FormGroup;
	public books: IBook[] = Array();

	constructor(
		private bookService: BookService,
		private formBuilder: FormBuilder,
		private toastr: ToastrService) { }

	ngOnInit() {
		this.bookForm = this.formBuilder.group({
			title: ['', [Validators.maxLength(30), Validators.required]],
			description: ['', Validators.required],
			category: ['', Validators.required],
		});

		this.loadBooksList();
	}

	private loadBooksList() {
		this.bookService.getBooks()
			.subscribe(
				(response) => {
					if (!response) {
						this.toastr.error('Error getting books list from server.');
						return;
					}

					response.map((book, index) => {
						this.books.push({
							id: book.id,
							title: book.title,
							category: book.category,
							description: book.description
						});
					});
				});
	}

	onSubmit() {
		if (this.bookForm.valid) {

			if (this.books.find(book => book.title === this.bookForm.value.title)) {
				this.toastr.success('Book already added into collection.');
				return;
			}

			const newBook = {
				title: this.bookForm.value.title,
				category: this.bookForm.value.category,
				description: this.bookForm.value.description
			};

			this.bookService.addBook(newBook)
				.subscribe((response) => {

					if (!response) {
						this.toastr.error('Error adding a new book.');
						return;
					}

					this.books.push(newBook);
					this.bookForm.reset();
					this.toastr.success('New book added.');
				});
		}
	}

	onReset() {
		this.bookForm.reset();
	}

}
