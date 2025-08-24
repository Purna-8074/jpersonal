package com.example.klef.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.klef.model.Employee;

@Repository
public interface EmpRepo extends JpaRepository<Employee, Integer> {

}
