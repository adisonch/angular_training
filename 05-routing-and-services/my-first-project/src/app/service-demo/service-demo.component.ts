import { Component } from '@angular/core';
import { ApiCallDemoService } from '../service/api-call-demo.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss']
})
export class ServiceDemoComponent {

  shared: string = '';

  constructor(private apiDemoService: ApiCallDemoService) {
   
  }

  ngOnInit(): void {
    this.shared = this.apiDemoService.sharedVariable;

    this.apiDemoService.getEmployees().subscribe(res => {
      console.error(res);

      // this.apiDemoService.getEmployeesDetails(res.id).subscribe(res => {
      //   console.error(res);
      // });
    });
  }


  ngOnDestroy(): void {
    console.log('ServiceDemoComponent destroyed');
  }
}
