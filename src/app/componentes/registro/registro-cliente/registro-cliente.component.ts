import { Component,ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import { UsuariosService } from '../../../servicios/usuarios/usuarios.service';
import { ClienteService } from '../../../servicios/cliente/cliente.service';
import { usuario } from '../../../clases/usuario';
import { captcha } from '../../../clases/captcha';
@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  constructor(private usuarioServicio: UsuariosService, private clienteServicio: ClienteService, private ruteador: Router) { }
  nuevoClienteForm:FormGroup;
  cx:CanvasRenderingContext2D;
  usuarios: usuario[] = [];
  usuarioRepetido:Boolean;
  esperando:Boolean;
  nuevoRemisero:Boolean;                                                                                                           
  miCaptcha: captcha;
  msgs: Message[] = [];
  @ViewChild('myCanvas') public canvas: ElementRef;
  ngOnInit() {
    this.esperando = false;
    this.miCaptcha = new captcha();  
    //this.miCaptcha.cambiarCaptcha();           
    const canvasE1:HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasE1.getContext('2d');
    this.cx.font = "30px Arial";
    let texto = this.miCaptcha.capcha();
    console.log(texto);
    this.cx.fillText(texto,50, 50);          
  
    this.usuarioRepetido = false;
    this.nuevoRemisero = true;
    this.usuarioServicio.obtenerUsuarios()
    .subscribe( data =>{
      this.usuarios = data;
    });

    this.nuevoClienteForm = new FormGroup({
      nombre: new FormControl('',[
        Validators.required
      ]),
      apellido: new FormControl('',[
        Validators.required
      ]),
      usuario: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required
      ]),
      captcha: new FormControl('',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ])
    })
    
  }

  public registrarse(){
    this.esperando =true;
    this.usuarioRepetido = false;
    console.log(this.nuevoClienteForm.controls['captcha'].value);
    let resultado = this.miCaptcha.resultado();

    console.log(resultado);
    if(this.nuevoClienteForm.controls['captcha'].value == this.miCaptcha.resultado()){
      this.usuarios.forEach(element => {
        if(this.nuevoClienteForm.controls['usuario'].value == element.usuario){
          this.esperando = false;
          this.usuarioRepetido = true;
          this.mostrarMensaje('error', 'error usuario', 'Ya existe un cliente con ese usuario ');
        }
      });
      if(!this.usuarioRepetido){
        this.clienteServicio.registrar(
          this.nuevoClienteForm.controls['nombre'].value,
          this.nuevoClienteForm.controls['apellido'].value,
          this.nuevoClienteForm.controls['usuario'].value,
          this.nuevoClienteForm.controls['password'].value
        ).subscribe(
          data=>{
            this.esperando = false;
            this.mostrarMensaje('success', '¡Exito!', "¡Se ha registrado en la remiseria!");
            setTimeout(() => {
              this.ruteador.navigate(['/login']);
            }, 2500);
          },
          error =>{
            this.esperando = false;
            this.mostrarMensaje('error', 'error', 'Ha ocurrido un error');
          }

        )
      }
    }
    else{
      this.mostrarMensaje('error', 'error captcha', '¡Vaya! Parece que eres un robot');
    }
  }


  public mostrarMensaje(severidad:string, resumen:string, detalle:string) {
    this.msgs = [];
    this.msgs.push({severity:severidad, summary:resumen, detail:detalle});
  }
}
