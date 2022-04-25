package com.bcpos.bcpos.service.menu;

import com.bcpos.bcpos.domain.menu.Menu;
import com.bcpos.bcpos.mapper.menu.MenuMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MenuService {
    private final MenuMapper menuMapper;
    String[] menuType = {null, "반찬", "국", "구이류", "조림류", "나물류",
            "볶음류", "샐러드류", "젓갈류", "찌개/국", "김밥/식혜", "김치류"};

    public List<Menu> getMenuList() {
        HashMap<String, Object> parameterMap = new HashMap<>();
        List<Menu> menuList = menuMapper.getMenuList(parameterMap);
        setMenuType(menuList);
        return menuList;
    }

    public List<Menu> getMenuInfoByName(String menuName) {
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("menuName", menuName);
        List<Menu> menuList = menuMapper.getMenuList(parameterMap);
        setMenuType(menuList);
        return menuList;
    }

    public List<String> getMenuTypeList() {
        List<String> menuTypeList = menuMapper.getMenuTypeList();
        List<String> resultList = new ArrayList<>();
        for(String s : menuTypeList) {
            resultList.add(menuType[Integer.parseInt(s)]);
        }
        return resultList;
    }

    public List<String> getMenuListByType(String type) {
        int val = -1;
        for(int i = 0 ; i < menuType.length ; i++) {
            if(type.equals(menuType[i])) {
                val = i;
                break;
            }
        }
        String scale = "";
        if(val < 10) scale += "00";
        else scale += "0";
        scale += Integer.toString(val);
        HashMap<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("menuType", scale);
        return menuMapper.getMenuListByType(parameterMap);
    }

    private void setMenuType(List<Menu> menuList) {
        for(Menu menu : menuList) {
            menu.setMenuType(menuType[Integer.parseInt(menu.getMenuType())]);
        }
    }
}
