package backebd.service;

import backebd.entity.Employee;
import backebd.repo.EmployeeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class EmployeeServiceImplTest {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    void name() {


        Employee employee=new Employee();

        employee.setFirstName("as");
        employee.setEmail("adas");
        employee.setLastName("qweqwe");

        var res=employeeRepository.save(employee);
        System.err.println(res.getId());
    }
}