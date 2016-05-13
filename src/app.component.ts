import {Component} from "@angular/core";


@Component({
    selector: 'my-app',
    templateUrl: 'beer.html'
})

export class AppComponent {
    name: string='C.A.G Contactor';
    seconds: number = -1;

    constructor() {
        this.nextTimeout();
        console.log('test');
    }

    nextTimeout() {
        this.seconds++;
        setTimeout(() => this.nextTimeout(), 1000);
    }
    
}