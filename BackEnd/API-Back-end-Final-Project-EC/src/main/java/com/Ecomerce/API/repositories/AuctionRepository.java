package com.Ecomerce.API.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecomerce.API.models.entities.Auction;

public interface AuctionRepository extends JpaRepository<Auction, Integer> {

}
