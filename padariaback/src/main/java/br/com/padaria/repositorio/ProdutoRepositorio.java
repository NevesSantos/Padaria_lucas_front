package br.com.padaria.repositorio;

import org.springframework.data.repository.CrudRepository;

import br.com.padaria.modelo.ProdutoModelo;

public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Integer>{
    
}
