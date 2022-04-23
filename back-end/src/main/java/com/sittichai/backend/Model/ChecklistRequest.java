package com.sittichai.backend.Model;

public class ChecklistRequest {
    
    private Integer todo_id;
    private String todo_name;
    private Integer task_id;
    private Integer is_completed;
    public Integer getTodo_id() {
        return todo_id;
    }
    public void setTodo_id(Integer todo_id) {
        this.todo_id = todo_id;
    }
    public String getTodo_name() {
        return todo_name;
    }
    public void setTodo_name(String todo_name) {
        this.todo_name = todo_name;
    }
    public Integer getTask_id() {
        return task_id;
    }
    public void setTask_id(Integer task_id) {
        this.task_id = task_id;
    }
    public Integer getIs_completed() {
        return is_completed;
    }
    public void setIs_completed(Integer is_completed) {
        this.is_completed = is_completed;
    }

    
}
