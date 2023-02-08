import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceService {
  public baseURL: string = 'http://localhost:5000';

  public maintenencesURL: string = `${this.baseURL}/maintenances`;

  public maintenance = {
    id:'',
    tienda: '',
    prioridad: '',
    oficio: '',
    description: '',
    fecha: '',
    termiando: '',
  };

  constructor(private HttpClient: HttpClient) {}

  public getMaintenances(): Observable<any> {
    return this.HttpClient.get(this.maintenencesURL);
  }

  public postMaintenance(newMaintenance: any) {
    return this.HttpClient.post(this.maintenencesURL, newMaintenance);
  }

  public putMaintenance(maintenanceID: any, editedMaintenance:any){
    return this.HttpClient.put(this.maintenencesURL+ maintenanceID, editedMaintenance)
  }
  
public deleteMaintenance(maintenanceID:any){

  return this.HttpClient.delete('http://localhost:5000/maintenances/' + maintenanceID)
}
  


 
  public clearMaintenance() {
    this.maintenance = {
      id:'',
      tienda: '',
      prioridad: '',
      oficio: '',
      description: '',
      fecha: '',
      termiando: '',
    };
  }
}
