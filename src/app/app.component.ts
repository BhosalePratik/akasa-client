import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookFlightComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'akasa-client';
}
