export interface tokenDecodificado {
    exp: number;
    iat: number;
    app: string;
    data:{
        id: number;
        usuario: string;
        tipo: string;
    }
}