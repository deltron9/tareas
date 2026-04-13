import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Solo estos dos

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main { }