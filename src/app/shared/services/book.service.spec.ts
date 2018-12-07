import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockBook } from './book.mock';
import { asyncData } from './async-observable-helpers';

describe('BookService', () => {
	let postService: BookService;
	let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
	let service: BookService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [BookService]
		});


		postService = new BookService(<any>httpClientSpy);
		service = TestBed.get(BookService);
		httpMock = TestBed.get(HttpTestingController);
	}

	afterEach(() => {
			httpMock.verify();
		});

	it('should be created', inject([BookService], (bookService: BookService) => {
		expect(bookService).toBeTruthy();
	});

	it('should have getBook function', inject([BookService], (bookService: BookService) => {
		expect(bookService.getBooks).toBeTruthy();
	});

	it('should have addBook function', inject([BookService], (bookService: BookService) => {
		expect(bookService.addBook).toBeTruthy();
	});

	it('should retreive post from the API via GET', () => {

		service.getBooks().subscribe(books => {
			expect(books.length).toBe(2);
			expect(books).toEqual(mockBook);
		});

		const request = httpMock.expectOne(`${service.URL}`);
		expect(request.request.method).toBe('GET');
		request.flush(mockBook);
	});
});
