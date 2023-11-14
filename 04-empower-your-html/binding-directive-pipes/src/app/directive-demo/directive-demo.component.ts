import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss']
})
export class DirectiveDemoComponent {

  isSpecial: boolean = false;
  canSave: boolean = true;
  isUnchanged: boolean = true;

  name: string = 'Angular';

  names: string[] = ['Ari', 'Carlos', 'Felipe', 'Nate'];

  displayLog(): void {
    console.error('clicked');
  }
}
