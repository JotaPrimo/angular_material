import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {

  public photos:Photo[] = [];

  constructor(
    public service: PhotosService
  ) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.service.getPhotos().subscribe({
      next: (response: Photo[]) => {
        this.photos = response;
        console.log(response);

      },
    });
  }

}
