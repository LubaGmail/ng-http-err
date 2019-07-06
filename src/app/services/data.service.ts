import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';  
import { AppError} from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private apiUrl: string) { }

  getData() {
    return this.http.get(this.apiUrl)
      .catch(this.handleError);
  }

  create(title: HTMLInputElement) {
    return this.http.post(this.apiUrl, JSON.stringify(title.value))
      .catch(this.handleError);
  }
  
  patch(resource) {
    return  this.http.patch(this.apiUrl + '/' + resource.id, JSON.stringify({ isRead: true }));
  }

  put(resource) {
    return this.http.put(this.apiUrl + '/' + resource.id, JSON.stringify(resource));
  }

  delete(id) {
     return this.http.delete(this.apiUrl + '/' + id)
      .catch(this.handleError);
  }
  
  handleError (error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError());
    } 
    if (error.status === 404) {
      return Observable.throw(new BadInputError());
    }

    return Observable.throw(new AppError(error.json()));

  }
}
