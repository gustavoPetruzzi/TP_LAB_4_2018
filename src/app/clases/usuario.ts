export class usuario {
    id:number;
    usuario:string;
    password:string;
    tipo:string;

    constructor(usuario:string, password:string, tipo:string, id?:number,){
        if(id){
            this.id = id;
        }
        else{
            this.id = -1;
        }
        this.usuario = usuario;
        this.password = password;
        this.tipo = tipo;
        

    }
}