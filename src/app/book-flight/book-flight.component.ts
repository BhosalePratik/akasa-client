import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [
    MatTabsModule
  ],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.scss'
})
export class BookFlightComponent {

}
