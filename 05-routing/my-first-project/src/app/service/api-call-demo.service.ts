import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallDemoService {

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<any>('https://dummy.restapiexample.com/api/v1/employees');
  }

}
