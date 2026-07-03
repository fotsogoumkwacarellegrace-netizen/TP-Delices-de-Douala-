import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RestaurantList } from './components/restaurant-list/restaurant-list';
import { Footer } from './components/footer/footer';
import { Restaurant } from './components/restaurant/restaurant';
import { RatedCount } from './components/rated-count/rated-count';
import { CurrentRating } from './components/current-rating/current-rating';
import { RestaurantRated } from './components/restaurant-rated/restaurant-rated';
import { count } from 'console';

@Component({
  selector: 'app-root',
  imports: [Header, RestaurantList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Delices_de_Douala');

  restaurants = signal<Restaurant[]>([
  { id: 1, name: 'Le Calao Doré', district: 'Akwa',
    specialty: 'Ndolé aux crevettes', currentRating: 0, image :'images/places/abenezer.jpg' },
  { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso',
    specialty: 'Eru aux pieds de bœuf', currentRating: 0, image :'images/places/nastia.jpg' },
  { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo',
    specialty: 'Poulet DG', currentRating: 0, image :'images/places/ashok.jpg' },
  { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi',
    specialty: 'Poisson braisé', currentRating: 0, image :'images/places/konrads.jpg' },
  { id: 5, name: "L'Akwa Gourmand", district: 'Akwa',
    specialty: 'Bobolo et sauce arachide', currentRating: 0, image :'images/places/miberna.jpg' },
  { id: 6, name: 'Le Royal de Bali', district: 'Bali',
    specialty: 'Koki et plantain', currentRating: 0, image :'images/places/mfbeki.jpg' }
  ]);

  // signal calculé automatiquement (computed) : s'actualise dès qu'un restaurant change de note



  // Methode de mise à jour non-mutable dictée par le cours (utilisation de .update() et .map())
  // onRestaurantRated(updated: { id: number, rating: number } | Event) {
  //   const payload = (updated as CustomEvent)?.detail ?? updated;
  //   if (!payload || typeof payload !== 'object' || !('id' in payload) || !('rating' in payload)) {
  //     return;
  //   }

  //   const { id, rating } = payload as { id: number, rating: number };
  //   this.restaurants.update(restos =>
  //     restos.map(r => r.id === id ? { ...r, currentRating: rating } : r)
  //   );
  RestaurantRatedCount = signal(0);

  RatedCount = computed(() => {
    return this.restaurants().filter(r => r.currentRating > 0).length;
  });

  averageRating = computed(() => {
    const ratedRestaurants = this.restaurants().filter(r => r.currentRating > 0);
    if (ratedRestaurants.length === 0) {
      const sum = ratedRestaurants.reduce((acc, r) => acc + r.currentRating, 0);
      return 0;
    }
    const totalRating = ratedRestaurants.reduce((sum, r) => sum + r.currentRating, 0);
    return totalRating / ratedRestaurants.length;
  });

  //Methode appelee quand une note change
  onRestaurantRated(updated: Restaurant): void {
    this.restaurants.update(restos =>
      restos.map(r => r.id === updated.id ? { ...r, currentRating: updated.currentRating } : r)
    );
  }



  // toggle filtre
  showTopRated = signal(false);

  //filtrer les restaurants 4 Etoiles et plus
  filteredRestaurants = computed(() => {
    const list = [...this.restaurants()].sort((a, b) => b.currentRating - a.currentRating);
    return this.showTopRated() ? list.filter(r => r.currentRating >= 4) : list;
  })

  toggleFilter (){
    this.showTopRated.update(value => !value);
  }



  // tri par note des restaurants | (computed) : s'actualise dès qu'un restaurant change de note
  sortedRestaurants = computed(() => [this.restaurants().sort((a, b) => b.currentRating - a.currentRating)]);

  // onRestaurantRated(restaurant: Restaurant): void {
  //   this.RestaurantRatedCount.update(count => count + 1);
  //   console.log('Total Restaurant noté :', this.RestaurantRatedCount());
  // }

  // onRestaurantRatedAdded(newRestaurant: Restaurant): void {
  //   this.RestaurantRatedCount.update(count => count + 1);
  // }
}
