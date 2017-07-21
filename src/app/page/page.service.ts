import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {  
    constructor(private http: Http){}    
    login(data){       
       return this.http.get("http://107.180.72.134/api/login",data)
              
        .map(res => res.json());   
     }     
     }