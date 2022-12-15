package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.StatusAuction;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.CategoryRepository;
import com.Ecomerce.API.repositories.ProductRepository;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.ProductService;
import com.Ecomerce.API.utils.converter.AuctionConverter;
import com.Ecomerce.API.utils.converter.ProductConverter;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepository repository;
	
	@Autowired
	CategoryRepository categoryRepository;	
	
	@Autowired
	UserRepository userRepository;	
	
	@Autowired
	AuctionRepository auctionRepository;
	
	@Autowired
	StatusAuctionRepository statusAuctionRepository;
	
	@Autowired
	ProductConverter converter;
	
	@Autowired
	AuctionConverter auctionConverter;
	
	/*>>>>>>>>>>>>>>> Two method is implemented to support for API Search Product<<<<<<<<<<<<<<<*/
	public List<ProductDto> searchProductWithKeyValue(String keyValue) {
		List<Product> products = repository.findByNameContaining(keyValue);
		List<ProductDto> productsDto = new ArrayList<ProductDto>();
		for (Product product : products) {
			productsDto.add(converter.convertToDto(product));
		}
		
		return productsDto;
	}
	
	public List<AuctionDto> searchProductOnAuctionWithKeyValue(String keyValue) {
		StatusAuction statusAuction = statusAuctionRepository.findById(2).orElse(null);
		List<Auction> auctions = auctionRepository.findByStatusAuction(statusAuction);
		List<AuctionDto> listAuctionDto = new ArrayList<AuctionDto>();
		for (Auction auction : auctions) {
			listAuctionDto.add(auctionConverter.convertToDto(auction));
		}
		
		return listAuctionDto;
	}
	/*------------------------------------------------------------------------------------------*/
	
	@Override
	public Map<String, List<?>> searchProduct(String keyValue) {	
		List<AuctionDto> auctionsDto = searchProductOnAuctionWithKeyValue(keyValue);
		List<ProductDto> productsDto = searchProductWithKeyValue(keyValue);
		
		Map<String, List<?>> map = new HashMap<>();
		map.put("List Product", productsDto);
		map.put("List Auction", auctionsDto);
		
		return map;
	}
	
	@Override
	public List<ProductDto> findByAmount(int pagenumber, int amount){
		List <Product> products = repository.findAll(PageRequest.of(pagenumber, amount)).getContent();
		List <ProductDto> productDtos = new ArrayList<ProductDto>();
		products.forEach(product -> 
			productDtos.add(converter.convertToDto(product)));
		
		return productDtos;
	}
}	