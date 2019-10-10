import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component( {
  selector: 'app-image-detail',
  templateUrl: './bilder-detail.component.html',
  styleUrls: ['./bilder-detail.component.scss']
} )
export class BilderDetailComponent implements OnInit {
  public index;
  public images;
  public image;
  public imageStyle;
  loggedIn: boolean | string = false;


  constructor( private aktiveLink: ActivatedRoute ) { }

  ngOnInit() {
    this.index = this.aktiveLink.snapshot.paramMap.get( 'index' );
    this.images = JSON.parse( localStorage.getItem( 'allData' ) );
    this.image = this.images[this.index];

    this.imageStyle = {
      'backgroundImage': `url(${this.image.largeImageURL})`,
    };

    if ( sessionStorage.getItem( 'loggedIn' ) !== null ) {
      this.loggedIn = sessionStorage.getItem( 'loggedIn' );
    } else {
      this.loggedIn = false;
    }
  }
}
