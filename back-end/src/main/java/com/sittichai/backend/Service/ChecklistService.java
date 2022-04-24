package com.sittichai.backend.Service;

import java.util.List;
import java.util.Optional;

import com.sittichai.backend.Entity.Checklist;
import com.sittichai.backend.Model.ChecklistRequest;
import com.sittichai.backend.Repository.ChecklistRepository;
import com.sittichai.backend.Repository.JdbcChecklistRepository;
import com.sittichai.backend.constant.AppConstant;
import com.sittichai.backend.exception.BusinessException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChecklistService {

    @Autowired
    private ChecklistRepository checklistRepository;

    @Autowired
    private JdbcChecklistRepository jdbcChecklistRepository;

    public List<Checklist> findAll() {
        return checklistRepository.findAll();
    }

    public Boolean createChecklist(ChecklistRequest checklistRequest) {
        Checklist checklist = new Checklist();
        checklist.setTodo_name(checklistRequest.getTodo_name());
        checklist.setTask_id(checklistRequest.getTask_id());
        checklist.setIs_completed(checklistRequest.getIs_completed());
        return jdbcChecklistRepository.createChecklist(checklist);
    }


    public Checklist retrieved(Integer id) {
		return jdbcChecklistRepository.findById(id);
	}

    public Checklist update(ChecklistRequest checklistRequest) {
		Optional<Checklist> optionalUserOptional = checklistRepository.findById(checklistRequest.getTodo_id());
		if(!optionalUserOptional.isPresent()) {
			throw new BusinessException(AppConstant.ERROR_CODE_001, AppConstant.ERRORS_DESCRIPTION_001);
		}
		Checklist existed = optionalUserOptional.get();
		existed.setTodo_name(checklistRequest.getTodo_name());
		existed.setTask_id(checklistRequest.getTask_id());
		existed.setIs_completed(checklistRequest.getIs_completed());
		existed.setTodo_id(checklistRequest.getTodo_id());
		return checklistRepository.save(existed);
	}

	public void delete(ChecklistRequest request) {
		Optional<Checklist> optionalUserOptional = checklistRepository.findById(request.getTodo_id());
		if(!optionalUserOptional.isPresent()) {
			throw new BusinessException(AppConstant.ERROR_CODE_001, AppConstant.ERRORS_DESCRIPTION_001);
		}
		
		checklistRepository.delete(optionalUserOptional.get());
	}
}
