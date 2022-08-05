import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  private apiURL = 'https://dog.ceo/api/breeds/list/all';

  constructor(private http: HttpClient) {}

  getBreeds() {
    return this.http.get(this.apiURL);
  }
}
