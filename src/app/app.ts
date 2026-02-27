import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  @ViewChild('photoTrack') photoTrack!: ElementRef;
  mentionsVisible = false;
  menuOpen = false;

  slideLeft() {
    this.photoTrack.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  slideRight() {
    this.photoTrack.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  toggleMentions() {
    this.mentionsVisible = !this.mentionsVisible;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
