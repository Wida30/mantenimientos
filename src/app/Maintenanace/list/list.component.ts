import { Component, OnInit } from '@angular/core';
import { MaintenanceInterface } from '../../interface/maintenance';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public maintenancesList: MaintenanceInterface[] = [];
  public done: boolean = false;
  public numberMaintenance = this.maintenanceService.maintenance.id;

  constructor(private maintenanceService: MaintenanceService) {}

  ngOnInit(): void {
    this.maintenanceService.getMaintenances().subscribe((data: any) => {
      const maintenancesAPI: MaintenanceInterface[] = data.maintenances.map(
        (maintenance: any) => ({
          id: maintenance._id,
          tienda: maintenance.tienda,
          prioridad: maintenance.prioridad,
          oficio: maintenance.oficio,
          description: maintenance.description,
          fecha: maintenance.createdAt,
        })
      );

      this.maintenancesList = maintenancesAPI;
      // console.log(this.maintenancesList);
    });
  }

  public hecho() {
    // this.maintenanceService.deleteMaintenance(id).subscribe();

    console.log('dentro de hecho  ' + this.numberMaintenance);

    this.done = !this.done;
  }
}
