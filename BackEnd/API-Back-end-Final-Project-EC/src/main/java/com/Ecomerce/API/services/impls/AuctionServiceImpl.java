package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDetailDto;
import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.StatusAuction;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.services.AuctionService;
import com.Ecomerce.API.utils.converter.AuctionConverter;

@Service
public class AuctionServiceImpl implements AuctionService{
	@Autowired
	private AuctionRepository repository;
	
	@Autowired
	private StatusAuctionRepository statusAuctionRepository;
	
	@Autowired
	private AuctionConverter converter;

	public List<AuctionDto> findAuctionWithStatusAuction(int amount, int type) {
		StatusAuction statusAuction = statusAuctionRepository.findById(type).orElse(null);
		List<Auction> auctions = repository.findByStatusAuction(statusAuction);
		List<AuctionDto> auctionsDto = new ArrayList<AuctionDto>();

		int count = 0;
		for (Auction auction : auctions) {
			auctionsDto.add(converter.convertToDto(auction));
			count++;
			if (count == amount) {
				break;
			}
		}
		
		return auctionsDto;
	}

	@Override
	public List<AuctionDto> findAuctionIsHappening(int amount) {
		List<AuctionDto> productsOnAuction = findAuctionWithStatusAuction(amount, 2);	
		
		return productsOnAuction;
	}

	@Override
	public AuctionDetailDto displayAuctionDetail(int id) {
		Auction auction = repository.findById(id).orElse(null);		
		//AuctionDetailDto auctionDetail = converter.convertToAuctionDetailDto(auction);
		
		return null;
	}
}
