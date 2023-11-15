import { Component } from '@angular/core';
import {
  Observable,
  catchError,
  concatMap,
  filter,
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  of,
  skip,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss'],
})
export class RxjsDemoComponent {
  coordinates: string = '';
  myObservable: Observable<number> | null = null;

  ngOnInit(): void {

    const obs1$ = interval(1000);
    // interval operator creating an observable
    interval(1000).subscribe({
      next: (n) => {
        console.log(`It's been ${n + 1} seconds since subscribing!`);
      },
    });

    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('foo');
      }, 2000);
    });

    // promise transformation
    // from(promise1).subscribe({
    //   next: (message) => console.log(`The delayed message is '${message}'`),
    //   error: (error) => console.log("There's been an error"),
    //   complete: () => console.log('Completed'),
    // });

    // browser event transformation
    fromEvent(document, 'click').pipe(
      concatMap(
        (event) => {
          return this.apiCall1();
        })
    ).subscribe({
      next: (response) => console.log('Clicked!' + response),
    });

    //mapping
    // fromEvent(document, 'click')
    //   .pipe(
    //     map(
    //       (event) =>
    //         `x: ${(event as MouseEvent).clientX}, y: ${
    //           (event as MouseEvent).clientY
    //         }`
    //     )
    //   )
    //   .subscribe({ next: (data) => (this.coordinates = data) });

    //filtering
    // from([1, 2, 3, 4, 5, 6, 7, 8])
    //   .pipe(filter((data) => data % 2 === 0), catchError((err) => of(err))
    //   .subscribe({ next: (data) => console.log(data) });
  }

  apiCall1(): Observable<any> {
    return of('apiCall1');
  }

  forkJoinDemo() {
    // forkJoin([
    //   this.apiCall1(),
    //   this.apiCall2(),
    // ]).subscribe([res1, res2] => {
    //   console.log(res1);
    // });

    // const getEmployees$ = this.getEmployees()
    // .pipe(
    //   concatMap(res1) => {
    //     return this.getEmployeeDetails(res1);
    //   }
    // );

    // getEmployees$.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    // });

  }

  createObservable() {
    // Create simple observable that emits three values
    this.myObservable = of(1, 2, 3);
    console.log('Oberservable created');
  }

  skipDemo() {
    from([1, 2, 3, 4, 5, 6, 7, 8])
      .pipe(skip(2))
      .subscribe({ next: (data) => console.log(data) });
  }

  subscribe(): void {
    // Execute with the observer object
    this.myObservable?.subscribe({
      next: (x: any) => console.log('Observer got a next value: ' + x),
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
    console.log('Oberservable subscribed');
  }
}
