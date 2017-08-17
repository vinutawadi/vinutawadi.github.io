import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DialogService {  
    constructor(private http: Http){}    
    demo(){       
       return this.http.get("assets/data/dashboard-list.json")
              
        .map(res => res.json());   
    }     
}