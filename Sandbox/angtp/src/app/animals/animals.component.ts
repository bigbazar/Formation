import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
