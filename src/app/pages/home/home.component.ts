import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
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

export class HomeComponent implements AfterViewInit{

  @ViewChild('nosotros') container!: ElementRef;
  public visible:boolean = false;
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

}
