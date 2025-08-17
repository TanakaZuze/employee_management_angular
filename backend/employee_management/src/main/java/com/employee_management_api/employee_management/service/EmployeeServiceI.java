package com.employee_management_api.employee_management.service;

import com.employee_management_api.employee_management.model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeServiceI {
//    CRUD operations to be performed on employee entity
//    create
    Employee createEmployee(Employee employee);

//    read
    List<Employee> getAllEmployees();

//   find by id
    Employee getEmployeeById(Long id);

//    update
    Employee updateEmployee(Long id, Employee employee);

//    delete
    String deleteEmployee(Long id);

}
