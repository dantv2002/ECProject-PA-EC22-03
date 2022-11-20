package com.ECProject.API.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ECProject.API.entity.productEntity;

@Repository
public interface productRepository extends JpaRepository<productEntity, Integer>{

}
