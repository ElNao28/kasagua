import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetParameters } from '../interfaces/GetParameters.interface';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  constructor(private http:HttpClient) { }

  public getParameters(){
    return this.http.get<GetParameters>('http://localhost:3000/parameters');
  }
}
