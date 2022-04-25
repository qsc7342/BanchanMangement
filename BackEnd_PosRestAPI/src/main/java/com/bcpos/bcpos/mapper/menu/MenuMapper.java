package com.bcpos.bcpos.mapper.menu;

import com.bcpos.bcpos.domain.menu.Menu;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface MenuMapper {
    List<String> getMenuListByType(HashMap<String, Object> parameterMap);
    List<Menu> getMenuList(HashMap<String, Object> parameterMap);
    List<String> getMenuTypeList();
}
