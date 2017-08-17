import { Component, OnInit ,ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { NG_VALIDATORS,Validator,
         Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
    providers: [ContactService]

})
export class ContactComponent implements OnInit {

  name : string
  email : string
  password: string
  rePassword:String
  countryCode:string
  phone: string
  confirm: string

  forgotSuccessMessage: string;
  forgotFailMessage: string;

  public forgotSuccess = false;
  public forgotFail = false;
  
 

  constructor(
    private vcr: ViewContainerRef,
      private router: Router,    
      private toastr:ToasterModule,
      private toasterService:ToasterService,
    private contactService: ContactService  ) { }

  

  ngOnInit() {

  }


          send(formValues) {
    console.log(formValues); 
      this.contactService.registration(formValues)
         .subscribe(
        response => {
            this.forgotFail = false;
            console.log(response.message);
            this.router.navigate(['']);
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