package com.bcpos.bcpos.controller.customer;

import com.bcpos.bcpos.domain.date.DateForBetween;
import com.bcpos.bcpos.service.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/pos/customer")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerController {
    private final CustomerService customerSerivce;

    @PostMapping(value = "/day", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getDailyCustomer(@RequestBody DateForBetween date) {
        return new ResponseEntity<>(customerSerivce.getDailyCustomer(date.getPrev(), date.getNext()),
                HttpStatus.OK);
    }


}
