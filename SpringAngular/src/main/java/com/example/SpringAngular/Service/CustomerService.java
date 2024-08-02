package com.example.SpringAngular.Service;

import com.example.SpringAngular.DTO.CustomerDTO;
import com.example.SpringAngular.DTO.CustomerSaveDTO;
import com.example.SpringAngular.DTO.CustomerUpdateDTO;

import java.util.List;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer();

    String updateCustomers(CustomerUpdateDTO customerUpdateDTO);

    boolean deleteCustomer(int id);
}
