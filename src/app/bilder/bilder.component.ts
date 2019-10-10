import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../images.service";
import {Router} from "@angular/router";
import {log} from "util";

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
    this.imageService.getData().subscribe(
      ( value ) => {
        let customData = [];
        // @ts-ignore
        let onlineData = value.hits;
        let mergeData = [];

        if ( localStorage.getItem( 'dataTwo' ) !== null ) {
          customData.unshift( JSON.parse( localStorage.getItem( 'dataTwo' ) ) );
          customData = [...customData[0]];
        }
        mergeData = this.mergeDatas( onlineData, customData );
        console.log( mergeData );
        this.data = mergeData;

        localStorage.setItem( 'allData', JSON.stringify( this.data ) );
        localStorage.setItem( 'Data', JSON.stringify( onlineData ) );

        //----------------------------------------------------------------------------------------------------------------
      },
      ( error ) => console.log( error ),
      () => console.log( ` imageService done.` )
    );


    if ( sessionStorage.getItem( 'loggedIn' ) !== null ) {
      if ( sessionStorage.getItem( 'loggedIn' ) === 'true' ) {
        this.loggedIn = true;
      }

    }
  }

  showDetail( index ) {
    this.router.navigate( ['Bild', index] );
  }

  newSearch( toSearch ) {
    console.log( toSearch );
    this.imageService.getNewData( toSearch ).subscribe(
      value => {
        let customData = [];
        // @ts-ignore
        let onlineData = value.hits;
        let mergeData = [];

        if ( localStorage.getItem( 'dataTwo' ) !== null ) {
          customData.unshift( JSON.parse( localStorage.getItem( 'dataTwo' ) ) );
          customData = [...customData[0]];
        }
        mergeData = this.mergeDatas( onlineData, customData );
        console.log( mergeData );
        this.data = mergeData;

        localStorage.setItem( 'allData', JSON.stringify( this.data ) );
        localStorage.setItem( 'Data', JSON.stringify( onlineData ) );
      },
      err => log( err ),
      () => console.log( 'neue Daten erhalten...' )
    )
  }

  mergeDatas( onlineData, localData ) {
    let mergeData;
    mergeData = [...localData, ...onlineData];
    return mergeData;
  }
  changeResult(value) {
    this.imageService.changeResult(value);
  }
}
