import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html',
  styleUrls: ['./cliente-nuevo.component.css']
})
export class ClienteNuevoComponent implements OnInit {

  constructor() { }
  viajeForm: FormGroup;
  ngOnInit() {
    this.viajeForm = new FormGroup({
      hora: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ])
    })
  }

}
