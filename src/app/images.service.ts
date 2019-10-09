import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class ImagesService {
  toSearch;
  perPage = '40';
  pixabayToken = '2265964-89697f5f85fbc653cbfb22eb6';
  path;


  constructor( private http: HttpClient ) {
    this.toSearch = 'dog';
    this.path = `https://pixabay.com/api/?key=${this.pixabayToken}&q=${this.toSearch}&image_type=photo&order=popular&per_page=${this.perPage}&orientation=horizontal`;
  }

  changePath( toSearch ) {
    this.path = `https://pixabay.com/api/?key=${this.pixabayToken}&q=${toSearch}&image_type=photo&order=popular&per_page=${this.perPage}&orientation=horizontal`;
  }

  getData() {
    return this.http.get( this.path );
  }

  getNewData( search ) {
    this.changePath( search );
    this.toSearch = search;
    console.log( this.path );
    return this.http.get( this.path );
  }

  changeSearch(search) {
    this.changePath(search);
  }
}
