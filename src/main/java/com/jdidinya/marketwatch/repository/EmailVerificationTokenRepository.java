package com.jdidinya.marketwatch.repository;

import com.jdidinya.marketwatch.entity.EmailVerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface EmailVerificationTokenRepository extends JpaRepository<com.jdidinya.marketwatch.entity.EmailVerificationToken, UUID> {
    Optional<com.jdidinya.marketwatch.entity.EmailVerificationToken> findByUserId(UUID userId);

    Optional<com.jdidinya.marketwatch.entity.EmailVerificationToken> findByToken(String token);

    @Modifying
    @Query("DELETE FROM EmailVerificationToken rt WHERE rt.user.id = :userId")
    void deleteByUserId(@Param("userId") UUID userId);
}
