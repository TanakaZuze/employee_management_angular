import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee-interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBackendApiService {
  // default4200 localhost url
  private serverApiUrl = environment.springBackendCruApiUrl;

  constructor(private http: HttpClient) { }

  // crud methods being consumed to angular service from spring api

  // create
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.serverApiUrl}/create-employee`, employee);
  }

  // read
  public readAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.serverApiUrl}/get-all-employees`);
  }

  // update
  public updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.serverApiUrl}/update-employee/${employeeId}`, employee);
  }

  // delete
  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.serverApiUrl}/delete-by-id/${employeeId}`);
  }

}