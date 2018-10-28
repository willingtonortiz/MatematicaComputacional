export class Cuenta {
    // Id de la cuenta proporcionado por firebase
    public id: string;
    public tipo: string;
    public usuario: string;
    public contrasenia: string;

    constructor() { }

    public getSimple(): any {
        return {
            tipo: this.tipo,
            usuario: this.usuario,
            contrasenia: this.contrasenia
        };
    }
}