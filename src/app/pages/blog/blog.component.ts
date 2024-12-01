import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, NgClass, LoadingComponent,NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit{
  @ViewChild('view') viewContainer!: ElementRef;
  public isExpand: boolean = false;
  public isLoader:boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoader = false;
    }, 2000);
  }
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
