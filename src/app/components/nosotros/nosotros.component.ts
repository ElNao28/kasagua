import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent implements AfterViewInit {
  @ViewChild('nosotros') container!: ElementRef;
  public visible: boolean = false;
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element is visible');
          this.visible = true;
        }
      });
    });
    observer.observe(this.container.nativeElement);
  }
}
