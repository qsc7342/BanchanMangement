package com.bcpos.bcpos.domain.sales;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MonthlyMenuSales {
    private String year;
    private String month;
    private String menuCode;
    private String menuName;
    private int sales;
}
