/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ec.deckxel.entidad;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 *
 * @author Darwin
 */
@Entity
@Table(name = "lectura")
public class Lectura implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_lectura")
    private Integer idLectura;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "lec_anterior")
    private BigDecimal lecAnterior;
    @Column(name = "lec_actual")
    private BigDecimal lecActual;
    @Column(name = "lec_metros_cubicos")
    private BigDecimal lecMetrosCubicos;
    @Column(name = "lec_fecha")
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date lecFecha;
    @Column(name = "lec_pagada")
    private String lecPagada;
    @Column(name = "lec_descripcion")
    private String lecDescripcion;
    @Column(name = "lec_mes")
    private Integer lecMes;
    @JsonIgnore
    @Column(name = "lec_anio")
    private Integer lecAnio;
    @JoinColumn(name = "id_medidor", referencedColumnName = "id_medidor")
    @ManyToOne
    private Medidor idMedidor;
    
   
    public Lectura() {
    }

    public Lectura(Integer idLectura) {
        this.idLectura = idLectura;
    }

    public Integer getIdLectura() {
        return idLectura;
    }

    public void setIdLectura(Integer idLectura) {
        this.idLectura = idLectura;
    }

    public BigDecimal getLecAnterior() {
        return lecAnterior;
    }

    public void setLecAnterior(BigDecimal lecAnterior) {
        this.lecAnterior = lecAnterior;
    }

    public BigDecimal getLecActual() {
        return lecActual;
    }

    public void setLecActual(BigDecimal lecActual) {
        this.lecActual = lecActual;
    }

    public BigDecimal getLecMetrosCubicos() {
        return lecMetrosCubicos;
    }

    public void setLecMetrosCubicos(BigDecimal lecMetrosCubicos) {
        this.lecMetrosCubicos = lecMetrosCubicos;
    }

    public Date getLecFecha() {
        return lecFecha;
    }

    public void setLecFecha(Date lecFecha) {
        this.lecFecha = lecFecha;
    }

    public String getLecPagada() {
        return lecPagada;
    }

    public void setLecPagada(String lecPagada) {
        this.lecPagada = lecPagada;
    }

    public String getLecDescripcion() {
        return lecDescripcion;
    }

    public void setLecDescripcion(String lecDescripcion) {
        this.lecDescripcion = lecDescripcion;
    }

    public Medidor getIdMedidor() {
        return idMedidor;
    }

    public void setIdMedidor(Medidor idMedidor) {
        this.idMedidor = idMedidor;
    }



    public Integer getLecMes() {
		return lecMes;
	}

	public void setLecMes(Integer lecMes) {
		this.lecMes = lecMes;
	}
	
	

	public Integer getLecAnio() {
		return lecAnio;
	}

	public void setLecAnio(Integer lecAnio) {
		this.lecAnio = lecAnio;
	}

	@Override
    public int hashCode() {
        int hash = 0;
        hash += (idLectura != null ? idLectura.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Lectura)) {
            return false;
        }
        Lectura other = (Lectura) object;
        if ((this.idLectura == null && other.idLectura != null) || (this.idLectura != null && !this.idLectura.equals(other.idLectura))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Lectura [idLectura=" + idLectura + ", lecAnterior=" + lecAnterior + ", lecActual=" + lecActual
				+ ", lecMetrosCubicos=" + lecMetrosCubicos + ", lecFecha=" + lecFecha + ", lecPagada=" + lecPagada
				+ ", lecDescripcion=" + lecDescripcion + ", lecMes=" + lecMes + ", idMedidor=" + idMedidor + "]";
	}


    
}
