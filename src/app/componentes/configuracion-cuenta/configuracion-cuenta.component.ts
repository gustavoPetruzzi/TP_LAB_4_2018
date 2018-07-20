import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth/auth.service';
import { ClienteService } from '../../servicios/cliente/cliente.service';
import { FotosService } from '../../servicios/fotos/fotos.service';
import { RemiserosService } from '../../servicios/remiseros/remiseros.service';
import { UsuarioCompleto } from '../../clases/usuarioCompleto';
import { Observable } from 'rxjs';
import {Message} from 'primeng/components/common/api';
@Component({
  selector: 'app-configuracion-cuenta',
  templateUrl: './configuracion-cuenta.component.html',
  styleUrls: ['./configuracion-cuenta.component.css']
})
export class ConfiguracionCuentaComponent implements OnInit {

  constructor(private auth: AuthService, private servicioCliente: ClienteService, private servicioRemisero:RemiserosService, private manejador:FotosService) { }
  cargando:Boolean;
  id:number;
  tipo:string;
  user:UsuarioCompleto;
  modificaDatosForm:FormGroup;
  msgs:any;
  ngOnInit() {
    this.cargando = true;
    this.id = this.auth.obtenerToken().data.id;
    this.tipo = this.auth.obtenerToken().data.tipo;
    if(this.tipo == 'remisero'){
      this.servicioRemisero.buscarRemisero(this.id)
      .subscribe(data =>{
        this.cargando = false;
        this.user = new UsuarioCompleto(data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto);
        
      })
    }
    else if(this.tipo == 'cliente'){
      this.servicioCliente.buscarCliente(this.id)
      .subscribe(data =>{
        this.user = new UsuarioCompleto(data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto);
        console.log(this.user);
        console.log(this.user.obtenerFoto());
        console.log(data);
          this.cargando = false;
          this.modificaDatosForm = new FormGroup({
            nombre: new FormControl(this.user.nombre,[
              Validators.required
            ]),
            apellido: new FormControl(this.user.apellido,[
              Validators.required,
            ]),
            usuario: new FormControl(this.user.usuario,[
              Validators.required
            ]),
            password: new FormControl('',[
              Validators.required
            ]),
            nuevoPassword: new FormControl('')
          })        
        })
      }
    else{

    }

  }

  public modificar(){
    if(this.user == this.modificaDatosForm.controls['password'].value){

    }
    else{
      this.mostrarMensaje('error','error','La contraseña no coincide');
    }
  }

  public mostrarMensaje(severidad:string, resumen:string, detalle:string) {
    this.msgs = [];
    this.msgs.push({severity:severidad, summary:resumen, detail:detalle});
  }

  public arreglar($event){
    $event.formData.append('id', this.id.toString());
    $event.formData.append('usuario', this.user.usuario);
    
  }

  public subirFoto($event){
    console.log($event);
  }

}
