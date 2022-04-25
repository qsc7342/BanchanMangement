package com.bcpos.bcpos.service.sales;

import com.bcpos.bcpos.domain.menu.Menu;
import com.bcpos.bcpos.domain.sales.*;
import com.bcpos.bcpos.mapper.sales.SalesMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SalesService {
    private final SalesMapper salesMapper;
    String[] menuType = {null, "반찬", "국", "구이류", "조림류", "나물류",
            "볶음류", "샐러드류", "젓갈류", "찌개/국", "김밥/식혜", "김치류"};

    public List<Sales> getDailySales(String prev, String next) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("prev", prev);
        parameterMap.put("next", next);
        return salesMapper.getDailySales(parameterMap);
    }

    public List<MonthlySales> getMonthlySales(int prevYear, int prevMonth, int nextYear, int nextMonth) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("prevYear", prevYear);
        parameterMap.put("prevMonth", prevMonth);
        parameterMap.put("nextYear", nextYear);
        parameterMap.put("nextMonth", nextMonth);
        return salesMapper.getMonthlySales(parameterMap);
    }

    public List<YearlySales> getYearlySales(int prevYear, int nextYear) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("prevYear", prevYear);
        parameterMap.put("nextYear", nextYear);
        return salesMapper.getYearlySales(parameterMap);
    }

    public List<DailyMenuSales> getDailyMenuSales(String prev, String next, String name) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("prev", prev);
        parameterMap.put("next", next);
        parameterMap.put("name", name);
        return salesMapper.getDailyMenuSales(parameterMap);
    }

    public List<MonthlyMenuSales> getMonthlyMenuSales(int prevYear, int prevMonth, int nextYear, int nextMonth) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("prevYear", prevYear);
        parameterMap.put("prevMonth", prevMonth);
        parameterMap.put("nextYear", nextYear);
        parameterMap.put("nextMonth", nextMonth);
        return salesMapper.getMonthlyMenuSales(parameterMap);
    }

    public List<MenuTypeSales> getSalesByType(String prev, String next) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("prev", prev);
        parameterMap.put("next", next);
        List<MenuTypeSales> salesByType = salesMapper.getSalesByType(parameterMap);
        setMenuType(salesByType);
        return salesByType;
    }

    public List<MenuTypeSales> getSalesByName(String prev, String next, String name) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("prev", prev);
        parameterMap.put("next", next);
        parameterMap.put("name", name);
        List<MenuTypeSales> salesByType = salesMapper.getSalesByType(parameterMap);
        setMenuType(salesByType);
        return salesByType;
    }

    private void setMenuType(List<MenuTypeSales> menuList) {
        for(MenuTypeSales menu : menuList) {
            menu.setMenuType(menuType[Integer.parseInt(menu.getMenuType())]);
        }
    }
}
