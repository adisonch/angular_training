import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.scss']
})
export class BindingDemoComponent {

  
  textDisplayForInterpolation: string = 'This is a text for interpolation';

  url: string = 'https://www.google.com';
  isUnchanged: boolean = false;

  isWarning: boolean = false;

}
