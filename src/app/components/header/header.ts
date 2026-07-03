import { Component, input, Input } from '@angular/core';
import { RatedCount } from '../rated-count/rated-count';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [DecimalPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // propriete d'entree basée sur les signaux avec une valeur par defaut de 0 c-a-d le compteur à recu par default la valeur 0
  RatedCount = input(0);

  // nombre total fixe imposé par l'enonce du Tp
  // totalCount: Number = 6;

  //le calcule de la moyenne
  averageRating = input(0);
}
