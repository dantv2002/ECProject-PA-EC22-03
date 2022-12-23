package com.Ecomerce.API.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecomerce.API.models.entities.AddressShipping;
import com.Ecomerce.API.models.entities.User;

public interface AddressShippingRepository extends JpaRepository<AddressShipping, Integer> {
	List<AddressShipping> findByUserAndStatus(User user, boolean status);
}
