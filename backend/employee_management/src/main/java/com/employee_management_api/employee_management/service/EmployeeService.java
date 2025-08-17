package com.employee_management_api.employee_management.service;

import com.employee_management_api.employee_management.exceptions.UserNotFoundException;
import com.employee_management_api.employee_management.model.Employee;
import com.employee_management_api.employee_management.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmployeeService implements EmployeeServiceI{
//    IoC ie dependency injection
    protected final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new  UserNotFoundException("Employee with "+id+" not found"));
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
//        check if employee with queried id exists else throw UserNotFoundFoundException
        Employee existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("Employee with "+id+" not found"));

        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setJobTitle(employee.getJobTitle());
        existingEmployee.setPhoneNumber(employee.getPhoneNumber());
        existingEmployee.setImageUrl(employee.getImageUrl());


        return employeeRepository.save(existingEmployee);
    }

    @Override
    public String deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
        return "User with id " + id + " deleted successfully";
    }
}
