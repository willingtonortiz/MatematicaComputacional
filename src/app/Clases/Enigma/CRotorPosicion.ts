export class CRotorPosicion {
    private static aumento = 1;

    constructor() {

    }

    public transformar(pin: string): number {
        let valor: number = 0;
        for (let i = 0; i < pin.length; ++i) {
            valor += pin.charCodeAt(i);
        }
        valor *= CRotorPosicion.aumento;
        ++CRotorPosicion.aumento;
        return valor;
    }
}