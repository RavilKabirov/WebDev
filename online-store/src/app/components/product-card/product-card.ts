import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from '../../models/product.model';
@Component({
  standalone: true,
  selector: 'app-product-card',
  imports: [CommonModule],
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
}