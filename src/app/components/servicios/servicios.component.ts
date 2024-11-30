import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgClass],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements AfterViewInit{
  @ViewChild('items1') items1!:ElementRef;

  public visibleItem1:boolean = false;
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      const item = entries[0];
      if(item.isIntersecting){
        this.visibleItem1 = true;
      }
    });
    observer.observe(this.items1.nativeElement);
  }
}
