import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements AfterViewInit,OnInit{

  @ViewChild('nosotros') container!: ElementRef;
  public visible:boolean = false;
  public textPresentation:string = "";
  ngOnInit(): void {
    this.changeText();
  }
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          console.log('Element is visible')
          this.visible = true;
        }
      })
    })
    observer.observe(this.container.nativeElement)
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
