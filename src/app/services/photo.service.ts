import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random/48';

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get(this.apiUrl);
  }
}
