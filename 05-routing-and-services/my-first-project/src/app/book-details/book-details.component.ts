import { Component, OnInit } from '@angular/core';
import { bookDetails } from '../data/book-details';
import { BookDetail } from '../models/book-detail';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  details: BookDetail | null = null;

  subscription: Subscription | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.details = bookDetails.get(1) || null;
    const id = this.route.snapshot.paramMap.get('id');
    this.details = bookDetails.get(Number(id)) || null;

    
    interval(1000).pipe(
      take(5)
    ).subscribe({
      next: (counter) => {
        console.log(counter);
      },
    });
  }

  ngOnDestroy(): void {
    // this.subscription?.unsubscribe();
  }
}
