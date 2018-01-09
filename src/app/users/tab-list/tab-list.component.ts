import {Component, OnInit} from '@angular/core';
import { Location} from "@angular/common";

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})

export class TabListComponent implements OnInit {

  path = ''

  constructor(public Location: Location) {}

  ngOnInit() {
    this.path = this.Location.path().slice(7)
  }

}
