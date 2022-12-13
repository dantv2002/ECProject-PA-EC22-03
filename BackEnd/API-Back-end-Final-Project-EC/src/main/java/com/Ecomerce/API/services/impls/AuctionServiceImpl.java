package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.repositories.WaitingAuctionRepository;
import com.Ecomerce.API.services.AuctionService;

@Service
public class AuctionServiceImpl implements AuctionService{
	@Autowired
	private AuctionRepository repository;
	
	@Autowired
	private WaitingAuctionRepository watingAuctionRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<AuctionDto> findAll() {
		List<Auction> auctions = repository.findAll();
		List<AuctionDto> auctionsDto = new ArrayList<AuctionDto>();
		auctions.forEach(auction -> auctionsDto.add(convertToDto(auction)));
		
		return auctionsDto;
	}
	
	public AuctionDto convertToDto(Auction auction) {
		AuctionDto auctionDto = new AuctionDto();
		auctionDto.setId(auction.getId());
		auctionDto.setWaitingAuctionId(auction.getWaitingAuction().getId());
		auctionDto.setTimeStart(auction.getTimeStart());
		auctionDto.setTimeEnd(auction.getTimeEnd());
		auctionDto.setPriceTransaction(auction.getPriceTransaction());
		auctionDto.setPriceShipping(auction.getPriceShipping());
		auctionDto.setCommission(auction.getCommission());
		auctionDto.setStatus(auction.getStatus());
		
		return auctionDto;
	}
	
	public Auction convertToEntity(AuctionDto auctionDto) {
		Auction auction = new Auction();
		auction.setId(auctionDto.getId());
		auction.setWaitingAuction(watingAuctionRepository.findById(auctionDto.getWaitingAuctionId()).orElse(null));
		auction.setTimeStart(auctionDto.getTimeStart());
		auction.setTimeEnd(auction.getTimeEnd());
		auction.setPriceTransaction(auctionDto.getPriceTransaction());
		auction.setPriceShipping(auctionDto.getPriceShipping());
		auction.setCommission(auctionDto.getCommission());
		auction.setSellerEnd(userRepository.findById(auctionDto.getSellerEnd()).orElse(null));
		auction.setStatus(auctionDto.getStatus());
		
		return auction;
	}

	@Override
	public List<AuctionDto> findByAmount(int amount) {
		List<Auction> auctions = repository.findByStatusLike("During");
		List<AuctionDto> auctionsDto = new ArrayList<AuctionDto>();
		//auctions.forEach(auction -> auctionsDto.add(convertToDto(auction)));
		int count = 0;
		for (Auction auction : auctions) {
			auctionsDto.add(convertToDto(auction));
			count++;
			if (count == amount) {
				break;
			}
		}
		
		return auctionsDto;
	}
}
