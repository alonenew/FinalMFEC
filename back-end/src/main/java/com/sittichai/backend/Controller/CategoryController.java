package com.sittichai.backend.Controller;

import java.util.List;

import com.sittichai.backend.Entity.Category;
import com.sittichai.backend.Model.CategoryRequest;
import com.sittichai.backend.Service.CategoryService;
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
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
  
      @PostMapping("/category/create")
      public ResponseEntity<SuccessResponse<String>> createTodo(@RequestBody CategoryRequest categoryRequest){
        categoryService.createTodo(categoryRequest);
        return ResponseEntity.ok(new SuccessResponse<String>());
      }

      @GetMapping("/category/all")
      public List<Category> getAll() {
        return (List<Category>) categoryService.findAll();
      }
      
      @GetMapping("/category/search/{id}")
      public ResponseEntity<SuccessResponse<Category>> get(@PathVariable Integer id){
        return ResponseEntity.ok(new SuccessResponse<Category>(categoryService.retrieved(id)));
      }
  
      @PatchMapping("/category/update")
      public ResponseEntity<SuccessResponse<Category>> update(@RequestBody CategoryRequest categoryRequest){
        return ResponseEntity.ok(new SuccessResponse<Category>(categoryService.update(categoryRequest)));
      }
      
      @DeleteMapping("/category/delete")
      public ResponseEntity<SuccessResponse<String>> delete(@RequestBody CategoryRequest categoryRequest){
        categoryService.delete(categoryRequest);
        return ResponseEntity.ok(new SuccessResponse<String>());
      }
}
