package com.jdidinya.marketwatch.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
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
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product  extends AbstractBaseEntity {
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "sku", nullable = false, length = 50)
    private String sku;

    @Column(name = "price", nullable = false, length = 50)
    private Double price;
}
