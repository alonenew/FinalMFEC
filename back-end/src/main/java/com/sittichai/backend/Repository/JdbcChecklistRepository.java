package com.sittichai.backend.Repository;

import java.util.List;

import com.sittichai.backend.Entity.Checklist;
import com.sittichai.backend.constant.AppConstant;
import com.sittichai.backend.exception.CommonException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcChecklistRepository {

    @Autowired
    private NamedParameterJdbcTemplate template; // ต้องเขียนตัว Query เอง

    private static final String INSERT_CHECKLIST = new StringBuilder(
            "INSERT INTO checklist (todo_name,is_completed,task_id) VALUES (:todo_name, :is_completed, (SELECT t.task_id From task t WHERE t.task_id = :task_id))")
            .toString();

    private static final String SELECT_ALL = "SELECT * FROM checklist";

    private static final String SELECT_VALUE = new StringBuilder(
            "SELECT * FROM checklist")
            .toString();

    private static final String UPDATE_VALUE = new StringBuilder(
            "UPDATE checklist SET todo_name = :todo_name, task_id = :task_id, is_completed = :is_completed WHERE todo_id = :todo_id")
            .toString();

    private static final String DELETE_VALUE = new StringBuilder(
            "DELETE * FROM checklist WHERE todo_id = :todo_id")
            .toString();

    public Boolean createChecklist(Checklist checklist) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("todo_name", checklist.getTodo_name())
                    .addValue("task_id", checklist.getTask_id())
                    .addValue("is_completed", checklist.getIs_completed());
            Integer rowAffected = template.update(INSERT_CHECKLIST, mapSqlParameterSource);
            if (rowAffected > 0) {
                return Boolean.TRUE;
            }
        } catch (Exception e) {
            throw e;
        }
        return Boolean.FALSE;
    }


    public Checklist findAll() {
        List<Checklist> total = null;
        Checklist checklist = null;
        try {
            total = template.query(SELECT_ALL, new BeanPropertyRowMapper<>(Checklist.class));
            if ((total != null) && (!total.isEmpty())) {
                checklist = total.get(0);
            }
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return checklist;
    }

    public Checklist findById(Integer todo_id) {
        List<Checklist> total = null;
        Checklist checklist = null;
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("todo_id", todo_id);
            total = template.query(SELECT_VALUE, mapSqlParameterSource, new BeanPropertyRowMapper<>(Checklist.class));
            if ((total != null) && (!total.isEmpty())) {
                checklist = total.get(0);
            }
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return checklist;
    }

    public Boolean update(Checklist checklist) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("todo_id", checklist.getTodo_id())
                    .addValue("todo_name", checklist.getTodo_name())
                    .addValue("task_id", checklist.getTask_id())
                    .addValue("is_completed", checklist.getIs_completed());
            Integer rowAffected = template.update(UPDATE_VALUE, mapSqlParameterSource);
            if (rowAffected > 0) {
                return Boolean.TRUE;
            }
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return Boolean.FALSE;
    }

    public Boolean delete(Checklist checklist) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("todo_id", checklist.getTodo_id());
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
