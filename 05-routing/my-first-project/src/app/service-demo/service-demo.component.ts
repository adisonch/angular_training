import { Component } from '@angular/core';
import { ApiCallDemoService } from '../service/api-call-demo.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss']
})
export class ServiceDemoComponent {

  constructor(private apiDemoService: ApiCallDemoService) {
   
  }

  ngOnInit(): void {
    this.apiDemoService.getEmployees().subscribe(res => {
      console.error(res);
    });
  }
}
