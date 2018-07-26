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
  cargandoFoto:Boolean;
  foto:string;
  id:number;
  tipo:string;
  user:UsuarioCompleto;
  modificaDatosForm:FormGroup;
  modificando:Boolean;
  msgs:any;
  ngOnInit() {
    this.cargando = true;
    this.id = this.auth.obtenerToken().data.id;
    this.tipo = this.auth.obtenerToken().data.tipo;
    if(this.tipo == 'remisero'){
      this.servicioRemisero.buscarRemisero(this.id)
      .subscribe(data =>{

        this.user = new UsuarioCompleto(data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto, 'remisero');
        this.foto = this.user.obtenerFoto();
        console.log(this.foto);
        console.log(this.user);
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
    else if(this.tipo == 'cliente'){
      this.servicioCliente.buscarCliente(this.id)
      .subscribe(data =>{
        this.user = new UsuarioCompleto(data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto, 'cliente');
        console.log(this.user);
        this.foto = this.user.obtenerFoto();
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
    this.modificando = true;
    if(this.user.password == this.modificaDatosForm.controls['password'].value){
      if(this.tipo == 'remisero'){
        let passwordViejo = this.user.password;
        this.user.password = this.modificaDatosForm.controls['nuevoPassword'].value;
        this.servicioRemisero.modificarAdmin(this.user.id, this.user.nombre, this.user.apellido, this.user.usuario, this.user.password)
        .subscribe(data =>{
          setTimeout(() => {
            this.modificando = false;
            this.mostrarMensaje('success','¡Exito!', 'Se han modificado sus datos con exito');
          }, 2500);

        })
      }
      else if(this.tipo == 'cliente'){
        this.user.password = this.modificaDatosForm.controls['nuevoPassword'].value;
        this.servicioCliente.modificarCliente(this.user)
        .subscribe(data =>{
          setTimeout(() => {
            this.modificando = false;
            this.mostrarMensaje('success','¡Exito!', 'Se han modificado sus datos con exito');
          }, 2500);
        })
      }
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
    $event.formData.append('tipo', this.user.tipo);
    
  }

  public subirFoto($event:XMLHttpRequest){
    this.foto = './assets/Blocks-1s-200px.gif';
    if(this.tipo == 'cliente'){
      console.log($event);
      this.servicioCliente.buscarCliente(this.user.id)
      .subscribe(data =>{
        this.user = new UsuarioCompleto(data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto, 'cliente');
        this.mostrarMensaje('success', '¡Exito!', 'Su foto se ha actualizado correctamente');
        this.foto = this.user.obtenerFoto();

      })
    }
    else if(this.tipo == 'remisero'){
      console.log($event);
      this.servicioRemisero.buscarRemisero(this.user.id)
      .subscribe(data =>{        
        this.user = new UsuarioCompleto(data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto, 'remisero');
        this.mostrarMensaje('success', '¡Exito!', 'Su foto se ha actualizado correctamente');
        this.foto = this.user.obtenerFoto();
      })
    }
    
  }

}
