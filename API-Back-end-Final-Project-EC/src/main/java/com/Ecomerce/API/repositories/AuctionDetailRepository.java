package com.Ecomerce.API.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecomerce.API.models.entities.AuctionDetail;

public interface AuctionDetailRepository extends JpaRepository<AuctionDetail, Integer> {

}
