import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee-interface';
import { EmployeeBackendApiService } from './services/employee-backend-api-service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // protected title = 'employee_management_angular_frontend';


  constructor(private employeeService: EmployeeBackendApiService) { }

  public employees: Employee[] = [];


  ngOnInit(): void {
    this.getAllEmployees()
  }

  public getAllEmployees(): void {
    this.employeeService.readAllEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
}
