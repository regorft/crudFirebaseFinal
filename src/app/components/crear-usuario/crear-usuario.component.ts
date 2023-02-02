import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { agregarUser } from 'src/firebaseConection/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  crearUsuario: FormGroup;
  sudmitted = false;
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.crearUsuario = this.fb.group({
      nombre: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        ], 
      ],
      mensaje: ['', [Validators.required, Validators.maxLength(250)]],
    });
  }
  ngOnInit(): void {}

  get nombre() {
    return this.crearUsuario.get('nombre');
  }
  get email() {
    return this.crearUsuario.get('email');
  }
  get mensaje() {
    return this.crearUsuario.get('mensaje');
  }

  agregarUsuario() {
    this.cargando = true;
    agregarUser(this.crearUsuario.value)
      .then((result) => {
        this.toastr.success(
          'Gracias por contactarnos',
          'Usuario registrado'
        );
        this.cargando = false;
        this.router.navigate(['listar-usuario']);
      })
      .catch((err) => {
        console.log(err);
        this.cargando = false;
      });
  }
}
