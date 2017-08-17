
import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-ionicons',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
  providers: [SearchService]
})
export class MaterialComponent implements OnInit {
iconList:Array<any>

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  this.searchService.fetchIcons()
  .subscribe(icons => this.iconList = icons);
}

}
