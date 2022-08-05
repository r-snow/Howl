import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css'],
})
export class BreedComponent implements OnInit {
  @Input() breed: any;

  constructor() {}

  ngOnInit(): void {}
}
