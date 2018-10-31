export class Gronsfeld {
    clave: number[]
    alfabeto: string;
    tabla_cifrado: string[];

    constructor(pin_usuario: string) {
        this.clave = [];
        this.tabla_cifrado = [];
        this.alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789 @#*.+×÷=%/€£$!:;&_()-'\",?￦¥°¿¡^[]<>~`§μ¬Г´·{}©|¤ΩθฯêëéèûùüúîìïíœøõôöòóãåæàäâáßçÊËÉÈÛÙÜÚÎÌÏÍŒØÕÔÖÒÓÃÅÆÀÄÂÁÇ\\♥";
        this.generar_tabla();
        this.generar_clave(pin_usuario);
    }

    generar_tabla() {
        let clave_fila = this.alfabeto;
        let repeticiones = 2;
        for (let i = 0; i < 10; ++i) {

            if (i >= 1 && i <= 2) {
                repeticiones = i;
            }
            else if (i >= 3 && i <= 8) {
                if (i % 2 != 0)
                    repeticiones = 2;
                else
                    repeticiones = 4;
            }
            else if (i == 9) {
                repeticiones = 5;
            }

            
            for (let k = 0; k < repeticiones; ++k) {
                clave_fila += clave_fila[0];
                clave_fila = clave_fila.substr(1);
            }
            this.tabla_cifrado.push(clave_fila);
        }
    }

    generar_clave(pin_usuario: string) {
        let pin_arr = [];
        for (let i = 0; i < pin_usuario.length; ++i)
            pin_arr.push(pin_usuario.charCodeAt(i) % 10);

        for (let i = 0; i < pin_arr.length; ++i) {
            for (let j = 0; j < pin_arr.length; ++j) {
                if (i == j)
                    continue;
                if (pin_arr[i] == pin_arr[j]) {
                    pin_arr[j] = (pin_arr[j] + 1) % 10;
                }
            }
        }
        this.clave = pin_arr;
    }

    encriptar_mensaje(mensaje: string) {
        let iterador_clave = 0;
        let mensaje_encriptado = "";
        for (let i = 0; i < mensaje.length; ++i) {
            let columna_elegir = this.alfabeto.indexOf(mensaje[i]);
            let fila_elegir = this.clave[iterador_clave];

            mensaje_encriptado += this.tabla_cifrado[fila_elegir][columna_elegir];

            ++iterador_clave;
            if (i >= this.clave.length - 1)
                iterador_clave = 0;
        }
        return mensaje_encriptado;
    }

    desencriptar_mensaje(mensaje_encriptado: string) {
        let iterador_clave = 0;
        let mensaje_desencriptado = "";
        for (let i = 0; i < mensaje_encriptado.length; ++i) {

            for (let j = 0; j < this.alfabeto.length; ++j) {
                let columna_posible = this.tabla_cifrado[this.clave[iterador_clave]][j];
                let letra_encriptada = mensaje_encriptado[i];
                
                if (columna_posible == letra_encriptada)
                        mensaje_desencriptado += this.alfabeto[j];
            }
            ++iterador_clave;
            if (i >= this.clave.length - 1)
                iterador_clave = 0;
        }
        return mensaje_desencriptado;
    }
}

/*  ========== PRUEBA ==========
    let grons = new Gronsfeld("8147");
    console.log(grons.encriptar_mensaje("hola123·$&%$/%&(5615!"));
    console.log(grons.desencriptar_mensaje("x×pn=%/î¡<￦¡¥￦<~£$=£^"));
*/
