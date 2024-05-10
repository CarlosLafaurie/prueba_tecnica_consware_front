import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo.model';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent {
  vehiculo: Vehiculo = { id: 0, año: 0 };

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe(params => {
      const vehiculoId = +params['id'];
      this.vehiculosService.obtenerPorId(vehiculoId).subscribe(vehiculo => this.vehiculo = vehiculo);
    });
  }

  guardarCambios(): void {
    this.vehiculosService.actualizar(this.vehiculo.id, this.vehiculo).subscribe(
      () => {
        console.log('Vehículo actualizado correctamente');
        this.router.navigate(['/lista']);
      },
      error => console.error('Error al actualizar el vehículo:', error)
    );
  }
}
