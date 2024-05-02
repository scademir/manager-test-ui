import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isMenuOpen: boolean = false;

  title = 'manager-ui';


  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
}
