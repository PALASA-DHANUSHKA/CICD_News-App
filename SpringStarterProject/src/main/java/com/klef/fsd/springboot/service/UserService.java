package com.klef.fsd.springboot.service;

import com.klef.fsd.springboot.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User registerUser(User user);
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    User updateUser(Long id, User updatedUser);
    void deleteUser(Long id);
    User findByEmail(String email);
}
