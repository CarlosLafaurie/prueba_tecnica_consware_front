import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];

  constructor(private vehiculosService: VehiculosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos(): void {
    this.vehiculosService.obtenerTodos().subscribe(
      vehiculos => {
        this.vehiculos = vehiculos;
        console.log('Vehículos obtenidos:', this.vehiculos);
      },
      error => console.error('Error al obtener los vehículos:', error)
    );
  }

  eliminarVehiculo(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este vehículo?')) {
      this.vehiculosService.eliminar(id).subscribe(
        () => {
          console.log('Vehículo eliminado correctamente');
          this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.id !== id);
        },
        error => console.error('Error al eliminar el vehículo:', error)
      );
    }
  }

  logEdit(vehiculoId: number): void {
    console.log('Editando vehículo con ID:', vehiculoId);
  }


}

