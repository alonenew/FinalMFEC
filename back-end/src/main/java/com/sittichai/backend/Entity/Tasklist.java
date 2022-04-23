package com.sittichai.backend.Entity;

import javax.persistence.*;

@Entity
@Table(name = "task")
public class Tasklist {

    @Id
    @Column(name = "task_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer task_id;

    @Column(name = "task_name")
    private String task_name;

    @Column(name="category_id")
    private Integer category_id;

    @Column(name = "start_date")
    private String start_date;

    @Column(name = "due_date")
    private String due_date;

    @Column(name = "note")
    private String note;

    @Column(name = "status")
    private Integer status;

    public Tasklist() {}

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

    public Integer getCategory() {
        return category_id;
    }

    public void setCategory(Integer category_id) {
        this.category_id = category_id;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getDue_date() {
        return due_date;
    }

    public void setDue_date(String due_date) {
        this.due_date = due_date;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    
    
}

