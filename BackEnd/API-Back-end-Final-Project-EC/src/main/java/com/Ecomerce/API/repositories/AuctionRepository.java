package com.Ecomerce.API.repositories;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecomerce.API.models.entities.Auction;

public interface AuctionRepository extends JpaRepository<Auction, Integer> {

	List<Auction> findByStatusLike(String string);

	List<Auction> findByStatusLike(String string, PageRequest pagerq);

}
