import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSidebarVisible = false;
  constructor() {}

  showSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
