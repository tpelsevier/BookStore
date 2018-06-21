package com.qa.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.qa.models.Customer;
import com.qa.repositories.CustomerRepository;

import javax.transaction.Transactional;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	

	@Transactional
	public Customer saveCustomer(Customer customer)
	{
		Customer createdCustomer = new Customer();
		createdCustomer.setEmail(customer.getEmail());
		createdCustomer.setFirstName(customer.getFirstName());
		createdCustomer.setLastName(customer.getLastName());
		createdCustomer.setPassword(customer.getPassword());
		return customerRepository.save(createdCustomer);
	}
	
	public Customer loginProcess(String email,String password){
	
		return customerRepository.loginProcess(email, password);
	}
	
	
	public int updateCustomer(String firstName,
			String lastName,
			String email,
			int customerId){
		
		
		return customerRepository.updateCustomer(firstName, lastName, email, customerId);
	}
	
	
	public Customer findCustomerById(int customerId)
	{
		
		return customerRepository.findOne(customerId);
	}
	
	


}
