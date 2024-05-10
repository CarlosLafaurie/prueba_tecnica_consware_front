import { Component } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent {
  nuevoVehiculo: Vehiculo = { id: 0, marca: '', modelo: '', año: 0, color: '' };

  constructor(private vehiculosService: VehiculosService, private router: Router) { }

  agregarVehiculo(): void {
    this.vehiculosService.agregar(this.nuevoVehiculo).subscribe(
      () => {
        console.log('Vehículo agregado correctamente');
        this.nuevoVehiculo = { id: 0, marca: '', modelo: '', año: 0, color: '' };

      },
      error => console.error('Error al agregar el vehículo:', error)
    );
  }
}
