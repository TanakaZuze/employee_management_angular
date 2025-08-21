import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBackendApiService {
  // default4200 localhost url
  private serverApiUrl = '';

  constructor(private http: HttpClient) { }

  // crud methods being consumed to angular service from spring api

  // create
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.serverApiUrl}/create-employee`, employee);
  }

  // read
  public readEmployyes(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.serverApiUrl}/get-a;;-employees`);
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