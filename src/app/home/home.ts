import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollDepth = window.scrollY;
    this.elementRef.nativeElement.style.setProperty('--scroll-depth', `${scrollDepth}px`);
  }
}
