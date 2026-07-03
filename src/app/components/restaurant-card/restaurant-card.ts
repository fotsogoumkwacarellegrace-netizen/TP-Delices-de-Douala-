import { Component, input, output } from '@angular/core';
import { StarRating } from '../star-rating/star-rating';
import { Restaurant } from '../restaurant/restaurant';
import { CurrentRating } from '../current-rating/current-rating';

@Component({
  selector: 'app-restaurant-card',
  imports: [StarRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {
  restaurant = input.required<Restaurant>();
  restaurantRated = output<Restaurant>();
  restaurantClicked = output<Restaurant>();
  displayRestaurantViewModal = output<Restaurant>();

  onRestaurantClick(): void {
    const selectedRestaurant = this.restaurant();
    if (selectedRestaurant) {
      this.restaurantClicked.emit(selectedRestaurant);
      this.displayRestaurantViewModal.emit(selectedRestaurant);
    }
  }

  closeModal = output<void>();

  oncloseModal(): void {
    this.closeModal.emit();
  }
  onRatingChanged(rating: number): void {
    const r= this.restaurant();
    this.restaurantRated.emit({ ...r, currentRating: rating });
  }
}
