package com.ec.deckxel.utilidades;

public class RespuestaPost {

	private String info;
	private String codigo;
	private String descripcion;

	public RespuestaPost() {

	}

	public RespuestaPost(String info, String codigo, String descripcion) {
		super();
		this.info = info;
		this.codigo = codigo;
		this.descripcion = descripcion;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}
