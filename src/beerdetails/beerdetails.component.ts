import {Component} from "@angular/core";
import {OnActivate, Router, RouteSegment, RouteTree} from "@angular/router";
import {Beer} from "../beer/beer";
import {BeerService} from "../beer/beer.service";

@Component({
  selector: 'my-beer-details',
  templateUrl: 'beerdetails/beerdetails.html'
})
export class BeerDetailsComponent implements OnActivate {
  beer:Beer;

  constructor(private router:Router, private beerService:BeerService) {
  }

  routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree) {
    let id = +curr.getParam('id'); // Se till att det blir ett number
    this.beer = this.beerService.getBeerById(id);
  }

  like() {
    this.beer.points++;
  }

  close() {
    this.router.navigate(['/']);
  }
}
