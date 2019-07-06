import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';  
import { AppError} from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';
import { DataService} from './data.service';



@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor( http: HttpClient) {
    super(http, "https://jsonplaceholder.typicode.com/posts");
  }

}
