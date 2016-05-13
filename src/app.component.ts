import {Component} from "@angular/core";
import {PartComponent} from "./part.component";


@Component({
    selector: 'my-app',
    directives: [PartComponent],
    templateUrl: 'beer.html'
})

export class AppComponent {
    name: string='C.A.G Contactor';
    
    seconds: number = -1;
    things: string[] = ['baka', 'kaka'];
    nameSize: number = 0;

    constructor() {
        this.nextTimeout();
        console.log('test');
    }

    addThing() {
        this.things.push(this.name);
    }

    showSize(size) {
        this.nameSize = size;
    }
    nextTimeout() {
        this.seconds++;
        setTimeout(() => this.nextTimeout(), 1000);
    }
    
}