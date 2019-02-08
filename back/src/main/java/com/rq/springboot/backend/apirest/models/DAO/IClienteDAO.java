package com.rq.springboot.backend.apirest.models.DAO;

import org.springframework.data.repository.CrudRepository;

import com.rq.springboot.backend.apirest.models.entity.Cliente;

public interface IClienteDAO extends CrudRepository<Cliente, Long>{
	
}
