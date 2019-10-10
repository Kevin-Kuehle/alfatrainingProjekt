import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BilderComponent} from "./bilder/bilder.component";
import {BilderDetailComponent} from "./bilder-detail/bilder-detail.component";
import {AddImageComponent} from "./add-image/add-image.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Bilder', component: BilderComponent},
  {path: 'Bild/:index', component: BilderDetailComponent},
  {path: 'add', component: AddImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
