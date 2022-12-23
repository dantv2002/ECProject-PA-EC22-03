package com.Ecomerce.API.utils.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.CommentProductDetailDto;
import com.Ecomerce.API.models.dtos.ProductDetailDto;
import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.Comment;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.CategoryRepository;
import com.Ecomerce.API.repositories.UserRepository;

@Service
public class ProductConverter {
	
	@Autowired
	CategoryRepository categoryRepository;	
	
	@Autowired
	UserRepository userRepository;
	
	public Product convertToEntity (ProductDto productDto) {
		if (productDto == null) {
			return null;
		}
		
		Product product = new Product();

		product.setId(productDto.getId());
		product.setName(productDto.getName());
		product.setDescription(productDto.getDescription());
		product.setManufacturer(productDto.getManufacturer());
		product.setImageProduct(productDto.getImageProduct());
		product.setAmount(productDto.getAmount());
		product.setCategory(categoryRepository.findById(productDto.getCategoryId()).orElse(null));
		product.setUser(userRepository.findById(productDto.getAccountName()).orElse(null));
		product.setStatus(productDto.isStatus());
		
		return product;
	}
	
	public ProductDto convertToDto (Product product) {
		if (product == null) {
			return null;
		}
		
		ProductDto productDto = new ProductDto();

		productDto.setId(product.getId());
		productDto.setName(product.getName());
		productDto.setDescription(product.getDescription());
		productDto.setManufacturer(product.getManufacturer());
		productDto.setImageProduct(product.getImageProduct());
		productDto.setAmount(product.getAmount());
		productDto.setCategoryId(product.getCategory().getId());
		
		User user = product.getUser();
		if (user == null) {
			productDto.setAccountName(null);
			productDto.setUserName(null);
		} else {
			productDto.setAccountName(user.getAccountName());
			productDto.setUserName(user.getInforUser().getFirstName() + " " + user.getInforUser().getLastName());
		}
		productDto.setStatus(product.isStatus());
		
		return productDto;
	}
	
	public ProductDetailDto covertToProductDetailDto(Product product) {
		ProductDetailDto response = new ProductDetailDto();
		response.setName(product.getName());
		response.setImageProduct(product.getImageProduct());
		response.setDescription(product.getDescription());
		response.setSeller(product.getUser().getAccountName());
		response.setSellerName(product.getUser().getInforUser().getFirstName() + " " + 
				product.getUser().getInforUser().getLastName());
		response.setManufacturer(product.getManufacturer());
		response.setCategoryId(product.getCategory().getId());
		response.setCategoryName(product.getCategory().getName());
		response.setAmount(product.getAmount());
		
		List<CommentProductDetailDto> commentsDto = new ArrayList<CommentProductDetailDto>();
		List<Auction> auctions = product.getAuctions();
		for (Auction auction : auctions) {
			if (auction.getStatusAuction().getId() == 3) {
				List<Comment> comments = auction.getComments();
				for (Comment comment : comments) {
					String userName = auction.getBuyer().getInforUser().getFirstName() + " " + 
							auction.getBuyer().getInforUser().getLastName();

					commentsDto.add(new CommentProductDetailDto(auction.getBuyer().getAccountName(), userName, comment.getComment()));
				}
			}
		}
		response.setComments(commentsDto);
		return response;
	}
}
