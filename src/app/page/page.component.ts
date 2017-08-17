import { Component , OnInit,ViewContainerRef,} from '@angular/core';
import {Router} from "@angular/router";
import { PageService } from './page.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {MdDialog} from '@angular/material';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [PageService],

})



export class PageComponent  {
email : string
  password: string
  
  
  forgotSuccessMessage: string;
  forgotFailMessage: string;
  
   private toastService: ToasterService;
  public forgotSuccess = false;
  public forgotFail = false;
  


constructor(    
      private toastr: ToasterModule,
      private toasterService: ToasterService,
     private vcr: ViewContainerRef,
  private router: Router,    
private PageService: PageService  ) { }
 

ngOnInit() { 
 } 


 
        send(formValues) {
    console.log(formValues); 
      this.PageService.login(formValues)
         .subscribe(
        response => {
            this.forgotFail = false;
            console.log(response.message);
            this.router.navigate(['/home']);
            this.forgotSuccessMessage = response.message;
            this.forgotSuccess = true;
        },
        error => {
            this.forgotSuccess = false;
            console.log(error);
            alert('Please check all the fields and enter valid credentials.')
        
            const forgotFailErrorMessage =  JSON.parse(error._body);
            this.forgotFailMessage = forgotFailErrorMessage.message.email;
            this.forgotFail = true;
        }
    ) 
  }


}


