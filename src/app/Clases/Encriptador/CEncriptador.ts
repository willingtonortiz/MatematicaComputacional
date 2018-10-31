import { AES } from '../AES/AES'
import { Gronsfeld } from '../Gronsfeld/gronsfeld';

export class CEncriptador {
    constructor( ) {

    }
    public encriptar(contrasenia: string, pin: string) {
        //el nuevo caracter que agregue es ♥ 
        let encripadorAES = new AES(contrasenia, pin, true);
        contrasenia = encripadorAES.textoModificado;
        
        let encriptadorGronsfeld = new Gronsfeld(pin);
        contrasenia = encriptadorGronsfeld.encriptar_mensaje(contrasenia);

        return contrasenia;
    }

    public desencriptar(contrasenia: string, pin: string){
        
        let dEncriptadorGronsfeld = new Gronsfeld(pin);
        contrasenia = dEncriptadorGronsfeld.desencriptar_mensaje(contrasenia);

        let desencripadorAES = new AES(contrasenia, pin, false);
        contrasenia = desencripadorAES.textoModificado;
        return contrasenia;
    }
}