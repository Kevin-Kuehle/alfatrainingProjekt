import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../images.service";
import {Router} from "@angular/router";

@Component( {
  selector: 'app-bilder',
  templateUrl: './bilder.component.html',
  styleUrls: ['./bilder.component.scss']
} )

export class BilderComponent implements OnInit {
  public title = 'Schöne Bilder von Pixabay ♥';
  private data;
  loggedIn = false;

  constructor( private imageService: ImagesService, private router: Router ) { }

  ngOnInit() {
    // @ts-ignore
    this.imageService.getData().then( ( resolve, err ) => {
      if ( err ) console.log( err );
      this.data = resolve;
    } );

    if ( sessionStorage.getItem( 'loggedIn' ) != null && sessionStorage.getItem( 'loggedIn' ) == 'true' ) {
      this.loggedIn = true;
    }
  }

  showDetail( index ) {
    this.router.navigate( ['Bild', index] );
  }

  newSearch( toSearch ) {
    // @ts-ignore
    this.imageService.getNewData( toSearch ).then( ( res, err ) => {
      if ( err ) console.log( err );
      this.data = [...res[0]];
    } )
  }

  changeImageLimit( limit ) {
    // @ts-ignore
    this.imageService.changeResultLimit( limit ).then( ( res, err ) => {
      if ( err ) console.log( err );
      this.data = [...res];
    } );
  }
}
