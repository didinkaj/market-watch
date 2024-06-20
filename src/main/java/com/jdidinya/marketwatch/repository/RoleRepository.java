package com.jdidinya.marketwatch.repository;

import com.jdidinya.marketwatch.entity.Role;
import com.jdidinya.marketwatch.util.Constants;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, String> {
    Optional<Role> findByName(Constants.RoleEnum name);
}
