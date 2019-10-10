import { Router } from '@angular/router';
import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";

@Component( {
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
} )
export class AddImageComponent implements OnInit {
  submitStatus = false;
  storeData = '';
  urlRegEx = '(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|png)';
  upLoadForm = this.reactiveForm.group( {
    'title': ['', [Validators.required, Validators.minLength( 3 ), Validators.maxLength( 25 )]],
    'tags': ['', [Validators.required, Validators.minLength( 3 ), Validators.maxLength( 25 )]],
    'description': ['', [Validators.maxLength( 150 )]],
    'url': ['', Validators.required]
  } );

  constructor( private reactiveForm: FormBuilder, private ROUTER:Router) { }


  ngOnInit() {}
  addImage() {
    let localStorageData = [];
    let Obj = {
      'title': this.upLoadForm.get( 'title' ).value,
      'largeImageURL': this.upLoadForm.get( 'url' ).value,
      'tags': this.upLoadForm.get( 'tags' ).value,
      'description': this.upLoadForm.get( 'description' ).value,
    };

    if ( localStorage.getItem( 'customData' ) == null || localStorage.getItem( 'customData' ) == undefined ) {
      console.log( 'Daten setzen' );
      localStorageData.push( Obj );
      localStorage.setItem( 'customData', JSON.stringify( localStorageData ) );
      console.log( JSON.parse( localStorage.getItem( 'customData' ) ) );
    } else {

      localStorageData = JSON.parse( localStorage.getItem( 'customData' ) );
      localStorageData.unshift( Obj );

      localStorage.setItem( 'customData', JSON.stringify( localStorageData ) );

      console.log( localStorageData );
    }
    this.upLoadForm.reset();
    this.ROUTER.navigate(['Bilder']);
  }
}
