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

  constructor( private imageService: ImagesService, private router: Router ) {
  }

  ngOnInit() {
    console.log( 'hallo' );
    this.imageService.getData().subscribe(
      ( value ) => {
        this.data = value
        console.log( 'Service reagiert' )
      },
      ( error ) => console.log( error ),
      () => console.log( 'fertig' )
    );
  }

  showDetail( index ) {
    this.router.navigate( ['Bild', index] );
  }

  newSearch( search ) {
    console.log( search );
  }
}
