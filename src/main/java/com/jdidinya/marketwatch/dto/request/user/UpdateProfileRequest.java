package com.jdidinya.marketwatch.dto.request.user;

import com.jdidinya.marketwatch.dto.request.user.AbstractBaseUpdateUserRequest;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@AllArgsConstructor
@SuperBuilder
public class UpdateProfileRequest extends AbstractBaseUpdateUserRequest {
}
