package com.Ecomerce.API.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Ecomerce.API.models.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
