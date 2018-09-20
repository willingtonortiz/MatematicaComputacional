export class CCuenta {

    public tipo: string;
    public usuario: string;
    public contrasenia: string;

    constructor(tipo: string, usuario: string, contrasenia: string) {
        this.tipo = tipo;
        this.usuario = usuario;
        this.contrasenia = contrasenia;
    }

}