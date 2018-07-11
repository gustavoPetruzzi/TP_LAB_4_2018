export class lugar {
    latitud:number;
    longitud:number;
    constructor(latitud?:number, longitud?:number){
        if(latitud && longitud){
            this.latitud = latitud;
            this.longitud = longitud;
        }
        else if(latitud){
            this.latitud = latitud;
        }
        else if(longitud){
            this.longitud = longitud;
        }
    }
}