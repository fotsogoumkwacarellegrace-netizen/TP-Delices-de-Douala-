import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  imports: [],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.css',
})
export class Restaurant {}
export interface Restaurant {
  id: number;
  name: string;
  district: string;
  specialty: string;
  currentRating: number;   // 0 = non noté
  image: string;
}
