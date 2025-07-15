    package com.example.GharSeGharTakBackend.service;


    import com.example.GharSeGharTakBackend.model.User;
    import com.example.GharSeGharTakBackend.repository.UserRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Service;

    import javax.swing.text.html.Option;
    import java.util.Optional;

    @Service
    public class UserService {

        @Autowired
        private UserRepository userRepository;

        public User register(User user){
            return userRepository.save(user);
        }

        public Optional<User> login(String email,String password){
            Optional<User> user=userRepository.findByEmail(email);
            if(user.isPresent() && user.get().getPassword().equals(password)){
                return user;
            }
            return Optional.empty();
        }
    }
