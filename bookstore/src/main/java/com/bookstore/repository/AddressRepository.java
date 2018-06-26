package com.bookstore.repository;

import com.bookstore.model.Address;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository extends CrudRepository<Address,Long> {

}
