package com.Ecomerce.API.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ExceptionCustom;
import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.dtos.ChangeStatusUserDto;
import com.Ecomerce.API.models.dtos.OrderAutionDto;
import com.Ecomerce.API.models.dtos.OrderStactisticsDto;
import com.Ecomerce.API.models.dtos.RevenueStactisticsDto;
import com.Ecomerce.API.models.dtos.ShippingChangeDto;
import com.Ecomerce.API.models.dtos.ShippingDistrictDto;
import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.dtos.UserInfoDto;
import com.Ecomerce.API.models.entities.Shipping;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.security.JwtTokenUtil;
import com.Ecomerce.API.services.AuctionService;
import com.Ecomerce.API.services.CategoryService;
import com.Ecomerce.API.services.OrderService;
import com.Ecomerce.API.services.ShippingService;
import com.Ecomerce.API.services.UserService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("http://localhost:3000/")
public class AdminPageController {

	@Autowired
	JwtTokenUtil jwtTokenUtil;
	@Autowired
	AuctionService auctionService;
	@Autowired
	UserService userService;
	@Autowired
	CategoryService categoryService;
	@Autowired
	OrderService orderService;
	@Autowired
	ShippingService shippingService;

	private static final Logger logger = LoggerFactory.getLogger(AdminPageController.class);

	@GetMapping("/auth/admin/current-month-stactistics")
	public ResponseEntity<ResponseObject> currentMonthStactistics(
//			@RequestHeader("Authorization") String token
	) throws ResourceNotFoundException, ParseException {
//		String accountname = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		List<AuctionDto> allAuction = new ArrayList<>();
		try {
			allAuction = auctionService.findAllAuction();
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm giao dịch nào trong tháng", "");
		}
		if (allAuction.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm giao dịch nào trong tháng", "");
		}
		int cur_month = LocalDate.now().getMonthValue();
		int cur_year = LocalDate.now().getYear();
		long revenue = 0;
		for (AuctionDto auction : allAuction) {
			int commission = auction.getCommission();

			Date curDate = null;
			try {
				curDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS").parse(auction.getTimeEnd());
				if (commission != 0 && curDate != null && (curDate.getMonth() + 1) == cur_month
						&& (curDate.getYear() + 1900) == cur_year) {
					revenue += commission;
				}
			} catch (Exception e) {

			}
		}
		RevenueStactisticsDto revenueStactisticsDto = new RevenueStactisticsDto(cur_month, cur_year, revenue);
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Thành công",
				"Thống kê doanh thu trong tháng hiện tại thành công", revenueStactisticsDto));
	}

	@GetMapping("/auth/admin/a-month-stactistics")
	public ResponseEntity<ResponseObject> aMonthStactistics(@RequestParam int month, @RequestParam int year
//			@RequestHeader("Authorization") String token
	) throws ResourceNotFoundException, ParseException {
//		String accountname = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		List<AuctionDto> allAuction = new ArrayList<>();
		try {
			allAuction = auctionService.findAllAuction();
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm giao dịch nào trong tháng", "");
		}
		if (allAuction.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm giao dịch nào trong tháng", "");
		}
		int cur_month = month;
		int cur_year = year;
		long revenue = 0;
		for (AuctionDto auction : allAuction) {
			int commission = auction.getCommission();

			Date curDate = null;
			try {
				curDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS").parse(auction.getTimeEnd());
				if (commission != 0 && curDate != null && (curDate.getMonth() + 1) == cur_month
						&& (curDate.getYear() + 1900) == cur_year) {
					revenue += commission;
				}
			} catch (Exception e) {

			}
		}
		RevenueStactisticsDto revenueStactisticsDto = new RevenueStactisticsDto(cur_month, cur_year, revenue);
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Thành công",
				"Thống kê doanh thu trong tháng hiện tại thành công", revenueStactisticsDto));
	}

	@GetMapping("/auth/admin/count-user")
	public ResponseEntity<ResponseObject> countUsers(
//			@RequestHeader("Authorization") String token
	) throws ResourceNotFoundException, ParseException {
//		String accountname = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		List<UserDto> allUser = new ArrayList<>();
		try {
			allUser = userService.findAllUser();
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Lỗi lấy thông tin user", "");
		}
		if (allUser.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm thấy user nào", "");
		}
		int count = 0;
		for (UserDto userDto : allUser) {
			if (userDto.getRole() != "ADMIN")
				count++;
		}
		Map<String, Integer> map = new HashMap<>();
		map.put("Count", count);
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Thống kê số lượng user hiện tại thành công", map));
	}

	@GetMapping("/auth/admin/get-all-user")
	public ResponseEntity<ResponseObject> getAllUsers() throws ResourceNotFoundException {
		List<UserInfoDto> allAdminAndUser = new ArrayList<>();
		try {
			allAdminAndUser = userService.findAllInfoUser();
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Lỗi lấy thông tin user", "");
		}
		if (allAdminAndUser.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm thấy user nào", "");
		}
		List<UserInfoDto> allUser = new ArrayList<>();
		for (UserInfoDto userInfoDto : allAdminAndUser) {
			if (!userInfoDto.getRoles().equals("ADMIN"))
				allUser.add(userInfoDto);
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Thống kê tất cả thông tin user hiện tại thành công", allUser));
	}

	@PostMapping("/auth/admin/change-user-status")
	public ResponseEntity<ResponseObject> changeUserStatus(@RequestBody ChangeStatusUserDto changeStatusUserDto)
			throws ResourceNotFoundException {
		UserDto user = new UserDto();
		Boolean status = null;
		try {
			user = userService.findUserByName(changeStatusUserDto.getAccountName());
			user = userService.changeStatus(user);
			status = user.isStatusUser();
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm được thông tin user", "");
		}
		Map<String, Boolean> map = new HashMap<>();
		map.put("status", status);
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Thay đổi trạng thái user thành công", map));
	}

	@PostMapping("/auth/admin/add-or-update-category")
	public ResponseEntity<ResponseObject> addOrUpdateCategory(@RequestBody CategoryDto categoryDto)
			throws ExceptionCustom {
		CategoryDto newCategoryDto = new CategoryDto();
		try {
			newCategoryDto = categoryService.insertAndUpdate(categoryDto);
		} catch (Exception e) {
			throw new ExceptionCustom("Thất bại", "Không cập nhật được category", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Cập nhật thành công category", newCategoryDto));
	}

	@DeleteMapping("/auth/admin/delete-category")
	public ResponseEntity<ResponseObject> deleteCategory(@RequestParam int id) throws ExceptionCustom {
		try {
			if (!categoryService.deleteById(id))
				throw new ResourceNotFoundException("Thất bại", "Không tìm được category", "");
			;
		} catch (Exception e) {
			throw new ExceptionCustom("Thất bại", "Không xóa được category", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Xóa thành công category", ""));
	}

	@GetMapping("/auth/admin/count-curent-month-orders")
	public ResponseEntity<ResponseObject> countCurOrders() throws ResourceNotFoundException, ParseException {
		List<OrderAutionDto> allOrders = new ArrayList<>();
		try {
			allOrders = orderService.findAllOrder();
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Lỗi lấy thông tin đặt hàng", "");
		}
		if (allOrders.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm thấy đơn hàng nào", "");
		}
		int count = 0;
		int cur_month = LocalDate.now().getMonthValue();
		int cur_year = LocalDate.now().getYear();
		for (OrderAutionDto orderAutionDto : allOrders) {
			Date endTime = orderAutionDto.getAuction().getTimeEnd();
			int month = endTime.getMonth() + 1;
			int year = endTime.getYear() + 1900;
			if (endTime != null && (month == cur_month) && (year == cur_year))
				count++;
		}

		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Thống kê số lượng đặt hàng tháng hiện tại thành công",
						new OrderStactisticsDto(cur_month, cur_year, count)));
	}

	@GetMapping("/auth/admin/count-last-7months-orders")
	public ResponseEntity<ResponseObject> countLast7MonthOrders(@RequestParam int month, @RequestParam int year)
			throws ResourceNotFoundException, ParseException {
		List<OrderStactisticsDto> listOrderStactisticsDtos = new ArrayList<>();
		for (int i = 0; i <= 7; i++) {
			int curMonth = month - i;
			int curYear = year;
			if (curMonth < 1) {
				curMonth += 12;
				curYear -= 1;
			}
			listOrderStactisticsDtos.add(countAMonthOrder(curMonth, curYear));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Thành công",
				"Thống kê số lượng đặt hàng 7 tháng gần nhất thành công", listOrderStactisticsDtos));
	}

	public OrderStactisticsDto countAMonthOrder(int month, int year) throws ResourceNotFoundException {
		List<OrderAutionDto> allOrders = new ArrayList<>();
		try {
			allOrders = orderService.findAllOrder();
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Lỗi lấy thông tin đặt hàng", "");
		}
		if (allOrders.isEmpty()) {
			new OrderStactisticsDto(month, year, 0);
		}
		int count = 0;
		for (OrderAutionDto orderAutionDto : allOrders) {
			Date endTime = orderAutionDto.getAuction().getTimeEnd();
			int cur_month = endTime.getMonth() + 1;
			int cur_year = endTime.getYear() + 1900;
			if (endTime != null && (month == cur_month) && (year == cur_year))
				count++;
		}
		return new OrderStactisticsDto(month, year, count);
	}

	@GetMapping("/auth/admin/get-all-shipping-fee")
	public ResponseEntity<ResponseObject> getAllShippingFee() throws ResourceNotFoundException {
		List<ShippingDistrictDto> listShippingDistrictDtos = new ArrayList<>();
		try {
			listShippingDistrictDtos = shippingService.findAllShippingInfo();
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Lỗi lấy thông tin đặt hàng", "");
		}
		if (listShippingDistrictDtos.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm thấy đơn hàng nào", "");
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Thống kê thành công bảng phí shipping", listShippingDistrictDtos));
	}

	@PostMapping("/auth/admin/update-shipping-fee")
	public ResponseEntity<ResponseObject> updateShipingFee(@RequestBody ShippingChangeDto shippingChangeDto) throws ResourceNotFoundException {
		ShippingDistrictDto shippingDistrictDtos = new ShippingDistrictDto();
		try {
			shippingDistrictDtos = shippingService.update(shippingChangeDto.getAddressStart(), shippingChangeDto.getAddressEnd(), shippingChangeDto.getFee());
		} catch (Exception e) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm được thông tin shipping phù hợp", "");
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Thay đổi bảng phí shipping thành công", shippingDistrictDtos));
	}
}
