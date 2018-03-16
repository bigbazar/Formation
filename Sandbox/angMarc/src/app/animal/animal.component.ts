import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input() animal: Animal;
  @Output('fat') fat = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  verifierPoids() {
    if (this.animal && this.animal.poids > 1000) {
      this.fat.emit(this.animal.poids);
    }
  }

}
