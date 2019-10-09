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

  constructor( private imageService: ImagesService, private router: Router ) {  }

  ngOnInit() {
    this.imageService.getData().subscribe(
      ( value ) => {
        this.data = value
      },
      ( error ) => console.log( error ),
      () => console.log( ` imageService done.` )
    );
  }

  showDetail( index ) {
    this.router.navigate( ['Bild', index] );
  }
  newSearch(toSearch) {
    console.log(toSearch);
    this.imageService.getNewData(toSearch).subscribe(
      value => this.data = value,
      err => log(err),
      () => console.log('neue Daten erhalten...')
    )
  }
}
