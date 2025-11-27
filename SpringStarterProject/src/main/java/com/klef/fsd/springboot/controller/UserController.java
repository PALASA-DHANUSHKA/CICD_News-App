package com.klef.fsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.fsd.springboot.model.User;
import com.klef.fsd.springboot.service.UserService;
import com.klef.fsd.springboot.dto.LoginRequest;
import com.klef.fsd.springboot.model.User;
import com.klef.fsd.springboot.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true") // Allow CORS for frontend interaction, adjust origin as needed
public class UserController {

    @Autowired
    private UserService userService;

    // Register a new user
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    // Get all users
    @GetMapping("/getallusers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // Get user by ID
    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // Update user by ID
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    // Delete user by ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    // Get user by email
    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.findByEmail(email);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        User user = userService.findByEmail(loginRequest.getEmail());

        if (user == null || !user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                 .body("Invalid email or password");
        }

        // Don't send password in response
        user.setPassword(null);

        return ResponseEntity.ok(user);
    }
}
