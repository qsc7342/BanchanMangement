package com.bcpos.bcpos.domain.date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MonthForBetween {
    private int prevYear;
    private int prevMonth;
    private int nextYear;
    private int nextMonth;
}
