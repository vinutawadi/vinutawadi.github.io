import { Component,OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { DropdownModule} from "ngx-dropdown";
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { DialogService } from './dialog.service';
import { MENU_LIST } from './data-list';
import { NgSwitch } from '@angular/common';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css'],
  providers: [DialogService]
  
})
export class DialogExampleComponent implements OnInit {
  menuState:string = 'out';
  selectedValue: string;

public isExpanded: boolean;

public sideList=[];
public sidebarSublist=[];


 
  constructor(
    // public menu_List:MENU_LIST,
    private router: Router,  
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.sideList = this.withIsOpen(MENU_LIST);
  }

  // getSidebarData() {
  //   this.dialogService.demo()
  //     .subscribe(response => {
  //       this.sideList = this.withIsOpen(response);
  //     })
  // }
  
  withIsOpen( list ) {
    return list.map( menus => {
      menus.isOpen = false;
      return menus;
    })
  }

  dropdown(menuItem) {
    console.log(menuItem)
    menuItem.isOpen = !menuItem.isOpen;
  }
  dropdown1(list) {
    console.log(list)
    list.Open = !list.Open;
  }
  dropdown2(list1) {
    console.log(list1)
    list1.Open = !list1.Open;
  }
  dropdown3(list2) {
    console.log(list2)
    list2.Open = !list2.Open;
  }
  dropdown4(list3) {
    console.log(list3)
    list3.Open = !list3.Open;
  }
  
  toggle(event) {
    this.isExpanded = !this.isExpanded;
  }


// addMENU_LIST(list) {
//     this.menu_List.add({
//       menu: 'menu',
//       list: [
//         {menu: 'menu'}
//       ]
//     });
//   }
  // toggle(event){    
  //     console.log('submit')
  //     let toggle = document.getElementsByClassName('sidebar-wrapper')[0];  
  //     let toolbar = document.getElementsByClassName('wrapper')[0];
  //         if(toggle.classList.contains('closed')) {      
  //           toggle.classList.remove('closed');    
  //             toolbar.classList.remove('expanded');  
  //               } else {     
  //                 toggle.classList.add('closed');     
  //                   toolbar.classList.add('expanded');  

                    
  //               }


  // }

}
        

