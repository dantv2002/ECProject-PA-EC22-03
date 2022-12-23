package com.Ecomerce.API.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecomerce.API.models.entities.Notification;
import com.Ecomerce.API.models.entities.User;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
	List<Notification> findByUserAndStatus(User user, boolean check);
}
