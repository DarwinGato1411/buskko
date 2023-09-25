package com.ec.deckxel.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ec.deckxel.entidad.Lectura;
import com.ec.deckxel.entidad.Propietario;

/**
 * Spring Data JPA repository for the Products entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LecturaRepository extends CrudRepository<Lectura, Long> {

	
	Lectura findByIdMedidorMedNumero(String medNumero);
	Lectura findByIdMedidorMedNumeroAndLecMesAndLecAnio(String medNumero, Integer mes, Integer anio);
	List<Lectura> findByLecMesAndLecAnio(Integer mes,Integer anio);
}
