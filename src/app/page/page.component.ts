import { Component , OnInit,ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import { PageService } from './page.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [PageService]
})



export class PageComponent  {



constructor(    
  private toastr: ToasterModule,
      private toasterService: ToasterService,

    private vcr: ViewContainerRef,
  private router: Router,    
private PageService: PageService  ) { }
 

ngOnInit() { 

 } 

submit(formValues) {
  console.log(formValues.value);
  this.PageService.registration()
    .subscribe(response => {
      console.log(response)
            if(response[0].email === formValues.value.email && response[0].password === formValues.value.password){
                   this.router.navigate(['/home']);
                     this.toasterService.pop('success', 'Args Title', 'Args Body');

            }else{
              this.toasterService.pop('error','Args Title', 'Args Body');
                       

            } 

      
   
    }
    )
}

}


