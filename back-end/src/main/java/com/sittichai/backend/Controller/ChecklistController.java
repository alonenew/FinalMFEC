package com.sittichai.backend.Controller;

import java.util.List;

import com.sittichai.backend.Entity.Checklist;
import com.sittichai.backend.Model.ChecklistRequest;
import com.sittichai.backend.Service.ChecklistService;
import com.sittichai.backend.common.SuccessResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChecklistController {

  @Autowired
  private ChecklistService checklistService;

    @PostMapping("/checklist/create")
    public ResponseEntity<SuccessResponse<String>> createTodo(@RequestBody ChecklistRequest checklistRequest){
      checklistService.createChecklist(checklistRequest);
      return ResponseEntity.ok(new SuccessResponse<String>());
    }

    @GetMapping("/checklist/all")
    public List<Checklist> getAll() {
      return (List<Checklist>) checklistService.findAll();
  }
    @GetMapping("/checklist/search/{id}")
    public ResponseEntity<SuccessResponse<Checklist>> get(@PathVariable Integer id){
      return ResponseEntity.ok(new SuccessResponse<Checklist>(checklistService.retrieved(id)));
    }

    @PatchMapping("/checklist/update")
    public ResponseEntity<SuccessResponse<Checklist>> update(@RequestBody ChecklistRequest checklistRequest){
      return ResponseEntity.ok(new SuccessResponse<Checklist>(checklistService.update(checklistRequest)));
    }
    
    @DeleteMapping("/checklist/delete")
    public ResponseEntity<SuccessResponse<String>> delete(@RequestBody ChecklistRequest checklistRequest){
      checklistService.delete(checklistRequest);
      return ResponseEntity.ok(new SuccessResponse<String>());
    }
}
