package com.sittichai.backend.Repository;

import java.util.List;

import com.sittichai.backend.Entity.Category;
import com.sittichai.backend.constant.AppConstant;
import com.sittichai.backend.exception.CommonException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcCategoryRepository {

    @Autowired
    private NamedParameterJdbcTemplate template;

    private static final String INSERT_CATEGORY = new StringBuilder(
            "INSERT INTO category (category_name, image_url) VALUES (:category_name, :image_url)")
            .toString();

    private static final String SELECT_ALL = "SELECT * FROM category";

    private static final String SELECT_VALUE = new StringBuilder(
            "SELECT * FROM category")
            .toString();

    private static final String UPDATE_VALUE = new StringBuilder(
            "UPDATE category SET category_name = :category_name, image_url = :image_url WHERE category_id = :category_id")
            .toString();

    private static final String DELETE_VALUE = new StringBuilder(
            "DELETE * FROM category WHERE category_id = :category_id")
            .toString();

    public Boolean createCategory(Category category) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("category_name", category.getCategory_name())
                    .addValue("image_url", category.getImage_url());
            Integer rowAffected = template.update(INSERT_CATEGORY, mapSqlParameterSource);
            if (rowAffected > 0) {
                return Boolean.TRUE;
            }
        } catch (Exception e) {
            throw e;
        }
        return Boolean.FALSE;
    }


    public Category findAll() {
        List<Category> total = null;
        Category category = null;
        try {
            total = template.query(SELECT_ALL, new BeanPropertyRowMapper<>(Category.class));
            if ((total != null) && (!total.isEmpty())) {
                category = total.get(0);
            }
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return category;
    }

    public Category findById(Integer category_id) {
        List<Category> total = null;
        Category category = null;
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("category_id", category_id);
            total = template.query(SELECT_VALUE, mapSqlParameterSource, new BeanPropertyRowMapper<>(Category.class));
            if ((total != null) && (!total.isEmpty())) {
                category = total.get(0);
            }
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return category;
    }

    public Boolean update(Category category) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("category_id", category.getCategory_id())
                    .addValue("category_name", category.getCategory_name())
                    .addValue("image_url", category.getImage_url());
            Integer rowAffected = template.update(UPDATE_VALUE, mapSqlParameterSource);
            if (rowAffected > 0) {
                return Boolean.TRUE;
            }
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return Boolean.FALSE;
    }

    public Boolean delete(Category category) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("category_id", category.getCategory_id());
            Integer rowAffected = template.update(DELETE_VALUE, mapSqlParameterSource);
            if (rowAffected > 0) {
                return Boolean.TRUE;
            }
        } catch (Exception e) {
            throw e;
        }
        return Boolean.FALSE;
    }

}
