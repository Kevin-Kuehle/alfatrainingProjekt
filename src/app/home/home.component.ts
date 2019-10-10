import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ImagesService} from "../images.service";

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {
  public title = 'Bilder suchen...';
  public toSearch = 'Dark';

  constructor( private ROUTER: Router, private IMAGESERVICE: ImagesService ) {
  }

  ngOnInit() {
  }


  searchImage( toSearch ) {
    this.IMAGESERVICE.changeSearch(toSearch);
    this.ROUTER.navigate(['Bilder']);
  }
}
