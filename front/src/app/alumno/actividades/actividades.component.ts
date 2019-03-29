import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html'
})
export class ActividadesComponent  implements OnInit {

    displayMonths = 2;
    constructor() { }

    ngOnInit(): void {
    }
}
