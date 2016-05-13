import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Beer} from "./beer";

@Component({
  selector: 'my-beer-details',
  templateUrl: 'beerdetails/beerdetails.html'
})
export class BeerDetailsComponent {
  @Input()
  beer:Beer;
  @Output()
  updated:EventEmitter<Beer> = new EventEmitter();

  like() {
    this.beer.points++;
    this.updated.emit(this.beer);
  }
}

