import {Component, input, output, signal} from '@angular/core';
@Component({
  selector: 'app-star-rating',
  imports: [],

  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  rating = input<number>(0);
  readonly = input<boolean>(false);
  ratingChange = output<number>();
  hoverRating = signal(0);
  onStarHover(star: number) {
    if(!this.readonly()){
      this.hoverRating.set(star);
    }
  }
  onStarLeave(){
    this.hoverRating.set(0);
  }
  onStarClick(star: number) {
    if(!this.readonly()){
      this.ratingChange.emit(star);
    }
  }
  isStarFilled(star: number) {
    if(this.hoverRating() > 0){
      return star <= this.hoverRating();
    }
    return star <= this.rating();
  }
}
