package com.sittichai.backend.Entity;

import javax.persistence.*;

@Entity
@Table(name = "checklist")
public class Checklist {
    
    @Id
    @Column(name = "todo_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer todo_id;

    @Column(name = "todo_name")
    private String todo_name;

    @Column(name = "task_id")
    private Integer task_id;

    @Transient()
    private String task_name;

    @Column(name = "is_completed")
    private Integer is_completed;

    public Checklist() {}

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
    
    public String getTask_name() {
        return task_name;
    }

    public void setTask_name(String task_name) {
        this.task_name = task_name;
    }

    public Integer getIs_completed() {
        return is_completed;
    }

    public void setIs_completed(Integer is_completed) {
        this.is_completed = is_completed;
    }; 

    
    
}
