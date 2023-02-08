import { MaintenanceService } from '../../services/maintenance.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { StoreInterface } from '../../interface/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newmaint',
  templateUrl: './newmaint.component.html',
  styleUrls: ['./newmaint.component.css'],
})
export class NewmaintComponent {
  public maintenaceForm!: FormGroup;
  public newMaintenance = this.maintenanceService.maintenance;
  public name = this.storeService.store;
  public storesNames: StoreInterface[] = [];

  public nombreTiendas: [] = [];

  constructor(
    private maintenanceService: MaintenanceService,
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.maintenanceService.clearMaintenance();

    this.maintenaceForm = this.formBuilder.group({
      tienda: [this.newMaintenance.tienda, Validators.required],
      prioridad: [this.newMaintenance.prioridad, Validators.required],
      oficio: [this.newMaintenance.oficio, Validators.required],
      description: [this.newMaintenance.description, Validators.required],
      fecha: [this.newMaintenance.fecha, Validators.required],
      terminado: [this.newMaintenance.termiando, Validators.required],



    });

    this.maintenaceForm.valueChanges.subscribe((changes) => {
      this.newMaintenance = changes;
    });

    this.storeService.getStores().subscribe((data: any) => {
      const storesAPI: StoreInterface[] = data.stores.map((store: any) => ({
        nombre: store.nombre,
        direction: store.direction,
        codigoPostal: store.codigoPostal,
        ciudad: store.ciudad,
        provincia: store.provincia,
        telefono: store.telefono,
      }));
      this.storesNames = storesAPI;
    });
  }

  public onSubmit() {
    this.maintenanceService.postMaintenance(this.newMaintenance).subscribe();
    console.log(this.newMaintenance);

    alert('mantenimiento creado');
    this.maintenaceForm.reset();

    this.router.navigate(['/list']);
  }
}
