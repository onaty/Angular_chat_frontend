import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  max = 10;
  rate = 7;
  isReadonly = false;

  constructor() { }

  ngOnInit() {
  }


  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonly = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }

}
