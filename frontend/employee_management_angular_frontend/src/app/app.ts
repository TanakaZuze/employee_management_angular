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

  /**
   * openModal
employee:Employee,mode:string   */
  public openModal(employee: Employee  | null, mode: string): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none'
    button.setAttribute('data-toggle', 'modal')

    if (mode == 'add') {
      button.setAttribute('data-target', '#addEmployeeModal')
    }
    if (mode == 'edit') {

      button.setAttribute('data-target', '#updateEmployeeModal')
    }
    if (mode == 'delete') {

      button.setAttribute('data-target', '#deleteEmployeeModal')
    }

    container?.appendChild(button);
    button.click();


  }

}

