package com.sittichai.backend.Repository;

import com.sittichai.backend.Entity.Checklist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChecklistRepository extends JpaRepository<Checklist, Integer> {

}