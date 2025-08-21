import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee-interface';
import { EmployeeBackendApiService } from './services/employee-backend-api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected title = 'employee_management_angular_frontend';
  public employee: Employee[];


  constructor(private employeeService: EmployeeBackendApiService) { }


}
