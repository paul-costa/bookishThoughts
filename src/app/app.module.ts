import { InsertBookComponent } from './insert-book/insert-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TilesComponent } from './tiles/tiles.component';
import { HomeComponent } from './home/home.component';
import { LongreviewComponent } from './longreview/longreview.component';
import { PinboardComponent } from './pinboard/pinboard.component';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { 
  MatToolbarModule, MatGridListModule, MatTooltipModule, MatButtonModule, 
  MatProgressBarModule, MatExpansionModule, MatFormFieldModule, MatInputModule, 
  MatSelectModule, MatStepperModule, MatIconModule, MatRadioModule, MatSliderModule, 
  MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const appRoutes: Routes = [
  { 
    path: '',          
    redirectTo: 'insert',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'tiles', component: TilesComponent },
  { path: 'pinboard', component: PinboardComponent },


  { path: 'insert', component: InsertBookComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    InsertBookComponent,
    NavbarComponent,
    TilesComponent,
    HomeComponent,
    LongreviewComponent,
    PinboardComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(
      appRoutes,
    ),

    FormsModule,  
    ReactiveFormsModule,

    HttpClientModule,
    
    //HeaderMats
    MatToolbarModule,

    //InsertMats
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,




  ],

  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
