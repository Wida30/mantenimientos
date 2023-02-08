export interface MaintenanceInterface {
  id: number;
  tienda: string;
  prioridad: string;
  oficio: string;
  description: string;
  fecha: Date;
  termiando: boolean;
}
