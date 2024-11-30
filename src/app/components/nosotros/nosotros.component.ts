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
    const observer = new IntersectionObserver(entries =>
      this.viewContainer(entries),{
        threshold: 0.5,
        rootMargin: '0px 0px 0px 0px'
      });
    observer.observe(this.container.nativeElement);
  }

  private viewContainer(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      this.visible = true;
    }
  }
}
