import { usuario} from './usuario';
export class UsuarioCompleto extends usuario{
    id:number;
    nombre:string;
    apellido:string;
    usuario:string;
    password:string;
    tipo:string;
    foto:string;
    constructor(id:number, nombre:string, apellido:string, usuario:string,password:string, foto:string, tipo?:string){
        if(tipo){
            super(usuario,password,tipo, id);
            this.nombre = nombre;
            this.apellido = apellido;
            this.foto = foto;
        }
        else{
            super(usuario,password,"NN", id);
            this.foto = foto;
        }
    }
    public obtenerFoto(){
        //let ruta = "http://localhost/backendTp2/fotos/";
        let ruta = "https://remiseriagustavopetruzzi.000webhostapp.com/fotos/";
        return ruta + this.foto;
    }
}