package com.Ecomerce.API.services.impls;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.NotificationDto;

import com.Ecomerce.API.models.dtos.OrderOfUserDto;
import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.dtos.DetailOrderOfUserDto;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.dtos.UserInfoDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.InforUser;
import com.Ecomerce.API.models.entities.Notification;
import com.Ecomerce.API.models.entities.Order;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.StatusAuction;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.InforUserRepository;
import com.Ecomerce.API.repositories.NotificationRepository;
import com.Ecomerce.API.repositories.OrderRepository;
import com.Ecomerce.API.repositories.ProductRepository;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.repositories.StatusOrderRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.repositories.WardRepository;
import com.Ecomerce.API.services.UserService;
import com.Ecomerce.API.utils.converter.UserConverter;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private InforUserRepository inforUserRepository;
	
	@Autowired
	private NotificationRepository notificationRepository;
	
	@Autowired
	private AuctionRepository auctionRepository;
	
	@Autowired
	private StatusAuctionRepository statusAuctionRepository;
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private StatusOrderRepository statusOrderRepository;

	@Autowired
	private UserConverter converter;

	@Autowired
	private WardRepository wardRepository;

	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public UserDto findUserByName(String name) {

		return converter.convertToDto(repository.findById(name).orElse(null));
	}

	@Override
	public boolean isUserSellingThisProduct(String userName, int productId) {
		User user = repository.findById(userName).orElse(null);
		Product product = productRepository.findById(productId).orElse(null);
		if (user == null || product == null) {
			return false;
		}
		if (user == product.getUser()) {
			return true;
		}

		return false;
	}

	@Override
	public UserInfoDto findInfoCurrentUser(String accountName) {
		User user = repository.findById(accountName).orElse(null);

		return converter.convertToUserInfoDto(user);
	}

	@Override
	public UserInfoDto insertInfoCurrentUser(String accountName, UserInfoDto userDto) {
		User user = repository.findById(accountName).orElse(null);
		if (user == null) {
			return null;
		}
		return null;
	}

	@Override
	public UserInfoDto updateInfoCurrentUser(String accountName, UserInfoDto userDto) {
		User user = repository.findById(accountName).orElse(null);
		if (user == null) {
			return null;
		}
		return null;
	}

	@Override
	public boolean insertAndUpdate(String accountName, UserInfoDto userDto) throws ParseException {
		User user = repository.findById(accountName).orElse(null);
		if (user == null) {
			return false;
		}

		user.setAccountName(userDto.getAccountName());
		user.setPass(passwordEncoder().encode(userDto.getPass()));
		user.setImageUser(userDto.getImageUser());
		user.setStatusUser(true);
		user.setRole("USER");

		InforUser userInfo;
		if (user.getInforUser() == null) {
			userInfo = new InforUser();
		} else {
			userInfo = inforUserRepository.findById(accountName).orElse(null);
		}
		userInfo.setAccountName(accountName);
		userInfo.setFirstName(userDto.getFirstName());
		userInfo.setLastName(userDto.getLastName());

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date date = sdf.parse(userDto.getBirthday());
		java.sql.Date sqlDate = new Date(date.getTime());
		userInfo.setBirthDay(sqlDate);
		userInfo.setEmail(userDto.getEmail());
		userInfo.setPhone(userDto.getPhone());
		userInfo.setWard(wardRepository.findById(userDto.getWardId()).orElse(null));
		userInfo.setAddressDetail(userDto.getAddressDetail());

		try {
			repository.save(user);
			inforUserRepository.save(userInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}

	@Override
	public List<NotificationDto> getNotificationOfUser(String accountName) {
		User user = repository.findById(accountName).orElse(null);
		if (user == null || !user.isStatusUser()) {
			return null;
		}
		
		List<NotificationDto> dtos = new ArrayList<NotificationDto>();
		try {
			List<Notification> notifications = notificationRepository.findByUserAndStatus(user, true);
			notifications.forEach(notification -> dtos.add(converter.convertToNotificationDto(notification)));
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		return dtos;
	}
		
	public List<UserDto> findAllUser() {
		List<User> users = repository.findAll();
		List<UserDto> listUser = new ArrayList<UserDto>();

		for (User user : users) {
			listUser.add(converter.convertToDto(user));
		}
		return listUser;
	}

	@Override

	public boolean deleteNotification(int id) {
		Notification notification = notificationRepository.findById(id).orElse(null);
		if (notification == null || !notification.isStatus()) {
			return false;
		}
		
		try {
			notification.setStatus(false);
			notificationRepository.save(notification);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public List<OrderOfUserDto> getOrderOfUser(String accountName) {
		User buyer = repository.findById(accountName).orElse(null);
		if (buyer == null || !buyer.isStatusUser()) {
			return null;
		}
		StatusAuction statusAuction = statusAuctionRepository.findById(3).orElse(null);
		List<Auction> auctions = auctionRepository.findByBuyerAndStatusAuctionAndExist(buyer, statusAuction, true);
		List<OrderOfUserDto> ordersOfUserDto = new ArrayList<OrderOfUserDto>();
		for (Auction auction : auctions) {
			List<Order> orders = auction.getOrders();
			for (Order order : orders) {
				ordersOfUserDto.add(converter.convertToOrderOfUserDto(order));
			}
		}
		return ordersOfUserDto;
	}

	@Override
	public DetailOrderOfUserDto getDetailOrderOfUser(int orderId) {
		Order order = orderRepository.findById(orderId).orElse(null);
		if (order == null) {
			return null;
		}
		
		return converter.convertToDetailOrderOfUserDto(order);
	}

	@Override
	public boolean changeStatusOrder(int orderId) {
		Order order = orderRepository.findById(orderId).orElse(null);
		if (order == null || order.getStatus().getId() == 1 || order.getStatus().getId() == 3) {
			return false;
		}
		
		try {
			order.setStatus(statusOrderRepository.findById(3).orElse(null));
			orderRepository.save(order);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}
	
	public List<UserInfoDto> findAllInfoUser() {
		List<User> users = repository.findAll();
		List<UserInfoDto> listInfoUser = new ArrayList<UserInfoDto>();

		for (User user : users) {
			listInfoUser.add(converter.convertToUserInfoDto(user));
		}
		return listInfoUser;
	}

	@Override
	public UserDto changeStatus(UserDto userDto) {
		User userEntity = converter.convertToEntity(userDto);
		userEntity.setStatusUser(!userDto.isStatusUser());
		repository.save(userEntity);
		return converter.convertToDto(userEntity);
	}
}
