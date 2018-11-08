import { AES } from '../AES/AES'
import { Gronsfeld } from '../Gronsfeld/gronsfeld';
import { CEnigma } from '../Enigma/CEnigma';

export class CEncriptador {
    constructor( ) {

    }
    public encriptar(contrasenia: string, pin: string) {
        let encripadorAES = new AES(contrasenia, pin, true);
        contrasenia = encripadorAES.textoModificado;
        let enigma=CEnigma.getInstancia(0,0,0);
        contrasenia=enigma.cifrarTexto(contrasenia);
        let encriptadorGronsfeld = new Gronsfeld(pin);
        contrasenia = encriptadorGronsfeld.encriptar_mensaje(contrasenia);
        return contrasenia;
    }

    public desencriptar(contrasenia: string, pin: string){
        let dEncriptadorGronsfeld = new Gronsfeld(pin);
        contrasenia = dEncriptadorGronsfeld.desencriptar_mensaje(contrasenia);
        let enigma=CEnigma.getInstancia(0,0,0);
        contrasenia=enigma.cifrarTexto(contrasenia);
        let desencripadorAES = new AES(contrasenia, pin, false);
        contrasenia = desencripadorAES.textoModificado;
        return contrasenia;
    }
}