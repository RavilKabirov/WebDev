import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from '../../models/product.model';
import {StarRating} from '../star-rating/star-rating';
@Component({
  standalone: true,
  selector: 'app-product-card',
  imports: [CommonModule, StarRating],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: product;
  shareWhatsApp(event: MouseEvent){
    event.stopPropagation();
    const url = `https://wa.me/?text=${encodeURIComponent(
      `Check out this product: ${this.product.link}`
    )}`;
    window.open(url, '_blank');
  }
  openKaspi(){
    const url = this.product.link;
    window.open(url, '_blank');
  }
  @Output() liked = new EventEmitter<product>();
  @Output() deleted = new EventEmitter<product>();

  like(event: Event) {
    event.stopPropagation();
    this.liked.emit(this.product);
  }
  delete(event: Event) {
    event.stopPropagation();
    this.deleted.emit(this.product);
  }

  protected readonly onratechange = onratechange;

  currentRating = signal(0);
  ngOnInit() {
    this.currentRating.set(this.product.rating);
  }
  onRatingChange(newRating: number){
    this.currentRating.set(newRating);
  }

}
