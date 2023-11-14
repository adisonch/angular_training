import { Component } from '@angular/core';
import { books } from '../data/book-list';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books = books;
}
