package com.ec.deckxel.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ec.deckxel.entidad.EstadoLectura;
import com.ec.deckxel.entidad.Propietario;

/**
 * Spring Data JPA repository for the Products entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EstadoLecturaRepository extends CrudRepository<EstadoLectura, Long> {

}