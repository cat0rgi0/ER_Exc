import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  endPoint: string = 'http://127.0.0.1:4200/assets/'

  constructor(
    private client: HttpClient
  ) { }

  public getData(name: string){
    return this.client.get(this.endPoint + name + '.json');
  }
}
