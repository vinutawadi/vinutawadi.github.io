import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { SearchService } from './search.service';


@Component({
  selector: 'font-page',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css'],
  providers:[SearchService]
})


export class FontComponent implements OnInit {

  iconList: Array<any>;

  constructor(private searchService: SearchService) {}

  ngOnInit() {   

    this.searchService.fetchIcons()
      .subscribe(icons => this.iconList = icons);

  }

}
