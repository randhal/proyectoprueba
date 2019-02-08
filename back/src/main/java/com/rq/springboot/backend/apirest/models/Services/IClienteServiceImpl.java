package com.rq.springboot.backend.apirest.models.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rq.springboot.backend.apirest.models.DAO.IClienteDAO;
import com.rq.springboot.backend.apirest.models.entity.Cliente;

@Service
public class IClienteServiceImpl implements IClienteService{

	@Autowired
	private IClienteDAO clienteDao;
	
	@Override
	@Transactional(readOnly = true) //anotacion
	public List<Cliente> findAll() {
		return (List<Cliente>) clienteDao.findAll();
	}

	@Override
	@Transactional
	public Cliente findById(Long id) {
		return clienteDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Cliente save(Cliente cliente) {
		return clienteDao.save(cliente);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		clienteDao.deleteById(id);
	}

}
