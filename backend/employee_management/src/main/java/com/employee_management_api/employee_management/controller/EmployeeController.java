package com.employee_management_api.employee_management.controller;

import com.employee_management_api.employee_management.model.Employee;
import com.employee_management_api.employee_management.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {
//    IoC ie dependency injection
    protected final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

//    CRUD operation methods
//    create
    @PostMapping("/create-employee")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

//    read all employees
    @GetMapping("/get-all-employees")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

//    read employee by id
    @GetMapping("/get-by-id/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

//    update employee
    @PutMapping("/update-employee/{id}")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }

//    delete employe
    @DeleteMapping("/delete-by-id/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public String deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return "User with id " + id + " deleted successfully";
    }
}
