package com.employee_management_api.employee_management.repository;

import com.employee_management_api.employee_management.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
