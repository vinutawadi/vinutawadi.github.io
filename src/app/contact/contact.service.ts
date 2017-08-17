import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {  
    constructor(private http: Http){}    
    registration(data){       
       return this.http.post("http://107.180.72.134/api/customers",data)
              
        .map(res => res.json());   
     }     
     }