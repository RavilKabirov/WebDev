import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about-component',
  imports: [RouterLink],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {

}
