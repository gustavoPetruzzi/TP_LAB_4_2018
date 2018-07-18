export class captcha {
    private numero1:number;
    private numero2:number;

    constructor(){
        this.numero1 = Math.floor((Math.random() *10)+ 1);
        this.numero2 = Math.floor((Math.random() *10)+ 1);
    }

    public cambiarCaptcha(){
        this.numero1 = Math.floor((Math.random() *10)+ 1);
        this.numero2 = Math.floor((Math.random() *10)+ 1);
    }
    public resultado(){
        return this.numero1 + this.numero2;
    }

    public capcha(){
        return `${this.numero1} + ${this.numero2} `;
    }
}