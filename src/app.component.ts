import {Component} from "@angular/core";


@Component({
    selector: 'my-app',
    template: `
    <h1>Min Angular2 App</h1>
    <p>{{name}}</p>
    <input type="text" [(ngModel)]="name"/>
    <p [class.danger]="name && name.length > 10">{{name}}</p>
    <button type="button" (click)="name=undefined">Rensa</button>
    `
})

export class AppComponent {
    name:string='C.A.G Contactor';

    constructor() {
        console.log('test');
    }
    
}