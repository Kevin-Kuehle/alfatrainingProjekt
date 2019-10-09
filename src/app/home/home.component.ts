import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {
  public title = 'Bilder suchen...';
  public toSearch = 'Dark';

  constructor( private ROUTER: Router ) {
  }

  ngOnInit() {
  }

  searchImage( toSearch ) {
    console.log(toSearch)
    // Change Value in service
    // Send user to Bilder
  }

}
