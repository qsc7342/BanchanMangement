package com.bcpos.bcpos.mapper.sales;

import com.bcpos.bcpos.domain.sales.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface SalesMapper {
    List<Sales> getDailySales(HashMap<String, Object> parameterMap);
    List<MonthlySales> getMonthlySales(HashMap<String, Object> parameterMap);
    List<YearlySales> getYearlySales(HashMap<String, Object> parameterMap);
    List<DailyMenuSales> getDailyMenuSales(HashMap<String, Object> parameterMap);
    List<MonthlyMenuSales> getMonthlyMenuSales(HashMap<String, Object> parameterMap);
    List<MenuTypeSales> getSalesByType(HashMap<String, Object> parameterMap);
}
