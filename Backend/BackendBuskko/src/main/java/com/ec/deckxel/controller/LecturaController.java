package com.ec.deckxel.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ec.deckxel.entidad.Lectura;
import com.ec.deckxel.entidad.Medidor;
import com.ec.deckxel.repository.LecturaRepository;
import com.ec.deckxel.repository.MedidorRepository;
import com.ec.deckxel.utilidades.RespuestaPost;
import com.google.gson.Gson;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
public class LecturaController {

	@Autowired
	private LecturaRepository lecturaRepository;

	@Autowired
	private MedidorRepository medidorRepository;

	@RequestMapping(value = "/lectura", method = RequestMethod.POST)
	public ResponseEntity<List<Lectura>> lectura(@RequestBody Lectura valor) {
		final HttpHeaders httpHeaders = new HttpHeaders();
		List<Lectura> respuesta = new ArrayList<>();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON_UTF8);
		httpHeaders.setCacheControl("no-cache, no-store, max-age=120, must-revalidate");
//		httpHeaders.setETag(HttpHeaders.ETAG);
		try {
			System.out.println("MES " + valor.getLecMes());
			/* CONSULTA EL CATALOGO DE PAISES POR LAS CONSTANTES DEFINIDAS */
			respuesta = (List<Lectura>) lecturaRepository.findByLecMesAndLecAnio(valor.getLecMes(),2023);

//			cfgPais = GlobalValue.LISTACFGPAIS;
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("ERROR catalogues " + e.getMessage());
			httpHeaders.add("STATUS", "0");
			return new ResponseEntity<List<Lectura>>(respuesta, httpHeaders, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		httpHeaders.add("STATUS", "1");
		return new ResponseEntity<List<Lectura>>(respuesta, httpHeaders, HttpStatus.OK);
	}

	@RequestMapping(value = "/lecturamedidor", method = RequestMethod.POST)
	public ResponseEntity<?> lecturamedidor(@RequestBody Lectura lectura) {
		final HttpHeaders httpHeaders = new HttpHeaders();
		Lectura respuesta = new Lectura();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON_UTF8);
		httpHeaders.setCacheControl("no-cache, no-store, max-age=120, must-revalidate");
		try {

			/* CONSULTA PARA OBTENER LAS LECTURAS REGISTRADAS Y CARGAR AL APP */
			respuesta = (Lectura) lecturaRepository
					.findByIdMedidorMedNumeroAndLecMesAndLecAnio(lectura.getIdMedidor().getMedNumero(), lectura.getLecMes(),2023);
//			cfgPais = GlobalValue.LISTACFGPAIS;
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("ERROR catalogues " + e.getMessage());
			httpHeaders.add("STATUS", "0");
			return new ResponseEntity<Lectura>(respuesta, httpHeaders, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		httpHeaders.add("STATUS", "1");
		return new ResponseEntity<Lectura>(respuesta, httpHeaders, HttpStatus.OK);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<?> save(@RequestBody List<Lectura> lecturas) {
		final HttpHeaders httpHeaders = new HttpHeaders();
		RespuestaPost respuesta = new RespuestaPost("CORRECTO", "001", "Procesado correctamente");
		httpHeaders.setContentType(MediaType.APPLICATION_JSON_UTF8);
		httpHeaders.setCacheControl("no-cache, no-store, max-age=120, must-revalidate");
		SimpleDateFormat sm = new SimpleDateFormat("yyyy-MM-dd", Locale.getDefault());
		try {
			for (Lectura item : lecturas) {
				System.out.println("datos recibidos" + item.toString());
				Lectura lectura = item;

				if (lectura.getLecMes() > 12) {
					respuesta.setInfo("ERROR");
					respuesta.setDescripcion("El mes de lectura no puede ser superior a 12");
					return new ResponseEntity<RespuestaPost>(respuesta, httpHeaders, HttpStatus.OK);
				}
				Lectura lecturaRecup = lecturaRepository
						.findByIdMedidorMedNumeroAndLecMesAndLecAnio(lectura.getIdMedidor().getMedNumero(), lectura.getLecMes(),2023);
				Gson gson = new Gson();
				String JSON = gson.toJson(lectura);
				System.out.println(" JSON lecturaRecup " + JSON);
				if (lecturaRecup != null) {
					// MODIFICA LA INFORMACION
					lecturaRecup.setLecAnterior(lectura.getLecAnterior());
					lecturaRecup.setLecActual(lectura.getLecActual());
					lecturaRecup.setLecMetrosCubicos(lectura.getLecMetrosCubicos());
					lecturaRecup.setLecFecha(lectura.getLecFecha() == null ? new Date() : lectura.getLecFecha());
					lecturaRecup.setLecPagada("N");				
					lecturaRepository.save(lecturaRecup);
				} else {
					Medidor medRecup = medidorRepository.findByMedNumero(lectura.getIdMedidor().getMedNumero());
					if (medRecup != null) {
						// CREA UNA NUEVA LECTURA DEL MEDIDOR

						String JSONUPDATE = gson.toJson(lecturaRecup);
						System.out.println(" JSON JSONUPDATE " + JSONUPDATE);
						respuesta.setInfo("CORRECTO");

						lecturaRecup = new Lectura();
						lecturaRecup.setIdMedidor(medRecup);
						lecturaRecup.setLecAnterior(lectura.getLecAnterior());
						lecturaRecup.setLecActual(lectura.getLecActual());
						lecturaRecup.setLecMetrosCubicos(lectura.getLecMetrosCubicos());
						lecturaRecup.setLecPagada("N");
						lecturaRecup.setLecDescripcion("S/N");
						lecturaRecup.setLecMes(lectura.getLecMes());
						lecturaRecup.setLecFecha(lectura.getLecFecha() == null ? new Date() : lectura.getLecFecha());

						String JSONA = gson.toJson(lecturaRecup);
						System.out.println(" JSON JSONA " + JSONA);
						lecturaRepository.save(lecturaRecup);
					} else {
						respuesta.setInfo("ERROR");
						respuesta.setDescripcion("El medidor no se encuentra registrado en el sistema");
					}
				}
			}
			return new ResponseEntity<RespuestaPost>(respuesta, httpHeaders, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("ERROR catalogues " + e.getMessage());
			respuesta = new RespuestaPost("ERROR", HttpStatus.INTERNAL_SERVER_ERROR.toString(),
					e.getMessage() + " " + LecturaController.class.getName());
			httpHeaders.add("STATUS", "0");
			return new ResponseEntity<RespuestaPost>(respuesta, httpHeaders, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
