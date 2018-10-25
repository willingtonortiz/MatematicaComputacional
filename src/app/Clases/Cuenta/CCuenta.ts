export class CCuenta {
    public id: string;
    public tipo: string;
    public usuario: string;
    public contrasenia: string;

    constructor(id: string, tipo: string, usuario: string, contrasenia: string) {
        this.id = id;
        this.tipo = tipo;
        this.usuario = usuario;
        this.contrasenia = contrasenia;
    }

}