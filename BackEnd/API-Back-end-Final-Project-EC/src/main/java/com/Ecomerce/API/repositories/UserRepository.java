package com.Ecomerce.API.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Ecomerce.API.models.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	boolean existsByAccountName(String accountName);
}
