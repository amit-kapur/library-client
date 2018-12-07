import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IBook } from '../models/book';

@Injectable({
	providedIn: 'root'
})
export class BookService {

	public URL = `${environment.apiURL}/books`;

	constructor(private http: HttpClient) { }

	public getBooks(): Observable<IBook[]> {
		return this.http.get<IBook[]>(`${this.URL}`);
	}

	public addBook(book: IBook): Observable<any> {
		return this.http.post<any>(`${this.URL}`, book);
	}
}
