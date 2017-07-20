import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {  
    constructor(private http: Http){}    
    registration(){       
       return this.http.get("assets/user/user-details.json")
              
        .map(res => res.json());   
     }     
     }