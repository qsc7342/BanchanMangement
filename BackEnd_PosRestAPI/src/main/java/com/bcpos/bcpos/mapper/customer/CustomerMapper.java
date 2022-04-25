package com.bcpos.bcpos.mapper.customer;

import com.bcpos.bcpos.domain.customer.DailyCustomer;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface CustomerMapper {
    List<DailyCustomer> getDailyCustomer(HashMap<String, Object> parameterMap);
}
