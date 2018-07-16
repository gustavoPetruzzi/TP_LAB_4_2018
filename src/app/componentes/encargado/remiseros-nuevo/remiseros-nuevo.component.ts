import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { usuario } from '../../../clases/usuario';
import { remisero } from '../../../clases/remisero';
import {Message} from 'primeng/components/common/api';
import { DataService } from '../../../servicios/data/data.service';
import { UsuariosService } from '../../../servicios/usuarios/usuarios.service';
import { RemiserosService } from '../../../servicios/remiseros/remiseros.service';
@Component({
  selector: 'app-remiseros-nuevo',
  templateUrl: './remiseros-nuevo.component.html',
  styleUrls: ['./remiseros-nuevo.component.css']
})
export class RemiserosNuevoComponent implements OnInit {
  remiseroForm: FormGroup;
  usuarios: usuario[];
  msgs:Message [] = [];
  titulo:string;
  usuarioRepetido:Boolean;
  nuevoRemisero:Boolean;
  modificado:remisero;
  constructor( private data: DataService , private usuarioServicio: UsuariosService, private remiseroServicio: RemiserosService ) { }

  ngOnInit() {
    this.usuarioRepetido = false;
    this.nuevoRemisero = true;
    this.titulo = "Agregar Remisero";
    this.usuarioServicio.obtenerUsuarios()
    .subscribe(data =>{
      this.usuarios = data;
      console.log(this.usuarios);
    });
    this.data.currentMessage.subscribe(remisero =>{
      if(typeof(remisero) == 'string'){
        this.titulo = "Agregar Remisero";
        this.remiseroForm = new FormGroup({
          nombre: new FormControl('',[
            Validators.required
          ]),
          apellido: new FormControl('',[
            Validators.required
          ]),
          usuario: new FormControl('', [
            Validators.required
          ])

        });                
      }
      else{
        this.nuevoRemisero = false;
        this.titulo = "Modificar Remisero";
        this.modificado = remisero;
        this.remiseroForm = new FormGroup({
          nombre: new FormControl(this.modificado.nombre,[
            Validators.required
          ]),
          apellido: new FormControl(this.modificado.apellido,[
            Validators.required
          ]),
          usuario: new FormControl(this.modificado.usuario, [
            Validators.required
          ])

        });        
      }
    })
  }
  public registrarse(){
    this.usuarioRepetido = false;
    this.usuarios.forEach(element => {
      if(this.remiseroForm.controls['usuario'].value == element.usuario){
        this.usuarioRepetido = true;
        this.mostrarMensaje('error', 'error usuario', 'Ya existe un remisero con ese usuario');
      }
    });
    if(!this.usuarioRepetido){
      this.remiseroServicio.registrar(
        this.remiseroForm.controls['nombre'].value,
        this.remiseroForm.controls['apellido'].value,
        this.remiseroForm.controls['usuario'].value,
      )
      .subscribe(data=>{
        this.mostrarMensaje('success', '¡Exito!', 'El remisero ha sido guardado');
        this.usuarios.push(new usuario(
          this.remiseroForm.controls['usuario'].value,
          this.remiseroForm.controls['usuario'].value,
          'cliente',));
      })
    }
  }

  public modificar(){
    this.usuarioRepetido = false;
    this.usuarios.forEach(element =>{
      if(this.remiseroForm.controls['usuario'].value == element.usuario){
        if ( this.remiseroForm.controls['usuario'].value != this.modificado.usuario ){
          this.usuarioRepetido = true;
          this.mostrarMensaje('error', 'error usuario', 'Ya existe un remisero con ese usuario');
        }
      }
    });
      
    if(!this.usuarioRepetido){
      //console.log(this.modificado.id);
      this.remiseroServicio.modificarAdmin(
        this.modificado.id,
        this.remiseroForm.controls['nombre'].value,
        this.remiseroForm.controls['apellido'].value,
        this.remiseroForm.controls['usuario'].value,
        this.modificado.password,
      )
      .subscribe(data =>{
        this.mostrarMensaje('success', '¡Exito!', 'El remisero ha sido modificado');
        this.usuarioServicio.obtenerUsuarios()
        .subscribe(data =>{
          this.usuarios = data;
        })
      })
    }
  }

public mostrarMensaje(severidad:string, resumen:string, detalle:string) {
  this.msgs = [];
  this.msgs.push({severity:severidad, summary:resumen, detail:detalle});
}

}
