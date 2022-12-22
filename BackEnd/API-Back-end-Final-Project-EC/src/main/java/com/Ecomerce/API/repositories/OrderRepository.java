package com.Ecomerce.API.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecomerce.API.models.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{

}
