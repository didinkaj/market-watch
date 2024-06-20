package com.jdidinya.marketwatch.repository;

import com.jdidinya.marketwatch.entity.Setting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SettingRepository extends JpaRepository<Setting, UUID> {
}
