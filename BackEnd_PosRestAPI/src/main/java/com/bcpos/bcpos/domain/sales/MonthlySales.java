package com.bcpos.bcpos.domain.sales;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MonthlySales {
    private int year;
    private int month;
    private int sales;
}
