package com.jdidinya.marketwatch.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"sku"}, name = "uk_products_sku")
}, indexes = {
        @Index(columnList = "name",name = "idx_products_name"),
        @Index(columnList = "sku", name = "idx_products_sku")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product extends AbstractBaseEntity {
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "sku", nullable = false, length = 50)
    private String sku;
}
