import { Component, OnInit, Input } from '@angular/core';
import { IBook } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

	@Input() book: IBook;

  	constructor() { }

  	ngOnInit() {
  	}

}
