import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-paquetes',
  standalone: true,
  imports: [NgClass],
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css',
})
export class PaquetesComponent implements AfterViewInit, OnInit {

  constructor(private readonly conexionService: ConexionService) {}

  @ViewChild('img1') image1!: ElementRef;
  @ViewChild('img2') image2!: ElementRef;
  @ViewChild('img3') image3!: ElementRef;
  public visible1: boolean = false;
  public visible2: boolean = false;
  public visible3: boolean = false;
  public temperature: string = '';
  public ph: string = '';

  ngOnInit(): void {
    this.getParameters();
  }
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        const container = entries[0];
        if (container.isIntersecting) {
          switch (container.target.id) {
            case 'img1':
              this.visible1 = true;
              break;
            case 'img2':
              this.visible2 = true;
              break;
            case 'img3':
              this.visible3 = true;
              break;
            default:
              break;
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px 0px 0px',
      }
    );
    observer.observe(this.image1.nativeElement);
    observer.observe(this.image2.nativeElement);
    observer.observe(this.image3.nativeElement);
  }

  private getParameters() {
    this.conexionService.getParameters().subscribe((resp) => {
      if (resp.status === 200) {
        this.temperature = resp.response.temperatura;
        this.ph = resp.response.ph;
      }
    });
  }
}
