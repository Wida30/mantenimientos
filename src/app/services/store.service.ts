import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public baseURL: string = 'http://localhost:5000';

  public storesURL: string = `${this.baseURL}/stores`;


  public store = {
    nombre: '',
    direction: '',
    codigoPostal: '',
    ciudad: '',
    provincia: '',
    telefono: '',
  };

  constructor(private httpClient: HttpClient) {}

  public getStores(): Observable<any> {
    return this.httpClient.get(this.storesURL);
  }

  public postStore(newStore:any) {
    return this.httpClient.post(this.storesURL, newStore);
    
    
  }
}
