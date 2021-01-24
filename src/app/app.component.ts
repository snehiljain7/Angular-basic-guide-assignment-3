import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataVisible = false;
  buttons = [];

  onDisplayDetails(){
    this.dataVisible = !this.dataVisible;
    this.buttons.push(this.buttons.length +1);
  }
  
}
