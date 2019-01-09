import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  searchTerm = new FormControl('');
  @Output() term = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}



  youtubeSearchClicked() {
      this.term.emit(this.searchTerm.value);
  }

}
