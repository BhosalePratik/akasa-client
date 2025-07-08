import { Component } from '@angular/core';
import { BookFlightComponent } from '../book-flight/book-flight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookFlightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
