package com.sittichai.backend.Service;

import java.util.List;
import java.util.Optional;

import com.sittichai.backend.Entity.Tasklist;
import com.sittichai.backend.Model.TaskRequest;
import com.sittichai.backend.Repository.JdbcTaskRepository;
import com.sittichai.backend.Repository.TaskRepository;
import com.sittichai.backend.constant.AppConstant;
import com.sittichai.backend.exception.BusinessException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private JdbcTaskRepository jdbcTaskRepository;


	public List<Tasklist> findAllTask() {
        return jdbcTaskRepository.findAll();
    }

    public Boolean createTodo(TaskRequest taskRequest) {
        Tasklist tasklist = new Tasklist();
        tasklist.setTask_name(taskRequest.getTask_name());
        tasklist.setCategory_id(taskRequest.getCategory_id());
        tasklist.setStart_date(taskRequest.getStart_date());
        tasklist.setDue_date(taskRequest.getDue_date());
        tasklist.setNote(taskRequest.getNote());
        tasklist.setStatus(taskRequest.getStatus());
        return jdbcTaskRepository.createTodo(tasklist);
    }


    public Tasklist retrieved(Integer id) {
		return jdbcTaskRepository.findById(id);
	}
	

    public Tasklist update(TaskRequest request) {
		Optional<Tasklist> optionalUserOptional = taskRepository.findById(request.getTask_id());
		if(!optionalUserOptional.isPresent()) {
			throw new BusinessException(AppConstant.ERROR_CODE_001, AppConstant.ERRORS_DESCRIPTION_001);
		}
		Tasklist existed = optionalUserOptional.get();
		existed.setTask_id(request.getTask_id());
		existed.setTask_name(request.getTask_name());
		existed.setCategory_id(request.getCategory_id());
		existed.setStart_date(request.getStart_date());
		existed.setDue_date(request.getDue_date());
		existed.setNote(request.getNote());
		existed.setStatus(request.getStatus());
		
		return taskRepository.save(existed);
	}

	public void delete(TaskRequest request) {
		Optional<Tasklist> optionalUserOptional = taskRepository.findById(request.getTask_id());
		if(!optionalUserOptional.isPresent()) {
			throw new BusinessException(AppConstant.ERROR_CODE_001, AppConstant.ERRORS_DESCRIPTION_001);
		}
		
		taskRepository.delete(optionalUserOptional.get());
	}
}
