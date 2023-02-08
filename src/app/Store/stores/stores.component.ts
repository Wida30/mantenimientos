import { Component, OnInit } from '@angular/core';
import { StoreInterface } from '../../interface/store';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css'],
})
export class StoresComponent implements OnInit {
  
  public storesList: StoreInterface[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getStores().subscribe((data: any) => {
      const storesAPI: StoreInterface[] = data.stores.map((store: any) => ({
        nombre: store.nombre,
        direction: store.direction,
        codigoPostal: store.codigoPostal,
        ciudad: store.ciudad,
        provincia: store.provincia,
        telefono:store.telefono,
      }));
      this.storesList = storesAPI;
    });
  }

 ir(){
     alert('tienda seleccionada!');
  }
}
