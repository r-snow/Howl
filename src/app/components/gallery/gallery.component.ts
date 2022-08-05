import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  photos = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .getPhotos()
      .subscribe((photos: any) => (this.photos = photos.message));
  }
}
