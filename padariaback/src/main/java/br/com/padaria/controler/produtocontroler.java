package br.com.padaria.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.padaria.modelo.ProdutoModelo;
import br.com.padaria.repositorio.ProdutoRepositorio;



@RestController
@CrossOrigin(origins = "*")
public class produtocontroler {
    
    @Autowired
    ProdutoRepositorio produtorepositorio;

    @GetMapping
    public Iterable<ProdutoModelo> listar(){
        return produtorepositorio.findAll();
    }

    @PostMapping
    public ResponseEntity<ProdutoModelo> cadastrar(@RequestBody ProdutoModelo produtoModelo) {
        return new ResponseEntity<ProdutoModelo>(produtorepositorio.save(produtoModelo), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<ProdutoModelo> alterar(@RequestBody ProdutoModelo produtoModelo){
        return new ResponseEntity<ProdutoModelo>(produtorepositorio.save(produtoModelo), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Integer id){
        produtorepositorio.deleteById(id);
    }
}
