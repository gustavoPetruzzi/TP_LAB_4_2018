import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../servicios/loginservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../servicios/auth/auth.service';
import {Message} from 'primeng/components/common/api';
import { tokenDecodificado } from '../clases/tokenDecodificado';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs:Message[] = [];
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
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'error', detail:'Usuario y/o contraseña incorrecta'});
      },
      () => this.esperando = false
    );
  }

  public handleSuccess(evento:any){
    console.log(evento);
    this.captchaOk = true;
  }

  public ingresar(usuario:string){
    switch (usuario) {
      case 'admin':
        this.usuarioText = 'admin';
        this.passwordText = 'admin';
        break;
      case 'remisero':
        this.usuarioText = 'juancito';
        this.passwordText = '1111';
        break;
        case 'cliente':
          this.usuarioText = 'carlos';
          this.passwordText = '2222';
          break;
      default:
        break;
    }
  }

}
