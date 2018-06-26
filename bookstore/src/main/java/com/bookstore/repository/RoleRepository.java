package com.bookstore.repository;

import com.bookstore.model.Role;
import com.bookstore.model.RoleName;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends CrudRepository<Role,Long> {
    Optional<Role> findByName(RoleName name);
}
