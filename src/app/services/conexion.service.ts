import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetParameters } from '../interfaces/GetParameters.interface';
import { SendEmail } from '../interfaces/SendEmail.interface';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  constructor(private http:HttpClient) { }

  public getParameters(){
    return this.http.get<GetParameters>('http://localhost:3000/parameters');
  }
  public sendEmail(data:SendEmail){
    return this.http.post('http://localhost:3000/email', data);
  }
}
