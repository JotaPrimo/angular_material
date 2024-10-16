import { Component, OnInit } from '@angular/core';
import { Photo } from './photo.interface';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public algunsId = [1, 2, 3];

  constructor(
    private service: PhotosService
  ){}

  ngOnInit(): void {
    this.getPhotos()
  }

  private photos: Photo[] = [];

  getPhotos() {
    this.service.getPhotos().subscribe({
      next: (response: Photo[]) => {
        this.photos = response;
        console.log(this.photos);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
