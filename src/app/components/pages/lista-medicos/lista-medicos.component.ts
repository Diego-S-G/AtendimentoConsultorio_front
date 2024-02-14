import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.scss']
})
export class ListaMedicosComponent implements OnInit {

  medicos: any = [];
  displayedColumns: string[] = ['nome', 'especialidade'];
  dataSource: any;

  constructor(private service: MedicoService) {}

  ngOnInit(): void {
    this.obterMedicos();
  }

  obterMedicos() {
    return this.service.get().subscribe((dados) => {
      this.medicos = dados;
      this.dataSource = new MatTableDataSource(this.medicos);
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}