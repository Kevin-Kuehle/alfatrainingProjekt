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
    this.imageService.getData().subscribe(
      ( value ) => {
        let customData = [];
        // @ts-ignore
        let onlineData = value.hits;
        let mergeData = [];

        if ( localStorage.getItem( 'customData' ) !== null ) {
          customData.unshift( JSON.parse( localStorage.getItem( 'customData' ) ) );

          // um es auf eine andere Array-Ebene zu bringen.
          customData = [...customData[0]];
        }

        mergeData = this.mergeDatas( onlineData, customData );

        // Speichern der Bildquellen.
        this.data = mergeData;

        localStorage.setItem( 'allData', JSON.stringify( this.data ) );
        localStorage.setItem( 'pixaData', JSON.stringify( onlineData ) );
        localStorage.setItem( 'customData', JSON.stringify( customData ) );
      },
      ( error ) => console.log( error ),
      () => console.log( `load done` )
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
    this.imageService.getNewData( toSearch ).subscribe(
      value => {
        let customData = [];
        // @ts-ignore
        let onlineData = value.hits;
        let mergeData = [];

        if ( localStorage.getItem( 'customData' ) !== null ) {
          customData.unshift( JSON.parse( localStorage.getItem( 'customData' ) ) );

          // um es auf eine andere Array-Ebene zu bringen.
          customData = [...customData[0]];
        }

        mergeData = this.mergeDatas( onlineData, customData );

        // Speichern der Bildquellen.
        this.data = mergeData;

        localStorage.setItem( 'allData', JSON.stringify( this.data ) );
        localStorage.setItem( 'pixaData', JSON.stringify( onlineData ) );
        localStorage.setItem( 'customData', JSON.stringify( customData ) );
      },
      err => console.log( err ),
      () => console.log( 'neue Daten erhalten...' )
    )
  }

  mergeDatas( onlineData, localData ) {
    let mergeData;
    mergeData = [...localData, ...onlineData];
    return mergeData;
  }

  changeResult( value ) {
    this.imageService.changeResult( value );
  }
}
