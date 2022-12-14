import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { SubBreedComponent } from './components/sub-breed/sub-breed.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoModalComponent } from './components/photo-modal/photo-modal.component';
import { ModalPhotoComponent } from './components/modal-photo/modal-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreedsComponent,
    SubBreedComponent,
    GalleryComponent,
    PhotoComponent,
    PhotoModalComponent,
    ModalPhotoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
