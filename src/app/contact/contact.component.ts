import { Component, OnInit ,ViewContainerRef} from '@angular/core';
import { ContactService } from './contact.service';
import {Router} from "@angular/router";
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { NG_VALIDATORS,Validator,
         Validators,AbstractControl,ValidatorFn } from '@angular/forms';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
    providers: [ContactService]

})
export class ContactComponent implements OnInit {


 
  

  constructor(
    private vcr: ViewContainerRef,
      private router: Router,    
      private toastr:ToasterModule,
      private toasterService:ToasterService,
    private contactService: ContactService  ) { }

  

  ngOnInit() {

  }


submit(formValue) {
  console.log(formValue.value);
  this.contactService.registration()
    .subscribe(response => {
      console.log(response)
            if(response[0].email == formValue.value.email && response[0].name == formValue.value.name && response[0].phone==formValue.value.phone && response[0].password == formValue.value.password && response[0].confirm==formValue.value.confirm ){
                
                   this.router.navigate(['/about']);
                     this.toasterService.pop('success', 'Args Title', 'Args Body');
            }else{
              
              this.toasterService.pop('error','Args Title', 'Args Body');
              console.log('error')
                       

            } 

    
   
    }
    )
}
}