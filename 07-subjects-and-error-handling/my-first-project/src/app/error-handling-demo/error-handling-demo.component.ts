import { Component } from '@angular/core';

@Component({
  selector: 'app-error-handling-demo',
  templateUrl: './error-handling-demo.component.html',
  styleUrls: ['./error-handling-demo.component.scss']
})
export class ErrorHandlingDemoComponent {
  title: string = 'Global Error Handler in Angular';

  throwError1() {
    var a: any;
    a.b();
  }

  throwError2() {
    try {
      var a: any;
      a.b();
    } catch (error) {
      console.error('throwError2')
      //here you can handle the error
      //
    }
  }
}
