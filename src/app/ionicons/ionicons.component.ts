import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-ionicons',
  templateUrl: './ionicons.component.html',
  styleUrls: ['./ionicons.component.css'],
  providers: [SearchService]
})
export class IoniconsComponent implements OnInit {
iconList:Array<any>

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  this.searchService.fetchIcons()
  .subscribe(icons => this.iconList = icons);
}

}
