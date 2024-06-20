package com.jdidinya.marketwatch.dto.response;

import com.jdidinya.marketwatch.dto.response.AbstractBaseResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
public class ErrorResponse extends AbstractBaseResponse {
    @Schema(
        name = "message",
        description = "Response messages field",
        type = "String",
        example = "This is message field"
    )
    private String message;
}
