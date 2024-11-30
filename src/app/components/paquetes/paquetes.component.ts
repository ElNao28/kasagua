import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paquetes',
  standalone: true,
  imports: [NgClass],
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css',
})
export class PaquetesComponent implements AfterViewInit {
  @ViewChild('img1') image1!: ElementRef;
  @ViewChild('img2') image2!: ElementRef;
  @ViewChild('img3') image3!: ElementRef;
  public visible1: boolean = false;
  public visible2: boolean = false;
  public visible3: boolean = false;
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      const container = entries[0];
      if (container.isIntersecting) {
        switch (container.target.id) {
          case 'img1':
            this.visible1 = true;
            console.log('1')
            break;
          case 'img2':
            this.visible2 = true;
            console.log('2')
            break;
          case 'img3':
            this.visible3 = true;
            console.log('3')
            break;
          default:
            break;
        }
      }
    });
    observer.observe(this.image1.nativeElement);
    observer.observe(this.image2.nativeElement);
    observer.observe(this.image3.nativeElement);
  }
}
