export class vehiculo {
    id:number;
    marca:string;
    modelo:string;
    anio:string;
    premium:number;
    foto:string;

    static  obtenerAnios(){
        let anios = new Array();
        for (let index = 1989; index < 2019; index++) {
            anios.push(index);
        }
        return anios;
    }

    constructor(marca:string, modelo:string, anio:string, premium:number){
        this.id = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.premium = premium;
        this.foto = "";
    }

}

export const marcas = ['chevrolet', 'ford', 'renault', 'BMW', 'fiat'];