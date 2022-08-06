import { Component, OnInit } from '@angular/core';
import { BreedService } from '../../services/breed.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface BreedNode {
  breed: string;
  children: BreedNode[];
}

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
})
export class BreedsComponent implements OnInit {
  breedsTree: BreedNode[] = [];

  nestedDataSource = new MatTreeNestedDataSource<BreedNode>();
  nestedTreeControl = new NestedTreeControl<BreedNode>((node) => node.children);

  constructor(private breedService: BreedService) {}

  ngOnInit(): void {
    this.breedService.getBreeds().subscribe((breeds: any) => {
      for (const breed in breeds.message) {
        if (breeds.message[breed])
          this.breedsTree.push({
            breed: breed,
            children: breeds.message[breed],
          });
      }
    });

    this.nestedDataSource.data = this.breedsTree;
  }

  hasNestedChild(index: number, node: BreedNode) {
    return node?.children?.length > 0;
  }
}
