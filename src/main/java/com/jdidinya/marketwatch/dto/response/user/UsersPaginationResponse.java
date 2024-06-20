package com.jdidinya.marketwatch.dto.response.user;

import com.jdidinya.marketwatch.dto.response.PaginationResponse;
import com.jdidinya.marketwatch.dto.response.user.UserResponse;
import org.springframework.data.domain.Page;

import java.util.List;

public class UsersPaginationResponse extends PaginationResponse<com.jdidinya.marketwatch.dto.response.user.UserResponse> {
    public UsersPaginationResponse(final Page<?> pageModel, final List<UserResponse> items) {
        super(pageModel, items);
    }
}
