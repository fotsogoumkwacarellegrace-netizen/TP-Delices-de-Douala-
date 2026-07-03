import { Component, signal, input, output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  // entrée obligatoire : la note actuelle provenant du composant parent c-a-d note actuelle
  CurrentRating = input.required<number>();

  // sortie : Evenement personnalisé basé sur les signals pour notifier le parent du clic nouvelle note
  RatingChanged = output<number>();

  // tableau statique de repères pour notre boucle @for( 5 etoiles)
  stars: number[] = [1, 2, 3, 4, 5];

  // signal d'etat local : contient le numero de l'etoile survolée, ou 'null' si la souris quitte sur la zone, Signal pour gerer le hover
  hoverRating = signal(0);

  //Methode au clic sur une etoile : met à jour le signal hoverRating avec le numero de l'etoile survolée
  onStarHover(star: number): void {
    this.hoverRating.set(star);
  }

  //Methode au survol de la souris : remet le signal hoverRating à null
  onStarLeave(): void {
    this.hoverRating.set(0);
  }

  //methode qu survol de la souris
  setHover(rating: number): void {
    this.hoverRating.set(rating);
  }

  //Methode pour determiner si une etoile doit etre pleine ou vide
  isStarFilled(star: number): boolean {
    return star <= this.CurrentRating();
  }

  clearHover(): void {
    this.hoverRating.set(0);
  }

  //methode au survol
  // setRating(rating: number): void {
  //   this.RatingChanged.emit(rating);
  // }

  //methode au clic sur une etoile
  onStarClick(star: number): void {
    this.RatingChanged.emit(star);
  }
  /**
   * déclenchée lors du clic sur l'etoile
   * émet la valeur de l'etoile vers le parent via le canal de sortie.
   */
  onStartClick(rating: number): void {
    this.RatingChanged.emit(rating);
  }

  setRating(rating: number): void {
    // si on reclique sur la meme etoile, on remet la note à 0
    if (this.CurrentRating() === rating) {
      this.RatingChanged.emit(0);
    } else {
      this.RatingChanged.emit(rating);
    }
  }
}
