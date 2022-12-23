package com.Ecomerce.API.services.impls;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDetailDto;
import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.AuctionDetail;
import com.Ecomerce.API.models.entities.Notification;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.StatusAuction;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.NotificationRepository;
import com.Ecomerce.API.repositories.ProductRepository;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.AuctionService;
import com.Ecomerce.API.utils.converter.AuctionConverter;
import com.Ecomerce.API.websocket.model.AuctionDetailSocketModel;

@Service
public class AuctionServiceImpl implements AuctionService {
	@Autowired
	private AuctionRepository repository;

	@Autowired
	private StatusAuctionRepository statusAuctionRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired NotificationRepository notificationRepository;

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
	public AuctionDetailDto displayAuctionDetail(int id, String accountName) {
		Auction auction = repository.findById(id).orElse(null);
		AuctionDetailDto auctionDetail = converter.convertToAuctionDetailDto(auction, accountName);

		return auctionDetail;
	}

	@Override
	public boolean deleteAuction(int id) {
		Auction auction = repository.findById(id).orElse(null);
		if (auction == null || !auction.isExist()) {
			return false;
		}

		try {
			if (auction.getStatusAuction().getId() == 1 || auction.getStatusAuction().getId() == 2) {
				auction.setStatusAuction(statusAuctionRepository.findById(4).orElse(null));
			}
			auction.setExist(false);
			repository.save(auction);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public List<AuctionDto> findAllAuction() {
		List<Auction> auctions = repository.findAll();
		List<AuctionDto> auctionsDto = new ArrayList<AuctionDto>();

		for (Auction auction : auctions) {
			auctionsDto.add(converter.convertToDto(auction));
		}

		return auctionsDto;
	}

	@Override
	public AuctionDetailSocketModel insert(AuctionDetailSocketModel auctionDetailSocketModel) {
		AuctionDetail auctionDetail = converter.convertToEntity(auctionDetailSocketModel);
		repository.save(auctionDetail);
		
		return converter.convertToModel(auctionDetail);
	}

	@Override
	public Boolean changePrice(int auctionId, int price) {
		Auction auction = repository.findOneById(auctionId);
		if(auction == null)
			return false;
		try {
			auction.setPriceTransaction(price);
			repository.save(auction);
			return true;
		}
		catch (Exception e) {
			return false;
		}
	}
	

	@Override
	public AuctionDto createAuction(AuctionDto receiver) {
		Auction auction = new Auction();
		
		User buyer = userRepository.findById(receiver.getBuyer()).orElse(null);
		Product product = productRepository.findById(receiver.getProductId()).orElse(null);
		
		if (buyer == null || product == null) {
			return null;
		}
		auction.setBuyer(buyer);
		auction.setProduct(product);
		Date dateCreatedAuction = new Date();
		Timestamp timestampCreatedAuction = new Timestamp(dateCreatedAuction.getTime());
		auction.setTimeStart(timestampCreatedAuction);
		auction.setStatusAuction(statusAuctionRepository.findById(2).orElse(null));
		try {
			repository.save(auction);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
		// Find Buyers are selling that product
		List<Product> products = productRepository.findByName(product.getName());
		for (Product item : products) {
			User userItem = item.getUser();
			Notification notification = new Notification();
			notification.setUser(userItem);
			Date date = new Date();
			Timestamp timestamp = new Timestamp(date.getTime());
			notification.setTime(timestamp);
			notification.setAuction(auction);
			notification.setType(false);
			notification.setStatus(true);
			
			try {
				notificationRepository.save(notification);
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
		}
		
		return converter.convertToDto(auction);
	}
}
