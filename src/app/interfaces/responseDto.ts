export interface ResponseDTO {
    mensaje:         string;
    codigoRespuesta: number;
    data:            ClienteDTO;
}

export interface ClienteDTO {
    primerNombre:     string;
    segundoNombre:    string;
    primerApellido:   string;
    segundoApellido:  string;
    telefono:         string;
    direccion:        string;
    ciudadResidencia: string;
}
