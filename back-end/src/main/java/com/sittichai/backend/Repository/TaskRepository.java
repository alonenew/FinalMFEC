package com.sittichai.backend.Repository;

import java.util.List;

import com.sittichai.backend.Entity.Tasklist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Tasklist, Integer> {
    
    public List<Tasklist> findAllByOrderByStatusDesc();
    
}