package com.sittichai.backend.Repository;

import java.util.List;

import com.sittichai.backend.Entity.Tasklist;
import com.sittichai.backend.constant.AppConstant;
import com.sittichai.backend.exception.CommonException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcTaskRepository {

    @Autowired
    private NamedParameterJdbcTemplate template; // ต้องเขียนตัว Query เอง

    private static final String INSERT_TASK = new StringBuilder(
            "INSERT INTO task (task_name,category_id,start_date,due_date,note,status) VALUES (:task_name, :category_id, :start_date, :due_date, :note, :status)")
            .toString();

    private static final String SELECT_ALL = new StringBuilder("select t.task_id, t.task_name,t.category_id,c.icon_url, t.start_date, t.due_date, t.note , t.status from task t inner join category c  where t.category_id=c.category_id order by t.status desc")
                                                               .toString();
    
    private static final String SELECT_VALUE = new StringBuilder(
            "select t.task_id, t.task_name,t.category_id,c.icon_url, t.start_date, t.due_date, t.note , t.status from task t inner join category c ON c.category_id = t.category_id WHERE t.task_id = :task_id")
            .toString();

    private static final String UPDATE_VALUE = new StringBuilder(
            "UPDATE task SET task_name = :task_name, category_id = :category_id, start_date = :start_date,due_date = :due_date,note = :note, status = :status WHERE task_id = :task_id")
            .toString();

    private static final String DELETE_VALUE = new StringBuilder(
            "DELETE * FROM task WHERE task_id = :task_id")
            .toString();

    public Boolean createTodo(Tasklist tasklist) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("task_name", tasklist.getTask_name())
                    .addValue("category_id", tasklist.getCategory_id())
                    .addValue("start_date", tasklist.getStart_date())
                    .addValue("due_date", tasklist.getDue_date())
                    .addValue("note", tasklist.getNote())
                    .addValue("status", tasklist.getStatus());
            Integer rowAffected = template.update(INSERT_TASK, mapSqlParameterSource);
            if (rowAffected > 0) {
                return Boolean.TRUE;
            }
        } catch (Exception e) {
            throw e;
        }
        return Boolean.FALSE;
    }


    public List<Tasklist> findAll() {
        List<Tasklist> total = null;
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
            total = template.query(SELECT_ALL, mapSqlParameterSource, new BeanPropertyRowMapper<>(Tasklist.class));
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return total;
    }

    public Tasklist findById(Integer task_id) {
        List<Tasklist> total = null;
        Tasklist tasklist = null;
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("task_id", task_id);
            total = template.query(SELECT_VALUE, mapSqlParameterSource, new BeanPropertyRowMapper<>(Tasklist.class));
            if ((total != null) && (!total.isEmpty())) {
                tasklist = total.get(0);
            }
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return tasklist;
    }

    public Boolean update(Tasklist tasklist) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("task_id", tasklist.getTask_id())
                    .addValue("task_name", tasklist.getTask_name())
                    .addValue("category_id", tasklist.getCategory_id())
                    .addValue("start_date", tasklist.getStart_date())
                    .addValue("due_date", tasklist.getDue_date())
                    .addValue("note", tasklist.getNote())
                    .addValue("status", tasklist.getStatus());
            Integer rowAffected = template.update(UPDATE_VALUE, mapSqlParameterSource);
            if (rowAffected > 0) {
                return Boolean.TRUE;
            }
        } catch (Exception e) {
            throw new CommonException(HttpStatus.OK, AppConstant.ERROR_CODE_002, AppConstant.ERRORS_DESCRIPTION_002);
        }
        return Boolean.FALSE;
    }

    public Boolean delete(Tasklist tasklist) {
        try {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource()
                    .addValue("task_id", tasklist.getTask_id());
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
