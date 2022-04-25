package com.bcpos.bcpos.controller.sales;

import com.bcpos.bcpos.domain.date.DateForBetween;
import com.bcpos.bcpos.domain.date.MonthForBetween;
import com.bcpos.bcpos.domain.date.YearForBetween;
import com.bcpos.bcpos.domain.sales.MenuNameSales;
import com.bcpos.bcpos.domain.sales.Sales;
import com.bcpos.bcpos.service.sales.SalesService;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/pos/sales")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SalesController {

    private final SalesService salesService;

    @Operation(summary = "일별 매출 확인",
            description = "이전 날짜와 이후 날짜를 입력받아, 해당 날짜 사이의 매출 확인")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "400", description = "Invalid Input"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
            @ApiResponse(responseCode = "500", description = "Internel Server Error")
    })
    @PostMapping(value = "/day", produces = MediaType.APPLICATION_JSON_VALUE
                )
    public ResponseEntity<?> getDailySales(@RequestBody DateForBetween date) {
        log.info("Get Daily Sales");
        return new ResponseEntity<>(salesService.getDailySales(date.getPrev(), date.getNext()),
                HttpStatus.OK);
    }

    @PostMapping(value = "/month", produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getMonthlySales(@RequestBody MonthForBetween date) {
        log.info("Get Monthly Sales");
        return new ResponseEntity<>
                (salesService.getMonthlySales(date.getPrevYear(),
                                            date.getPrevMonth(),
                                            date.getNextYear(),
                                            date.getNextMonth()),
                HttpStatus.OK);
    }

    @PostMapping(value = "/year", produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getYearlySales(@RequestBody YearForBetween date) {
        log.info("Get Yearly Sales");
        return new ResponseEntity<>
                (salesService.getYearlySales(date.getPrevYear(),
                        date.getNextYear()),
                        HttpStatus.OK);
    }

    @PostMapping(value = "/menu/day", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getDailyMenuSales(@RequestBody MenuNameSales dto) {
        log.info("Get Menu Daily Sales");
        return new ResponseEntity<>(salesService.getDailyMenuSales(dto.getPrev(), dto.getNext(),
                dto.getName()),
                HttpStatus.OK);
    }

    @PostMapping(value = "/menu/month", produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getMonthlyMenuSales(@RequestBody MonthForBetween date) {
        log.info("Get Monthly Sales");
        return new ResponseEntity<>
                (salesService.getMonthlyMenuSales(date.getPrevYear(),
                        date.getPrevMonth(),
                        date.getNextYear(),
                        date.getNextMonth()),
                        HttpStatus.OK);
    }

    @PostMapping(value = "/menu/type", produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getSalesByType(@RequestBody DateForBetween date) {
        return new ResponseEntity<>
                (salesService.getSalesByType(date.getPrev(),
                        date.getNext()),
                        HttpStatus.OK);
    }

}
