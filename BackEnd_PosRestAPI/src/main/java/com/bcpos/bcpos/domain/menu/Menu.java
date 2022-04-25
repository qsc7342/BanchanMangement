package com.bcpos.bcpos.domain.menu;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Menu {
    private String menuCode;
    private String menuName;
    private String menuType;
    private int price;
}
