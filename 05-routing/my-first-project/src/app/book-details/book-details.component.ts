import { Component, OnInit } from '@angular/core';
import { bookDetails } from '../data/book-details';
import { BookDetail } from '../models/book-detail';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  details: BookDetail | null = null;

  constructor() {}

  ngOnInit(): void {
    this.details = bookDetails.get(1) || null;
  }
}
