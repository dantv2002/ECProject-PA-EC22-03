package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.WaitingAuctionDto;
import com.Ecomerce.API.models.entities.WaitingAuction;
import com.Ecomerce.API.repositories.ProductRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.repositories.WaitingAuctionRepository;
import com.Ecomerce.API.services.WaitingAuctionService;

@Service
public class WaitingAuctionServiceImpl implements WaitingAuctionService {
	@Autowired
	WaitingAuctionRepository repository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public List<WaitingAuctionDto> findAll() {
		List<WaitingAuction> waitingAuctions = repository.findAll();
		List<WaitingAuctionDto> waitingAuctionsDto = new ArrayList<WaitingAuctionDto>();
		waitingAuctions.forEach(waitingAuction -> waitingAuctionsDto.add(convertToDto(waitingAuction)));
		
		return waitingAuctionsDto;
	}
	
	private WaitingAuctionDto convertToDto(WaitingAuction waitingAuction) {
		WaitingAuctionDto waitingAuctionDto = new WaitingAuctionDto();
		waitingAuctionDto.setId(waitingAuction.getId());
		waitingAuctionDto.setProductId(waitingAuction.getProduct().getId());
		waitingAuctionDto.setBuyer(waitingAuction.getBuyer().getAccountName());
		
		return waitingAuctionDto;
	}
	
	private WaitingAuction convertToEntity(WaitingAuctionDto waitingAuctionDto) {
		WaitingAuction waitingAuction = new WaitingAuction();
		waitingAuction.setId(waitingAuctionDto.getId());
		waitingAuction.setProduct(productRepository.findById(waitingAuctionDto.getProductId()).orElse(null));
		waitingAuction.setBuyer(userRepository.findById(waitingAuctionDto.getBuyer()).orElse(null));
		
		return waitingAuction;
	}
}
