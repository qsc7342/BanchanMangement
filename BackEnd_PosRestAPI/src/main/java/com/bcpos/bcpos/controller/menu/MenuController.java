package com.bcpos.bcpos.controller.menu;

import com.bcpos.bcpos.domain.date.DateForBetween;
import com.bcpos.bcpos.domain.menu.Menu;
import com.bcpos.bcpos.domain.menu.MenuSearchByTypeDto;
import com.bcpos.bcpos.domain.menu.MenuSearchDto;
import com.bcpos.bcpos.service.menu.MenuService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
@RequestMapping("/pos/menu")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class MenuController {
    private final MenuService menuService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMenuList() {
        return new ResponseEntity<>(menuService.getMenuList(),
                HttpStatus.OK);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMenuInfoByName(@RequestBody MenuSearchDto menuSearchDto) {
        if(Objects.equals(menuSearchDto.getMenuName(), null)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(menuService.getMenuInfoByName(menuSearchDto.getMenuName()),
                HttpStatus.OK);
    }

    @GetMapping(value = "/type", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMenuTypeList() {
        return new ResponseEntity<>(menuService.getMenuTypeList(),
                HttpStatus.OK);
    }

    @PostMapping(value = "/type", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMenuListByType() {

        List<String> menuTypeList = menuService.getMenuTypeList();
        JSONArray jsonArray = new JSONArray();

        for(String str: menuTypeList) {
            JSONObject jsonObject = new JSONObject();
            List<String> menuListByType = menuService.getMenuListByType(str);
            jsonObject.put("type", str);
            jsonObject.put("menus", menuListByType);
            jsonArray.add(jsonObject);
        }
        return new ResponseEntity<>(jsonArray, HttpStatus.OK);
    }
 }
