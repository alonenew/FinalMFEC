package com.sittichai.backend.Controller;

import java.util.List;

import com.sittichai.backend.Entity.Tasklist;
import com.sittichai.backend.Model.TaskRequest;
import com.sittichai.backend.Service.TaskService;
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
public class TaskController {

    @Autowired
    private TaskService taskService;
  
      @PostMapping("/create")
      public ResponseEntity<SuccessResponse<String>> createTodo(@RequestBody TaskRequest taskRequest){
        taskService.createTodo(taskRequest);
        return ResponseEntity.ok(new SuccessResponse<String>());
      }

      @GetMapping("/tasklist/all")
      public List<Tasklist> getAll() {
        return (List<Tasklist>) taskService.findAll();
    }
      @GetMapping("/tasklist/search/{id}")
      public ResponseEntity<SuccessResponse<Tasklist>> get(@PathVariable Integer id){
        return ResponseEntity.ok(new SuccessResponse<Tasklist>(taskService.retrieved(id)));
      }
  
      @PatchMapping("/tasklist/update")
      public ResponseEntity<SuccessResponse<Tasklist>> update(@RequestBody TaskRequest request){
        return ResponseEntity.ok(new SuccessResponse<Tasklist>(taskService.update(request)));
      }
      
      @DeleteMapping("/tasklist/delete")
      public ResponseEntity<SuccessResponse<String>> delete(@RequestBody TaskRequest request){
        taskService.delete(request);
        return ResponseEntity.ok(new SuccessResponse<String>());
      }
}
