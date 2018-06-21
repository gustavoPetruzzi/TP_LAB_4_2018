import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../servicios/loginservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../servicios/auth/auth.service';
import { tokenDecodificado } from '../clases/tokenDecodificado';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioText:string;
  passwordText:string;
  decodificado:tokenDecodificado;
  captchaOk:Boolean;
  esperando:Boolean;
  constructor(private auth: AuthService,private ruta: ActivatedRoute, private ruteador: Router, private loginService: LoginserviceService) { }

  ngOnInit() {
    this.captchaOk = false;
    this.esperando= false;
  }
  public login(){
    this.esperando = true;
    this.loginService.loguear(this.usuarioText, this.passwordText)
    .subscribe(
      data =>{
        this.esperando = false;
        localStorage.setItem('token', data.token);
        localStorage.setItem('logueado', 'true');
        this.decodificado = this.auth.obtenerToken();
        if(this.decodificado){
          switch (this.decodificado.data.tipo) {
            case 'remisero':
              this.ruteador.navigate(['/remisero']);
              break;
            case 'cliente':
              this.ruteador.navigate(['/cliente']);
              break;
            case 'encargado':
              this.ruteador.navigate(['/encargado']);
            default:
              break;
        }
      }
    },
      error =>{
        this.esperando = false;
        console.log(error.error);
      },
      () => this.esperando = false
    );
  }

  public handleSuccess(evento:any){
    console.log(evento);
    this.captchaOk = true;
  }

}
