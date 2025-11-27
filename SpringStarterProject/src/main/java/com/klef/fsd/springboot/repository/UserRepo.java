package com.klef.fsd.springboot.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.fsd.springboot.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    // You can add custom query methods here, for example:
    User findByEmail(String email);
}
