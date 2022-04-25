package com.bcpos.bcpos.service.customer;

import com.bcpos.bcpos.domain.customer.DailyCustomer;
import com.bcpos.bcpos.mapper.customer.CustomerMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomerService {
    private final CustomerMapper customerMapper;

    public List<DailyCustomer> getDailyCustomer(String prev, String next) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("prev", prev);
        parameterMap.put("next",  next);
        return customerMapper.getDailyCustomer(parameterMap);
    }
}
