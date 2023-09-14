package br.com.api.produtos_padaria.repositorio;

import org.springframework.data.repository.CrudRepository;

import br.com.api.produtos_padaria.modelo.ProdutoModelo;

public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Integer>{
    
}
