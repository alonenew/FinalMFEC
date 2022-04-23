package com.sittichai.backend.Repository;

import com.sittichai.backend.Entity.Tasklist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Tasklist, Integer> {

}