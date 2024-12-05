import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  constructor(private conexionService: ConexionService) {}
  private fb: FormBuilder = inject(FormBuilder);

  public formContact: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    email: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
  });

  public sendMessage(){
    if(this.formContact.invalid){
      return alert("Llena todos los campos");
    }
    this.conexionService.sendEmail(this.formContact.value).subscribe(res => {
      console.log(res);
    })
  }
}
