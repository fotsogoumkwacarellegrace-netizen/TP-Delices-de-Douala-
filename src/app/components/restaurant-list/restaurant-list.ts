import { Component, input, output, computed } from '@angular/core';
import { RestaurantCard } from '../restaurant-card/restaurant-card';
import { Restaurant } from '../restaurant/restaurant';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard,CommonModule],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {


  // RatedCount = computed(() => {
  //   return this.restaurants().filter(r => r.currentRating > 0).length;
  // });

  // averageRating = computed(() => {
  //   const ratedRestaurants = this.restaurants().filter(r => r.currentRating > 0);
  //   if (ratedRestaurants.length === 0) {
  //     return 0;
  //   }
  //   const totalRating = ratedRestaurants.reduce((sum, r) => sum + r.currentRating, 0);
  //   return totalRating / ratedRestaurants.length;
  // });

  // RestaurantRatedCount = signal(0);

  onRestaurantRated(restaurant: Restaurant): void {
    this.RestaurantRated.emit(restaurant);
  }

  constructor() {
    console.log('Composant RestaurantList créé !');
    // Tout ce qui doit s'exécuter AU MOMENT de la création va ici
  }

  trackByRestaurantId(id : number, restaurant:Restaurant ): number {
    return restaurant.id;
  }

  restaurants = input.required<Restaurant[]>();
  RestaurantRated = output<Restaurant>();
  RestaurantRatedID = new Set<number>();
  restaurantClicked = signal<Restaurant[]>([]);
  displayRestaurantViewModal = signal<Restaurant[]>([]);

  onRestaurantClick(restaurant: Restaurant): void {
    console.log('Restaurant cliqué :', restaurant);
    this.onDisplayRestaurantViewModal(restaurant);
  }

  isDisplayModal = signal(false);
  modalRestaurant = signal<Restaurant | undefined>(undefined);

  onDisplayRestaurantViewModal(restaurant: Restaurant): void {
    this.modalRestaurant.set(restaurant);
    this.isDisplayModal.set(true);
  }

  onCloseModal(): void {
    this.isDisplayModal.set(false);
    this.modalRestaurant.set(undefined);
  }

  isRestaurantRated(restaurant: Restaurant | undefined): boolean {
    return !!restaurant && this.RestaurantRatedID.has(restaurant.id);
  }

  RestaurantRatedAdd = output<Restaurant>();

  onRestaurantAdd(restaurant: Restaurant): void {
    if (!this.isRestaurantRated(restaurant)) {
      console.log('Restaurant noté :', restaurant);
      return;
    }

    this.RestaurantRatedID.add(restaurant.id);
    // this.RestaurantRated.update(list => [...list, restaurant]);
    this.RestaurantRatedAdd.emit(restaurant);
  }

  forwardRating(restaurant: Restaurant): void {
    this.RestaurantRated.emit(restaurant);
  }
}
