package com.Ecomerce.API.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Ecomerce.API.models.entities.StatusAuction;

@Repository
public interface StatusAuctionRepository extends JpaRepository<StatusAuction, Integer>{

}
