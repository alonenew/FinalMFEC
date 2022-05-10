package com.sittichai.backend.Service;

import java.util.List;
import java.util.Optional;

import com.sittichai.backend.Entity.Category;
import com.sittichai.backend.Model.CategoryRequest;
import com.sittichai.backend.Repository.CategoryRepository;
import com.sittichai.backend.Repository.JdbcCategoryRepository;
import com.sittichai.backend.constant.AppConstant;
import com.sittichai.backend.exception.BusinessException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private JdbcCategoryRepository jdbcCategoryRepository;

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Boolean createTodo(CategoryRequest categoryRequest) {
        Category category = new Category();
        category.setCategory_name(categoryRequest.getCategory_name());
        category.setIcon_url(categoryRequest.getIcon_url());
        category.setImage_url(categoryRequest.getImage_url());
        return jdbcCategoryRepository.createCategory(category);
    }


    public Category retrieved(Integer id) {
		return jdbcCategoryRepository.findById(id);
	}

    public Category update(CategoryRequest categoryRequest) {
		Optional<Category> optionalUserOptional = categoryRepository.findById(categoryRequest.getCategory_id());
		if(!optionalUserOptional.isPresent()) {
			throw new BusinessException(AppConstant.ERROR_CODE_001, AppConstant.ERRORS_DESCRIPTION_001);
		}
		Category existed = optionalUserOptional.get();
		existed.setCategory_id(categoryRequest.getCategory_id());
		existed.setCategory_name(categoryRequest.getCategory_name());
		existed.setImage_url(categoryRequest.getImage_url());
		return categoryRepository.save(existed);
	}

	public void delete(CategoryRequest categoryRequest) {
		Optional<Category> optionalUserOptional = categoryRepository.findById(categoryRequest.getCategory_id());
		if(!optionalUserOptional.isPresent()) {
			throw new BusinessException(AppConstant.ERROR_CODE_001, AppConstant.ERRORS_DESCRIPTION_001);
		}
		
		categoryRepository.delete(optionalUserOptional.get());
	}
}
