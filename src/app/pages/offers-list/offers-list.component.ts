import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {

  constructor() { }

  ngOnInit() { console.log("list init");}

}
