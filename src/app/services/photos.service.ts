import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../photo.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  
  private urlApi: string =
    'https://jsonplaceholder.typicode.com/photos?limit=5';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.urlApi);
  }
}
