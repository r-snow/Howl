import { Component, OnInit } from '@angular/core';
import { BreedService } from '../../services/breed.service';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface BreedNode {
  [key: string]: String[];
}

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
})
export class BreedsComponent implements OnInit {
  breeds = {};

  constructor(private breedService: BreedService) {}

  ngOnInit(): void {
    this.breedService
      .getBreeds()
      .subscribe((breeds: any) => (this.breeds = breeds.message));
  }
}
