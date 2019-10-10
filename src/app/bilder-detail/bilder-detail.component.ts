import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ImagesService} from "../images.service";
import {error} from "util";

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
  loggedIn = false ;


  constructor( private aktiveLink: ActivatedRoute, private imageService: ImagesService ) { }

  ngOnInit() {
    this.index = this.aktiveLink.snapshot.paramMap.get('index');

    // @ts-ignore
    this.imageService.getData().then( ( resolve , err ) => {
      if ( err ) console.log( err );

      this.images = resolve;
      this.image = this.images[this.index];
      this.imageStyle = {
        'backgroundImage': `url(${this.image.largeImageURL})`,
      }
    } );

    if ( sessionStorage.getItem( 'loggedIn' ) != null && sessionStorage.getItem( 'loggedIn' ) == 'true' ) {
      this.loggedIn = true;
    }

  }


}
