import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any) {
    // debugger;
    console.error('An error occurred:', error.message);
  }
}
