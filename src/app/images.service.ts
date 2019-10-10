import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class ImagesService {
  toSearch;
  perPage = '20';
  pixabayToken = '2265964-89697f5f85fbc653cbfb22eb6';
  path;
  customData = [];


  constructor( private http: HttpClient ) {
    this.toSearch = 'dog';
    this.path = `https://pixabay.com/api/?key=${this.pixabayToken}&q=${this.toSearch}&image_type=photo&order=popular&per_page=${this.perPage}&orientation=horizontal`;

    if ( localStorage.getItem( 'customData' ) != null ) {
      this.customData = JSON.parse( localStorage.getItem( 'customData' ) )
    } else {
      localStorage.setItem( 'customData', JSON.stringify( this.customData ) );
    }
  }

  changePath( toSearch ) {
    this.path = `https://pixabay.com/api/?key=${this.pixabayToken}&q=${toSearch}&image_type=photo&order=popular&per_page=${this.perPage}&orientation=horizontal`;
  }

  getData() {
    return new Promise( ( resolve, reject ) => {
      let data = [];

      this.http.get( this.path ).subscribe(
        ( value ) => {
          // @ts-ignore
          data.push( ...value.hits );

          if ( this.customData.length >= 0 ) {
            data.unshift( ...this.customData );
          }
          resolve( data );
        },
        ( err ) => { console.error( err )}
      );
    } )
  }

  getNewData( search ) {
    return new Promise( ( resolve, error ) => {
      let data = [];
      this.changePath( search );

      this.http.get( this.path ).subscribe(
        ( value ) => {
          // @ts-ignore
          data.push( value.hits );
          resolve( data );
        },
        ( err ) => { console.error( err )}
      );
    } )
  }

  // Für die Home Komponente
  changeSearch( search ) {
    this.changePath( search );
  }

  addCustomImage( newImage ) {
    this.customData.push( newImage );
    localStorage.setItem( 'customData', JSON.stringify( this.customData ) );
  }

  changeResultLimit( limit ) {
    this.perPage = limit.toString();
    this.changePath( this.toSearch );

    return new Promise( ( resolve, reject ) => {
      let data = [];
      this.http.get( this.path ).subscribe(
        ( value ) => {
          // @ts-ignore
          data.push( ...value.hits );
          if ( this.customData.length >= 0 ) {
            data.unshift( ...this.customData );
          }
          resolve( data );
        },
        ( err ) => { console.error( err )}
      );
    } )
  }
}
