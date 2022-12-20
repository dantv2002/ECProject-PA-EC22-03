package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.dtos.ProductDetailDto;
import com.Ecomerce.API.models.dtos.ProductDto;
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
	
	// Service handle API Search
	/*------------------------------------------------------------------------------------------*/
	
	/* >>>>>>>>>>>>>>> Two method is implemented to support for API Search Product<<<<<<<<<<<<<<< */
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
			if (auction.getProduct().getName().toLowerCase().contains(keyValue.toLowerCase())) {
				listAuctionDto.add(auctionConverter.convertToDto(auction));
			}
		}

		return listAuctionDto;
	}
	
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
	public List<ProductDto> findByAmount(int pagenumber, int amount) {
		List<Product> products = repository.findAll(PageRequest.of(pagenumber, amount)).getContent();
		List<ProductDto> productDtos = new ArrayList<ProductDto>();
		products.forEach(product -> productDtos.add(converter.convertToDto(product)));

		return productDtos;
	}

	/*------------------------------------------------------------------------------------------*/
	
	
	// Service handle API Filter
	/*--------------------------------------------------------------------------------------------------*/
	private List<AuctionDto> findProductOnAuctionAndSort(String keyValue, int minPrice, int maxPrice,
			boolean increase) {
		StatusAuction statusAuction = statusAuctionRepository.findById(2).orElse(null);
		List<Auction> auctions;
		if (increase) {
			auctions = auctionRepository
					.findByStatusAuctionAndPriceTransactionGreaterThanEqualAndPriceTransactionLessThanEqualOrderByPriceTransactionAsc(
							statusAuction, minPrice, maxPrice);
		} else {
			auctions = auctionRepository
					.findByStatusAuctionAndPriceTransactionGreaterThanEqualAndPriceTransactionLessThanEqualOrderByPriceTransactionDesc(
							statusAuction, minPrice, maxPrice);
		}
		List<AuctionDto> auctionsDto = new ArrayList<AuctionDto>();
		for (Auction auction : auctions) {
			if (auction.getProduct().getName().toLowerCase().contains(keyValue.toLowerCase())) {
				auctionsDto.add(auctionConverter.convertToDto(auction));
			}
		}

		return auctionsDto;
	}
	
	private List<AuctionDto> findProductOnAuctionAndSortThatBelongToCategory(String keyValue, int minPrice, 
			int maxPrice, boolean increase, String categoryName) {
		StatusAuction statusAuction = statusAuctionRepository.findById(2).orElse(null);
		List<Auction> auctions;
		if (increase) {
			auctions = auctionRepository
					.findByStatusAuctionAndPriceTransactionGreaterThanEqualAndPriceTransactionLessThanEqualOrderByPriceTransactionAsc(
							statusAuction, minPrice, maxPrice);
		} else {
			auctions = auctionRepository
					.findByStatusAuctionAndPriceTransactionGreaterThanEqualAndPriceTransactionLessThanEqualOrderByPriceTransactionDesc(
							statusAuction, minPrice, maxPrice);
		}
		List<AuctionDto> auctionsDto = new ArrayList<AuctionDto>();
		for (Auction auction : auctions) {
			if (auction.getProduct().getName().toLowerCase().contains(keyValue.toLowerCase()) && 
					auction.getProduct().getCategory().getName().equals(categoryName)) {
				auctionsDto.add(auctionConverter.convertToDto(auction));
			}
		}

		return auctionsDto;
	}

	public List<ProductDto> findAll() {
		List<Product> products = repository.findAll();
		List<ProductDto> productDtos = new ArrayList<ProductDto>();
		products.forEach(product -> productDtos.add(converter.convertToDto(product)));

		return productDtos;
	}
	
	public List<ProductDto> findByManufacturer(String manufacturer) {
		List<Product> products = repository.findByManufacturer(manufacturer);
		List<ProductDto> productDtos = new ArrayList<ProductDto>();
		products.forEach(product -> productDtos.add(converter.convertToDto(product)));

		return productDtos;
	}
	
	public List<ProductDto> findByManufacturerOnList(List<ProductDto> wantFind, String manufacturer) {
		List<ProductDto> listRes = new ArrayList<ProductDto>();
		for (ProductDto productDto : wantFind) {
			if (productDto.getManufacturer().equals(manufacturer)) {
				listRes.add(productDto);
			}
		}

		return listRes;
	}
	
	public List<ProductDto> findProductByCategoryName(String categoryName) {
		List<Category> categories = categoryRepository.findByName(categoryName);
		List<ProductDto> productsDto = new ArrayList<ProductDto>();
		if (categories.isEmpty() || categories == null) {
			return productsDto;
		}
		List<Product> products = categories.get(0).getProducts();
		products.forEach(product -> productsDto.add(converter.convertToDto(product)));
		
		return productsDto;
	}
	
	public List<ProductDto> findWithKeyValue(List<ProductDto> listWantFind, String keyValue) {
		List<ProductDto> listRes = new ArrayList<ProductDto>();
		for (ProductDto element : listWantFind) {
			if (element.getName().toLowerCase().contains(keyValue.toLowerCase())) {
				listRes.add(element);
			}
		}
		
		return listRes;
	}
	
	@Override
	public Map<String, List<?>> filterProduct(String nameCategory, String nameManufacturer, String statusProduct,
			boolean increase, int maxPrice, int minPrice, String keyValue) {
		Map<String, List<?>> map = new HashMap<>();
		if (nameCategory.equals("all")) {
			if (nameManufacturer.equals("all")) {
				if (statusProduct.equals("Đang bán trên trang")) {
					List<ProductDto> productsDto = searchProductWithKeyValue(keyValue);
					map.put("Products is selling on page", productsDto);
				} else if (statusProduct.equals("Đang đấu giá")) {
					List<AuctionDto> productsOnAuction = findProductOnAuctionAndSort(keyValue, minPrice, 
							maxPrice, increase);
					map.put("Products on auction", productsOnAuction);
				} else {
					// Case Status Product equal with "all"
					List<AuctionDto> productsOnAuction = findProductOnAuctionAndSort(keyValue, minPrice, 
							maxPrice, increase);
					List<ProductDto> productsDto = searchProductWithKeyValue(keyValue);
					map.put("Products on auction", productsOnAuction);
					map.put("Products is selling on page", productsDto);
				}
			} else { // Have specific Manufacturer name
				if (statusProduct.equals("Đang bán trên trang")) {
					List<ProductDto> productsDto = findByManufacturer(nameManufacturer);
					productsDto = findWithKeyValue(productsDto, keyValue);
					map.put("Products is selling on page", productsDto);
				} else if (statusProduct.equals("Đang đấu giá")) {
					List<AuctionDto> productsOnAuctionTemp = findProductOnAuctionAndSort(keyValue, minPrice, 
							maxPrice, increase);
					List<AuctionDto> productsOnAuction = new ArrayList<AuctionDto>();
					
					for (AuctionDto element : productsOnAuctionTemp) {
						Product product = repository.findById(element.getProductId()).orElse(null);
						if (product.getManufacturer().equals(nameManufacturer)) { 
							productsOnAuction.add(element);
						}
					}
					map.put("Products on auction", productsOnAuction);
				} else {
					// Case Status Product equal with "all"
					List<ProductDto> productsDto = findByManufacturer(nameManufacturer);
					productsDto = findWithKeyValue(productsDto, keyValue);
					map.put("Products is selling on page", productsDto);
					
					List<AuctionDto> productsOnAuctionTemp = findProductOnAuctionAndSort(keyValue, minPrice, 
							maxPrice, increase);
					List<AuctionDto> productsOnAuction = new ArrayList<AuctionDto>();
					
					for (AuctionDto element : productsOnAuctionTemp) {
						Product product = repository.findById(element.getProductId()).orElse(null);
						if (product.getManufacturer().equals(nameManufacturer)) { 
							productsOnAuction.add(element);
						}
					}
					map.put("Products on auction", productsOnAuction);
				}
			} 
		} else { // Have specific category name
			if (nameManufacturer.equals("all")) {
				if (statusProduct.equals("Đang bán trên trang")) {
					List<ProductDto> productsDto = findProductByCategoryName(nameCategory);
					productsDto = findWithKeyValue(productsDto, keyValue);
					map.put("Products is selling on page", productsDto);
				} else if (statusProduct.equals("Đang đấu giá")) {
					List<AuctionDto> productsOnAuction = findProductOnAuctionAndSortThatBelongToCategory(
							keyValue, minPrice, maxPrice, increase, nameCategory);
					map.put("Products on auction", productsOnAuction);
				} else {
					List<ProductDto> productsDto = findProductByCategoryName(nameCategory);
					productsDto = findWithKeyValue(productsDto, keyValue);
					map.put("Products is selling on page", productsDto);
					List<AuctionDto> productsOnAuction = findProductOnAuctionAndSortThatBelongToCategory(
							keyValue, minPrice, maxPrice, increase, nameCategory);
					map.put("Products on auction", productsOnAuction);
				}
			} else { // Have specific Manufacturer name
				if (statusProduct.equals("Đang bán trên trang")) {
					List<ProductDto> productsDto = findProductByCategoryName(nameCategory);
					productsDto = findByManufacturerOnList(productsDto, nameManufacturer);
					productsDto = findWithKeyValue(productsDto, keyValue);
					map.put("Products is selling on page", productsDto);
				} else if (statusProduct.equals("Đang đấu giá")) {
					List<AuctionDto> productsOnAuctionTemp = findProductOnAuctionAndSortThatBelongToCategory(
							keyValue, minPrice, maxPrice, increase, nameCategory);
					List<AuctionDto> productsOnAuction = new ArrayList<AuctionDto>();
					for (AuctionDto auction : productsOnAuctionTemp) {
						Product product = repository.findById(auction.getProductId()).orElse(null);
						if (product.getManufacturer().toLowerCase().equals(nameManufacturer.toLowerCase())) {
							productsOnAuction.add(auction);
						}
					}
					map.put("Products on auction", productsOnAuction);
				} else {
					List<ProductDto> productsDto = findProductByCategoryName(nameCategory);
					productsDto = findByManufacturerOnList(productsDto, nameManufacturer);
					productsDto = findWithKeyValue(productsDto, keyValue);
					map.put("Products is selling on page", productsDto);
					List<AuctionDto> productsOnAuctionTemp = findProductOnAuctionAndSortThatBelongToCategory(
							keyValue, minPrice, maxPrice, increase, nameCategory);
					List<AuctionDto> productsOnAuction = new ArrayList<AuctionDto>();
					for (AuctionDto auction : productsOnAuctionTemp) {
						Product product = repository.findById(auction.getProductId()).orElse(null);
						if (product.getManufacturer().toLowerCase().equals(nameManufacturer.toLowerCase())) {
							productsOnAuction.add(auction);
						}
					}
					map.put("Products on auction", productsOnAuction);
				}
			} 
		}

		return map;
	}
	
	/*--------------------------------------------------------------------------------------------------*/
	
	@Override
	public ProductDetailDto displayProductOnPage(int id) {
		Product product = repository.findById(id).orElse(null);
		if (product == null) {
			return null;
		}
		return converter.covertToProductDetailDto(product);
	}

}