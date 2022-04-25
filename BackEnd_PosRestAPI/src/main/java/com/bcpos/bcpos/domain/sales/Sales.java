package com.bcpos.bcpos.domain.sales;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

@Getter @Setter @Alias("DailySales")
@Schema
public class Sales {

    @Schema(name = "판매 날짜")
    private String date; // 판매 날짜

    @Schema(name = "판매 금액")
    private Integer sales;  // 판매 금액
}
