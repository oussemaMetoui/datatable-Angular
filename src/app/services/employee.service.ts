import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class EmployeeService {
  private url = environment.api_url;

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get(this.url);
  }
}
