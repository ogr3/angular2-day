import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {BeerDetailsComponent} from "../beerdetails/beerdetails.component";
import {Beer} from "../beer/beer";
import {BeerService} from "../beer/beer.service";

@Component({
  selector: 'my-beer-list',
  directives: [BeerDetailsComponent],
  templateUrl: 'beerlist/beerlist.html'
})
export class BeerListComponent {
  constructor(private router:Router, private beerService:BeerService) {
  }

  addBeer() {
    let newBeer = new Beer('Ange namn', 'Ange beskrivning');
    this.beerService.addBeer(newBeer);
    this.select(newBeer);
  }

  remove(beerToRemove) {
    this.beerService.removeBeer(beerToRemove);
  }

  select(beerToSelect) {
    this.router.navigate(['/beer-admin/beer-details', beerToSelect.id]);
  }

  getBeers() {
    return this.beerService.getBeers().sort((b1, b2) => b2.points - b1.points);
  }
}