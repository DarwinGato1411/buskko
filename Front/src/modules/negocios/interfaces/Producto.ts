import { TipoAmbiente } from "./TipoAmbiente";

interface SubCategoria {
    idCategoria: Categoria;
    idSubCategoria: number;
    productoCollection: Producto[] | null;
    subCatDescripcion: string;
}

interface Categoria {
    catNombre: string;
    idCategoria: number;
    subcategoriaCollection: (SubCategoria | null)[];
}

export interface Producto {
    codTipoambiente: TipoAmbiente;
    idProducto: number;
    idSubCategoria: SubCategoria;
    pordCostoCompra: number;
    pordCostoPromedioCompra: number;
    pordCostoVentaFinal: number;
    pordCostoVentaRef: number;
    proGlp: string;
    prodAbreviado: string;
    prodCantMinima: number;
    prodCantidadInicial: number;
    prodCodigo: string;
    prodCostoPreferencial: number;
    prodCostoPreferencialDos: number;
    prodCostoPreferencialTres: number;
    prodEsproducto: boolean;
    prodEstado: number;
    prodFactorConversion: number;
    prodFechaRegistro: string;
    prodGrabaIce: boolean;
    prodGrabaIva: boolean;
    prodImprimeCodbar: boolean;
    prodIva: number;
    prodManoObra: number;
    prodNombre: string;
    prodPathCodbar: string;
    prodPorcentajeIce: number;
    prodPrecioSinSubsidio: number;
    prodPrincipal: number;
    prodSubsidio: number;
    prodTieneSubsidio: string;
    prodTrasnporte: number;
    prodUnidadConversion: string;
    prodUnidadMedida: string;
    prodUtilidadDos: number;
    prodUtilidadNormal: number;
    prodUtilidadPreferencial: number;
}