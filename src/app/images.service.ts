import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class ImagesService {
  // search settings

  public perPage = '40';
  public changeSearch: Subject<string> = new Subject<string>();

  // PixaBay settings
  private pixabayToken = '2265964-89697f5f85fbc653cbfb22eb6';
  path;
  toSearch;


  constructor( private http: HttpClient ) {
    this.toSearch = 'dark';
    this.changeSearch.subscribe( value => {
      this.toSearch = value;
    } )

    this.path = `https://pixabay.com/api/?key=${this.pixabayToken}&q=${this.toSearch}&image_type=photo&order=popular&per_page=${this.perPage}&orientation=horizontal`;

  }

  changeToSearch( search ) {
    console.log( 'new Search' );
    this.toSearch = search;
    this.http.get( this.path );

  }

  getData() {
    return this.http.get( this.path );
  }
}
