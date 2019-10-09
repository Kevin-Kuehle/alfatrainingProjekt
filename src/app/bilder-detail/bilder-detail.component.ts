import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import {ImagesService} from "../images.service";

@Component({
  selector: 'app-image-detail',
  templateUrl: './bilder-detail.component.html',
  styleUrls: ['./bilder-detail.component.scss']
})
export class BilderDetailComponent implements OnInit {
  public index;
  public images;
  public image;
  public imageStyle;


  constructor( private aktiveLink: ActivatedRoute, private Simages: ImagesService ) { }

  ngOnInit() {
    this.index = this.aktiveLink.snapshot.paramMap.get('index');

    this.Simages.getData().subscribe(
      ( value ) => {
        this.images = value;
        this.image = this.images.hits[this.index];
        console.log(this.images)
        this.imageStyle = {
          'backgroundImage': `url(${this.image.largeImageURL})`,
        }
      }
    )
  }
}
