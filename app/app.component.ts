import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentComponent = 'builds';
  newcomponent = 'new builds';

  navigate(component: string) {
      this.currentComponent = component;
  }
}
