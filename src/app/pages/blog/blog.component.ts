import { NgClass, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  @ViewChild('view') viewContainer!: ElementRef;
  public isExpand: boolean = false;
  public expandImg(url:string) {
    this.isExpand = !this.isExpand;
    if(!this.isExpand){
      this.viewContainer.nativeElement.removeChild(this.viewContainer.nativeElement.querySelector('img'));
      return;
    }
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'img view';
    img.className = 'fixed top-1 z-20 rounded-md h-full';
    this.viewContainer.nativeElement.appendChild(img);

  }
}
