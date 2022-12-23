package com.Ecomerce.API.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Ecomerce.API.models.entities.District;
import com.Ecomerce.API.models.entities.Shipping;

@Repository
public interface ShippingRepository extends JpaRepository<Shipping, Integer> {

	Shipping findByAddressStartAndAddressEnd(District addressStart, District addressEnd);

}
