import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.scss'],
})
export class ListaMedicosComponent implements OnInit {

  medicos: any = [];
  displayedColumns: string[] = ['nome', 'especialidade', 'buttons'];
  dataSource: any;

  constructor(private service: MedicoService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obterMedicos();
  }
  
  obterMedicos() {
    return this.service.get().subscribe((dados) => {
      this.medicos = dados;
      this.dataSource = new MatTableDataSource(this.medicos);
    });
  }

  apagarMedico(id: number) {
    return this.service.delete(id).subscribe({
      next: () =>{
        this.obterMedicos();
        this.openSnackBar();
      }})
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar() {
    this._snackBar.open('Médico excluído com sucesso!', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}