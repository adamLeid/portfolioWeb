import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class BannerComponent {
  @ViewChild('bannerContent') bannerContent!: ElementRef;
  currentIndex = 0;
  numItems = 5;

  rotateLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    else{
      this.currentIndex = this.numItems - 1;
    }
  }

  rotateRight() {
    if (this.currentIndex < this.numItems - 1) {
      this.currentIndex++;
    }
    else{
      this.currentIndex = 0;
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex * this.bannerContent?.nativeElement.clientWidth}px)`;
  }

  alertItem(item: string) {
    alert(`Clicked on ${item}`);
  }
}
