package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.dtos.SearchApiDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.Category;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.StatusAuction;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.CategoryRepository;
import com.Ecomerce.API.repositories.ProductRepository;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.ProductService;
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
	
	@Override
	public List<SearchApiDto> searchProduct(String keyValue) {
		StatusAuction statusAuction = statusAuctionRepository.findById(2).orElse(null);
		List<Auction> auctions = auctionRepository.findByStatusAuction(statusAuction);
		List<SearchApiDto> listSearchProducts = new ArrayList<SearchApiDto>();
		for (Auction auction : auctions) {
			Product product = auction.getProduct();
			if (product.getName().contains(keyValue)) {
				SearchApiDto searchProduct = new SearchApiDto(product.getName().trim(), auction.getPriceTransaction());
				listSearchProducts.add(searchProduct);
			}
		}
		
		return listSearchProducts;
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