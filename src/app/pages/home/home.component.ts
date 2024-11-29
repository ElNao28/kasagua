import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaquetesComponent } from "../../components/paquetes/paquetes.component";
import { NosotrosComponent } from "../../components/nosotros/nosotros.component";
import { ServiciosComponent } from "../../components/servicios/servicios.component";
import { ContactoComponent } from "../../components/contacto/contacto.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PaquetesComponent, NosotrosComponent, ServiciosComponent, ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit{


  public textPresentation:string = "";
  ngOnInit(): void {
    this.changeText();
  }

  public changeText(){
    const firstText:string = "Tu mejor opcion si de eventos especiales se trata";
    let flag:number= 0;
    let interval = setInterval(() => {
        this.textPresentation = this.textPresentation + firstText[flag];
        flag++;
        if(flag >= firstText.length){
            flag = 0;
            clearInterval(interval)
        }
    }, 50);
  }
}
